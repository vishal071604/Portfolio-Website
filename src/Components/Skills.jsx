import { useState } from "react";

import {
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
  FaPython,
  FaGitAlt,
  FaGithub,
  FaChartBar,
  FaFileExcel,
} from "react-icons/fa";

import {
  SiJavascript,
  SiTailwindcss,
  SiMongodb,
  SiMysql,
  SiExpress,
} from "react-icons/si";

export default function Skills() {
  const [cursor, setCursor] = useState({
    x: 0,
    y: 0,
    visible: false,
  });

  // Cursor dot follows mouse anywhere inside Skills
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

  const skillCategories = [
    {
      title: "Frontend Development",
      description:
        "Building responsive and interactive user interfaces.",
      skills: [
        {
          name: "HTML5",
          icon: <FaHtml5 className="text-3xl text-orange-500" />,
        },
        {
          name: "CSS3",
          icon: <FaCss3Alt className="text-3xl text-blue-500" />,
        },
        {
          name: "Tailwind CSS",
          icon: (
            <SiTailwindcss className="text-3xl text-cyan-400" />
          ),
        },
        {
          name: "JavaScript",
          icon: (
            <SiJavascript className="text-3xl text-yellow-400" />
          ),
        },
        {
          name: "React.js",
          icon: <FaReact className="text-3xl text-sky-400" />,
        },
      ],
    },

    {
      title: "Backend & Databases",
      description:
        "Developing APIs and managing application databases.",
      skills: [
        {
          name: "Node.js",
          icon: <FaNodeJs className="text-3xl text-green-500" />,
        },
        {
          name: "Express.js",
          icon: (
            <SiExpress className="text-3xl text-slate-700 dark:text-gray-300" />
          ),
        },
        {
          name: "MongoDB",
          icon: <SiMongodb className="text-3xl text-green-500" />,
        },
        {
          name: "MySQL",
          icon: <SiMysql className="text-3xl text-blue-500" />,
        },
      ],
    },

    {
      title: "Data Analytics & Tools",
      description:
        "Analyzing data and working with essential developer tools.",
      skills: [
        {
          name: "Python",
          icon: <FaPython className="text-3xl text-yellow-400" />,
        },
        {
          name: "Microsoft Excel",
          icon: (
            <FaFileExcel className="text-3xl text-green-500" />
          ),
        },
        {
          name: "Power BI",
          icon: (
            <FaChartBar className="text-3xl text-yellow-500" />
          ),
        },
        {
          name: "Git",
          icon: <FaGitAlt className="text-3xl text-orange-500" />,
        },
        {
          name: "GitHub",
          icon: (
            <FaGithub className="text-3xl text-slate-700 dark:text-gray-300" />
          ),
        },
      ],
    },
  ];

  return (
    <section
      id="skills"
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
          bottom-0
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
              Skills
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
            Technical Skills
            <span className="text-green-500 dark:text-green-400">.</span>
          </h2>

          <p
            className="
              mt-3
              max-w-3xl
              text-base
              leading-7
              text-slate-600
              md:text-lg
              dark:text-gray-400
            "
          >
            My technical toolkit combines modern frontend and
            backend technologies with databases, programming
            languages, analytics, and development tools.
          </p>
        </div>

        {/* Skill Categories */}
        <div className="grid gap-5 md:grid-cols-3">
          {skillCategories.map((category) => (
            <div
              key={category.title}
              className="
                group
                rounded-2xl
                border
                border-slate-200
                bg-white
                p-6
                shadow-xl
                transition-all
                duration-300
                hover:-translate-y-1
                hover:border-green-400
                hover:shadow-[0_15px_40px_rgba(34,197,94,0.08)]
                dark:border-white/10
                dark:bg-[#111111]
                dark:shadow-xl
                dark:hover:border-green-500/30
                dark:hover:bg-[#121212]
              "
            >
              {/* Category Title */}
              <div className="mb-6">
                <h3
                  className="
                    text-xl
                    font-bold
                    text-slate-900
                    dark:text-white
                  "
                >
                  {category.title}
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
                  {category.description}
                </p>
              </div>

              {/* Skills */}
              <div className="space-y-3">
                {category.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="
                      group/skill
                      flex
                      items-center
                      gap-4
                      rounded-xl
                      border
                      border-slate-200
                      bg-slate-50
                      p-4
                      transition-all
                      duration-300
                      hover:translate-x-1
                      hover:border-green-400
                      hover:bg-green-50
                      dark:border-white/10
                      dark:bg-white/[0.02]
                      dark:hover:border-green-500/30
                      dark:hover:bg-green-500/5
                    "
                  >
                    <div
                      className="
                        flex
                        h-10
                        w-10
                        flex-shrink-0
                        items-center
                        justify-center
                        rounded-lg
                        border
                        border-slate-200
                        bg-white
                        transition-all
                        duration-300
                        group-hover/skill:border-green-300
                        group-hover/skill:bg-green-50
                        dark:border-white/10
                        dark:bg-white/[0.03]
                        dark:group-hover/skill:border-green-500/20
                        dark:group-hover/skill:bg-green-500/5
                      "
                    >
                      {skill.icon}
                    </div>

                    <span
                      className="
                        text-sm
                        font-medium
                        text-slate-700
                        transition-colors
                        duration-300
                        group-hover/skill:text-green-600
                        dark:text-gray-300
                        dark:group-hover/skill:text-green-400
                      "
                    >
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Skills Summary */}
        <div
          className="
            mt-6
            flex
            flex-wrap
            items-center
            gap-x-5
            gap-y-2
            border-t
            border-slate-200
            pt-5
            text-xs
            uppercase
            tracking-[0.15em]
            text-slate-500
            dark:border-white/10
            dark:text-gray-600
          "
        >
          <span>Frontend</span>
          <span className="text-green-500">•</span>

          <span>Backend</span>
          <span className="text-green-500">•</span>

          <span>Databases</span>
          <span className="text-green-500">•</span>

          <span>Data Analytics</span>
          <span className="text-green-500">•</span>

          <span>Developer Tools</span>
        </div>
      </div>
    </section>
  );
}