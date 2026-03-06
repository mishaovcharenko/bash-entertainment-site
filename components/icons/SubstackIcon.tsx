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
      <path d="M4 4h16M4 7h16" />
      <path
        d="M4 9h16v12l-8-4L4 21V9z"
        fill="currentColor"
        stroke="none"
      />
    </svg>
  );
}
