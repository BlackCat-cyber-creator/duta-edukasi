import React, { useEffect, useRef, useState, useCallback, useImperativeHandle, forwardRef } from 'react';
import {
  Pencil,
  Highlighter,
  Minus,
  MoveUpRight,
  Square,
  Circle,
  Eraser,
  Crosshair,
  Undo2,
  Redo2,
  Trash2,
  ChevronLeft,
  ChevronRight,
  Plus,
  Download,
  Lock,
  Unlock,
  Grid
} from 'lucide-react';
import {
  WB_COLORS,
  WB_BG_MODES,
  createInitialBoardState,
  addStrokeToBoard,
  appendPointToStroke,
  updateShapeEndPoint,
  removeStrokeById,
  findHitStrokeId,
  undoBoardPage,
  redoBoardPage,
  clearBoardPage,
  addBoardPage,
  setBoardPage,
  serializeBoardState,
  hydrateBoardState,
  renderBoardToCanvas
} from '../../utils/liveWhiteboard';

const TOOLS = [
  { id: 'pen', label: 'Pena', Icon: Pencil },
  { id: 'highlighter', label: 'Stabilo', Icon: Highlighter },
  { id: 'line', label: 'Garis', Icon: Minus },
  { id: 'arrow', label: 'Panah', Icon: MoveUpRight },
  { id: 'rect', label: 'Kotak', Icon: Square },
  { id: 'circle', label: 'Lingkaran', Icon: Circle },
  { id: 'eraser', label: 'Hapus', Icon: Eraser },
  { id: 'laser', label: 'Laser', Icon: Crosshair }
];

const BG_LABELS = {
  grid: 'Grid',
  dots: 'Titik',
  plain: 'Polos'
};

