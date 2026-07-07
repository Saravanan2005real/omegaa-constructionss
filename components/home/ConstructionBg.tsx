/** Round SVG coordinates so server and client render identical paths (avoids hydration mismatch). */
function roundCoord(value: number, precision = 2): number {
  const factor = 10 ** precision;
  return Math.round(value * factor) / factor;
}

export default function ConstructionBg() {
  return (
    <svg
      className="absolute inset-0 w-full h-full pointer-events-none select-none"
      viewBox="0 0 1600 1000"
      preserveAspectRatio="xMidYMid slice"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <defs>
        {/* Subtle diagonal hatch — like drafting paper */}
        <pattern id="diag" width="20" height="20" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
          <line x1="0" y1="0" x2="0" y2="20" stroke="rgba(30,30,30,0.035)" strokeWidth="0.5"/>
        </pattern>
        {/* Dot grid */}
        <pattern id="dots" width="28" height="28" patternUnits="userSpaceOnUse">
          <circle cx="14" cy="14" r="0.9" fill="rgba(30,30,30,0.08)"/>
        </pattern>
      </defs>

      {/* Base textures */}
      <rect width="1600" height="1000" fill="url(#diag)"/>
      <rect width="1600" height="1000" fill="url(#dots)"/>

      {/* ═══════════════════════════════════════════
          FAR LEFT — House Elevation (detailed)
      ═══════════════════════════════════════════ */}
      <g stroke="rgba(28,28,28,0.20)" strokeWidth="1" fill="none" transform="translate(20,60)">
        {/* Gable roof */}
        <polyline points="0,110 105,0 210,110"/>
        {/* Chimney */}
        <rect x="138" y="28" width="20" height="50"/>
        <rect x="134" y="24" width="28" height="6"/>
        {/* Walls */}
        <rect x="0" y="110" width="210" height="120"/>
        {/* Brick courses */}
        {[120,130,140,150,160,170,180,190,200,210,220].map((y,i)=>(
          <line key={i} x1="0" y1={y} x2="210" y2={y} stroke="rgba(28,28,28,0.08)"/>
        ))}
        {/* Left window */}
        <rect x="16" y="130" width="50" height="40"/>
        <line x1="41" y1="130" x2="41" y2="170"/>
        <line x1="16" y1="150" x2="66" y2="150"/>
        <rect x="16" y="170" width="50" height="5"/>
        {/* Right window */}
        <rect x="144" y="130" width="50" height="40"/>
        <line x1="169" y1="130" x2="169" y2="170"/>
        <line x1="144" y1="150" x2="194" y2="150"/>
        <rect x="144" y="170" width="50" height="5"/>
        {/* Door */}
        <rect x="84" y="168" width="42" height="62"/>
        <circle cx="122" cy="199" r="2" fill="rgba(28,28,28,0.20)"/>
        <line x1="84"  y1="162" x2="126" y2="162"/>
        {/* Steps */}
        <line x1="76"  y1="230" x2="134" y2="230"/>
        <line x1="80"  y1="226" x2="130" y2="226"/>
        {/* Ground */}
        <line x1="-16" y1="230" x2="226" y2="230"/>
      </g>

      {/* ═══════════════════════════════════════════
          TOP-CENTER — Drafting Compass
      ═══════════════════════════════════════════ */}
      <g stroke="rgba(28,28,28,0.18)" strokeWidth="1.2" fill="none" transform="translate(720,60)">
        <line x1="34" y1="0" x2="6"  y2="120"/>
        <line x1="34" y1="0" x2="62" y2="120"/>
        <line x1="14" y1="60" x2="54" y2="60"/>
        <circle cx="34" cy="0" r="6"/>
        {/* Compass tips */}
        <path d="M2,120 Q6,132 6,120"/>
        <path d="M66,120 Q62,132 62,120"/>
        {/* Arc (construction line) */}
        <path d="M6,120 Q34,88 62,120" strokeDasharray="4,5"/>
      </g>

      {/* ═══════════════════════════════════════════
          TOP-RIGHT — Arched Window + Column Detail
      ═══════════════════════════════════════════ */}
      <g stroke="rgba(28,28,28,0.18)" strokeWidth="1" fill="none" transform="translate(1060,95)">
        {/* Arch */}
        <path d="M0,110 L0,0 Q0,-54 52,-54 Q104,-54 104,0 L104,110 Z"/>
        {/* Voussoir lines */}
        {[-45,-30,-15,0,15,30,45].map((deg,i)=>{
          const rad=(deg*Math.PI)/180;
          const cx=52, cy=0;
          return <line key={i}
            x1={roundCoord(cx+50*Math.sin(rad))} y1={roundCoord(cy-50*Math.cos(rad))}
            x2={roundCoord(cx+66*Math.sin(rad))} y2={roundCoord(cy-66*Math.cos(rad))}/>;
        })}
        {/* Outer arch */}
        <path d="M-14,110 L-14,-8 Q-14,-68 52,-68 Q118,-68 118,-8 L118,110"/>
        {/* Keystone */}
        <path d="M44,-54 L40,-70 L64,-70 L60,-54 Z"/>
        {/* Mullion + transom */}
        <line x1="52" y1="-54" x2="52" y2="110"/>
        <line x1="0"  y1="36"  x2="104" y2="36"/>
        {/* Sill */}
        <rect x="-6" y="110" width="116" height="9"/>
        {/* Side pilasters */}
        <rect x="-28" y="-12" width="16" height="130"/>
        <rect x="116" y="-12" width="16" height="130"/>
        {/* Capital flourish */}
        <path d="M-28,-12 Q-20,-26 -12,-12"/>
        <path d="M116,-12 Q124,-26 132,-12"/>
      </g>

      {/* ═══════════════════════════════════════════
          LEFT-CENTER — Single tower crane
      ═══════════════════════════════════════════ */}
      <g stroke="rgba(28,28,28,0.19)" strokeWidth="1.2" fill="none" transform="translate(300,90)">
        {/* Mast */}
        <line x1="28" y1="560" x2="28" y2="36"/>
        {/* Jib */}
        <line x1="28" y1="36" x2="210" y2="36"/>
        {/* Counter-jib */}
        <line x1="28" y1="36" x2="0"   y2="36"/>
        {/* Support cables */}
        <line x1="28" y1="36" x2="186" y2="64"/>
        <line x1="28" y1="36" x2="4"   y2="58"/>
        {/* Hoist rope */}
        <line x1="152" y1="36" x2="152" y2="168"/>
        {/* Hook */}
        <rect x="148" y="32" width="8" height="6"/>
        <path d="M148,168 h12 v11 a6,6 0 0,1-12,0 Z"/>
        {/* Base legs */}
        <line x1="16"  y1="560" x2="4"   y2="580"/>
        <line x1="40"  y1="560" x2="52"  y2="580"/>
        <rect x="22"   y="540" width="12" height="22"/>
      </g>

      {/* ═══════════════════════════════════════════
          BOTTOM-LEFT — I-Beam cross section
      ═══════════════════════════════════════════ */}
      <g stroke="rgba(28,28,28,0.18)" strokeWidth="1.2" fill="none" transform="translate(42,760)">
        {/* Flanges */}
        <rect x="0"  y="0"   width="74" height="12"/>
        <rect x="0"  y="78"  width="74" height="12"/>
        {/* Web */}
        <rect x="31" y="12"  width="12" height="66"/>
        {/* Weld lines */}
        <path d="M0,12 L5,0"/> <path d="M74,12 L69,0"/>
        <path d="M0,78 L5,90"/> <path d="M74,78 L69,90"/>
        {/* Depth dimension */}
        <line x1="84" y1="0"   x2="84" y2="90"/>
        <line x1="82" y1="0"   x2="86" y2="0"/>
        <line x1="82" y1="90"  x2="86" y2="90"/>
        {/* Concrete base hatching */}
        <rect x="-18" y="90" width="110" height="22"/>
        {[-14,6,26,46,66,86].map((x,i)=>(
          <line key={i} x1={x} y1="90" x2={x+20} y2="112" stroke="rgba(28,28,28,0.10)"/>
        ))}
      </g>

      {/* ═══════════════════════════════════════════
          BOTTOM-CENTER-LEFT — Spiral staircase plan
      ═══════════════════════════════════════════ */}
      <g stroke="rgba(28,28,28,0.17)" strokeWidth="1" fill="none" transform="translate(220,770)">
        <circle cx="56" cy="56" r="54"/>
        <circle cx="56" cy="56" r="13"/>
        {Array.from({length:12},(_,i)=>{
          const a  = (i/12)*2*Math.PI - Math.PI/2;
          const a2 = ((i+0.82)/12)*2*Math.PI - Math.PI/2;
          const x1 = roundCoord(56+13*Math.cos(a));
          const y1 = roundCoord(56+13*Math.sin(a));
          const x2 = roundCoord(56+54*Math.cos(a));
          const y2 = roundCoord(56+54*Math.sin(a));
          const mx = roundCoord(56+48*Math.cos(a));
          const my = roundCoord(56+48*Math.sin(a));
          const ax = roundCoord(56+48*Math.cos(a2));
          const ay = roundCoord(56+48*Math.sin(a2));
          return (
            <g key={i}>
              <line x1={x1} y1={y1} x2={x2} y2={y2}/>
              <path d={`M${mx},${my} A48,48 0 0,1 ${ax},${ay}`}/>
            </g>
          );
        })}
      </g>

      {/* ═══════════════════════════════════════════
          RIGHT-CENTER — Warren Truss
      ═══════════════════════════════════════════ */}
      <g stroke="rgba(28,28,28,0.18)" strokeWidth="1.3" fill="none" transform="translate(1320,420)">
        {/* Chords */}
        <line x1="0" y1="0"  x2="280" y2="0"/>
        <line x1="0" y1="72" x2="280" y2="72"/>
        {/* Diagonals */}
        <line x1="0"   y1="0"  x2="0"   y2="72"/>
        <line x1="0"   y1="72" x2="40"  y2="0"/>
        <line x1="40"  y1="0"  x2="80"  y2="72"/>
        <line x1="80"  y1="72" x2="120" y2="0"/>
        <line x1="120" y1="0"  x2="160" y2="72"/>
        <line x1="160" y1="72" x2="200" y2="0"/>
        <line x1="200" y1="0"  x2="240" y2="72"/>
        <line x1="240" y1="72" x2="280" y2="0"/>
        <line x1="280" y1="0"  x2="280" y2="72"/>
        {/* Gusset plate circles */}
        {[0,40,80,120,160,200,240,280].map((x,i)=>(
          <circle key={`t${i}`} cx={x} cy={0}  r="4.5" fill="rgba(28,28,28,0.14)"/>
        ))}
        {[0,40,80,120,160,200,240,280].map((x,i)=>(
          <circle key={`b${i}`} cx={x} cy={72} r="4.5" fill="rgba(28,28,28,0.14)"/>
        ))}
        {/* Support triangles */}
        <path d="M-9,72 L9,72 L0,90 Z" fill="rgba(28,28,28,0.13)"/>
        <path d="M271,72 L289,72 L280,90 Z" fill="rgba(28,28,28,0.13)"/>
        <line x1="-16" y1="90" x2="16"  y2="90"/>
        <line x1="264" y1="90" x2="296" y2="90"/>
      </g>

      {/* ═══════════════════════════════════════════
          BOTTOM-RIGHT — Compass rose
      ═══════════════════════════════════════════ */}
      <g stroke="rgba(28,28,28,0.15)" strokeWidth="1" fill="none" transform="translate(1280,780)">
        <circle cx="48" cy="48" r="46"/>
        <circle cx="48" cy="48" r="30"/>
        <circle cx="48" cy="48" r="5"/>
        <line x1="48" y1="2"  x2="48" y2="94"/>
        <line x1="2"  y1="48" x2="94" y2="48"/>
        <line x1="16" y1="16" x2="80" y2="80"/>
        <line x1="80" y1="16" x2="16" y2="80"/>
        <polygon points="48,2 43,28 53,28" fill="rgba(28,28,28,0.18)"/>
        <polygon points="48,94 43,68 53,68" fill="rgba(28,28,28,0.07)"/>
      </g>

      {/* ═══════════════════════════════════════════
          BOTTOM-CENTER — Scale bar
      ═══════════════════════════════════════════ */}
      <g stroke="rgba(28,28,28,0.15)" strokeWidth="1" fill="none" transform="translate(600,934)">
        <rect x="0" y="0" width="240" height="16"/>
        {[0,24,48,72,96,120,144,168,192,216,240].map((x,i)=>(
          <line key={i} x1={x} y1="0" x2={x} y2={i%2===0?16:10}/>
        ))}
      </g>

      {/* ═══════════════════════════════════════════
          SCATTERED — 3 isolated tree symbols
      ═══════════════════════════════════════════ */}
      {[[430,180],[1000,860],[340,680]].map(([tx,ty],i)=>(
        <g key={i} stroke="rgba(28,28,28,0.12)" strokeWidth="0.9" fill="none" transform={`translate(${tx},${ty})`}>
          <circle cx="0" cy="0" r="16"/>
          <line x1="-16" y1="0" x2="16" y2="0"/>
          <line x1="0" y1="-16" x2="0" y2="16"/>
          <circle cx="0" cy="0" r="8" stroke="rgba(28,28,28,0.07)"/>
        </g>
      ))}

    </svg>
  );
}
