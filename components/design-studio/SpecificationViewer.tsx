'use client';

import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { Download, Eye, FileText, X } from 'lucide-react';

const PDF_URL = '/documents/omegaa-construction-specification.pdf';
const DOWNLOAD_NAME = 'Omegaa Construction Specification.pdf';
const TITLE = 'Omegaa Construction Specification';

export default function SpecificationViewer() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setOpen(false);
    };
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [open]);

  return (
    <>
      <div
        role="button"
        tabIndex={0}
        onClick={() => setOpen(true)}
        onKeyDown={(event) => {
          if (event.key === 'Enter' || event.key === ' ') {
            event.preventDefault();
            setOpen(true);
          }
        }}
        className="group flex cursor-pointer flex-col items-center gap-5 rounded-2xl border border-slate-200 bg-slate-50 p-6 text-center transition duration-300 hover:border-brand-blue/30 hover:bg-white hover:shadow-[0_12px_35px_rgba(21,46,255,0.08)] sm:flex-row sm:p-8 sm:text-left"
        aria-label={`View ${TITLE}`}
      >
        <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl border-2 border-gold bg-brand-blue text-gold shadow-md transition-transform duration-300 group-hover:scale-105">
          <FileText className="h-8 w-8" aria-hidden="true" />
        </div>
        <div className="flex-1">
          <p className="text-lg font-bold text-slate-900 md:text-xl">{TITLE}</p>
          <p className="mt-1 text-sm font-light leading-relaxed text-slate-500 md:text-base">
            Click to view the full specification &amp; quotation document. You can
            download it from the top-right of the viewer.
          </p>
        </div>
        <span className="inline-flex shrink-0 items-center gap-2 rounded-full bg-brand-blue px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition group-hover:bg-brand-blue/90">
          <Eye className="h-4 w-4" aria-hidden="true" />
          View
        </span>
      </div>

      {typeof document !== 'undefined' &&
        createPortal(
          <AnimatePresence>
            {open && (
              <motion.div
                key="spec-viewer"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="fixed inset-0 z-[100] flex flex-col bg-slate-950/90 backdrop-blur-sm"
                role="dialog"
                aria-modal="true"
                aria-label={`${TITLE} viewer`}
              >
                <div className="flex items-center justify-between gap-4 border-b border-white/10 bg-slate-900 px-4 py-3 sm:px-6">
                  <p className="truncate text-sm font-semibold text-white sm:text-base">
                    {TITLE}
                  </p>
                  <div className="flex items-center gap-2">
                    <a
                      href={PDF_URL}
                      download={DOWNLOAD_NAME}
                      className="inline-flex items-center gap-2 rounded-full bg-gold px-4 py-2 text-sm font-semibold text-slate-900 shadow-sm transition hover:brightness-95"
                    >
                      <Download className="h-4 w-4" aria-hidden="true" />
                      <span className="hidden sm:inline">Download</span>
                    </a>
                    <button
                      type="button"
                      onClick={() => setOpen(false)}
                      className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/20"
                      aria-label="Close specification viewer"
                    >
                      <X className="h-5 w-5" aria-hidden="true" />
                    </button>
                  </div>
                </div>

                <div className="flex-1 overflow-hidden bg-slate-800">
                  <iframe
                    src={PDF_URL}
                    title={TITLE}
                    className="h-full w-full border-0"
                  />
                </div>
              </motion.div>
            )}
          </AnimatePresence>,
          document.body,
        )}
    </>
  );
}
