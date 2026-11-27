/**
 * Engine papan tulis vektor (koordinat ternormalisasi 0..1) & renderer Canvas 2D.
 * Framework-free agar mudah diuji dan konsisten di layar laptop, tablet, maupun HP.
 */

export const WB_COLORS = [
  { id: 'navy', label: 'Biru Tua', hex: '#12337A' },
  { id: 'black', label: 'Hitam', hex: '#111827' },
  { id: 'crimson', label: 'Merah', hex: '#DC2626' },
  { id: 'emerald', label: 'Hijau', hex: '#059669' },
  { id: 'amber', label: 'Kuning Stabilo', hex: '#F59E0B' }
];

export const WB_BG_MODES = ['grid', 'dots', 'plain'];

export function createInitialBoardState() {
  return {
    pages: [[]],
    currentPage: 0,
    undoStacks: [[]],
    redoStacks: [[]]
  };
}

function cloneStrokes(strokes = []) {
  return strokes.map((s) => ({
    ...s,
    points: Array.isArray(s.points) ? s.points.map((p) => ({ x: p.x, y: p.y })) : []
  }));
}

function ensurePageArrays(state, pageIdx) {
  const len = Math.max(state.pages.length, pageIdx + 1);
  const pages = [...state.pages];
  const undoStacks = [...state.undoStacks];
  const redoStacks = [...state.redoStacks];
  while (pages.length < len) pages.push([]);
  while (undoStacks.length < len) undoStacks.push([]);
  while (redoStacks.length < len) redoStacks.push([]);
  return { pages, undoStacks, redoStacks };
}

function pushUndoSnapshot(undoStack, currentStrokes) {
  const next = [...undoStack, cloneStrokes(currentStrokes)];
  if (next.length > 35) next.shift();
  return next;
}

export function addStrokeToBoard(state, pageIdx, stroke, { recordUndo = true } = {}) {
  if (!stroke || !stroke.id) return state;
  const idx = Math.max(0, Number(pageIdx) || 0);
  const { pages, undoStacks, redoStacks } = ensurePageArrays(state, idx);
  const current = pages[idx] || [];
  if (current.some((s) => s.id === stroke.id)) return state;

  if (recordUndo) {
    undoStacks[idx] = pushUndoSnapshot(undoStacks[idx], current);
    redoStacks[idx] = [];
  }
  pages[idx] = [...current, stroke];

  return {
    ...state,
    pages,
    undoStacks,
    redoStacks
  };
}

export function appendPointToStroke(state, pageIdx, strokeId, point) {
  const idx = Math.max(0, Number(pageIdx) || 0);
  const page = state.pages[idx];
  if (!page) return state;
  const targetIdx = page.findIndex((s) => s.id === strokeId);
  if (targetIdx === -1) return state;

  const target = page[targetIdx];
  const updatedStroke = {
    ...target,
    points: [...(target.points || []), { x: point.x, y: point.y }]
  };
  const nextPage = [...page];
  nextPage[targetIdx] = updatedStroke;

  const pages = [...state.pages];
  pages[idx] = nextPage;
  return { ...state, pages };
}

export function updateShapeEndPoint(state, pageIdx, strokeId, endPoint) {
  const idx = Math.max(0, Number(pageIdx) || 0);
  const page = state.pages[idx];
  if (!page) return state;
  const targetIdx = page.findIndex((s) => s.id === strokeId);
  if (targetIdx === -1) return state;

  const target = page[targetIdx];
  const start = target.points?.[0] || endPoint;
  const updatedStroke = {
    ...target,
    points: [start, { x: endPoint.x, y: endPoint.y }]
  };
  const nextPage = [...page];
  nextPage[targetIdx] = updatedStroke;

  const pages = [...state.pages];
  pages[idx] = nextPage;
  return { ...state, pages };
}

