interface SubstackIconProps {
  className?: string;
  size?: number;
}

export default function SubstackIcon({
  className = "",
  size = 20,
}: SubstackIconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="butt"
      strokeLinejoin="miter"
      className={className}
      aria-hidden
    >
      <rect x="5" y="3.5" width="14" height="1" fill="currentColor" stroke="none" />
      <rect x="5" y="6.5" width="14" height="1" fill="currentColor" stroke="none" />
      <path
        d="M5 9h14v12l-7-4L5 21V9z"
        fill="currentColor"
        stroke="none"
      />
    </svg>
  );
}
