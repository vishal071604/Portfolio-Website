export default function CursorDot({ position }) {
  if (!position.show) return null;

  return (
    <span
      className="pointer-events-none absolute z-[100] h-1 w-1 -translate-x-1/2 -translate-y-1/2 rounded-full bg-green-500 shadow-[0_0_7px_2px_rgba(34,197,94,0.35)] dark:bg-green-400 dark:shadow-[0_0_7px_2px_rgba(74,222,128,0.8)]"
      style={{ left: position.x, top: position.y }}
    />
  );
}
