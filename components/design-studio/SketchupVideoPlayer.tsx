'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import { Maximize2, Minimize2 } from 'lucide-react';

const PLAYBACK_SPEEDS = [1, 1.25, 1.5, 2] as const;

type SketchupVideoPlayerProps = {
  src: string;
};

export default function SketchupVideoPlayer({ src }: SketchupVideoPlayerProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playbackSpeed, setPlaybackSpeed] = useState<number>(1);
  const [isFullscreen, setIsFullscreen] = useState(false);

  useEffect(() => {
    function handleFullscreenChange() {
      setIsFullscreen(document.fullscreenElement === containerRef.current);
    }

    document.addEventListener('fullscreenchange', handleFullscreenChange);
    return () => document.removeEventListener('fullscreenchange', handleFullscreenChange);
  }, []);

  const toggleFullscreen = useCallback(async () => {
    const container = containerRef.current;
    if (!container) return;

    try {
      if (document.fullscreenElement === container) {
        await document.exitFullscreen();
      } else {
        await container.requestFullscreen();
      }
    } catch {
      // Fullscreen may be blocked by the browser; native video controls remain available.
    }
  }, []);

  const handleSpeedChange = useCallback((speed: number) => {
    const video = videoRef.current;
    if (!video) return;

    video.playbackRate = speed;
    setPlaybackSpeed(speed);
  }, []);

  return (
    <div
      ref={containerRef}
      className="overflow-hidden rounded-2xl border border-slate-200 bg-slate-900 shadow-[0_8px_30px_rgba(15,23,42,0.1)]"
    >
      <video
        ref={videoRef}
        className="aspect-video w-full bg-black"
        controls
        playsInline
        preload="metadata"
      >
        <source src={src} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="flex flex-wrap items-center justify-between gap-3 border-t border-slate-700/80 bg-slate-900 px-4 py-3">
        <div className="flex flex-wrap items-center gap-2">
          <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">
            Speed
          </span>
          {PLAYBACK_SPEEDS.map((speed) => (
            <button
              key={speed}
              type="button"
              onClick={() => handleSpeedChange(speed)}
              className={`rounded-full px-3 py-1 text-xs font-semibold transition ${
                playbackSpeed === speed
                  ? 'bg-gold text-slate-900'
                  : 'bg-slate-800 text-slate-200 hover:bg-slate-700'
              }`}
              aria-pressed={playbackSpeed === speed}
            >
              {speed}x
            </button>
          ))}
        </div>

        <button
          type="button"
          onClick={toggleFullscreen}
          className="inline-flex items-center gap-2 rounded-full border border-slate-600 bg-slate-800 px-4 py-1.5 text-xs font-semibold text-white transition hover:border-gold/50 hover:bg-slate-700"
          aria-label={isFullscreen ? 'Exit fullscreen' : 'Maximise video'}
        >
          {isFullscreen ? (
            <Minimize2 className="h-4 w-4" aria-hidden="true" />
          ) : (
            <Maximize2 className="h-4 w-4" aria-hidden="true" />
          )}
          {isFullscreen ? 'Exit fullscreen' : 'Maximise'}
        </button>
      </div>
    </div>
  );
}
