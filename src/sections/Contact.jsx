import React, { useState, useCallback } from "react";
import { motion } from "framer-motion";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState(null);

  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();
      setStatus("Sending...");
      setTimeout(() => {
        setStatus("Message sent successfully!");
        setForm({ name: "", email: "", message: "" });
        setTimeout(() => setStatus(null), 5000);
      }, 1000);
    },
    [setStatus, setForm]
  );

  return (
    <motion.section
      id="contact"
      className="relative py-20 px-6 flex justify-center overflow-hidden bg-card/50"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, delay: 0.5 }}
    >
      {/* Background effect */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-gradient-glow opacity-20 blur-3xl" />
      </div>

      <div className="max-w-xl w-full">
        <div className="text-center mb-12">
          <motion.span
            className="inline-block px-4 py-1.5 rounded-full text-sm font-mono bg-primary/10 text-primary border border-primary/30 mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            &lt;contact /&gt;
          </motion.span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold gradient-text mb-4">
            Get in Touch
          </h2>
          <p className="text-muted-foreground">
            Have a project in mind? Let's build something amazing together.
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="flex flex-col space-y-6 glass p-8 rounded-xl"
          aria-label="Contact form"
        >
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
              Name
            </label>
            <input
              id="name"
              type="text"
              placeholder="Your Name"
              required
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="w-full p-4 rounded-lg bg-background border border-border focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary text-foreground placeholder:text-muted-foreground transition-all duration-300"
              aria-label="Your Name"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
              Email
            </label>
            <input
              id="email"
              type="email"
              placeholder="your.email@example.com"
              required
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="w-full p-4 rounded-lg bg-background border border-border focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary text-foreground placeholder:text-muted-foreground transition-all duration-300"
              aria-label="Your Email"
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
              Message
            </label>
            <textarea
              id="message"
              placeholder="Tell me about your project..."
              required
              rows={5}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              className="w-full p-4 rounded-lg bg-background border border-border focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary text-foreground placeholder:text-muted-foreground resize-none transition-all duration-300"
              aria-label="Your Message"
            />
          </div>

          <button
            type="submit"
            className="group relative w-full py-4 rounded-full font-semibold text-lg bg-primary text-primary-foreground shadow-lg transition-all duration-300 hover:scale-[1.02] hover:shadow-glow focus:outline-none focus:ring-2 focus:ring-primary overflow-hidden"
          >
            <span className="relative z-10">Send Message</span>
            <div className="absolute inset-0 bg-gradient-to-r from-primary to-primary/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </button>

          {status && (
            <motion.p
              role="alert"
              className="text-center mt-4 text-primary font-semibold p-4 rounded-lg bg-primary/10 border border-primary/30"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
            >
              {status}
            </motion.p>
          )}
        </form>
      </div>
    </motion.section>
  );
};

export default Contact;
