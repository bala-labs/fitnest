import React from 'react'

export interface FitNestLogoProps {
  /** Size in pixels or preset */
  size?: 'sm' | 'md' | 'lg' | 'xl' | number
  /** 'full' (icon + wordmark), 'icon' (squircle badge), or 'mark' (transparent vector) */
  variant?: 'full' | 'icon' | 'mark'
  /** Show the subtitle tagline under the wordmark */
  showTagline?: boolean
  /** Subtle hover scale & glow */
  animated?: boolean
  className?: string
  style?: React.CSSProperties
}

const PRESET_SIZES: Record<'sm' | 'md' | 'lg' | 'xl', number> = {
  sm: 28,
  md: 34,
  lg: 44,
  xl: 60,
}

export function FitNestLogoIcon({
  size = 34,
  withBackground = true,
  className = '',
}: {
  size?: number
  withBackground?: boolean
  className?: string
}) {
  const uniqueId = React.useId().replace(/:/g, '')

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`fitnestLogoSvg ${className}`}
      aria-hidden="true"
    >
      <defs>
        {/* Background gradient */}
        <linearGradient id={`bg-${uniqueId}`} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#1e1b18" />
          <stop offset="50%" stopColor="#141210" />
          <stop offset="100%" stopColor="#0a0908" />
        </linearGradient>

        {/* Squircle border gradient */}
        <linearGradient id={`border-${uniqueId}`} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#ff7300" stopOpacity="0.85" />
          <stop offset="50%" stopColor="#ea580c" stopOpacity="0.35" />
          <stop offset="100%" stopColor="#ff9f1c" stopOpacity="0.75" />
        </linearGradient>

        {/* Primary athletic flame & wing */}
        <linearGradient id={`flame-${uniqueId}`} x1="15%" y1="0%" x2="85%" y2="100%">
          <stop offset="0%" stopColor="#ffb703" />
          <stop offset="35%" stopColor="#fb8500" />
          <stop offset="70%" stopColor="#f75c03" />
          <stop offset="100%" stopColor="#d90429" />
        </linearGradient>

        {/* Nest cradle & foundation */}
        <linearGradient id={`nest-${uniqueId}`} x1="0%" y1="100%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#ea580c" />
          <stop offset="45%" stopColor="#f97316" />
          <stop offset="100%" stopColor="#fdba74" />
        </linearGradient>

        {/* Core spark highlight */}
        <linearGradient id={`core-${uniqueId}`} x1="50%" y1="0%" x2="50%" y2="100%">
          <stop offset="0%" stopColor="#ffffff" />
          <stop offset="40%" stopColor="#ffe6a7" />
          <stop offset="100%" stopColor="#ff9f1c" />
        </linearGradient>

        {/* Drop shadow for icon depth */}
        <filter id={`shadow-${uniqueId}`} x="-15%" y="-15%" width="130%" height="130%">
          <feDropShadow dx="0" dy="4" stdDeviation="5" floodColor="#f97316" floodOpacity="0.3" />
        </filter>
      </defs>

      {withBackground && (
        <>
          {/* Outer Squircle Container */}
          <rect
            x="5"
            y="5"
            width="90"
            height="90"
            rx="24"
            fill={`url(#bg-${uniqueId})`}
            stroke={`url(#border-${uniqueId})`}
            strokeWidth="1.8"
            filter={`url(#shadow-${uniqueId})`}
          />
          {/* Subtle Ambient Hearth Glow */}
          <circle cx="50" cy="55" r="26" fill="#f97316" opacity="0.16" />
        </>
      )}

      {/* Emblem Vectors */}
      <g id="fitnestMark" transform={withBackground ? undefined : 'scale(1.05) translate(-2.5, -2.5)'}>
        {/* Nest Cradle & Right Pillar ("N" Sanctuary) */}
        <path
          d="M 23 55
             C 23 68, 33 79, 49 79
             C 65 79, 75 70, 77 55
             C 78 47, 75 41, 71 37
             C 70 36, 68 37, 68 39
             C 70 45, 69 55, 62 64
             C 56 71, 47 72, 38 68
             C 31 64, 28 58, 27 52
             C 27 50, 24 50, 23 55 Z"
          fill={`url(#nest-${uniqueId})`}
        />

        {/* Dynamic Athletic "F" Crest & Rising Wing */}
        <path
          d="M 27 50
             C 27 38, 33 27, 44 20
             C 45 19, 47 21, 46 23
             C 41 30, 39 38, 41 46
             C 42 49, 45 50, 48 49
             L 57 46
             C 59 45, 60 47, 59 49
             L 51 54
             C 47 56, 43 56, 39 55
             C 33 53, 29 48, 27 50 Z"
          fill={`url(#flame-${uniqueId})`}
        />

        {/* Central Ascending Flame (Peak Vitality) */}
        <path
          d="M 48 66
             C 47 62, 45 56, 46 48
             C 47 38, 55 27, 53 17
             C 53 16, 54 16, 55 17
             C 61 24, 66 34, 64 45
             C 63 52, 59 58, 55 63
             C 53 65, 50 67, 48 66 Z"
          fill={`url(#flame-${uniqueId})`}
        />

        {/* Core Radiant Spark */}
        <path
          d="M 50 56
             C 49 52, 49 46, 52 40
             C 52.5 39, 53.5 39, 54 40
             C 56 44, 56 49, 54 54
             C 53 56, 51 57, 50 56 Z"
          fill={`url(#core-${uniqueId})`}
        />

        {/* Focus Spark Dot */}
        <circle cx="53" cy="22" r="2.2" fill="#ffe6a7" />
      </g>
    </svg>
  )
}

