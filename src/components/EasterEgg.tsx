import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Terminal } from "lucide-react";

const EasterEgg = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [sequence, setSequence] = useState<string[]>([]);
  
  const konamiCode = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      const newSequence = [...sequence, e.key].slice(-10);
      setSequence(newSequence);

      if (JSON.stringify(newSequence) === JSON.stringify(konamiCode)) {
        setIsVisible(true);
        setSequence([]);
        setTimeout(() => setIsVisible(false), 8000);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [sequence]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="fixed inset-0 bg-background/95 backdrop-blur-lg z-[100] flex items-center justify-center p-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="glass max-w-2xl w-full rounded-xl p-8 border border-primary/50"
            initial={{ scale: 0.8, y: 50 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.8, y: 50 }}
            style={{ boxShadow: 'var(--shadow-glow)' }}
          >
            <div className="flex items-center gap-4 mb-6">
              <Terminal className="w-12 h-12 text-primary" />
              <div>
                <h2 className="text-2xl font-bold text-primary">You found the secret!</h2>
                <p className="text-sm text-muted-foreground">Konami Code Master Detected</p>
              </div>
            </div>

            <div className="bg-card/50 rounded-lg p-6 border border-border/50 mb-6 font-mono text-sm">
              <div className="text-primary mb-2">$ whoami</div>
              <div className="text-foreground/80 mb-4">brian@cnbcode.com</div>
              
              <div className="text-primary mb-2">$ cat secret_message.txt</div>
              <div className="text-foreground/80 leading-relaxed">
                <p className="mb-3">Hey there, fellow developer!</p>
                <p className="mb-3">
                  If you're seeing this, you either know the Konami Code or you're really curious about my work. Either way, I like your style.
                </p>
                <p className="mb-3">
                  I believe the best solutions come from curiosity, experimentation, and a bit of fun. That's how I approach every project — whether it's building security tools, automation scripts, or just exploring what's possible.
                </p>
                <p className="text-secondary font-semibold">
                  Let's build something awesome together.
                </p>
              </div>
            </div>

            <div className="flex flex-wrap gap-3">
              <a
                href="https://cnbcode.com"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-2 rounded-lg bg-primary text-primary-foreground font-semibold transition-all duration-300 hover:scale-105"
              >
                Visit CNB Code
              </a>
              <a
                href="https://github.com/guy-with-a-cool-terminal"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-2 rounded-lg border border-primary text-primary font-semibold transition-all duration-300 hover:bg-primary/10"
              >
                GitHub
              </a>
              <button
                onClick={() => setIsVisible(false)}
                className="px-6 py-2 rounded-lg border border-border text-muted-foreground font-semibold transition-all duration-300 hover:text-foreground"
              >
                Close
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default EasterEgg;
