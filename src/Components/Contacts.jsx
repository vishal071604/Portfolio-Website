import { useState } from "react";
import resumePdf from "../assets/Resume.pdf";
import {
  FaEnvelope,
  FaPhone,
  FaGithub,
  FaLinkedin,
  FaDownload,
  FaArrowRight,
} from "react-icons/fa";

export default function Contacts() {
  const [cursor, setCursor] = useState({
    x: 0,
    y: 0,
    visible: false,
  });

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();

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
      id="contact"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="
        relative
        overflow-hidden
        border-b
        border-slate-200
        bg-white
        px-6
        py-12
        text-slate-900
        cursor-none
        transition-colors
        duration-300
        md:py-14
        dark:border-white/10
        dark:bg-[#0a0a0a]
        dark:text-white
      "
    >
      {/* Cursor Dot */}
      {cursor.visible && (
        <span
          className="
            pointer-events-none
            absolute
            z-[100]
            h-1
            w-1
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
          -right-32
          top-10
          h-72
          w-72
          rounded-full
          bg-green-500/5
          blur-3xl
        "
      />

      <div className="relative mx-auto w-full max-w-6xl">

        {/* Heading */}
        <div className="mb-8">
          <div className="mb-4 flex items-center gap-3">
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
              Contact
            </span>
          </div>
        </div>

        {/* Main Layout */}
        <div className="grid gap-5 lg:grid-cols-[1.2fr_0.8fr]">

          {/* Left Card */}
          <div
            className="
              rounded-2xl
              border
              border-slate-200
              bg-white
              p-6
              shadow-xl
              transition-all
              duration-300
              md:p-8
              dark:border-white/10
              dark:bg-[#111111]
              dark:shadow-none
            "
          >
            <p
              className="
                text-xs
                uppercase
                tracking-[0.2em]
                text-slate-500
                dark:text-gray-600
              "
            >
              Let's connect
            </p>

            <h3
              className="
                mt-3
                text-2xl
                font-bold
                text-slate-900
                md:text-3xl
                dark:text-white
              "
            >
              Ready to build{" "}
              <span className="text-green-600 dark:text-green-400">
                something useful?
              </span>
            </h3>

            <p
              className="
                mt-4
                max-w-xl
                text-sm
                leading-7
                text-slate-600
                dark:text-gray-500
              "
            >
              Whether it's a job opportunity, internship, freelance
              project, or collaboration, feel free to get in touch.
            </p>

            {/* Buttons */}
            <div className="mt-8 flex flex-wrap gap-3">

              {/* Email */}
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=vishalkalawad51@gmail.com&su=Job%20Opportunity&body=Hello%20Vishal,"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  group
                  cursor-none
                  inline-flex
                  items-center
                  gap-2
                  rounded-lg
                  bg-green-500
                  px-5
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
                Email Me

                <FaArrowRight
                  size={12}
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
                download
                className="
                  cursor-none
                  inline-flex
                  items-center
                  gap-2
                  rounded-lg
                  border
                  border-slate-200
                  bg-slate-50
                  px-5
                  py-3
                  text-sm
                  font-semibold
                  text-slate-700
                  transition-all
                  duration-300
                  hover:border-green-500/40
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
                <FaDownload size={13} />
                Download Resume
              </a>
            </div>
          </div>

          {/* Right Contact Cards */}
          <div className="grid gap-4">

            {/* Email Card */}
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=vishalkalawad51@gmail.com&su=Job%20Opportunity&body=Hello%20Vishal,"
              target="_blank"
              rel="noopener noreferrer"
              className="
                group
                cursor-none
                rounded-2xl
                border
                border-slate-200
                bg-white
                p-5
                shadow-sm
                transition-all
                duration-300
                hover:border-green-400
                hover:bg-green-50
                hover:-translate-y-1
                dark:border-white/10
                dark:bg-[#111111]
                dark:shadow-none
                dark:hover:border-green-500/30
                dark:hover:bg-green-500/5
              "
            >
              <div className="flex items-center gap-4">
                <div
                  className="
                    flex
                    h-11
                    w-11
                    items-center
                    justify-center
                    rounded-xl
                    border
                    border-slate-200
                    bg-slate-50
                    transition-all
                    duration-300
                    group-hover:border-green-300
                    group-hover:bg-green-50
                    dark:border-white/10
                    dark:bg-white/[0.03]
                    dark:group-hover:border-green-500/30
                    dark:group-hover:bg-green-500/10
                  "
                >
                  <FaEnvelope
                    className="
                      text-slate-500
                      transition-colors
                      duration-300
                      group-hover:text-green-600
                      dark:text-gray-400
                      dark:group-hover:text-green-400
                    "
                  />
                </div>

                <div className="min-w-0">
                  <p
                    className="
                      text-xs
                      uppercase
                      tracking-[0.2em]
                      text-slate-500
                      dark:text-gray-600
                    "
                  >
                    Email
                  </p>

                  <p
                    className="
                      mt-1
                      truncate
                      text-sm
                      font-medium
                      text-slate-700
                      transition-colors
                      duration-300
                      group-hover:text-green-600
                      dark:text-gray-300
                      dark:group-hover:text-green-400
                    "
                  >
                    vishalkalawad51@gmail.com
                  </p>
                </div>
              </div>
            </a>

            {/* Phone Card */}
            <a
              href="tel:+917899204605"
              className="
                group
                cursor-none
                rounded-2xl
                border
                border-slate-200
                bg-white
                p-5
                shadow-sm
                transition-all
                duration-300
                hover:border-green-400
                hover:bg-green-50
                hover:-translate-y-1
                dark:border-white/10
                dark:bg-[#111111]
                dark:shadow-none
                dark:hover:border-green-500/30
                dark:hover:bg-green-500/5
              "
            >
              <div className="flex items-center gap-4">
                <div
                  className="
                    flex
                    h-11
                    w-11
                    items-center
                    justify-center
                    rounded-xl
                    border
                    border-slate-200
                    bg-slate-50
                    transition-all
                    duration-300
                    group-hover:border-green-300
                    group-hover:bg-green-50
                    dark:border-white/10
                    dark:bg-white/[0.03]
                    dark:group-hover:border-green-500/30
                    dark:group-hover:bg-green-500/10
                  "
                >
                  <FaPhone
                    className="
                      text-slate-500
                      transition-colors
                      duration-300
                      group-hover:text-green-600
                      dark:text-gray-400
                      dark:group-hover:text-green-400
                    "
                  />
                </div>

                <div>
                  <p
                    className="
                      text-xs
                      uppercase
                      tracking-[0.2em]
                      text-slate-500
                      dark:text-gray-600
                    "
                  >
                    Phone
                  </p>

                  <p
                    className="
                      mt-1
                      text-sm
                      font-medium
                      text-slate-700
                      transition-colors
                      duration-300
                      group-hover:text-green-600
                      dark:text-gray-300
                      dark:group-hover:text-green-400
                    "
                  >
                    +91 7899204605
                  </p>
                </div>
              </div>
            </a>
          </div>
        </div>

        {/* Social Links */}
        <div
          className="
            mt-6
            flex
            flex-wrap
            items-center
            gap-4
            border-t
            border-slate-200
            pt-5
            dark:border-white/10
          "
        >
          <span
            className="
              text-xs
              uppercase
              tracking-[0.2em]
              text-slate-500
              dark:text-gray-600
            "
          >
            Find me
          </span>

          {/* GitHub */}
          <a
            href="https://github.com/vishal071604"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="
              cursor-none
              text-slate-500
              transition
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
            href="https://www.linkedin.com/in/vishal-s-kalawad-1803a6365"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="
              cursor-none
              text-slate-500
              transition
              duration-300
              hover:-translate-y-1
              hover:text-green-600
              dark:text-gray-500
              dark:hover:text-green-400
            "
          >
            <FaLinkedin size={20} />
          </a>

          {/* Availability */}
          <span className="ml-auto flex items-center gap-2">
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
                uppercase
                tracking-[0.15em]
                text-slate-500
                dark:text-gray-600
              "
            >
              Open to opportunities
            </span>
          </span>
        </div>
      </div>
    </section>
  );
}