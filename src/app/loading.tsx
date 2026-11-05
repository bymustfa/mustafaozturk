export default function Loading() {
  return (
    <div className="flex min-h-[100svh] items-center justify-center">
      <span className="animate-pulse font-stamp text-[18vw] leading-none text-accent-blue motion-reduce:animate-none">
        *
      </span>
    </div>
  );
}
