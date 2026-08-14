import { useState } from "react";
import resumePdf from "../assets/Resume.pdf";
import profile from "../assets/Profile.jpg";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaArrowRight,
  FaDownload,
} from "react-icons/fa";

export default function Hero() {
  const [cursor, setCursor] = useState({
    x: 0,
    y: 0,
    visible: false,
  });

  // Cursor follows mouse inside Hero
  const handleMouseMove = (e) => {
    const section = e.currentTarget;
    const rect = section.getBoundingClientRect();

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
    <section
      id="home"
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="
        relative
        overflow-hidden
        border-b
        border-slate-200
        bg-white
        px-6
        pb-16
        pt-24
        text-slate-900
        cursor-none
        transition-colors
        duration-300
        md:pb-20
        md:pt-28
        dark:border-white/10
        dark:bg-[#0a0a0a]
        dark:text-white
      "
    >
      {/* ================= CURSOR DOT ================= */}
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

      {/* ================= BACKGROUND GLOW ================= */}
      <div
        className="
          pointer-events-none
          absolute
          -right-32
          top-24
          h-72
          w-72
          rounded-full
          bg-green-500/5
          blur-3xl
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          -left-32
          bottom-0
          h-64
          w-64
          rounded-full
          bg-green-500/5
          blur-3xl
        "
      />

      {/* ================= MAIN GRID ================= */}
      <div
        className="
          relative
          mx-auto
          grid
          w-full
          max-w-6xl
          items-center
          gap-12
          lg:grid-cols-[minmax(0,1fr)_300px]
          lg:gap-12
        "
      >
        {/* ================= LEFT CONTENT ================= */}
        <div className="min-w-0">

          {/* Top Label */}
          <div className="mb-5 flex items-center gap-3">
            <span className="h-px w-10 bg-slate-400 dark:bg-gray-600" />

            <span
              className="
                text-xs
                uppercase
                tracking-[0.2em]
                text-slate-500
                dark:text-gray-600
              "
            >
              MERN Stack Developer
            </span>
          </div>

          {/* Name */}
          <h1
            className="
              text-4xl
              font-black
              leading-tight
              tracking-tight
              text-slate-900
              sm:text-5xl
              dark:text-white
            "
          >
            Vishal S Kalawad
            <span className="text-green-500 dark:text-green-400">.</span>
          </h1>

          {/* Role Badges */}
          <div className="mt-5 flex flex-wrap gap-3">
            <span
              className="
                cursor-none
                rounded-full
                border
                border-slate-200
                bg-slate-100
                px-4
                py-2
                text-sm
                font-semibold
                text-slate-700
                transition-all
                duration-300
                hover:border-green-400
                hover:bg-green-50
                hover:text-green-600
                dark:border-white/10
                dark:bg-white/5
                dark:text-gray-300
                dark:hover:border-green-500/30
                dark:hover:bg-green-500/10
                dark:hover:text-green-400
              "
            >
              MERN Stack Developer
            </span>

            <span
              className="
                cursor-none
                rounded-full
                border
                border-slate-200
                bg-slate-100
                px-4
                py-2
                text-sm
                font-semibold
                text-slate-700
                transition-all
                duration-300
                hover:border-green-400
                hover:bg-green-50
                hover:text-green-600
                dark:border-white/10
                dark:bg-white/5
                dark:text-gray-300
                dark:hover:border-green-500/30
                dark:hover:bg-green-500/10
                dark:hover:text-green-400
              "
            >
              Data Analyst
            </span>
          </div>

          {/* Description */}
          <p
            className="
              mt-6
              max-w-3xl
              text-justify
              text-base
              leading-7
              text-slate-600
              md:text-lg
              dark:text-gray-400
            "
          >
            I am a Computer Science Engineering graduate passionate
            about building modern and scalable web applications using
            the{" "}
            <span className="font-semibold text-green-600 dark:text-green-400">
              MERN STACK
            </span>
            . I enjoy developing responsive, user-focused applications,
            working with databases, and solving real-world problems
            through clean and efficient code. Alongside full-stack
            development, I have experience with{" "}
            <span className="font-semibold text-green-600 dark:text-green-400">
              Python, SQL, Power BI, and MS Excel
            </span>
            , using data to create meaningful insights and support
            data-driven decisions.
          </p>

          {/* Technology Stack */}
          <div className="mt-6 flex flex-wrap gap-2">
            {[
              "MongoDB",
              "Express.js",
              "React.js",
              "Node.js",
              "JavaScript",
              "MySQL",
              "Python",
              "Power BI",
              "MS Excel",
            ].map((tech) => (
              <span
                key={tech}
                className="
                  cursor-none
                  rounded-full
                  border
                  border-slate-200
                  bg-slate-50
                  px-3
                  py-1.5
                  text-xs
                  font-medium
                  text-slate-600
                  transition-all
                  duration-300
                  hover:border-green-400
                  hover:bg-green-50
                  hover:text-green-600
                  dark:border-white/10
                  dark:bg-white/[0.03]
                  dark:text-gray-400
                  dark:hover:border-green-500/40
                  dark:hover:bg-green-500/10
                  dark:hover:text-green-400
                "
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Buttons */}
          <div className="mt-8 flex flex-wrap gap-4">

            {/* View My Work */}
            <a
              href="#projects"
              className="
                group
                cursor-none
                inline-flex
                items-center
                gap-2
                rounded-lg
                bg-green-500
                px-6
                py-3
                text-sm
                font-bold
                text-black
                transition-all
                duration-300
                hover:bg-green-400
                hover:shadow-[0_0_20px_rgba(34,197,94,0.25)]
              "
            >
              View My Work

              <FaArrowRight
                size={13}
                className="
                  transition-transform
                  duration-300
                  group-hover:translate-x-1
                "
              />
            </a>

            {/* Resume */}
            <a
              href={resumePdf}
              target="_blank"
              rel="noopener noreferrer"
              className="
                cursor-none
                inline-flex
                items-center
                gap-2
                rounded-lg
                border
                border-slate-200
                bg-white
                px-6
                py-3
                text-sm
                font-semibold
                text-slate-700
                transition-all
                duration-300
                hover:border-green-400
                hover:bg-green-50
                hover:text-green-600
                dark:border-white/10
                dark:bg-white/5
                dark:text-gray-300
                dark:hover:border-green-500/40
                dark:hover:bg-green-500/10
                dark:hover:text-green-400
              "
            >
              <FaDownload size={13} />
              Resume
            </a>
          </div>

          {/* Social Links + Availability */}
          <div className="mt-8 flex flex-wrap items-center gap-5">

            {/* GitHub */}
            <a
              href="https://github.com/vishal071604"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="
                cursor-none
                text-slate-500
                transition-all
                duration-300
                hover:-translate-y-1
                hover:text-green-600
                dark:text-gray-500
                dark:hover:text-green-400
              "
            >
              <FaGithub size={20} />
            </a>

            {/* LinkedIn */}
            <a
              href="https://linkedin.com/in/vishal-s-kalawad-1803a6365"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="
                cursor-none
                text-slate-500
                transition-all
                duration-300
                hover:-translate-y-1
                hover:text-green-600
                dark:text-gray-500
                dark:hover:text-green-400
              "
            >
              <FaLinkedin size={20} />
            </a>

            {/* Email */}
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=vishalkalawad51@gmail.com&su=Contact%20from%20Portfolio&body=Hello%20Vishal,"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Email"
              className="
                cursor-none
                text-slate-500
                transition-all
                duration-300
                hover:-translate-y-1
                hover:text-green-600
                dark:text-gray-500
                dark:hover:text-green-400
              "
            >
              <FaEnvelope size={20} />
            </a>

            {/* Divider */}
            <span className="h-5 w-px bg-slate-200 dark:bg-white/10" />

            {/* Availability */}
            <div className="flex items-center gap-2">
              <span
                className="
                  h-2
                  w-2
                  rounded-full
                  bg-green-500
                  shadow-[0_0_8px_rgba(34,197,94,0.6)]
                  dark:bg-green-400
                  dark:shadow-[0_0_8px_rgba(74,222,128,0.8)]
                "
              />

              <span
                className="
                  text-xs
                  font-medium
                  uppercase
                  tracking-[0.15em]
                  text-slate-500
                  dark:text-gray-500
                "
              >
                Open to opportunities
              </span>
            </div>
          </div>
        </div>

        {/* ================= RIGHT PHOTO ================= */}
        <div className="hidden justify-center lg:flex">
          <div className="relative">

            {/* Decorative Background Shape - Top Right */}
            <div
              className="
                pointer-events-none
                absolute
                -right-6
                -top-6
                h-24
                w-24
                rounded-2xl
                border
                border-green-500/20
                bg-green-500/5
              "
            />

            {/* Decorative Background Shape - Bottom Left */}
            <div
              className="
                pointer-events-none
                absolute
                -bottom-6
                -left-6
                h-20
                w-20
                rounded-2xl
                border
                border-slate-200
                bg-slate-50
                dark:border-white/10
                dark:bg-white/[0.02]
              "
            />

            {/* Green Corner Accent */}
            <div
              className="
                pointer-events-none
                absolute
                -left-3
                -top-3
                z-10
                h-16
                w-16
                border-l-2
                border-t-2
                border-green-500
                dark:border-green-400
              "
            />

            {/* Photo Group */}
            <div className="group relative">

              {/* Photo Glow */}
              <div
                className="
                  pointer-events-none
                  absolute
                  -inset-3
                  rounded-[2rem]
                  bg-green-400/10
                  blur-2xl
                  transition-all
                  duration-500
                  group-hover:bg-green-400/20
                "
              />

              {/* Photo Frame */}
              <div
                className="
                  relative
                  rounded-[2rem]
                  border
                  border-slate-200
                  bg-white
                  p-2
                  shadow-xl
                  transition-all
                  duration-500
                  group-hover:border-green-400
                  group-hover:shadow-[0_20px_60px_rgba(34,197,94,0.12)]
                  dark:border-white/10
                  dark:bg-[#111111]
                  dark:shadow-2xl
                  dark:group-hover:border-green-500/30
                "
              >
                <img
                  src={profile}
                  alt="Vishal S Kalawad"
                  className="
                    h-[360px]
                    w-[280px]
                    rounded-[1.5rem]
                    object-cover
                    object-top
                    grayscale-[15%]
                    transition-all
                    duration-500
                    group-hover:scale-[1.02]
                    group-hover:grayscale-0
                  "
                />
              </div>

              {/* MERN Badge - RIGHT SIDE ON HOVER */}
              <div
                className="
                  pointer-events-none
                  absolute
                  -right-[110px]
                  top-1/2
                  -translate-y-1/2
                  translate-x-4
                  rounded-full
                  border
                  border-green-500/30
                  bg-white
                  px-4
                  py-2
                  text-xs
                  font-semibold
                  uppercase
                  tracking-[0.2em]
                  text-green-600
                  opacity-0
                  shadow-lg
                  backdrop-blur-md
                  transition-all
                  duration-300
                  group-hover:translate-x-0
                  group-hover:opacity-100
                  dark:bg-[#111111]/95
                  dark:text-green-400
                  dark:shadow-[0_0_20px_rgba(34,197,94,0.2)]
                "
              >
                MERN Stack
              </div>
            </div>

            {/* Open to Work Card */}
            <div
              className="
                absolute
                -bottom-5
                -left-10
                flex
                items-center
                gap-3
                rounded-xl
                border
                border-slate-200
                bg-white
                px-4
                py-3
                shadow-xl
                dark:border-white/10
                dark:bg-[#111111]/95
              "
            >
              <span
                className="
                  h-2.5
                  w-2.5
                  rounded-full
                  bg-green-500
                  shadow-[0_0_10px_rgba(34,197,94,0.6)]
                  dark:bg-green-400
                  dark:shadow-[0_0_10px_rgba(74,222,128,0.8)]
                "
              />

              <div>
                <p className="text-xs font-semibold text-slate-900 dark:text-white">
                  Open to Work
                </p>

                <p className="text-[10px] text-slate-500 dark:text-gray-500">
                  MERN • Data Analytics
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
