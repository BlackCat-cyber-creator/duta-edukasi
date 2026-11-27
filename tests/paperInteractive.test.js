import { describe, it, expect } from 'vitest';
import React from 'react';
import { renderToString } from 'react-dom/server';
import { MemoryRouter } from 'react-router-dom';
import { ALL_PAPERS } from '../src/data/papers/index.js';
import { parsePaperPart, evaluatePaperPartAnswer } from '../src/utils/paperInteractive.js';
import { PapersHubPage } from '../src/components/PapersHubPage.jsx';
import { AiAssistantPanel } from '../src/components/AiAssistantWidget.jsx';
import { AuthProvider } from '../src/context/AuthContext.jsx';

describe('Interactive Paket Soal parser & grader', () => {
  it('seluruh soal pilihan ganda di 120 paket terurai bersih dengan opsi A..D/E dan kunci valid', () => {
    let mcqCount = 0;
    let shortCount = 0;
    let essayCount = 0;

    for (const p of ALL_PAPERS) {
      for (const q of p.questions) {
        for (const pt of q.parts) {
          const parsed = parsePaperPart(pt);
          if (parsed.kind === 'mcq') {
            mcqCount += 1;
            expect(parsed.options.length, `${p.id} Q${q.no}(${pt.label})`).toBeGreaterThanOrEqual(2);
            expect(parsed.stemPrompt.length, `${p.id} Q${q.no}(${pt.label}) stem`).toBeGreaterThan(0);
            expect(parsed.options.some((o) => o.key === parsed.correctKey)).toBe(true);
            expect(evaluatePaperPartAnswer(pt, parsed.correctKey).isCorrect).toBe(true);
            const wrongOpt = parsed.options.find((o) => o.key !== parsed.correctKey);
            if (wrongOpt) {
              expect(evaluatePaperPartAnswer(pt, wrongOpt.key).isCorrect).toBe(false);
            }
          } else if (parsed.kind === 'short_answer') {
            shortCount += 1;
          } else {
            essayCount += 1;
          }
        }
      }
    }

    expect(mcqCount).toBeGreaterThanOrEqual(1529);
    expect(shortCount).toBeGreaterThan(800);
    expect(essayCount).toBeGreaterThan(50);
  });

  it('menyamakan pecahan, desimal koma, satuan, spasi, dan nol di depan pada isian singkat', () => {
    const fracPart = { prompt: 'Express 0.85 as a fraction', answer: '$\\frac{17}{20}$' };
    expect(evaluatePaperPartAnswer(fracPart, '17/20').isCorrect).toBe(true);
    expect(evaluatePaperPartAnswer(fracPart, '0.85').isCorrect).toBe(true);
    expect(evaluatePaperPartAnswer(fracPart, '0,85').isCorrect).toBe(true);
    expect(evaluatePaperPartAnswer(fracPart, '16/20').isCorrect).toBe(false);

    const unitPart = { prompt: 'Find the area', answer: '$54\\text{ cm}^2$' };
    expect(evaluatePaperPartAnswer(unitPart, '54').isCorrect).toBe(true);
    expect(evaluatePaperPartAnswer(unitPart, '54 cm2').isCorrect).toBe(true);
    expect(evaluatePaperPartAnswer(unitPart, '55').isCorrect).toBe(false);

    const dollarPart = { prompt: 'How much?', answer: '$49$ dollars' };
    expect(evaluatePaperPartAnswer(dollarPart, '49').isCorrect).toBe(true);
    expect(evaluatePaperPartAnswer(dollarPart, '49 dollars').isCorrect).toBe(true);

    const aimePart = { prompt: 'Give integer 000 to 999', answer: '$042$' };
    expect(evaluatePaperPartAnswer(aimePart, '42').isCorrect).toBe(true);
    expect(evaluatePaperPartAnswer(aimePart, '042').isCorrect).toBe(true);

    const approxPart = {
      prompt: 'Find v0x',
      answer: '$v_{0x} = 20\\sqrt{3}\\ \\text{m s}^{-1}\\ (\\approx 34.6\\ \\text{m s}^{-1})$',
      answerNumeric: [{ name: 'v0x', value: 34.641, unit: 'm/s' }]
    };
    expect(evaluatePaperPartAnswer(approxPart, '34.6').isCorrect).toBe(true);
    expect(evaluatePaperPartAnswer(approxPart, '20sqrt(3)').isCorrect).toBe(true);
    expect(evaluatePaperPartAnswer(approxPart, '20').isCorrect).toBe(false);

    const radicalPart = { prompt: 'Find value', answer: '$5 - \\sqrt{5}$' };
    expect(evaluatePaperPartAnswer(radicalPart, '5-sqrt(5)').isCorrect).toBe(true);
    expect(evaluatePaperPartAnswer(radicalPart, '5 - sqrt(5)').isCorrect).toBe(true);
  });

  it('mengklasifikasikan soal pembuktian dan multi-nilai sebagai essay (tidak dinilai paksa)', () => {
    const proofPart = {
      prompt: 'Buktikan bahwa ketaksamaan berlaku untuk setiap $n \\ge 2$.',
      answer: 'Terbukti untuk setiap bilangan bulat $n \\ge 2$.'
    };
    expect(parsePaperPart(proofPart).kind).toBe('essay');
    expect(evaluatePaperPartAnswer(proofPart, 'apapun').isCorrect).toBeNull();

    const multiPart = {
      prompt: 'Find $v_{0x}$ and $v_{0y}$.',
      answer: '$v_{0x} = 6\\sqrt{3}\\ \\text{m s}^{-1};\\quad v_{0y} = 18\\ \\text{m s}^{-1}$',
      answerNumeric: [
        { name: 'v0x', value: 10.392, unit: 'm/s' },
        { name: 'v0y', value: 18, unit: 'm/s' }
      ]
    };
    expect(parsePaperPart(multiPart).kind).toBe('essay');
  });

  it('merender tombol kartu /paket-soal dan header Asisten AI dengan kelas yang benar', () => {
    const hubHtml = renderToString(
      React.createElement(MemoryRouter, { initialEntries: ['/paket-soal'] }, React.createElement(PapersHubPage))
    );
    expect(hubHtml).toContain('class="btn btn-royal paper-card-cta"');

    const aiHtml = renderToString(
      React.createElement(
        MemoryRouter,
        { initialEntries: ['/'] },
        React.createElement(
          AuthProvider,
          null,
          React.createElement(AiAssistantPanel, { onClose: () => {} })
        )
      )
    );
    expect(aiHtml).toContain('class="btn btn-ghost"');
    expect(aiHtml).toContain('aria-label="Tutup asisten AI"');
  });
});
