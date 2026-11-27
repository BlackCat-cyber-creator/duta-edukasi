/**
 * paperInteractive:
 * Mengurai setiap bagian (`part`) pada Paket Soal menjadi salah satu dari:
 * - 'mcq'          : Pilihan ganda A–D / A–E yang dapat diklik
 * - 'short_answer' : Isian singkat / numerik yang dapat diperiksa otomatis
 * - 'essay'        : Uraian / pembuktian terbuka (dinilai mandiri via rubrik)
 */

const UNIT_PATTERN =
  '(?:cm\\^?2|cm\\^?3|m\\^?2|m\\^?3|m\\s*s\\^?-?[12]|m\\/s\\^?2?|km\\/jam|km\\/h|mmhg\\/menit|m\\/menit|m\\/s|km|cm|mm|kg|mg|kj|hz|pa|mol|detik|menit|jam|pagi|siang|sore|malam|wib|dollars|dollar|usd|rupiah|rp|buah|orang|cara|ways|books|book|cars|car|squares|square|triangles|triangle|fish|cubes|cube|years\\s*old|years|year|tahun|derajat|persen|units|unit|cm2|m2|°c|°|[%msjng])';

function stripOuterDollars(s) {
  let out = String(s ?? '').trim();
  while ((out.startsWith('$$') && out.endsWith('$$')) || (out.startsWith('$') && out.endsWith('$'))) {
    if (out.startsWith('$$') && out.endsWith('$$') && out.length > 4) {
      out = out.slice(2, -2).trim();
    } else if (out.startsWith('$') && out.endsWith('$') && out.length > 2) {
      out = out.slice(1, -1).trim();
    } else {
      break;
    }
  }
  return out;
}

function replaceFracRecursive(str) {
  let s = str;
  // Iteratively convert \frac{num}{den} and \dfrac{num}{den} from innermost outward
  for (let pass = 0; pass < 5; pass += 1) {
    const next = s.replace(/\\d?frac\s*\{([^{}]+)\}\s*\{([^{}]+)\}/g, '($1)/($2)');
    if (next === s) break;
    s = next;
  }
  // Mixed number pattern like 1(1)/(2) -> 1+1/2
  s = s.replace(/(\d+)\s*\(([^()]+)\)\s*\/\s*\(([^()]+)\)/g, '($1+($2)/($3))');
  return s;
}

function latexToCanonicalText(raw) {
  let s = stripOuterDollars(raw);
  s = s.replace(/\$/g, ' ');
  s = s.replace(/\{,\}/g, '.');
  s = s.replace(/\\left|\\right|\\displaystyle|\\,|\\;|\\:|\\!|\\quad|\\qquad/g, ' ');
  s = s.replace(/\\text\{([^{}]*)\}/g, ' $1 ');
  s = s.replace(/\\mathrm\{([^{}]*)\}/g, ' $1 ');
  s = s.replace(/\\operatorname\{([^{}]*)\}/g, ' $1 ');
  s = replaceFracRecursive(s);
  s = s.replace(/\\sqrt\s*\{([^{}]+)\}/g, 'sqrt($1)');
  s = s.replace(/\\pi\b/g, 'pi');
  s = s.replace(/\\(?:times|cdot)\b/g, '*');
  s = s.replace(/\\div\b/g, '/');
  s = s.replace(/\\pm\b/g, '+-');
  s = s.replace(/\^\\circ|\\circ/g, '');
  s = s.replace(/\\(?:approx|sim)\b/g, '≈');
  // Unwrap simple exponent braces like ^2 or ^{-1} or ^{10}
  s = s.replace(/\s+\^/g, '^').replace(/\s+_/g, '_');
  s = s.replace(/\^\{([^{}]+)\}/g, '^($1)');
  s = s.replace(/_{([^{}]+)}/g, '_$1');
  s = s.replace(/[{}]/g, '');
  s = s.replace(/\\+/g, '');
  s = s.replace(/\s+/g, ' ').trim();
  return s;
}

