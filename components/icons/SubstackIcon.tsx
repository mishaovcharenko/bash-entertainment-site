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
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden
    >
      <path d="M5 7h14M5 12h14M5 17h10" />
    </svg>
  );
}
