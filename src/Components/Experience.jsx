import { useState } from "react";

export default function Experience() {
  const [cursor, setCursor] = useState({
    x: 0,
    y: 0,
    visible: false,
  });

  // Cursor follows the mouse
  const handleMouseMove = (e) => {
    const section = e.currentTarget;
    const rect = section.getBoundingClientRect();

    setCursor({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
      visible: true,
    });
  };

  // Hide cursor
  const handleMouseLeave = () => {
    setCursor({
      x: 0,
      y: 0,
      visible: false,
    });
  };

  return (
    <section
      id="experience"
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
      {/* Cursor */}
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
                dark:text-gray-500
              "
            >
              Experience
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
            Professional Experience
            <span className="text-green-500 dark:text-green-400">
              .
            </span>
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
            Professional experience in full-stack web development,
            application development, and modern software engineering
            practices.
          </p>
        </div>

        {/* Experience Card */}
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
            hover:border-green-400
            md:p-8
            dark:border-white/10
            dark:bg-[#111111]
            dark:shadow-2xl
            dark:hover:border-green-500/30
          "
        >

          {/* Experience Header */}
          <div
            className="
              flex
              flex-wrap
              items-start
              justify-between
              gap-4
            "
          >
            {/* Job Information */}
            <div>
              <h3
                className="
                  text-xl
                  font-semibold
                  text-slate-900
                  dark:text-white
                "
              >
                Associate Web Developer L1
              </h3>

              <p
                className="
                  mt-1
                  text-sm
                  font-medium
                  text-green-600
                  dark:text-green-400
                "
              >
                Labmentix Pvt. Ltd.
              </p>
            </div>

            {/* Internship Information */}
            <div
              className="
                flex
                flex-col
                items-end
                gap-2
                text-right
              "
            >
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

              <span
                className="
                  text-xs
                  text-slate-500
                  dark:text-gray-500
                "
              >
                Aug 5, 2025 – Feb 28, 2026
              </span>
            </div>
          </div>

          {/* Professional Overview */}
          <div className="mt-6">
            <h4
              className="
                text-lg
                font-semibold
                text-slate-900
                dark:text-white
              "
            >
              Professional Overview
            </h4>

            <p
              className="
                mt-3
                text-justify
                text-base
                leading-8
                text-slate-600
                md:text-lg
                dark:text-gray-400
              "
            >
              During my internship at{" "}
              <span className="font-semibold text-slate-900 dark:text-white">
                Labmentix Pvt. Ltd.
              </span>
              , I contributed to the development of responsive and
              user-focused web applications while gaining practical
              experience in full-stack development. I worked across
              frontend and backend technologies, developed application
              features, integrated RESTful APIs, managed database
              operations, and participated in debugging and application
              improvement.
            </p>

            <p
              className="
                mt-4
                text-justify
                text-base
                leading-8
                text-slate-600
                dark:text-gray-400
              "
            >
              This experience provided valuable exposure to professional
              software development workflows, version control,
              collaborative development, and writing clean and
              maintainable code. It also strengthened my ability to
              understand project requirements and translate them into
              functional web solutions.
            </p>
          </div>

          {/* Key Responsibilities */}
          <div className="mt-8">
            <h4
              className="
                text-lg
                font-semibold
                text-slate-900
                dark:text-white
              "
            >
              Key Responsibilities
            </h4>

            <ul
              className="
                mt-4
                space-y-3
                text-base
                leading-7
                text-slate-600
                dark:text-gray-400
              "
            >
              <li>
                • Developed responsive and user-friendly web interfaces
                using React.js, JavaScript, HTML, CSS, and Tailwind CSS.
              </li>

              <li>
                • Designed and implemented reusable React components to
                improve application maintainability and consistency.
              </li>

              <li>
                • Developed backend functionality using Node.js and
                Express.js to support application requirements.
              </li>

              <li>
                • Developed and integrated RESTful APIs for efficient
                communication between frontend and backend services.
              </li>

              <li>
                • Worked with MongoDB for database management, data
                storage, retrieval, and application integration.
              </li>

              <li>
                • Integrated frontend applications with backend APIs and
                database services to deliver complete application
                functionality.
              </li>

              <li>
                • Identified, investigated, and resolved application
                issues to improve reliability and user experience.
              </li>

              <li>
                • Applied clean, structured, and maintainable coding
                practices while implementing application features.
              </li>

              <li>
                • Used Git and GitHub for version control, source code
                management, and collaborative development.
              </li>

              <li>
                • Worked with project requirements and development
                workflows in a professional software environment.
              </li>
            </ul>
          </div>

          {/* Technologies Used */}
          <div className="mt-8">
            <h4
              className="
                text-lg
                font-semibold
                text-slate-900
                dark:text-white
              "
            >
              Technologies & Tools
            </h4>

            <div className="mt-4 flex flex-wrap gap-2">

              <span className="rounded-full border border-green-500/20 bg-green-50 px-3 py-1 text-xs text-green-600 dark:bg-green-500/10 dark:text-green-400">
                React.js
              </span>

              <span className="rounded-full border border-green-500/20 bg-green-50 px-3 py-1 text-xs text-green-600 dark:bg-green-500/10 dark:text-green-400">
                JavaScript
              </span>

              <span className="rounded-full border border-green-500/20 bg-green-50 px-3 py-1 text-xs text-green-600 dark:bg-green-500/10 dark:text-green-400">
                Node.js
              </span>

              <span className="rounded-full border border-green-500/20 bg-green-50 px-3 py-1 text-xs text-green-600 dark:bg-green-500/10 dark:text-green-400">
                Express.js
              </span>

              <span className="rounded-full border border-green-500/20 bg-green-50 px-3 py-1 text-xs text-green-600 dark:bg-green-500/10 dark:text-green-400">
                MongoDB
              </span>

              <span className="rounded-full border border-green-500/20 bg-green-50 px-3 py-1 text-xs text-green-600 dark:bg-green-500/10 dark:text-green-400">
                HTML5
              </span>

              <span className="rounded-full border border-green-500/20 bg-green-50 px-3 py-1 text-xs text-green-600 dark:bg-green-500/10 dark:text-green-400">
                CSS3
              </span>

              <span className="rounded-full border border-green-500/20 bg-green-50 px-3 py-1 text-xs text-green-600 dark:bg-green-500/10 dark:text-green-400">
                Tailwind CSS
              </span>

              <span className="rounded-full border border-green-500/20 bg-green-50 px-3 py-1 text-xs text-green-600 dark:bg-green-500/10 dark:text-green-400">
                REST APIs
              </span>

              <span className="rounded-full border border-green-500/20 bg-green-50 px-3 py-1 text-xs text-green-600 dark:bg-green-500/10 dark:text-green-400">
                Git
              </span>

              <span className="rounded-full border border-green-500/20 bg-green-50 px-3 py-1 text-xs text-green-600 dark:bg-green-500/10 dark:text-green-400">
                GitHub
              </span>

            </div>
          </div>

          {/* Professional Growth */}
          <div
            className="
              mt-8
              border-t
              border-slate-200
              pt-7
              dark:border-white/10
            "
          >
            <h4
              className="
                text-lg
                font-semibold
                text-slate-900
                dark:text-white
              "
            >
              Professional Growth
            </h4>

            <p
              className="
                mt-3
                text-justify
                text-base
                leading-7
                text-slate-600
                dark:text-gray-400
              "
            >
              The internship strengthened my foundation in full-stack
              web development and provided practical experience in
              building and maintaining real-world applications. I
              enhanced my skills in frontend development, backend
              services, RESTful APIs, database management, responsive
              UI development, debugging, and version control.
            </p>

            <p
              className="
                mt-4
                text-justify
                text-base
                leading-7
                text-slate-600
                dark:text-gray-400
              "
            >
              Beyond technical skills, the experience improved my
              problem-solving, collaboration, communication, and
              ability to work effectively within a professional
              software development environment.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}