function stripTrailingUnit(str) {
  let s = str.trim();
  const unitRe = new RegExp(`(?:\\s+|(?<=\\d))${UNIT_PATTERN}(?:\\([^)]*\\))?\\.?$`, 'i');
  const compoundExpUnitRe = /(?:(?:cm|m)\^\(?-?[123]\)?|m\s*s\^\(?-?[12]\)?|m\s*\/\s*s\^\(?2\)?)$/i;
  for (let i = 0; i < 3; i += 1) {
    let next = s.replace(unitRe, '').trim();
    if (next === s) {
      next = s.replace(new RegExp(`(?:\\s+|(?<=\\d))${compoundExpUnitRe.source}`, 'i'), '').trim();
    }
    if (next === s) break;
    s = next;
  }
  return s;
}

function normalizeToken(str) {
  let s = latexToCanonicalText(str).toLowerCase();
  s = s.replace(/,/g, '.');
  s = stripTrailingUnit(s);
  s = s.replace(/\s+/g, '');
  // Collapse redundant single-token parens (not function calls like sqrt(3))
  s = s.replace(/(?<!sqrt)\(([a-z0-9.+-]+)\)/gi, '$1');
  // Normalize 2*sqrt(3) vs 2sqrt(3)
  s = s.replace(/(\d)\*(sqrt|pi)/g, '$1$2');
  return s;
}

/**
 * Evaluates a purely numeric or basic arithmetic/radical expression safely
 * (e.g., "3/4", "20sqrt(3)", "2.31*10^(-3)", "5-sqrt(5)", "1+1/2").
 */