export function removeStrokeById(state, pageIdx, strokeId, { recordUndo = true } = {}) {
  const idx = Math.max(0, Number(pageIdx) || 0);
  const page = state.pages[idx] || [];
  if (!page.some((s) => s.id === strokeId)) return state;

  const undoStacks = [...state.undoStacks];
  const redoStacks = [...state.redoStacks];
  if (recordUndo) {
    undoStacks[idx] = pushUndoSnapshot(undoStacks[idx] || [], page);
    redoStacks[idx] = [];
  }

  const pages = [...state.pages];
  pages[idx] = page.filter((s) => s.id !== strokeId);
  return { ...state, pages, undoStacks, redoStacks };
}

export function undoBoardPage(state, pageIdx) {
  const idx = Math.max(0, Number(pageIdx) || 0);
  const undoStack = state.undoStacks[idx] || [];
  if (undoStack.length === 0) return state;

  const prevStrokes = undoStack[undoStack.length - 1];
  const nextUndo = undoStack.slice(0, -1);
  const nextRedo = [...(state.redoStacks[idx] || []), cloneStrokes(state.pages[idx] || [])];

  const pages = [...state.pages];
  const undoStacks = [...state.undoStacks];
  const redoStacks = [...state.redoStacks];
  pages[idx] = prevStrokes;
  undoStacks[idx] = nextUndo;
  redoStacks[idx] = nextRedo;

  return { ...state, pages, undoStacks, redoStacks };
}

export function redoBoardPage(state, pageIdx) {
  const idx = Math.max(0, Number(pageIdx) || 0);
  const redoStack = state.redoStacks[idx] || [];
  if (redoStack.length === 0) return state;

  const restoredStrokes = redoStack[redoStack.length - 1];
  const nextRedo = redoStack.slice(0, -1);
  const nextUndo = pushUndoSnapshot(state.undoStacks[idx] || [], state.pages[idx] || []);

  const pages = [...state.pages];
  const undoStacks = [...state.undoStacks];
  const redoStacks = [...state.redoStacks];
  pages[idx] = restoredStrokes;
  undoStacks[idx] = nextUndo;
  redoStacks[idx] = nextRedo;

  return { ...state, pages, undoStacks, redoStacks };
}

export function clearBoardPage(state, pageIdx, { recordUndo = true } = {}) {
  const idx = Math.max(0, Number(pageIdx) || 0);
  const current = state.pages[idx] || [];
  if (current.length === 0) return state;

  const pages = [...state.pages];
  const undoStacks = [...state.undoStacks];
  const redoStacks = [...state.redoStacks];
  if (recordUndo) {
    undoStacks[idx] = pushUndoSnapshot(undoStacks[idx] || [], current);
    redoStacks[idx] = [];
  }
  pages[idx] = [];
  return { ...state, pages, undoStacks, redoStacks };
}

export function addBoardPage(state) {
  const pages = [...state.pages, []];
  const undoStacks = [...state.undoStacks, []];
  const redoStacks = [...state.redoStacks, []];
  return {
    ...state,
    pages,
    undoStacks,
    redoStacks,
    currentPage: pages.length - 1
  };
}

export function setBoardPage(state, pageIdx) {
  const idx = Math.max(0, Math.min(state.pages.length - 1, Number(pageIdx) || 0));
  if (idx === state.currentPage) return state;
  return { ...state, currentPage: idx };
}

function distToSegment(p, a, b) {
  const dx = b.x - a.x;
  const dy = b.y - a.y;
  const lenSq = dx * dx + dy * dy;
  if (lenSq === 0) {
    return Math.hypot(p.x - a.x, p.y - a.y);
  }
  const t = Math.max(0, Math.min(1, ((p.x - a.x) * dx + (p.y - a.y) * dy) / lenSq));
  return Math.hypot(p.x - (a.x + t * dx), p.y - (a.y + t * dy));
}

