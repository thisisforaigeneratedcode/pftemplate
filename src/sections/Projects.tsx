import React from "react";
import { motion } from "framer-motion";
import projects from "../data/projects";

const Projects = () => (
  <motion.section
    id="projects"
    className="py-20 px-6 max-w-7xl mx-auto"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 1, delay: 0.3 }}
  >
    <div className="text-center mb-16">
      <motion.span
        className="inline-block px-4 py-1.5 rounded-full text-sm font-mono bg-primary/10 text-primary border border-primary/30 mb-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        &lt;projects /&gt;
      </motion.span>
      <motion.h2
        className="text-3xl sm:text-4xl lg:text-5xl font-bold gradient-text mb-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        Featured Projects
      </motion.h2>
      <motion.p
        className="text-muted-foreground max-w-2xl mx-auto"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        Building secure, scalable solutions that make a difference
      </motion.p>
    </div>

    <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      {projects.map(({ name, desc, link, image }, idx) => (
        <motion.a
          key={name}
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="group relative block rounded-xl overflow-hidden bg-card border border-border hover:border-primary/50 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 * idx, duration: 0.5 }}
          aria-label={`Project: ${name}`}
        >
          {/* Image */}
          <div className="relative h-48 overflow-hidden bg-muted">
            <img 
              src={image} 
              alt={`${name} preview`}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent opacity-60" />
          </div>
          
          {/* Content */}
          <div className="p-6">
            <div className="flex items-start justify-between mb-3">
              <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
                {name}
              </h3>
              <svg
                className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-all duration-300 transform group-hover:translate-x-1 group-hover:-translate-y-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                />
              </svg>
            </div>
            
            <p className="text-muted-foreground text-sm leading-relaxed mb-4">{desc}</p>
            
            {/* Tech badge */}
            <div className="flex items-center gap-2">
              <div className="px-3 py-1 rounded-full bg-primary/10 border border-primary/20">
                <span className="text-xs font-mono text-primary">View Project</span>
              </div>
            </div>
          </div>
        </motion.a>
      ))}
    </div>
  </motion.section>
);

export default Projects;