export const LiveWhiteboard = forwardRef(function LiveWhiteboard(
  {
    role,
    allowStudentDraw,
    onToggleStudentDraw,
    onSendData
  },
  ref
) {
  const wrapRef = useRef(null);
  const canvasRef = useRef(null);

  const [board, setBoard] = useState(() => createInitialBoardState());
  const boardRef = useRef(board);
  useEffect(() => {
    boardRef.current = board;
  }, [board]);

  const [tool, setTool] = useState('pen');
  const [color, setColor] = useState(WB_COLORS[0].hex);
  const [strokeWidth, setStrokeWidth] = useState(3);
  const [bgMode, setBgMode] = useState('grid');
  const [remoteLaser, setRemoteLaser] = useState(null);
  const [localLaser, setLocalLaser] = useState(null);

  const activeStrokeRef = useRef(null);
  const lastEmitTimeRef = useRef(0);
  const laserClearTimerRef = useRef(null);

  const canDraw = role === 'teacher' || allowStudentDraw;

  const redraw = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const state = boardRef.current;
    const strokes = state.pages[state.currentPage] || [];
    renderBoardToCanvas(canvas, strokes, {
      background: bgMode,
      liveStroke: activeStrokeRef.current,
      laserPoint: localLaser || remoteLaser
    });
  }, [bgMode, localLaser, remoteLaser]);

  useEffect(() => {
    redraw();
  }, [board, bgMode, localLaser, remoteLaser, redraw]);

  useEffect(() => {
    const wrap = wrapRef.current;
    const canvas = canvasRef.current;
    if (!wrap || !canvas) return undefined;

    const syncCanvasSize = () => {
      const rect = wrap.getBoundingClientRect();
      if (!rect.width || !rect.height) return;
      const dpr = window.devicePixelRatio || 1;
      canvas.width = Math.round(rect.width * dpr);
      canvas.height = Math.round(rect.height * dpr);
      redraw();
    };

    syncCanvasSize();
    const ro = typeof ResizeObserver !== 'undefined' ? new ResizeObserver(syncCanvasSize) : null;
    if (ro) ro.observe(wrap);
    window.addEventListener('resize', syncCanvasSize);
    return () => {
      if (ro) ro.disconnect();
      window.removeEventListener('resize', syncCanvasSize);
    };
  }, [redraw]);

  const sendFullSync = useCallback(() => {
    if (!onSendData) return;
    onSendData({
      type: 'wb-sync-state',
      state: serializeBoardState(boardRef.current),
      bgMode
    });
  }, [onSendData, bgMode]);

  useImperativeHandle(
    ref,
    () => ({
      sendFullSync,
      handleRemoteMessage(msg) {
        if (!msg || typeof msg !== 'object') return;
        switch (msg.type) {
          case 'wb-stroke-start':
            setBoard((prev) => addStrokeToBoard(prev, msg.pageIdx, msg.stroke));
            break;
          case 'wb-stroke-point':
            setBoard((prev) => appendPointToStroke(prev, msg.pageIdx, msg.strokeId, msg.point));
            break;
          case 'wb-shape-update':
            setBoard((prev) => updateShapeEndPoint(prev, msg.pageIdx, msg.strokeId, msg.endPoint));
            break;
          case 'wb-stroke-erase':
            setBoard((prev) => removeStrokeById(prev, msg.pageIdx, msg.strokeId));
            break;
          case 'wb-undo':
            setBoard((prev) => undoBoardPage(prev, msg.pageIdx));
            break;
          case 'wb-redo':
            setBoard((prev) => redoBoardPage(prev, msg.pageIdx));
            break;
          case 'wb-clear':
            setBoard((prev) => clearBoardPage(prev, msg.pageIdx));
            break;
          case 'wb-page-add':
            setBoard((prev) => addBoardPage(prev));
            break;
          case 'wb-page-set':
            setBoard((prev) => setBoardPage(prev, msg.pageIdx));
            break;
          case 'wb-bg':
            if (WB_BG_MODES.includes(msg.bgMode)) setBgMode(msg.bgMode);
            break;
          case 'wb-laser':
            setRemoteLaser(msg.point || null);
            if (laserClearTimerRef.current) clearTimeout(laserClearTimerRef.current);
            if (msg.point) {
              laserClearTimerRef.current = setTimeout(() => setRemoteLaser(null), 1500);
            }
            break;
          case 'wb-sync-request':
            if (role === 'teacher') {
              sendFullSync();
            }
            break;
          case 'wb-sync-state':
            if (msg.state) {
              setBoard(hydrateBoardState(msg.state));
            }
            if (WB_BG_MODES.includes(msg.bgMode)) {
              setBgMode(msg.bgMode);
            }
            break;
          default:
            break;
        }
      }
    }),
    [role, sendFullSync]
  );

  const getNormPoint = (e) => {
    const canvas = canvasRef.current;
    if (!canvas) return { x: 0, y: 0 };
    const rect = canvas.getBoundingClientRect();
    const x = Math.max(0, Math.min(1, (e.clientX - rect.left) / Math.max(1, rect.width)));
    const y = Math.max(0, Math.min(1, (e.clientY - rect.top) / Math.max(1, rect.height)));
    return { x: Number(x.toFixed(4)), y: Number(y.toFixed(4)) };
  };

  const handlePointerDown = (e) => {
    const pt = getNormPoint(e);
    if (tool === 'laser') {
      e.currentTarget.setPointerCapture(e.pointerId);
      setLocalLaser(pt);
      onSendData?.({ type: 'wb-laser', point: pt });
      return;
    }

    if (!canDraw) return;
    e.currentTarget.setPointerCapture(e.pointerId);

    const pageIdx = boardRef.current.currentPage;
    if (tool === 'eraser') {
      const hitId = findHitStrokeId(boardRef.current.pages[pageIdx] || [], pt);
      if (hitId) {
        setBoard((prev) => removeStrokeById(prev, pageIdx, hitId));
        onSendData?.({ type: 'wb-stroke-erase', pageIdx, strokeId: hitId });
      }
      activeStrokeRef.current = { tool: 'eraser', points: [pt] };
      return;
    }

    const stroke = {
      id: `s-${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 6)}`,
      tool,
      color,
      width: strokeWidth,
      points: [pt]
    };
    activeStrokeRef.current = stroke;
    setBoard((prev) => addStrokeToBoard(prev, pageIdx, stroke));
    onSendData?.({ type: 'wb-stroke-start', pageIdx, stroke });
  };

  const handlePointerMove = (e) => {
    const pt = getNormPoint(e);
    const now = performance.now();

    if (tool === 'laser') {
      if (e.buttons === 0 && e.pointerType === 'mouse') return;
      setLocalLaser(pt);
      if (now - lastEmitTimeRef.current > 24) {
        lastEmitTimeRef.current = now;
        onSendData?.({ type: 'wb-laser', point: pt });
      }
      return;
    }

    const active = activeStrokeRef.current;
    if (!active || !canDraw) return;
    const pageIdx = boardRef.current.currentPage;

    if (active.tool === 'eraser') {
      const hitId = findHitStrokeId(boardRef.current.pages[pageIdx] || [], pt);
      if (hitId) {
        setBoard((prev) => removeStrokeById(prev, pageIdx, hitId));
        onSendData?.({ type: 'wb-stroke-erase', pageIdx, strokeId: hitId });
      }
      return;
    }

    if (['line', 'arrow', 'rect', 'circle'].includes(active.tool)) {
      active.points = [active.points[0], pt];
      setBoard((prev) => updateShapeEndPoint(prev, pageIdx, active.id, pt));
      if (now - lastEmitTimeRef.current > 28) {
        lastEmitTimeRef.current = now;
        onSendData?.({ type: 'wb-shape-update', pageIdx, strokeId: active.id, endPoint: pt });
      }
      return;
    }

    active.points.push(pt);
    setBoard((prev) => appendPointToStroke(prev, pageIdx, active.id, pt));
    if (now - lastEmitTimeRef.current > 20) {
      lastEmitTimeRef.current = now;
      onSendData?.({ type: 'wb-stroke-point', pageIdx, strokeId: active.id, point: pt });
    }
  };

  const handlePointerUp = (e) => {
    if (tool === 'laser') {
      setLocalLaser(null);
      onSendData?.({ type: 'wb-laser', point: null });
      return;
    }
    const active = activeStrokeRef.current;
    if (active && ['line', 'arrow', 'rect', 'circle'].includes(active.tool) && active.points.length >= 2) {
      const pageIdx = boardRef.current.currentPage;
      const endPoint = active.points[1];
      onSendData?.({ type: 'wb-shape-update', pageIdx, strokeId: active.id, endPoint });
    }
    activeStrokeRef.current = null;
    try {
      if (e.currentTarget.hasPointerCapture(e.pointerId)) {
        e.currentTarget.releasePointerCapture(e.pointerId);
      }
    } catch {
      // ignore
    }
  };

  const pageIdx = board.currentPage;
  const canUndo = (board.undoStacks[pageIdx] || []).length > 0;
  const canRedo = (board.redoStacks[pageIdx] || []).length > 0;

  const handleUndo = () => {
    if (!canDraw || !canUndo) return;
    setBoard((prev) => undoBoardPage(prev, pageIdx));
    onSendData?.({ type: 'wb-undo', pageIdx });
  };

  const handleRedo = () => {
    if (!canDraw || !canRedo) return;
    setBoard((prev) => redoBoardPage(prev, pageIdx));
    onSendData?.({ type: 'wb-redo', pageIdx });
  };

  const handleClearPage = () => {
    if (!canDraw) return;
    setBoard((prev) => clearBoardPage(prev, pageIdx));
    onSendData?.({ type: 'wb-clear', pageIdx });
  };

  const handleCycleBg = () => {
    const nextIdx = (WB_BG_MODES.indexOf(bgMode) + 1) % WB_BG_MODES.length;
    const nextBg = WB_BG_MODES[nextIdx];
    setBgMode(nextBg);
    onSendData?.({ type: 'wb-bg', bgMode: nextBg });
  };

  const handleAddPage = () => {
    setBoard((prev) => addBoardPage(prev));
    onSendData?.({ type: 'wb-page-add' });
  };

  const handleGoPage = (targetIdx) => {
    const clamped = Math.max(0, Math.min(board.pages.length - 1, targetIdx));
    setBoard((prev) => setBoardPage(prev, clamped));
    onSendData?.({ type: 'wb-page-set', pageIdx: clamped });
  };

  const handleExportPng = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const link = document.createElement('a');
    link.download = `papan-tulis-hal-${pageIdx + 1}.png`;
    link.href = canvas.toDataURL('image/png');
    link.click();
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100%', minHeight: 0 }}>
      <div className="live-panel-toolbar">
        <div className="live-tool-group">
          {TOOLS.map(({ id, label, Icon }) => {
            const disabled = id !== 'laser' && !canDraw;
            return (
              <button
                key={id}
                type="button"
                className={`live-tool-btn ${tool === id ? 'active' : ''}`}
                onClick={() => setTool(id)}
                disabled={disabled}
                title={label}
              >
                <Icon size={14} />
                <span className="wb-tool-label">{label}</span>
              </button>
            );
          })}
        </div>

        <div className="live-tool-group">
          {WB_COLORS.map((c) => (
            <button
              key={c.id}
              type="button"
              aria-label={c.label}
              className={`live-color-dot ${color === c.hex ? 'active' : ''}`}
              style={{ backgroundColor: c.hex }}
              onClick={() => setColor(c.hex)}
              disabled={!canDraw}
              title={c.label}
            />
          ))}
          <select
            aria-label="Ketebalan garis"
            value={strokeWidth}
            onChange={(e) => setStrokeWidth(Number(e.target.value))}
            disabled={!canDraw}
            style={{
              border: '1px solid var(--border-subtle)',
              borderRadius: '6px',
              padding: '0.24rem 0.35rem',
              fontSize: '0.75rem'
            }}
          >
            <option value={2}>Tipis</option>
            <option value={3}>Sedang</option>
            <option value={6}>Tebal</option>
          </select>
        </div>

        <div className="live-tool-group">
          <button type="button" className="live-tool-btn" onClick={handleUndo} disabled={!canDraw || !canUndo} title="Undo">
            <Undo2 size={14} />
          </button>
          <button type="button" className="live-tool-btn" onClick={handleRedo} disabled={!canDraw || !canRedo} title="Redo">
            <Redo2 size={14} />
          </button>
          <button type="button" className="live-tool-btn" onClick={handleClearPage} disabled={!canDraw} title="Bersihkan halaman">
            <Trash2 size={14} />
          </button>
          <button type="button" className="live-tool-btn" onClick={handleCycleBg} title="Ganti latar papan">
            <Grid size={14} />
            <span>{BG_LABELS[bgMode]}</span>
          </button>

          <button type="button" className="live-tool-btn" onClick={() => handleGoPage(pageIdx - 1)} disabled={pageIdx === 0} title="Halaman sebelumnya">
            <ChevronLeft size={14} />
          </button>
          <span style={{ fontSize: '0.76rem', fontWeight: 700, padding: '0 0.2rem' }}>
            Hal {pageIdx + 1}/{board.pages.length}
          </span>
          <button type="button" className="live-tool-btn" onClick={() => handleGoPage(pageIdx + 1)} disabled={pageIdx >= board.pages.length - 1} title="Halaman berikutnya">
            <ChevronRight size={14} />
          </button>
          <button type="button" className="live-tool-btn" onClick={handleAddPage} disabled={!canDraw} title="Tambah halaman">
            <Plus size={14} />
          </button>

          {role === 'teacher' && (
            <button
              type="button"
              className={`live-tool-btn ${allowStudentDraw ? 'active' : ''}`}
              onClick={onToggleStudentDraw}
              title={allowStudentDraw ? 'Kunci coretan murid' : 'Izinkan murid mencoret'}
            >
              {allowStudentDraw ? <Unlock size={13} /> : <Lock size={13} />}
              <span>{allowStudentDraw ? 'Murid Bisa Coret' : 'Papan Terkunci'}</span>
            </button>
          )}

          <button type="button" className="live-tool-btn" onClick={handleExportPng} title="Unduh papan tulis PNG">
            <Download size={14} />
          </button>
        </div>
      </div>

      {!canDraw && (
        <div
          style={{
            background: '#FEF3C7',
            color: '#92400E',
            fontSize: '0.76rem',
            padding: '0.28rem 0.75rem',
            borderBottom: '1px solid #FDE68A'
          }}
        >
          Pengajar sedang mengunci papan tulis (mode menyimak). Anda tetap dapat menggunakan Laser Pointer.
        </div>
      )}

      <div ref={wrapRef} className="live-wb-canvas-wrap">
        <canvas
          ref={canvasRef}
          onPointerDown={handlePointerDown}
          onPointerMove={handlePointerMove}
          onPointerUp={handlePointerUp}
          onPointerCancel={handlePointerUp}
          style={{
            cursor: tool === 'laser' ? 'none' : tool === 'eraser' ? 'cell' : canDraw ? 'crosshair' : 'default'
          }}
        />
      </div>
    </div>
  );
});
