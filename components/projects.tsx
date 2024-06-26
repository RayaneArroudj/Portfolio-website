"use client";
import useData from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import { motion } from "framer-motion";
import React from "react";
import Project from "./project";
import SectionHeading from "./section-heading";

export default function Projects() {
  const { ref } = useSectionInView("Projects", 0.5);
  const { projectsData } = useData();

  return (
    <motion.section
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      ref={ref}
      id="projects"
      className="scroll-mt-28 mb-28"
    >
      <SectionHeading>Mes projets</SectionHeading>
      <div>
        {projectsData.map((project, index) => (
          <React.Fragment key={index}>
            <Project {...project} />
          </React.Fragment>
        ))}
      </div>
    </motion.section>
  );
}
