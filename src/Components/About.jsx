import { useState } from "react";

export default function About() {
  const [cursor, setCursor] = useState({
    x: 0,
    y: 0,
    visible: false,
  });

  // Cursor dot follows the mouse anywhere inside About
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
      id="about"
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
      {/* Tiny Cursor Dot */}
      {cursor.visible && (
        <span
          className="
            pointer-events-none
            absolute
            z-50
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
          top-16
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
          bottom-10
          h-64
          w-64
          rounded-full
          bg-green-500/5
          blur-3xl
        "
      />

      {/* Main Content */}
      <div className="relative mx-auto w-full max-w-6xl">

        {/* Section Heading */}
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
              About Me
            </span>
          </div>

          <h2
            className="
              text-4xl
              font-black
              tracking-tight
              text-slate-900
              sm:text-5xl
              dark:text-white
            "
          >
            About Me
            <span className="text-green-500 dark:text-green-400">.</span>
          </h2>

          <p
            className="
              mt-3
              max-w-2xl
              text-base
              leading-7
              text-slate-600
              md:text-lg
              dark:text-gray-400
            "
          >
            A developer focused on building practical products,
            writing clean code, and turning data into useful insights.
          </p>
        </div>

        {/* About Card */}
        <div
          className="
            rounded-2xl
            border
            border-slate-200
            bg-white
            p-6
            shadow-xl
            transition-colors
            duration-300
            md:p-8
            dark:border-white/10
            dark:bg-[#111111]
            dark:shadow-2xl
          "
        >
          {/* Paragraph 1 */}
          <p
            className="
              max-w-5xl
              text-justify
              text-base
              leading-8
              text-slate-600
              md:text-lg
              dark:text-gray-400
            "
          >
            I am a{" "}
            <span className="font-semibold text-slate-900 dark:text-white">
              Computer Science Engineering graduate
            </span>{" "}
            with a strong interest in software development and modern
            web technologies. I specialize in building responsive,
            scalable, and user-friendly applications using the{" "}
            <span className="font-semibold text-green-600 dark:text-green-400">
              MERN STACK
            </span>
            , along with JavaScript, MySQL, and modern frontend
            technologies.
          </p>

          {/* Paragraph 2 */}
          <p
            className="
              mt-5
              max-w-5xl
              text-justify
              text-base
              leading-8
              text-slate-600
              md:text-lg
              dark:text-gray-400
            "
          >
            I enjoy transforming ideas into real-world applications,
            designing clean user experiences, developing REST APIs,
            working with databases, and solving problems through
            efficient and maintainable code. I also have experience
            with{" "}
            <span className="font-semibold text-green-600 dark:text-green-400">
              Python, SQL, Power BI, and MS Excel
            </span>
            , where I analyze data and create meaningful insights.
          </p>

          {/* Paragraph 3 */}
          <p
            className="
              mt-5
              max-w-5xl
              text-justify
              text-base
              leading-8
              text-slate-600
              md:text-lg
              dark:text-gray-400
            "
          >
            I am currently looking for opportunities as a{" "}
            <span className="font-semibold text-green-600 dark:text-green-400">
              Software Development Engineer
            </span>
            ,{" "}
            <span className="font-semibold text-green-600 dark:text-green-400">
              MERN Stack Developer
            </span>{" "}
            or{" "}
            <span className="font-semibold text-green-600 dark:text-green-400">
              Data Analyst
            </span>
            , where I can contribute to real products, collaborate
            with strong teams, and continue growing as a technology
            professional.
          </p>

          {/* Highlights */}
          <div
            className="
              mt-8
              grid
              gap-4
              border-t
              border-slate-200
              pt-7
              md:grid-cols-3
              dark:border-white/10
            "
          >
            {/* Full Stack */}
            <div
              className="
                group
                rounded-xl
                border
                border-slate-200
                bg-slate-50
                p-5
                transition-all
                duration-300
                hover:-translate-y-1
                hover:border-green-400
                hover:bg-green-50
                dark:border-white/10
                dark:bg-white/[0.03]
                dark:hover:border-green-500/30
                dark:hover:bg-green-500/5
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
                Development
              </p>

              <h3
                className="
                  mt-2
                  text-lg
                  font-semibold
                  text-slate-900
                  dark:text-white
                "
              >
                Full Stack
              </h3>

              <p
                className="
                  mt-2
                  text-sm
                  leading-6
                  text-slate-600
                  dark:text-gray-500
                "
              >
                Building modern and scalable web applications with
                React, Node.js, Express.js, and MongoDB.
              </p>
            </div>

            {/* Clean Code */}
            <div
              className="
                group
                rounded-xl
                border
                border-slate-200
                bg-slate-50
                p-5
                transition-all
                duration-300
                hover:-translate-y-1
                hover:border-green-400
                hover:bg-green-50
                dark:border-white/10
                dark:bg-white/[0.03]
                dark:hover:border-green-500/30
                dark:hover:bg-green-500/5
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
                Engineering
              </p>

              <h3
                className="
                  mt-2
                  text-lg
                  font-semibold
                  text-slate-900
                  dark:text-white
                "
              >
                Clean Code
              </h3>

              <p
                className="
                  mt-2
                  text-sm
                  leading-6
                  text-slate-600
                  dark:text-gray-500
                "
              >
                Writing reusable, maintainable, and efficient code
                with practical software engineering practices.
              </p>
            </div>

            {/* Data Insights */}
            <div
              className="
                group
                rounded-xl
                border
                border-slate-200
                bg-slate-50
                p-5
                transition-all
                duration-300
                hover:-translate-y-1
                hover:border-green-400
                hover:bg-green-50
                dark:border-white/10
                dark:bg-white/[0.03]
                dark:hover:border-green-500/30
                dark:hover:bg-green-500/5
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
                Analytics
              </p>

              <h3
                className="
                  mt-2
                  text-lg
                  font-semibold
                  text-slate-900
                  dark:text-white
                "
              >
                Data Insights
              </h3>

              <p
                className="
                  mt-2
                  text-sm
                  leading-6
                  text-slate-600
                  dark:text-gray-500
                "
              >
                Using Python, SQL, Power BI, and MS Excel to analyze
                data and present useful insights.
              </p>
            </div>
          </div>

          {/* Education */}
          <div
            className="
              mt-8
              border-t
              border-slate-200
              pt-7
              dark:border-white/10
            "
          >
            <div className="mb-6 flex items-center gap-3">
              <span className="h-px w-8 bg-green-500 dark:bg-green-400" />

              <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                Education
              </h3>
            </div>

            <div
              className="
                relative
                ml-2
                space-y-7
                border-l
                border-slate-300
                pl-7
                dark:border-white/10
              "
            >
              {/* BE */}
              <div className="relative">
                <span
                  className="
                    absolute
                    -left-[34px]
                    top-1
                    h-3
                    w-3
                    rounded-full
                    border-2
                    border-green-500
                    bg-white
                    dark:border-green-400
                    dark:bg-[#0a0a0a]
                  "
                />

                <div className="flex flex-wrap items-center justify-between gap-2">
                  <span className="text-sm text-slate-500 dark:text-gray-500">
                    2022 – 2026
                  </span>

                  <span
                    className="
                      rounded-full
                      border
                      border-green-500/20
                      bg-green-50
                      px-3
                      py-1
                      text-xs
                      text-green-600
                      dark:bg-green-500/10
                      dark:text-green-400
                    "
                  >
                    CGPA: 7.77
                  </span>
                </div>

                <h4 className="mt-2 text-lg font-semibold text-slate-900 dark:text-white">
                  Bachelor of Engineering
                </h4>

                <p className="mt-1 text-sm text-slate-600 dark:text-gray-500">
                  Computer Science & Engineering
                </p>

                <p className="mt-1 text-sm text-slate-500 dark:text-gray-600">
                  Sri Siddhartha Institute of Technology, Tumakuru
                </p>
              </div>

              {/* PUC */}
              <div className="relative">
                <span
                  className="
                    absolute
                    -left-[34px]
                    top-1
                    h-3
                    w-3
                    rounded-full
                    border-2
                    border-slate-400
                    bg-white
                    dark:border-gray-600
                    dark:bg-[#0a0a0a]
                  "
                />

                <div className="flex flex-wrap items-center justify-between gap-2">
                  <span className="text-sm text-slate-500 dark:text-gray-500">
                    2020 – 2022
                  </span>

                  <span
                    className="
                      rounded-full
                      border
                      border-slate-200
                      bg-slate-100
                      px-3
                      py-1
                      text-xs
                      text-slate-600
                      dark:border-white/10
                      dark:bg-white/5
                      dark:text-gray-400
                    "
                  >
                    70%
                  </span>
                </div>

                <h4 className="mt-2 text-lg font-semibold text-slate-900 dark:text-white">
                  Pre-University
                </h4>

                <p className="mt-1 text-sm text-slate-600 dark:text-gray-500">
                  PCMCS
                </p>

                <p className="mt-1 text-sm text-slate-500 dark:text-gray-600">
                  Prism PU College, Dharwad
                </p>
              </div>

              {/* SSLC */}
              <div className="relative">
                <span
                  className="
                    absolute
                    -left-[34px]
                    top-1
                    h-3
                    w-3
                    rounded-full
                    border-2
                    border-slate-400
                    bg-white
                    dark:border-gray-600
                    dark:bg-[#0a0a0a]
                  "
                />

                <div className="flex flex-wrap items-center justify-between gap-2">
                  <span className="text-sm text-slate-500 dark:text-gray-500">
                    2008 – 2020
                  </span>

                  <span
                    className="
                      rounded-full
                      border
                      border-slate-200
                      bg-slate-100
                      px-3
                      py-1
                      text-xs
                      text-slate-600
                      dark:border-white/10
                      dark:bg-white/5
                      dark:text-gray-400
                    "
                  >
                    72%
                  </span>
                </div>

                <h4 className="mt-2 text-lg font-semibold text-slate-900 dark:text-white">
                  Secondary School
                </h4>

                <p className="mt-1 text-sm text-slate-500 dark:text-gray-600">
                  St. Joseph's High School, Dharwad
                </p>
              </div>
            </div>
          </div>

          {/* Professional Experience */}
          <div
            className="
              mt-8
              border-t
              border-slate-200
              pt-7
              dark:border-white/10
            "
          >
            <div className="mb-6 flex items-center gap-3">
              <span className="h-px w-8 bg-green-500 dark:bg-green-400" />

              <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                Professional Experience
              </h3>
            </div>

            <div
              className="
                rounded-xl
                border
                border-slate-200
                bg-slate-50
                p-6
                transition-all
                duration-300
                hover:border-green-400
                hover:bg-green-50
                dark:border-white/10
                dark:bg-white/[0.03]
                dark:hover:border-green-500/30
                dark:hover:bg-green-500/5
              "
            >
              {/* Experience Header */}
              <div className="flex flex-wrap items-start justify-between gap-4">

                {/* Left Side */}
                <div>
                  <h4 className="text-xl font-semibold text-slate-900 dark:text-white">
                    Associate Web Developer L1
                  </h4>

                  <p className="mt-1 text-sm font-medium text-green-600 dark:text-green-400">
                    Labmentix Pvt. Ltd.
                  </p>
                </div>

                {/* Right Side */}
                <div className="flex flex-col items-end gap-2 text-right">
                  <span
                    className="
                      rounded-full
                      border
                      border-green-500/20
                      bg-green-50
                      px-3
                      py-1
                      text-xs
                      uppercase
                      tracking-wider
                      text-green-600
                      dark:bg-green-500/10
                      dark:text-green-400
                    "
                  >
                    Internship
                  </span>

                  <span className="text-xs text-slate-500 dark:text-gray-500">
                    Aug 5, 2025 – Feb 28, 2026
                  </span>
                </div>
              </div>

              {/* Experience Description */}
              <p
                className="
                  mt-5
                  text-justify
                  text-base
                  leading-7
                  text-slate-600
                  dark:text-gray-400
                "
              >
                Worked on responsive web applications using React.js,
                Node.js, Express.js, MongoDB, JavaScript, HTML, CSS,
                and Tailwind CSS. Built REST APIs, integrated
                databases, fixed bugs, improved application
                performance, and collaborated using Git and GitHub
                while following clean coding and software development
                practices.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