export function findHitStrokeId(strokes = [], point, tolerance = 0.022) {
  if (!point || !Array.isArray(strokes)) return null;
  for (let i = strokes.length - 1; i >= 0; i--) {
    const s = strokes[i];
    const pts = s.points || [];
    if (pts.length === 0) continue;

    if (s.tool === 'rect' && pts.length >= 2) {
      const minX = Math.min(pts[0].x, pts[1].x);
      const maxX = Math.max(pts[0].x, pts[1].x);
      const minY = Math.min(pts[0].y, pts[1].y);
      const maxY = Math.max(pts[0].y, pts[1].y);
      const corners = [
        { x: minX, y: minY },
        { x: maxX, y: minY },
        { x: maxX, y: maxY },
        { x: minX, y: maxY }
      ];
      for (let c = 0; c < 4; c++) {
        if (distToSegment(point, corners[c], corners[(c + 1) % 4]) <= tolerance) {
          return s.id;
        }
      }
      continue;
    }

    if (s.tool === 'circle' && pts.length >= 2) {
      const cx = (pts[0].x + pts[1].x) / 2;
      const cy = (pts[0].y + pts[1].y) / 2;
      const rx = Math.max(0.005, Math.abs(pts[1].x - pts[0].x) / 2);
      const ry = Math.max(0.005, Math.abs(pts[1].y - pts[0].y) / 2);
      const normDist = Math.hypot((point.x - cx) / rx, (point.y - cy) / ry);
      if (Math.abs(normDist - 1) * Math.max(rx, ry) <= tolerance * 1.4) {
        return s.id;
      }
      continue;
    }

    if (pts.length === 1) {
      if (Math.hypot(point.x - pts[0].x, point.y - pts[0].y) <= tolerance) {
        return s.id;
      }
      continue;
    }

    for (let j = 0; j < pts.length - 1; j++) {
      if (distToSegment(point, pts[j], pts[j + 1]) <= tolerance) {
        return s.id;
      }
    }
  }
  return null;
}

export function serializeBoardState(state) {
  return {
    pages: state.pages.map((page) => cloneStrokes(page)),
    currentPage: state.currentPage
  };
}

export function hydrateBoardState(payload) {
  const rawPages = Array.isArray(payload?.pages) && payload.pages.length > 0 ? payload.pages : [[]];
  const pages = rawPages.map((page) =>
    Array.isArray(page)
      ? page
          .filter((s) => s && typeof s.id === 'string' && Array.isArray(s.points))
          .map((s) => ({
            id: s.id,
            tool: String(s.tool || 'pen'),
            color: String(s.color || '#12337A'),
            width: Number(s.width || 3),
            points: s.points
              .filter((p) => p && Number.isFinite(p.x) && Number.isFinite(p.y))
              .map((p) => ({ x: p.x, y: p.y }))
          }))
      : []
  );
  const currentPage = Math.max(0, Math.min(pages.length - 1, Number(payload?.currentPage) || 0));
  return {
    pages,
    currentPage,
    undoStacks: pages.map(() => []),
    redoStacks: pages.map(() => [])
  };
}

