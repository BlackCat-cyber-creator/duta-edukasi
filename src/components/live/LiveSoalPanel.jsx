import React, { useEffect, useRef, useState, useCallback, useImperativeHandle, forwardRef } from 'react';
import {
  Compass,
  Link2,
  Pencil,
  Crosshair,
  Trash2,
  MousePointer,
  ExternalLink
} from 'lucide-react';
import { LIVE_SOAL_SHORTCUTS, sanitizeLivePath } from '../../utils/liveConfig';
import {
  createInitialBoardState,
  addStrokeToBoard,
  appendPointToStroke,
  clearBoardPage,
  renderBoardToCanvas
} from '../../utils/liveWhiteboard';

export const LiveSoalPanel = forwardRef(function LiveSoalPanel(
  {
    currentPath,
    onPathChange,
    onSendData
  },
  ref
) {
  const [draftPath, setDraftPath] = useState(null);
  const [syncEnabled, setSyncEnabled] = useState(true);
  const [overlayMode, setOverlayMode] = useState('browse'); // 'browse' | 'draw' | 'laser'
  const [overlayColor, setOverlayColor] = useState('#DC2626');
  const [overlayBoard, setOverlayBoard] = useState(() => createInitialBoardState());
  const [remoteLaser, setRemoteLaser] = useState(null);
  const [localLaser, setLocalLaser] = useState(null);

  const iframeRef = useRef(null);
  const overlayWrapRef = useRef(null);
  const overlayCanvasRef = useRef(null);
  const activeStrokeRef = useRef(null);
  const lastEmitRef = useRef(0);
  const skipNextBridgePathRef = useRef('');
  const laserTimerRef = useRef(null);

  const pathInput = draftPath !== null ? draftPath : (currentPath || '/paket-soal');

  const redrawOverlay = useCallback(() => {
    const canvas = overlayCanvasRef.current;
    if (!canvas) return;
    const strokes = overlayBoard.pages[0] || [];
    renderBoardToCanvas(canvas, strokes, {
      background: 'transparent',
      liveStroke: activeStrokeRef.current,
      laserPoint: localLaser || remoteLaser
    });
  }, [overlayBoard, localLaser, remoteLaser]);

  useEffect(() => {
    redrawOverlay();
  }, [redrawOverlay]);

  useEffect(() => {
    const wrap = overlayWrapRef.current;
    const canvas = overlayCanvasRef.current;
    if (!wrap || !canvas) return undefined;

    const syncSize = () => {
      const rect = wrap.getBoundingClientRect();
      if (!rect.width || !rect.height) return;
      const dpr = window.devicePixelRatio || 1;
      canvas.width = Math.round(rect.width * dpr);
      canvas.height = Math.round(rect.height * dpr);
      redrawOverlay();
    };

    syncSize();
    const ro = typeof ResizeObserver !== 'undefined' ? new ResizeObserver(syncSize) : null;
    if (ro) ro.observe(wrap);
    window.addEventListener('resize', syncSize);
    return () => {
      if (ro) ro.disconnect();
      window.removeEventListener('resize', syncSize);
    };
  }, [redrawOverlay]);

  const navigateLocalAndBroadcast = useCallback(
    (nextRawPath, broadcast = true) => {
      const safe = sanitizeLivePath(nextRawPath, '/paket-soal');
      setDraftPath(null);
      onPathChange?.(safe);
      if (broadcast && syncEnabled) {
        onSendData?.({ type: 'soal-nav', path: safe });
      }
    },
    [onPathChange, onSendData, syncEnabled]
  );

  // Dengarkan navigasi dari dalam iframe (same-origin) agar halaman murid & guru sinkron
  useEffect(() => {
    const handleMessage = (event) => {
      if (event.origin !== window.location.origin) return;
      const data = event.data;
      if (data?.type !== 'duta-live-iframe-nav' || !data.path) return;
      const incomingPath = sanitizeLivePath(data.path, '/paket-soal');
      if (skipNextBridgePathRef.current === incomingPath) {
        skipNextBridgePathRef.current = '';
        return;
      }
      setDraftPath(null);
      if (incomingPath !== currentPath) {
        onPathChange?.(incomingPath);
        if (syncEnabled) {
          onSendData?.({ type: 'soal-nav', path: incomingPath });
        }
      }
    };

    window.addEventListener('message', handleMessage);
    return () => window.removeEventListener('message', handleMessage);
  }, [currentPath, onPathChange, onSendData, syncEnabled]);

  useImperativeHandle(
    ref,
    () => ({
      handleRemoteMessage(msg) {
        if (!msg || typeof msg !== 'object') return;
        switch (msg.type) {
          case 'soal-nav': {
            if (!syncEnabled || !msg.path) break;
            const safe = sanitizeLivePath(msg.path, '/paket-soal');
            skipNextBridgePathRef.current = safe;
            setDraftPath(null);
            onPathChange?.(safe);
            break;
          }
          case 'soal-draw-start':
            setOverlayBoard((prev) => addStrokeToBoard(prev, 0, msg.stroke));
            break;
          case 'soal-draw-point':
            setOverlayBoard((prev) => appendPointToStroke(prev, 0, msg.strokeId, msg.point));
            break;
          case 'soal-draw-clear':
            setOverlayBoard((prev) => clearBoardPage(prev, 0));
            break;
          case 'soal-laser':
            setRemoteLaser(msg.point || null);
            if (laserTimerRef.current) clearTimeout(laserTimerRef.current);
            if (msg.point) {
              laserTimerRef.current = setTimeout(() => setRemoteLaser(null), 1500);
            }
            break;
          default:
            break;
        }
      }
    }),
    [onPathChange, syncEnabled]
  );

  const getNormPoint = (e) => {
    const canvas = overlayCanvasRef.current;
    if (!canvas) return { x: 0, y: 0 };
    const rect = canvas.getBoundingClientRect();
    return {
      x: Number(Math.max(0, Math.min(1, (e.clientX - rect.left) / Math.max(1, rect.width))).toFixed(4)),
      y: Number(Math.max(0, Math.min(1, (e.clientY - rect.top) / Math.max(1, rect.height))).toFixed(4))
    };
  };

  const handleOverlayDown = (e) => {
    if (overlayMode === 'browse') return;
    const pt = getNormPoint(e);
    e.currentTarget.setPointerCapture(e.pointerId);

    if (overlayMode === 'laser') {
      setLocalLaser(pt);
      onSendData?.({ type: 'soal-laser', point: pt });
      return;
    }

    const stroke = {
      id: `sd-${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 6)}`,
      tool: 'pen',
      color: overlayColor,
      width: 3,
      points: [pt]
    };
    activeStrokeRef.current = stroke;
    setOverlayBoard((prev) => addStrokeToBoard(prev, 0, stroke));
    onSendData?.({ type: 'soal-draw-start', stroke });
  };

  const handleOverlayMove = (e) => {
    if (overlayMode === 'browse') return;
    const pt = getNormPoint(e);
    const now = performance.now();

    if (overlayMode === 'laser') {
      if (e.buttons === 0 && e.pointerType === 'mouse') return;
      setLocalLaser(pt);
      if (now - lastEmitRef.current > 24) {
        lastEmitRef.current = now;
        onSendData?.({ type: 'soal-laser', point: pt });
      }
      return;
    }

    const active = activeStrokeRef.current;
    if (!active) return;
    active.points.push(pt);
    setOverlayBoard((prev) => appendPointToStroke(prev, 0, active.id, pt));
    if (now - lastEmitRef.current > 20) {
      lastEmitRef.current = now;
      onSendData?.({ type: 'soal-draw-point', strokeId: active.id, point: pt });
    }
  };

  const handleOverlayUp = (e) => {
    if (overlayMode === 'laser') {
      setLocalLaser(null);
      onSendData?.({ type: 'soal-laser', point: null });
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

  const handlePathSubmit = (e) => {
    e.preventDefault();
    navigateLocalAndBroadcast(pathInput, true);
  };

  const handleClearOverlay = () => {
    setOverlayBoard((prev) => clearBoardPage(prev, 0));
    onSendData?.({ type: 'soal-draw-clear' });
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100%', minHeight: 0 }}>
      <div className="live-panel-toolbar">
        <form onSubmit={handlePathSubmit} className="live-soal-path-form">
          <Compass size={15} style={{ color: 'var(--brand-navy)', flexShrink: 0 }} />
          <input
            type="text"
            value={pathInput}
            onChange={(e) => setDraftPath(e.target.value)}
            placeholder="/paket-soal/matematika/..."
            aria-label="Alamat halaman soal"
          />
          <button type="submit" className="live-tool-btn active">
            Buka
          </button>
        </form>

        <div className="live-tool-group">
          <button
            type="button"
            className={`live-tool-btn ${syncEnabled ? 'active' : ''}`}
            onClick={() => setSyncEnabled((s) => !s)}
            title="Sinkronkan halaman soal antara guru & murid"
          >
            <Link2 size={13} />
            <span>{syncEnabled ? 'Sinkron: Aktif' : 'Sinkron: Bebas'}</span>
          </button>

          <button
            type="button"
            className={`live-tool-btn ${overlayMode === 'browse' ? 'active' : ''}`}
            onClick={() => setOverlayMode('browse')}
            title="Gulir & klik soal secara normal"
          >
            <MousePointer size={13} />
            <span>Pilih Soal</span>
          </button>

          <button
            type="button"
            className={`live-tool-btn ${overlayMode === 'draw' ? 'active' : ''}`}
            onClick={() => setOverlayMode('draw')}
            title="Coret langsung di atas soal"
          >
            <Pencil size={13} />
            <span>Coret</span>
          </button>

          {overlayMode === 'draw' && (
            <div className="live-tool-group">
              {['#DC2626', '#12337A', '#059669'].map((hex) => (
                <button
                  key={hex}
                  type="button"
                  aria-label={`Warna ${hex}`}
                  className={`live-color-dot ${overlayColor === hex ? 'active' : ''}`}
                  style={{ backgroundColor: hex, width: 16, height: 16 }}
                  onClick={() => setOverlayColor(hex)}
                />
              ))}
            </div>
          )}

          <button
            type="button"
            className={`live-tool-btn ${overlayMode === 'laser' ? 'active' : ''}`}
            onClick={() => setOverlayMode('laser')}
            title="Laser pointer di atas soal"
          >
            <Crosshair size={13} />
            <span>Laser</span>
          </button>

          <button
            type="button"
            className="live-tool-btn"
            onClick={handleClearOverlay}
            title="Hapus coretan di atas soal"
          >
            <Trash2 size={13} />
          </button>

          <a
            href={currentPath || '/paket-soal'}
            target="_blank"
            rel="noopener noreferrer"
            className="live-tool-btn"
            style={{ textDecoration: 'none' }}
            title="Buka halaman ini di tab baru"
          >
            <ExternalLink size={13} />
          </a>
        </div>
      </div>

      <div className="live-soal-shortcuts">
        {LIVE_SOAL_SHORTCUTS.map((sc) => (
          <button
            key={sc.path}
            type="button"
            className={`live-soal-chip ${currentPath === sc.path ? 'active' : ''}`}
            onClick={() => navigateLocalAndBroadcast(sc.path, true)}
          >
            {sc.label}
          </button>
        ))}
      </div>

      <div ref={overlayWrapRef} className="live-soal-viewport">
        <iframe
          ref={iframeRef}
          src={currentPath || '/paket-soal'}
          title="Soal & Materi Duta e-dukasi"
          className="live-soal-iframe"
        />
        <canvas
          ref={overlayCanvasRef}
          className="live-soal-overlay"
          onPointerDown={handleOverlayDown}
          onPointerMove={handleOverlayMove}
          onPointerUp={handleOverlayUp}
          onPointerCancel={handleOverlayUp}
          style={{
            pointerEvents: overlayMode === 'browse' ? 'none' : 'auto',
            cursor: overlayMode === 'draw' ? 'crosshair' : overlayMode === 'laser' ? 'none' : 'default'
          }}
        />
      </div>
    </div>
  );
});