function evalSimpleMath(normStr) {
  if (!normStr) return NaN;
  let expr = normStr.trim();
  // Pure number or fraction fast path
  if (/^[+-]?(?:\d+(?:\.\d+)?|\.\d+)$/.test(expr)) {
    return parseFloat(expr);
  }
  // Convert 2sqrt(3) -> 2*Math.sqrt(3), pi -> Math.PI, ^ -> **
  expr = expr.replace(/(\d)(sqrt|pi|\()/g, '$1*$2');
  expr = expr.replace(/\)(?=\d|sqrt|pi|\()/g, ')*');
  expr = expr.replace(/sqrt\(/g, 'Math.sqrt(');
  expr = expr.replace(/\bpi\b/g, 'Math.PI');
  expr = expr.replace(/\^/g, '**');
  // Strict character allowlist before evaluation
  const stripped = expr.replace(/Math\.sqrt|Math\.PI/g, '');
  if (!/^[0-9.+\-*/()eE\s]+$/.test(stripped)) return NaN;
  if (/\/\s*0(?![.\d])/.test(expr)) return NaN;
  try {
    const val = Function(`"use strict"; return (${expr});`)();
    return typeof val === 'number' && Number.isFinite(val) ? val : NaN;
  } catch {
    return NaN;
  }
}

function extractCandidates(part) {
  const raw = String(part?.answer ?? '').trim();
  const candidates = new Set();
  const numericTargets = [];

  if (Array.isArray(part?.answerNumeric) && part.answerNumeric.length === 1) {
    const nVal = Number(part.answerNumeric[0]?.value);
    if (Number.isFinite(nVal)) {
      numericTargets.push({ value: nVal, isApprox: true });
      candidates.add(String(nVal));
    }
  }

  const canonical = latexToCanonicalText(raw);
  // Extract parenthetical notes such as "(\approx 34.6 m s^-1)" or "(pati)"
  const parenMatches = [...canonical.matchAll(/\(([^()]+)\)/g)];
  for (const pm of parenMatches) {
    const inner = pm[1].trim();
    if (/^[≈~]/.test(inner)) {
      const approxClean = stripTrailingUnit(inner.replace(/^[≈~\s]+/, ''));
      if (approxClean) {
        candidates.add(approxClean);
        const val = evalSimpleMath(normalizeToken(approxClean));
        if (Number.isFinite(val)) numericTargets.push({ value: val, isApprox: true });
      }
    } else if (!/kali lebih|eksoterm|endoterm|catatan|note/i.test(inner) && inner.length <= 30) {
      candidates.add(inner);
    }
  }

  const withoutParens = canonical.replace(/\s+\(([^()]*)\)/g, ' ').replace(/\s+/g, ' ').trim();
  const chunks = [canonical, withoutParens];
  for (const chunk of chunks) {
    if (!chunk) continue;
    // Split on " atau " / " or "
    const altParts = chunk.split(/\s+(?:atau|or)\s+/i);
    for (const alt of altParts) {
      const t = alt.trim();
      if (!t) continue;
      candidates.add(t);
      const eqIdx = t.indexOf('=');
      if (eqIdx > 0 && eqIdx < 18) {
        const lhs = t.slice(0, eqIdx).trim();
        const rhs = t.slice(eqIdx + 1).trim();
        // Only strip LHS when it looks like a variable/label (e.g. "x", "H_max", "v_0x", "A")
        if (/^[a-zA-Z0-9_\\.\s,-]+$/.test(lhs) && rhs) {
          candidates.add(rhs);
        }
      }
    }
  }

  const normalizedSet = new Set();
  for (const c of candidates) {
    const norm = normalizeToken(c);
    if (!norm) continue;
    normalizedSet.add(norm);
    // If candidate is base-N notation like 200_5 or 1111_2, also accept digits without base subscript
    const baseMatch = norm.match(/^([0-9a-z]+)_\d+$/i);
    if (baseMatch) normalizedSet.add(baseMatch[1]);

    const numVal = evalSimpleMath(norm);
    if (Number.isFinite(numVal)) {
      numericTargets.push({ value: numVal, isApprox: raw.includes('\\approx') });
    }
  }

  return {
    acceptedAnswers: [...normalizedSet],
    numericTargets
  };
}

function isLikelyEssay(part, canonical) {
  const prompt = String(part?.prompt ?? '');
  const raw = String(part?.answer ?? '').trim();
  if (!raw) return true;
  if (/^(?:terbukti|proven|q\.e\.d)/i.test(canonical)) return true;
  if (Array.isArray(part?.answerNumeric) && part.answerNumeric.length > 1) return true;
  if (/;\s*(?:\\quad)?\s*[a-zA-Z]/.test(raw)) return true;
  if (
    /\b(buktikan|tunjukkan bahwa|prove that|show that|explain why|jelaskan mengapa|uraikan|sketch|gambarlah|deskripsikan)\b/i.test(prompt) &&
    !(Array.isArray(part?.answerNumeric) && part.answerNumeric.length === 1)
  ) {
    return true;
  }
  const stripped = stripTrailingUnit(canonical.replace(/\([^()]*\)/g, '').trim());
  if (stripped.length > 55) return true;
  if (/\.\s+[A-Z]/.test(stripped)) return true;
  return false;
}

/**
 * Mengurai `part` menjadi objek terstruktur untuk dirender interaktif.
 */
export function parsePaperPart(part) {
  const prompt = String(part?.prompt ?? '');
  const ans = String(part?.answer ?? '').trim();

  // 1. Cek format Pilihan Ganda (A., B., C., D., [E.]) di akhir prompt
  const firstOptMatch = prompt.match(/(?:^|\n)\s*A\.\s+/);
  if (firstOptMatch) {
    const startIdx = prompt.indexOf(firstOptMatch[0]);
    const stemPrompt = prompt.slice(0, startIdx).trim();
    const optBlock = prompt.slice(startIdx);
    const matches = [...optBlock.matchAll(/(?:^|\n)\s*([A-E])\.\s+([\s\S]*?)(?=(?:\n\s*[A-E]\.\s+)|$)/g)];
    const options = matches.map((m) => ({
      key: m[1].toUpperCase(),
      text: m[2].trim()
    }));
    const keysValid =
      options.length >= 2 &&
      options[0].key === 'A' &&
      options.every((opt, i) => opt.key.charCodeAt(0) === 65 + i);
    const ansMatch = ans.match(/^(?:\*\*)?\(?([A-E])\)?(?:\*\*|\.)?(?:\s|$)/i);
    const correctKey = ansMatch ? ansMatch[1].toUpperCase() : null;

    if (keysValid && correctKey && options.some((o) => o.key === correctKey)) {
      return {
        kind: 'mcq',
        stemPrompt,
        options,
        correctKey,
        acceptedAnswers: [correctKey],
        numericTargets: []
      };
    }
  }

  // 2. Cek apakah cocok sebagai isian singkat / numerik atau uraian terbuka
  const canonical = latexToCanonicalText(ans);
  if (isLikelyEssay(part, canonical)) {
    return {
      kind: 'essay',
      stemPrompt: prompt,
      options: [],
      correctKey: null,
      acceptedAnswers: [],
      numericTargets: []
    };
  }

  const { acceptedAnswers, numericTargets } = extractCandidates(part);
  if (acceptedAnswers.length === 0 && numericTargets.length === 0) {
    return {
      kind: 'essay',
      stemPrompt: prompt,
      options: [],
      correctKey: null,
      acceptedAnswers: [],
      numericTargets: []
    };
  }

  return {
    kind: 'short_answer',
    stemPrompt: prompt,
    options: [],
    correctKey: null,
    acceptedAnswers,
    numericTargets
  };
}

/**
 * Memeriksa jawaban pengguna untuk satu `part`.
 */
export function evaluatePaperPartAnswer(part, rawInput) {
  const parsed = parsePaperPart(part);
  const inputStr = String(rawInput ?? '').trim();
  const isAnswered = inputStr.length > 0;

  if (parsed.kind === 'essay') {
    return {
      kind: 'essay',
      isCorrect: null,
      isAnswered,
      expectedDisplay: part?.answer || ''
    };
  }

  if (!isAnswered) {
    return {
      kind: parsed.kind,
      isCorrect: false,
      isAnswered: false,
      expectedDisplay: parsed.correctKey || part?.answer || ''
    };
  }

  if (parsed.kind === 'mcq') {
    const chosen = inputStr.toUpperCase();
    return {
      kind: 'mcq',
      isCorrect: chosen === parsed.correctKey,
      isAnswered: true,
      expectedDisplay: parsed.correctKey
    };
  }

  // short_answer comparison
  const normInput = normalizeToken(inputStr);
  if (parsed.acceptedAnswers.includes(normInput)) {
    return {
      kind: 'short_answer',
      isCorrect: true,
      isAnswered: true,
      expectedDisplay: part?.answer || ''
    };
  }

  // Leading-zero equivalence for pure integer answers (e.g. AIME 042 vs 42)
  if (/^\d+$/.test(normInput)) {
    const strippedZero = String(Number(normInput));
    if (parsed.acceptedAnswers.some((a) => /^\d+$/.test(a) && String(Number(a)) === strippedZero)) {
      return {
        kind: 'short_answer',
        isCorrect: true,
        isAnswered: true,
        expectedDisplay: part?.answer || ''
      };
    }
  }

  // Numeric equivalence (fractions, decimals, sqrt/pi expressions, rounded approx)
  const inputNum = evalSimpleMath(normInput);
  if (Number.isFinite(inputNum)) {
    const matched = parsed.numericTargets.some((t) => {
      const tol = t.isApprox ? Math.max(1e-4, Math.abs(t.value) * 0.015) : 1e-6;
      return Math.abs(inputNum - t.value) <= tol;
    });
    if (matched) {
      return {
        kind: 'short_answer',
        isCorrect: true,
        isAnswered: true,
        expectedDisplay: part?.answer || ''
      };
    }
  }

  return {
    kind: 'short_answer',
    isCorrect: false,
    isAnswered: true,
    expectedDisplay: part?.answer || ''
  };
}
