type OwlMarkProps = {
  className?: string;
  size?: number;
};

export default function OwlMark({ className, size }: OwlMarkProps) {
  return (
    <svg
      viewBox="0 0 64 64"
      width={size}
      height={size}
      className={className}
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M20.5 24.5 23.2 8.5 30 22"
        stroke="currentColor"
        strokeWidth="4.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M34 22 40.8 8.5 43.5 24.5"
        stroke="currentColor"
        strokeWidth="4.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="32" cy="40" r="17.2" stroke="currentColor" strokeWidth="4.6" />
      <circle cx="25.2" cy="37.2" r="4.5" stroke="currentColor" strokeWidth="3.8" />
      <circle cx="38.8" cy="37.2" r="4.5" stroke="currentColor" strokeWidth="3.8" />
      <circle cx="25.2" cy="37.5" r="1.45" fill="currentColor" />
      <circle cx="38.8" cy="37.5" r="1.45" fill="currentColor" />
      <path d="M32 42.4 29.3 47.4h5.4L32 42.4Z" fill="currentColor" />
    </svg>
  );
}
