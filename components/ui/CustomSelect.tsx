'use client';

import { useEffect, useId, useRef, useState, type KeyboardEvent } from 'react';
import { ChevronDown } from 'lucide-react';

type CustomSelectProps = {
  id?: string;
  name: string;
  value: string;
  onChange: (value: string) => void;
  options: readonly string[];
  placeholder: string;
  required?: boolean;
  invalid?: boolean;
  describedBy?: string;
};

const triggerClass =
  'flex w-full items-center justify-between rounded-xl border border-slate-200 bg-white px-4 py-3 text-left text-sm text-slate-800 outline-none transition-colors duration-200 focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/15 md:text-base';

export default function CustomSelect({
  id,
  name,
  value,
  onChange,
  options,
  placeholder,
  required = false,
  invalid = false,
  describedBy,
}: CustomSelectProps) {
  const generatedId = useId();
  const selectId = id ?? generatedId;
  const listboxId = `${selectId}-listbox`;
  const containerRef = useRef<HTMLDivElement>(null);
  const [open, setOpen] = useState(false);
  const [highlightedIndex, setHighlightedIndex] = useState(-1);

  const displayLabel = value || placeholder;
  const isPlaceholder = !value;

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setOpen(false);
        setHighlightedIndex(-1);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const selectOption = (option: string) => {
    onChange(option);
    setOpen(false);
    setHighlightedIndex(-1);
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLButtonElement>) => {
    if (!open) {
      if (event.key === 'ArrowDown' || event.key === 'Enter' || event.key === ' ') {
        event.preventDefault();
        setOpen(true);
        setHighlightedIndex(0);
      }
      return;
    }

    if (event.key === 'Escape') {
      event.preventDefault();
      setOpen(false);
      setHighlightedIndex(-1);
      return;
    }

    if (event.key === 'ArrowDown') {
      event.preventDefault();
      setHighlightedIndex((prev) => Math.min(prev + 1, options.length - 1));
      return;
    }

    if (event.key === 'ArrowUp') {
      event.preventDefault();
      setHighlightedIndex((prev) => Math.max(prev - 1, 0));
      return;
    }

    if (event.key === 'Enter' && highlightedIndex >= 0) {
      event.preventDefault();
      selectOption(options[highlightedIndex]);
    }
  };

  return (
    <div ref={containerRef} className="relative">
      <input type="hidden" name={name} value={value} />
      <button
        id={selectId}
        type="button"
        role="combobox"
        className={`${triggerClass} ${invalid ? 'border-red-400' : ''}`}
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-controls={listboxId}
        aria-required={required}
        aria-invalid={invalid}
        aria-describedby={describedBy}
        onClick={() => {
          setOpen((prev) => !prev);
          setHighlightedIndex(-1);
        }}
        onKeyDown={handleKeyDown}
      >
        <span className={isPlaceholder ? 'text-slate-400' : 'text-slate-800'}>
          {displayLabel}
        </span>
        <ChevronDown
          className={`h-5 w-5 shrink-0 text-slate-500 transition-transform duration-200 ${
            open ? 'rotate-180' : ''
          }`}
          aria-hidden="true"
        />
      </button>

      {open && (
        <ul
          id={listboxId}
          role="listbox"
          aria-labelledby={selectId}
          data-lenis-prevent
          className="absolute z-20 mt-2 max-h-60 w-full overflow-y-auto overscroll-contain rounded-xl border border-slate-200 bg-white py-1 shadow-lg"
        >
          {options.map((option, index) => {
            const isSelected = value === option;
            const isHighlighted = highlightedIndex === index;

            return (
              <li key={option} role="presentation">
                <button
                  type="button"
                  role="option"
                  aria-selected={isSelected}
                  className={`w-full px-4 py-2.5 text-left text-sm transition-colors duration-200 md:text-base ${
                    isSelected
                      ? 'bg-brand-blue text-gold'
                      : isHighlighted
                        ? 'bg-white text-black ring-1 ring-inset ring-slate-200'
                        : 'text-black hover:bg-white hover:text-black hover:ring-1 hover:ring-inset hover:ring-slate-200'
                  }`}
                  onMouseEnter={() => setHighlightedIndex(index)}
                  onClick={() => selectOption(option)}
                >
                  {option}
                </button>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}
