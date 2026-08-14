import { useState } from "react";

export default function useCursorDot() {
  const [position, setPosition] = useState({ x: 0, y: 0, show: false });

  function moveCursor(event) {
    const box = event.currentTarget.getBoundingClientRect();
    setPosition({ x: event.clientX - box.left, y: event.clientY - box.top, show: true });
  }

  function hideCursor() {
    setPosition({ x: 0, y: 0, show: false });
  }

  return { position, moveCursor, hideCursor };
}
