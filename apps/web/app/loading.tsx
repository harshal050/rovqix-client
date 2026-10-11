export default function Loading() {
  return (
    <div className="flex min-h-[100svh] items-center justify-center">
      <div className="flex flex-col items-center gap-4">
        <span className="relative flex size-10 items-center justify-center rounded-xl bg-gradient-to-br from-brand-blue via-brand-violet to-brand-cyan">
          <span className="size-4 animate-pulse rounded-sm bg-background" />
        </span>
        <span className="flex gap-1">
          <span className="size-1.5 animate-bounce rounded-full bg-brand-blue [animation-delay:-0.3s]" />
          <span className="size-1.5 animate-bounce rounded-full bg-brand-violet [animation-delay:-0.15s]" />
          <span className="size-1.5 animate-bounce rounded-full bg-brand-cyan" />
        </span>
      </div>
    </div>
  );
}
