"use client";

interface IconProps {
  size?: number;
  className?: string;
}

export function BackArrowIcon({ size = 24, className = "" }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      className={className}
    >
      <path d="M19 12H5M12 19l-7-7 7-7" />
    </svg>
  );
}

export function ShareIcon({ size = 24, className = "" }: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 788 665"
    >
      <path
        fill="currentColor"
        d="m623 474l75-74v265H0V133h281l-84 72H76v388h547V474zm-73-121v110l238-222L550 28v109c-460 0-427 427-427 427c90-298 427-211 427-211z"
      />
    </svg>
  );
}

export function ClockIcon({ size = 16, className = "" }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      className={className}
    >
      <circle cx="12" cy="12" r="10" />
      <path d="M12 6v6l4 2" />
    </svg>
  );
}

export function SkipPreviousIcon({ size = 32, className = "" }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
    >
      <path d="M6 6h2v12H6zm11 6l-8.5 6V6z" />
    </svg>
  );
}

export function SkipNextIcon({ size = 32, className = "" }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
    >
      <path d="M6 18l8.5-6L6 6v12zM16 6v12h2V6h-2z" />
    </svg>
  );
}

export function PlayIcon({ size = 32, className = "" }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
    >
      <path d="M8 5v14l11-7z" />
    </svg>
  );
}

export function PauseIcon({ size = 32, className = "" }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
    >
      <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z" />
    </svg>
  );
}

export function SpeedIcon({ size = 24, className = "" }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
    >
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z" />
    </svg>
  );
}

export function TimerIcon({ size = 24, className = "" }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
    >
      <path d="M15 1H9v2h6V1zm-4 13h2v8h-2v-8zm8.03-6.61l1.42-1.42c-.43-.51-.9-.99-1.41-1.41l-1.42 1.42A8.962 8.962 0 0 0 12 4c-4.97 0-9 4.03-9 9s4.03 9 9 9 9-4.03 9-9c0-2.38-.93-4.43-2.44-6.03l-1.42 1.42A6.977 6.977 0 0 1 19 13c0 3.86-3.14 7-7 7s-7-3.14-7-7 3.14-7 7-7c1.93 0 3.68.79 4.95 2.05l1.42-1.42C12.15 2.26 10.13 1.5 8 1.5 4.42 1.5 1.5 4.42 1.5 8s2.92 6.5 6.5 6.5 6.5-2.92 6.5-6.5c0-1.19-.36-2.32-1.04-3.28l-1.42 1.42c.45.62.72 1.37.72 2.21 0 1.93-1.57 3.5-3.5 3.5S4.5 9.93 4.5 8s1.57-3.5 3.5-3.5c1.3 0 2.4.71 3 1.75l1.42-1.42A6.977 6.977 0 0 0 8 1C4.14 1 1 4.14 1 8s3.14 7 7 7 7-3.14 7-7c0-1.85-.63-3.55-1.69-4.9l1.42-1.42C15.82 2.35 16 3.16 16 4c0 2.21-1.79 4-4 4s-4-1.79-4-4 1.79-4 4-4c1.1 0 2.09.45 2.81 1.19L11 1.19C10.45.64 9.55 0 8 0 3.58 0 0 3.58 0 8s3.58 8 8 8 8-3.58 8-8c0-2.19-1.09-4.13-2.75-5.31z" />
    </svg>
  );
}

export function VolumeIcon({ size = 24, className = "" }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
    >
      <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z" />
    </svg>
  );
}

