import { motion } from "framer-motion";
import { Rocket, ExternalLink } from "lucide-react";

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

        <div className="max-w-2xl mx-auto">
          <motion.div
            className="glass p-8 rounded-xl border border-border/50 hover:border-secondary/40 transition-all duration-500 group"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            whileHover={{ y: -4 }}
            style={{ boxShadow: 'var(--shadow-md)' }}
          >
            <Rocket className="w-10 h-10 text-secondary mb-4 group-hover:scale-110 transition-transform duration-300" />
            <h3 className="text-xl font-semibold text-foreground mb-3">CNB Code</h3>
            <p className="text-muted-foreground text-base leading-relaxed mb-4">
              Leading the team in solving problems for local businesses and the underlooked citizen because technology is for all.
            </p>
            <a
              href="https://cnbcode.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-secondary hover:text-secondary/80 transition-colors duration-300 font-medium group"
            >
              Visit CNB Code
              <ExternalLink className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </motion.div>
        </div>

        <motion.div
          className="text-center mt-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <p className="text-muted-foreground text-sm">
            Last updated: October 2025
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Now;
