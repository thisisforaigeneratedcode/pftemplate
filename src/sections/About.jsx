import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";

// Narrative terminal commands
const commands = [
  {
    cmdText: "boot brianOS...",
    output: "> Initializing personality modules...",
  },
  {
    cmdText: "cat about.txt",
    output:
      "> I'm Brian Njuguna — a backend engineer, cybersecurity enthusiast, and open source contributor. I build secure, scalable systems that don't just function — they endure.",
  },
  {
    cmdText: "cat philosophy.txt",
    output:
      "> Security isn't a feature. It's the foundation.\n> Speed matters, but resilience lasts longer.\n> Open source isn't a trend — it's a trust contract.",
  },
  {
    cmdText: "cat mission.txt",
    output:
      "> To engineer robust systems.\n> To contribute to open-source tools that empower.\n> To educate and inspire through community-driven innovation.",
  },
  {
    cmdText: "cat services.txt",
    output: [
      "🔐 Secure API & backend architecture",
      "🧠 System design & scalability consulting",
      "🛡️ Security reviews & threat modeling",
      "⚙️ CLI tools & dev automation workflows",
    ],
  },
  {
    cmdText: "cat skills.txt",
    output: [
      "Node.js",
      "Python",
      "Shell Scripting",
      "Express",
      "PostgreSQL",
      "MongoDB",
      "Linux",
      "Git & GitHub",
      "Cybersecurity Practices",
    ],
  },
  {
    cmdText: "cat final_thoughts.txt",
    output:
      "> If you're building for scale, for trust, or for something bigger than yourself...\n> Let's talk.",
  },
];

// Typing effect
const TypingCommand = ({ command, onComplete, paused }) => {
  const [typed, setTyped] = useState("");
  const idx = useRef(0);
  const cursorVisible = useRef(true);

  useEffect(() => {
    const blink = setInterval(() => {
      cursorVisible.current = !cursorVisible.current;
      setTyped((t) => t); // re-render
    }, 500);
    return () => clearInterval(blink);
  }, []);

  useEffect(() => {
    if (paused) return;
    const typer = setInterval(() => {
      if (idx.current < command.length) {
        setTyped((t) => t + command[idx.current]);
        idx.current++;
      } else {
        clearInterval(typer);
        setTimeout(onComplete, 400);
      }
    }, 45);
    return () => clearInterval(typer);
  }, [command, onComplete, paused]);

  return (
    <p className="text-green-400 font-mono text-sm sm:text-base">
      <span className="text-primary font-semibold">brian@bastion:~$</span> {typed}
      <span className="inline-block ml-1 text-primary animate-pulse">
        {cursorVisible.current ? "▋" : "\u00A0"}
      </span>
    </p>
  );
};

const About = () => {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);
  const containerRef = useRef();

  const next = () => setCurrent((c) => Math.min(c + 1, commands.length));
  const skipAll = () => setCurrent(commands.length);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setPaused(!entry.isIntersecting),
      { threshold: 0.1 }
    );
    if (containerRef.current) observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="about"
      className="bg-background text-foreground min-h-screen py-20 px-6 font-mono"
    >
      <div className="text-center mb-12">
        <motion.span
          className="inline-block px-4 py-1.5 rounded-full text-sm font-mono bg-primary/10 text-primary border border-primary/30 mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          &lt;about /&gt;
        </motion.span>
      </div>

      <div
        ref={containerRef}
        className="max-w-4xl mx-auto glass rounded-xl overflow-hidden shadow-lg border border-border glow-border"
      >
        {/* Terminal header */}
        <div className="flex space-x-2 items-center bg-gradient-to-r from-card to-card/80 py-3 px-4 border-b border-border">
          <span className="w-3 h-3 bg-red-500 rounded-full hover:bg-red-400 transition-colors cursor-pointer"></span>
          <span className="w-3 h-3 bg-yellow-500 rounded-full hover:bg-yellow-400 transition-colors cursor-pointer"></span>
          <span className="w-3 h-3 bg-green-500 rounded-full hover:bg-green-400 transition-colors cursor-pointer"></span>
          <span className="ml-3 text-muted-foreground text-sm font-medium">brian@bastion:~</span>
        </div>

        {/* Terminal body */}
        <div className="p-6 sm:p-8 space-y-4 bg-gradient-to-br from-card via-card to-card/80">
          <h2 className="text-primary text-2xl sm:text-3xl font-bold flex items-center gap-2">
            <span>🖥️</span> Terminal — Accessing Brian Njuguna
          </h2>

          {commands.slice(0, current + 1).map((line, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: i * 0.1 }}
            >
              {i === current ? (
                <TypingCommand
                  command={line.cmdText}
                  onComplete={next}
                  paused={paused}
                />
              ) : (
                <>
                  <p className="text-green-400 font-mono text-sm sm:text-base">
                    <span className="text-primary font-semibold">brian@bastion:~$</span>{" "}
                    {line.cmdText}
                  </p>
                  <motion.div
                    className="text-foreground/90 font-mono mt-2 pl-4 whitespace-pre-line"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                  >
                    {Array.isArray(line.output) ? (
                      <ul className="grid sm:grid-cols-2 gap-x-4 gap-y-2 pl-2 text-sm">
                        {line.output.map((o, idx) => (
                          <motion.li
                            key={idx}
                            className="bg-primary/5 border border-primary/20 px-3 py-2 rounded-lg text-foreground hover:bg-primary/10 hover:border-primary/40 transition-all duration-300 cursor-default"
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: idx * 0.05 }}
                          >
                            {o}
                          </motion.li>
                        ))}
                      </ul>
                    ) : (
                      <p className="text-muted-foreground leading-relaxed">{line.output}</p>
                    )}
                  </motion.div>
                </>
              )}
            </motion.div>
          ))}

          {/* Progress & Controls */}
          <div className="flex flex-wrap gap-3 justify-between items-center pt-6 border-t border-border/50">
            {current < commands.length && (
              <button
                onClick={next}
                className="group px-6 py-2.5 rounded-full font-mono text-sm transition-all duration-300 bg-primary text-primary-foreground hover:scale-105 hover:shadow-glow focus:outline-none focus:ring-2 focus:ring-primary"
              >
                Run Next Command →
              </button>
            )}
            {current < commands.length && (
              <button
                onClick={skipAll}
                className="text-xs text-muted-foreground hover:text-primary transition-colors ml-4 underline-offset-4 hover:underline"
              >
                Skip All
              </button>
            )}
            <div className="flex items-center gap-2 ml-auto">
              <div className="flex gap-1">
                {commands.map((_, i) => (
                  <div
                    key={i}
                    className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
                      i <= current ? "bg-primary scale-110" : "bg-border"
                    }`}
                  />
                ))}
              </div>
              <p className="text-xs text-muted-foreground font-mono">
                {current + 1}/{commands.length}
              </p>
            </div>
          </div>

          {/* Final CTA */}
          {current === commands.length && (
            <motion.div
              className="text-center pt-8 border-t border-border/50 mt-6"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <a
                href="https://docs.google.com/document/d/1AzpAenefivF0MeBmlpGmeKgM94KQJhirmFFajVDQzu8/edit?usp=sharing"
                className="group inline-block relative px-8 py-3 rounded-full font-semibold transition-all duration-300 bg-primary text-primary-foreground hover:scale-105 hover:shadow-glow focus:outline-none focus:ring-2 focus:ring-primary overflow-hidden"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="relative z-10 flex items-center gap-2">
                  View My CV 📄
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-primary to-primary/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </a>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
};

export default About;
