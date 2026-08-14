import { FaGithub } from "react-icons/fa";
import CursorDot from "./CursorDot";
import useCursorDot from "./useCursorDot";

const projects = [
  { title: "Cloud Drive Application", category: "Storage & Authentication", description: "A secure cloud storage application where users can upload, organize, preview, and manage files with authentication and cloud storage.", technologies: ["React", "Node.js", "MongoDB", "Tailwind CSS"], github: "https://github.com/vishal071604/DriveApp" },
  { title: "Notes Dashboard", category: "Productivity Application", description: "A responsive notes management application with CRUD operations, search, pinning, and user authentication.", technologies: ["React", "Express", "MongoDB", "Tailwind CSS"], github: "https://github.com/vishal071604/FileKeeper" },
  { title: "Crowdfunding System", category: "Community Platform", description: "A crowdfunding platform for creating campaigns, tracking donations, managing users, and supporting secure transactions.", technologies: ["React", "Node.js", "MongoDB", "Express", "Tailwind CSS"], github: "https://github.com/vishal071604/Crowdfunding-System" },
];

export default function Projects() {
  const { position, moveCursor, hideCursor } = useCursorDot();

  return (
    <section id="projects" onMouseMove={moveCursor} onMouseLeave={hideCursor} className="relative overflow-hidden border-b border-slate-200 bg-white px-6 py-12 text-slate-900 cursor-none md:py-14 dark:border-white/10 dark:bg-[#0a0a0a] dark:text-white">
      <CursorDot position={position} />
      <div className="relative mx-auto max-w-6xl">
        <p className="text-xs uppercase tracking-[0.2em] text-slate-500 dark:text-gray-600">Projects</p>
        <h2 className="mt-3 text-4xl font-black sm:text-5xl">Featured Projects<span className="text-green-500">.</span></h2>
        <p className="mt-3 max-w-3xl leading-7 text-slate-600 md:text-lg dark:text-gray-400">A selection of projects where I applied full-stack development, database management, and modern web technologies to solve practical problems.</p>
        <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => <article key={project.title} className="flex flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-xl transition hover:-translate-y-1 hover:border-green-400 dark:border-white/10 dark:bg-[#111111]">
            <div className="flex justify-between gap-3"><span className="font-mono text-xs font-semibold text-green-600">0{index + 1}</span><span className="text-right text-[10px] uppercase tracking-[0.15em] text-slate-500">{project.category}</span></div>
            <h3 className="mt-5 text-xl font-bold">{project.title}</h3><p className="mt-4 flex-1 text-sm leading-7 text-slate-600 dark:text-gray-500">{project.description}</p>
            <div className="mt-6 flex flex-wrap gap-2">{project.technologies.map((technology) => <span key={technology} className="rounded-full border border-slate-200 bg-slate-50 px-2.5 py-1 text-[11px] text-slate-600 dark:border-white/10 dark:bg-white/[0.03] dark:text-gray-400">{technology}</span>)}</div>
            <a href={project.github} target="_blank" rel="noreferrer" className="mt-7 inline-flex items-center gap-2 border-t border-slate-200 pt-5 text-sm hover:text-green-600 dark:border-white/10 dark:hover:text-green-400"><FaGithub size={16} />GitHub</a>
          </article>)}
        </div>
      </div>
    </section>
  );
}