export default function FitNestLogo({
  size = 'md',
  variant = 'full',
  showTagline = false,
  animated = true,
  className = '',
  style = {},
}: FitNestLogoProps) {
  const pixelSize = typeof size === 'number' ? size : PRESET_SIZES[size] || 34

  if (variant === 'icon') {
    return (
      <div
        className={`fitnestLogoBadge ${animated ? 'animated' : ''} ${className}`}
        style={{ width: pixelSize, height: pixelSize, ...style }}
        aria-label="FitNest"
      >
        <FitNestLogoIcon size={pixelSize} withBackground />
      </div>
    )
  }

  if (variant === 'mark') {
    return (
      <div
        className={`fitnestLogoMark ${animated ? 'animated' : ''} ${className}`}
        style={{ width: pixelSize, height: pixelSize, ...style }}
        aria-label="FitNest"
      >
        <FitNestLogoIcon size={pixelSize} withBackground={false} />
      </div>
    )
  }

  // variant === 'full' (Icon + Wordmark)
  return (
    <div
      className={`fitnestLogoLockup ${animated ? 'animated' : ''} ${className}`}
      style={{ display: 'inline-flex', alignItems: 'center', gap: Math.max(8, pixelSize * 0.28), ...style }}
      aria-label="FitNest"
    >
      <div style={{ flexShrink: 0, width: pixelSize, height: pixelSize }}>
        <FitNestLogoIcon size={pixelSize} withBackground />
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', lineHeight: 1 }}>
        <div
          className="fitnestLogoText"
          style={{
            fontFamily: "'Outfit', 'Inter', -apple-system, sans-serif",
            fontWeight: 900,
            fontSize: `${Math.round(pixelSize * 0.72)}px`,
            letterSpacing: '-0.04em',
            display: 'flex',
            alignItems: 'baseline',
          }}
        >
          <span style={{ color: 'var(--text)' }}>Fit</span>
          <span
            style={{
              background: 'linear-gradient(135deg, #f97316 0%, #fb923c 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            Nest
          </span>
        </div>

        {showTagline && (
          <span
            className="fitnestLogoTagline"
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: `${Math.max(8, Math.round(pixelSize * 0.22))}px`,
              fontWeight: 700,
              letterSpacing: '0.18em',
              textTransform: 'uppercase',
              color: 'var(--accent)',
              opacity: 0.9,
              marginTop: 3,
            }}
          >
            Train Smarter • Feel At Home
          </span>
        )}
      </div>
    </div>
  )
}
