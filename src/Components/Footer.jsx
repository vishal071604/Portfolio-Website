import { useState } from "react";
import { FaArrowUp } from "react-icons/fa";

export default function Footer() {
  const [cursor, setCursor] = useState({
    x: 0,
    y: 0,
    visible: false,
  });

  const handleMouseMove = (e) => {
    const footer = e.currentTarget;
    const rect = footer.getBoundingClientRect();

    setCursor({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
      visible: true,
    });
  };

  const handleMouseLeave = () => {
    setCursor({
      x: 0,
      y: 0,
      visible: false,
    });
  };

  return (
    <footer
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="
        relative
        overflow-hidden
        border-t
        border-slate-200
        bg-white
        px-6
        py-8
        text-slate-900
        transition-colors
        duration-300
        cursor-none
        dark:border-white/10
        dark:bg-[#0a0a0a]
        dark:text-white
      "
    >
      {/* Tiny Green Cursor Dot */}
      {cursor.visible && (
        <span
          className="
            pointer-events-none
            absolute
            z-[100]
            h-[4px]
            w-[4px]
            -translate-x-1/2
            -translate-y-1/2
            rounded-full
            bg-green-500
            shadow-[0_0_7px_2px_rgba(34,197,94,0.35)]
            dark:bg-green-400
            dark:shadow-[0_0_7px_2px_rgba(74,222,128,0.8)]
          "
          style={{
            left: `${cursor.x}px`,
            top: `${cursor.y}px`,
          }}
        />
      )}

      {/* Background Glow */}
      <div
        className="
          pointer-events-none
          absolute
          left-1/2
          top-0
          h-40
          w-40
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-green-500/5
          blur-3xl
        "
      />

      <div className="relative mx-auto w-full max-w-6xl">
        {/* Copyright */}
        <p
          className="
            text-center
            text-sm
            text-slate-600
            dark:text-gray-500
          "
        >
          © {new Date().getFullYear()} Vishal S Kalawad. All rights reserved.
        </p>

        {/* Tech Stack */}
        <p
          className="
            mt-2
            text-center
            text-xs
            text-slate-400
            dark:text-gray-600
          "
        >
          Built with React, Vite & Tailwind CSS.
        </p>

        {/* Back to Top */}
        <div className="mt-5 flex justify-center">
          <a
            href="#home"
            className="
              group
              cursor-none
              inline-flex
              items-center
              gap-2
              text-xs
              uppercase
              tracking-[0.18em]
              text-slate-500
              transition-all
              duration-300
              hover:text-green-600
              dark:text-gray-600
              dark:hover:text-green-400
            "
          >
            <FaArrowUp
              size={12}
              className="
                transition-transform
                duration-300
                group-hover:-translate-y-1
              "
            />
            Back to Top
          </a>
        </div>
      </div>
    </footer>
  );
}


