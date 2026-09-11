import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

import CursorDot from "./CursorDot";
import useCursorDot from "./useCursorDot";

const projects = [
  {
    title: "Cloud Drive Application",
    category: "Full-Stack Web Application",
    description:
      "A full-stack cloud storage application built with React, Node.js, Express.js, MongoDB, and ImageKit, featuring secure authentication, file upload, file viewing, and file deletion.",
    technologies: [
      "React",
      "Node.js",
      "Express.js",
      "MongoDB",
      "ImageKit",
    ],
    github: "https://github.com/vishal071604/DriveApp",
    live: "https://drive-app-beta.vercel.app/",
  },

  {
    title: "Intelligent Crowdfunding System",
    category: "ML & Blockchain Platform",
    description:
      "An intelligent full-stack crowdfunding platform built with the MERN stack, integrating Machine Learning for suspicious donation detection and SHA256 transaction hashing for enhanced security and transparency. The system supports secure authentication, campaign management, donations, donation tracking, and admin anomaly monitoring.",
    technologies: [
      "React",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Python",
      "Flask",
      "Scikit-learn",
      "SHA256",
    ],
    github:
      "https://github.com/vishal071604/Crowdfunding-System",
    live: "https://crowdfunding-system.vercel.app/",
  },

  {
    title: "CreateX",
    category: "Social Media Application",
    description:
      "A full-stack social media web application developed using React, Node.js, Express.js, and MongoDB, featuring secure user authentication, post creation, image uploads, dynamic feeds, and like functionality.",
    technologies: [
      "React",
      "Node.js",
      "Express.js",
      "MongoDB",
    ],
    github: "https://github.com/vishal071604/CreateX",
    live: "https://create-x-psi.vercel.app/",
  },

  {
    title: "NoteKeeper",
    category: "Note Management Application",
    description:
      "A full-stack note management application that enables users to securely create, edit, search, pin, delete, restore, and permanently manage their notes through a clean and responsive interface.",
    technologies: [
      "React",
      "Node.js",
      "Express.js",
      "MongoDB",
    ],
    github: "https://github.com/vishal071604/FileKeeper",
    live: "https://file-keeper-brown.vercel.app/",
  },
];

export default function Projects() {
  const { position, moveCursor, hideCursor } = useCursorDot();

  return (
    <section
      id="projects"
      onMouseMove={moveCursor}
      onMouseLeave={hideCursor}
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
        md:py-14
        dark:border-white/10
        dark:bg-[#0a0a0a]
        dark:text-white
      "
    >
      {/* Cursor */}
      <CursorDot position={position} />

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
      <div className="relative mx-auto max-w-6xl">

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
              Projects
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
            Featured Projects
            <span className="text-green-500">.</span>
          </h2>

          <p
            className="
              mt-3
              max-w-3xl
              leading-7
              text-slate-600
              md:text-lg
              dark:text-gray-400
            "
          >
            A selection of projects demonstrating my experience
            in full-stack development, machine learning,
            database management, and modern web technologies.
          </p>
        </div>

        {/* Project Cards */}
        <div
          className="
            grid
            gap-5
            md:grid-cols-2
            lg:grid-cols-3
          "
        >
          {projects.map((project, index) => (
            <article
              key={project.title}
              className="
                flex
                flex-col
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
                dark:border-white/10
                dark:bg-[#111111]
                dark:hover:border-green-500/30
              "
            >
              {/* Number + Category */}
              <div className="flex justify-between gap-3">
                <span
                  className="
                    font-mono
                    text-xs
                    font-semibold
                    text-green-600
                    dark:text-green-400
                  "
                >
                  0{index + 1}
                </span>

                <span
                  className="
                    text-right
                    text-[10px]
                    uppercase
                    tracking-[0.15em]
                    text-slate-500
                    dark:text-gray-500
                  "
                >
                  {project.category}
                </span>
              </div>

              {/* Project Title */}
              <h3
                className="
                  mt-5
                  text-xl
                  font-bold
                  text-slate-900
                  dark:text-white
                "
              >
                {project.title}
              </h3>

              {/* Description */}
              <p
                className="
                  mt-4
                  flex-1
                  text-sm
                  leading-7
                  text-slate-600
                  dark:text-gray-400
                "
              >
                {project.description}
              </p>

              {/* Technologies */}
              <div className="mt-6 flex flex-wrap gap-2">
                {project.technologies.map((technology) => (
                  <span
                    key={technology}
                    className="
                      rounded-full
                      border
                      border-slate-200
                      bg-slate-50
                      px-2.5
                      py-1
                      text-[11px]
                      text-slate-600
                      dark:border-white/10
                      dark:bg-white/[0.03]
                      dark:text-gray-400
                    "
                  >
                    {technology}
                  </span>
                ))}
              </div>

              {/* Project Links */}
              <div
                className="
                  mt-7
                  flex
                  gap-4
                  border-t
                  border-slate-200
                  pt-5
                  dark:border-white/10
                "
              >
                {/* GitHub */}
                {project.github &&
                  !project.github.startsWith("YOUR_") && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="
                        inline-flex
                        items-center
                        gap-2
                        text-sm
                        text-slate-700
                        transition
                        hover:text-green-600
                        dark:text-gray-300
                        dark:hover:text-green-400
                      "
                    >
                      <FaGithub size={16} />
                      GitHub
                    </a>
                  )}

                {/* Live Demo */}
                {project.live &&
                  !project.live.startsWith("YOUR_") && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noreferrer"
                      className="
                        inline-flex
                        items-center
                        gap-2
                        text-sm
                        text-slate-700
                        transition
                        hover:text-green-600
                        dark:text-gray-300
                        dark:hover:text-green-400
                      "
                    >
                      <FaExternalLinkAlt size={13} />
                      Live Demo
                    </a>
                  )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