function drawSingleStroke(ctx, stroke, width, height) {
  const pts = stroke.points || [];
  if (pts.length === 0) return;

  const isHighlighter = stroke.tool === 'highlighter';
  ctx.save();
  ctx.lineCap = 'round';
  ctx.lineJoin = 'round';
  ctx.strokeStyle = stroke.color || '#12337A';
  ctx.fillStyle = stroke.color || '#12337A';
  ctx.globalAlpha = isHighlighter ? 0.32 : 1;
  ctx.lineWidth = isHighlighter ? (stroke.width || 3) * 4.5 : stroke.width || 3;

  const toPx = (p) => ({ x: p.x * width, y: p.y * height });

  if (stroke.tool === 'line' && pts.length >= 2) {
    const a = toPx(pts[0]);
    const b = toPx(pts[pts.length - 1]);
    ctx.beginPath();
    ctx.moveTo(a.x, a.y);
    ctx.lineTo(b.x, b.y);
    ctx.stroke();
    ctx.restore();
    return;
  }

  if (stroke.tool === 'arrow' && pts.length >= 2) {
    const a = toPx(pts[0]);
    const b = toPx(pts[pts.length - 1]);
    const angle = Math.atan2(b.y - a.y, b.x - a.x);
    const headLen = Math.max(10, (stroke.width || 3) * 3.8);

    ctx.beginPath();
    ctx.moveTo(a.x, a.y);
    ctx.lineTo(b.x, b.y);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(b.x, b.y);
    ctx.lineTo(b.x - headLen * Math.cos(angle - Math.PI / 6), b.y - headLen * Math.sin(angle - Math.PI / 6));
    ctx.lineTo(b.x - headLen * Math.cos(angle + Math.PI / 6), b.y - headLen * Math.sin(angle + Math.PI / 6));
    ctx.closePath();
    ctx.fill();
    ctx.restore();
    return;
  }

  if (stroke.tool === 'rect' && pts.length >= 2) {
    const a = toPx(pts[0]);
    const b = toPx(pts[pts.length - 1]);
    ctx.strokeRect(
      Math.min(a.x, b.x),
      Math.min(a.y, b.y),
      Math.abs(b.x - a.x),
      Math.abs(b.y - a.y)
    );
    ctx.restore();
    return;
  }

  if (stroke.tool === 'circle' && pts.length >= 2) {
    const a = toPx(pts[0]);
    const b = toPx(pts[pts.length - 1]);
    const cx = (a.x + b.x) / 2;
    const cy = (a.y + b.y) / 2;
    const rx = Math.abs(b.x - a.x) / 2;
    const ry = Math.abs(b.y - a.y) / 2;
    ctx.beginPath();
    ctx.ellipse(cx, cy, Math.max(1, rx), Math.max(1, ry), 0, 0, Math.PI * 2);
    ctx.stroke();
    ctx.restore();
    return;
  }

  if (pts.length === 1) {
    const p = toPx(pts[0]);
    ctx.beginPath();
    ctx.arc(p.x, p.y, ctx.lineWidth / 2, 0, Math.PI * 2);
    ctx.fill();
    ctx.restore();
    return;
  }

  ctx.beginPath();
  const p0 = toPx(pts[0]);
  ctx.moveTo(p0.x, p0.y);
  for (let i = 1; i < pts.length - 1; i++) {
    const curr = toPx(pts[i]);
    const next = toPx(pts[i + 1]);
    const midX = (curr.x + next.x) / 2;
    const midY = (curr.y + next.y) / 2;
    ctx.quadraticCurveTo(curr.x, curr.y, midX, midY);
  }
  const last = toPx(pts[pts.length - 1]);
  ctx.lineTo(last.x, last.y);
  ctx.stroke();
  ctx.restore();
}

export function renderBoardToCanvas(
  canvas,
  strokes = [],
  { background = 'grid', liveStroke = null, laserPoint = null } = {}
) {
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  if (!ctx) return;

  const dpr = typeof window !== 'undefined' ? window.devicePixelRatio || 1 : 1;
  const width = canvas.width / dpr;
  const height = canvas.height / dpr;

  ctx.save();
  ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  ctx.clearRect(0, 0, width, height);

  if (background !== 'transparent') {
    ctx.fillStyle = '#FFFFFF';
    ctx.fillRect(0, 0, width, height);

    if (background === 'grid') {
      ctx.strokeStyle = '#EEF2F7';
      ctx.lineWidth = 1;
      const step = 28;
      ctx.beginPath();
      for (let x = step; x < width; x += step) {
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
      }
      for (let y = step; y < height; y += step) {
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
      }
      ctx.stroke();
    } else if (background === 'dots') {
      ctx.fillStyle = '#CBD5E1';
      const step = 26;
      for (let x = step; x < width; x += step) {
        for (let y = step; y < height; y += step) {
          ctx.fillRect(x - 0.8, y - 0.8, 1.6, 1.6);
        }
      }
    }
  }

  for (const s of strokes) {
    drawSingleStroke(ctx, s, width, height);
  }
  if (liveStroke) {
    drawSingleStroke(ctx, liveStroke, width, height);
  }

  if (laserPoint && Number.isFinite(laserPoint.x) && Number.isFinite(laserPoint.y)) {
    const lx = laserPoint.x * width;
    const ly = laserPoint.y * height;
    ctx.save();
    ctx.beginPath();
    ctx.arc(lx, ly, 12, 0, Math.PI * 2);
    ctx.fillStyle = 'rgba(220, 38, 38, 0.22)';
    ctx.fill();
    ctx.beginPath();
    ctx.arc(lx, ly, 5, 0, Math.PI * 2);
    ctx.fillStyle = '#EF4444';
    ctx.fill();
    ctx.restore();
  }

  ctx.restore();
}
