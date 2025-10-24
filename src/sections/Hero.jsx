import { motion } from "framer-motion";

const Hero = () => (
  <motion.section
    id="hero"
    className="relative flex flex-col items-center justify-center text-center flex-grow mt-16 px-6 overflow-hidden"
    style={{ minHeight: "calc(100vh - 64px)" }}
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.9 }}
  >
    {/* Background glow effect */}
    <div className="absolute inset-0 -z-10">
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-gradient-glow opacity-40 blur-3xl animate-float" />
    </div>

    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="mb-4"
    >
      <span className="inline-block px-4 py-1.5 rounded-full text-sm font-mono bg-primary/10 text-primary border border-primary/30 glow-border">
        &lt;developer /&gt;
      </span>
    </motion.div>

    <motion.h2
      className="text-5xl sm:text-6xl lg:text-7xl font-extrabold leading-tight mb-6 max-w-4xl"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.3 }}
    >
      Hello, I'm{" "}
      <span className="gradient-text glow-text">Brian Njuguna</span>
    </motion.h2>

    <motion.p
      className="text-lg sm:text-xl lg:text-2xl max-w-3xl mb-10 leading-relaxed text-muted-foreground"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.4 }}
    >
      Software engineer passionate about{" "}
      <span className="text-primary font-semibold">backend development</span>,{" "}
      <span className="text-primary font-semibold">cybersecurity</span>, and building secure,
      scalable systems.
    </motion.p>

    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.5 }}
      className="flex flex-col sm:flex-row gap-4 mb-12"
    >
      <a
        href="#projects"
        className="group relative inline-flex items-center justify-center px-8 sm:px-10 py-3 sm:py-4 rounded-full font-semibold text-lg bg-primary text-primary-foreground shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-glow focus:outline-none focus:ring-2 focus:ring-primary overflow-hidden"
      >
        <span className="relative z-10">Explore My Projects</span>
        <div className="absolute inset-0 bg-gradient-to-r from-primary to-primary/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </a>
      
      <a
        href="#contact"
        className="inline-flex items-center justify-center px-8 sm:px-10 py-3 sm:py-4 rounded-full font-semibold text-lg border-2 border-primary text-primary hover:bg-primary/10 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary"
      >
        Get in Touch
      </a>
    </motion.div>

    <motion.p
      className="max-w-3xl text-base sm:text-lg leading-relaxed text-muted-foreground"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6, delay: 0.6 }}
    >
      Currently diving deep into the{" "}
      <span className="text-foreground font-medium">ALX backend program</span> while enhancing my
      skills in cybersecurity and open-source contributions.
    </motion.p>

    {/* Decorative elements */}
    <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex gap-2">
      {[...Array(3)].map((_, i) => (
        <motion.div
          key={i}
          className="w-1.5 h-1.5 rounded-full bg-primary/50"
          animate={{
            y: [0, -10, 0],
            opacity: [0.3, 1, 0.3],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            delay: i * 0.2,
          }}
        />
      ))}
    </div>
  </motion.section>
);

export default Hero;
