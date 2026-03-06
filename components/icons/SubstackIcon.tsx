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
      <path d="M6 4h12M6 7h12" />
      <path
        d="M6 9h12v12l-6-4L6 21V9z"
        fill="currentColor"
        stroke="none"
      />
    </svg>
  );
}
