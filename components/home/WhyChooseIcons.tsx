type WhyChooseIconProps = {
  className?: string;
};

export function OnTimeDeliveryIcon({ className }: WhyChooseIconProps) {
  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <circle cx="24" cy="26" r="14" stroke="currentColor" strokeWidth="1.5" />
      <path d="M24 26V18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M24 26H30" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M24 8V12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M10 26H6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M42 26H38" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M14 14L17 17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <rect x="30" y="6" width="14" height="10" rx="1" stroke="currentColor" strokeWidth="1.5" />
      <path d="M33 9H41M33 12H39" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
      <path d="M8 38H40" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M12 42H36" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
    </svg>
  );
}

export function PremiumMaterialsIcon({ className }: WhyChooseIconProps) {
  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      {/* Shield shape */}
      <path
        d="M24 6L8 13V26C8 34.5 15.5 41.5 24 44C32.5 41.5 40 34.5 40 26V13L24 6Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      {/* Checkmark */}
      <path
        d="M16 24L21 29L32 18"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Star badge top-right */}
      <path
        d="M36 8l1 2.5L40 11l-2.5 1L36 14.5 35 12l-2.5-1 2.5-1z"
        stroke="currentColor"
        strokeWidth="1"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function DurableConstructionIcon({ className }: WhyChooseIconProps) {
  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <path d="M6 38H42" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <rect x="10" y="22" width="28" height="16" stroke="currentColor" strokeWidth="1.5" />
      <path d="M10 30H38" stroke="currentColor" strokeWidth="1" />
      <path d="M24 22V14" stroke="currentColor" strokeWidth="1.5" />
      <path d="M14 14H34" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M16 14L24 8L32 14" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
      <rect x="20" y="26" width="8" height="12" stroke="currentColor" strokeWidth="1.5" />
      <rect x="14" y="26" width="5" height="5" stroke="currentColor" strokeWidth="1" />
      <rect x="29" y="26" width="5" height="5" stroke="currentColor" strokeWidth="1" />
      <path d="M8 38L12 42H36L40 38" stroke="currentColor" strokeWidth="1" />
    </svg>
  );
}

export function TransparentCostIcon({ className }: WhyChooseIconProps) {
  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <rect x="8" y="6" width="26" height="34" rx="2" stroke="currentColor" strokeWidth="1.5" />
      <path d="M14 14H28M14 20H28M14 26H24" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <circle cx="34" cy="30" r="10" stroke="currentColor" strokeWidth="1.5" />
      <path
        d="M34 24V30H38"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M31 33H37" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
      <path d="M12 32H20" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeDasharray="2 2" />
    </svg>
  );
}

export function CustomerCentricIcon({ className }: WhyChooseIconProps) {
  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <path d="M8 36H40" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <circle cx="16" cy="18" r="5" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="32" cy="18" r="5" stroke="currentColor" strokeWidth="1.5" />
      <path
        d="M10 36C10 30 12 26 16 26C20 26 22 30 22 36"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M26 36C26 30 28 26 32 26C36 26 38 30 38 36"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M18 22C22 20 26 20 30 22"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path d="M22 12H26" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M24 10V14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}
