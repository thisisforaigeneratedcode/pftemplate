import { motion } from "framer-motion";
import { Sparkles, BookOpen, Rocket } from "lucide-react";

const nowData = {
  currentWork: "Building production apps at CNB Code - payment systems, parental controls & enterprise solutions",
  learning: "ALX Backend Program - Advanced API design, database optimization & cloud infrastructure",
  building: "Aegis DNS platform, M-Pesa payment wrapper & fullstack client applications"
};

const Now = () => {
  return (
    <section className="bg-gradient-subtle py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="inline-block px-4 py-1.5 rounded-full text-sm bg-secondary/10 text-secondary border border-secondary/30 mb-4">
            Right Now
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            What I'm <span className="text-secondary">Currently Focused On</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          <motion.div
            className="glass p-6 rounded-xl border border-border/50 hover:border-secondary/40 transition-all duration-500 group"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            whileHover={{ y: -4 }}
            style={{ boxShadow: 'var(--shadow-md)' }}
          >
            <Rocket className="w-8 h-8 text-secondary mb-4 group-hover:scale-110 transition-transform duration-300" />
            <h3 className="text-lg font-semibold text-foreground mb-2">Working On</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              {nowData.currentWork}
            </p>
          </motion.div>

          <motion.div
            className="glass p-6 rounded-xl border border-border/50 hover:border-primary/40 transition-all duration-500 group"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            whileHover={{ y: -4 }}
            style={{ boxShadow: 'var(--shadow-md)' }}
          >
            <BookOpen className="w-8 h-8 text-primary mb-4 group-hover:scale-110 transition-transform duration-300" />
            <h3 className="text-lg font-semibold text-foreground mb-2">Learning</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              {nowData.learning}
            </p>
          </motion.div>

          <motion.div
            className="glass p-6 rounded-xl border border-border/50 hover:border-secondary/40 transition-all duration-500 group"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            whileHover={{ y: -4 }}
            style={{ boxShadow: 'var(--shadow-md)' }}
          >
            <Sparkles className="w-8 h-8 text-secondary mb-4 group-hover:scale-110 transition-transform duration-300" />
            <h3 className="text-lg font-semibold text-foreground mb-2">Building</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              {nowData.building}
            </p>
          </motion.div>
        </div>

        <motion.div
          className="text-center mt-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <p className="text-muted-foreground text-sm mb-2">
            Last updated: October 2025
          </p>
          <a
            href="https://cnbcode.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-secondary hover:text-secondary/80 transition-colors duration-300 text-sm font-medium group"
          >
            Visit CNB Code
            <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Now;
