import React from "react";
import { IconArrow } from "./icons.jsx";
import { getIconComponent } from "../utils/iconMap.jsx";

const TILE_BG = [
  "from-[#1E3A5F] via-[#2C4F7C] to-[#162C49]",
  "from-[#162C49] via-[#1E3A5F] to-[#334155]",
  "from-[#2C4F7C] via-[#1E3A5F] to-[#162C49]",
];

export default function ProjectCard({ project, index }) {
  const ProjectIcon = getIconComponent(project.icon);

  return (
    <article
      className="
        group
        bg-white
        border
        border-slate-200
        rounded-2xl
        overflow-hidden
        shadow-sm
        hover:shadow-xl
        hover:border-[#1E3A5F]
        transition-all
        duration-300
        flex
        flex-col
      "
    >
      <div className="relative h-56 overflow-hidden flex items-center justify-center">
        {project.image ? (
          <img
            src={project.image}
            alt={project.title}
            className="
              w-full
              h-full
              object-cover
              transition-transform
              duration-700
              group-hover:scale-105
            "
          />
        ) : (
          <div
            className={
              "absolute inset-0 bg-gradient-to-br " +
              TILE_BG[index % TILE_BG.length]
            }
          >
            <div className="absolute inset-0 bg-black/10" />

            <div className="absolute top-0 left-0 w-24 h-24 bg-white/10 rounded-full blur-2xl" />
            <div className="absolute bottom-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl" />

            <ProjectIcon
              className="
                w-14
                h-14
                text-white
                relative
                z-10
                transition-transform
                duration-500
                group-hover:scale-110
              "
            />
          </div>
        )}
      </div>

      <div className="p-6 flex flex-col flex-1">
        <span
          className="
            self-start
            text-xs
            font-medium
            text-[#1E3A5F]
            bg-slate-50
            border
            border-slate-200
            px-3
            py-1
            rounded-full
          "
        >
          {project.category}
        </span>

        <h3
          className="
            text-xl
            font-bold
            text-[#1E3A5F]
            mt-4
            mb-3
            leading-relaxed
          "
        >
          {project.title}
        </h3>

        <p
          className="
            text-slate-600
            text-sm
            leading-7
            mb-6
            flex-1
          "
        >
          {project.body}
        </p>

        <div className="border-t border-slate-100 pt-4">
          <a
            href={`/projects/${project.id || "#"}`}
            className="
              inline-flex
              items-center
              gap-2
              text-sm
              font-medium
              text-[#1E3A5F]
              hover:text-[#162C49]
              transition-colors
            "
          >
            عرض تفاصيل المشروع

            <IconArrow
              className="
                w-4
                h-4
                transition-transform
                duration-300
                group-hover:-translate-x-1
              "
            />
          </a>
        </div>
      </div>
    </article>
  );
}