import React, { useState, useCallback } from "react";
import { motion } from "framer-motion";
import { MessageCircle, Mail, Send } from "lucide-react";

interface FormState {
  name: string;
  email: string;
  message: string;
}

const Contact = () => {
  const [form, setForm] = useState<FormState>({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<string | null>(null);

  const handleWhatsApp = useCallback(() => {
    const phoneNumber = "254114399034";
    const message = `Hi Brian, I'd like to discuss a project with you.`;
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappURL, "_blank");
  }, []);

  const handleSubmit = useCallback(
    (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      setStatus("Sending...");
      setTimeout(() => {
        setStatus("Message sent successfully!");
        setForm({ name: "", email: "", message: "" });
        setTimeout(() => setStatus(null), 5000);
      }, 1000);
    },
    []
  );

  return (
    <motion.section
      id="contact"
      className="relative py-12 sm:py-20 px-4 sm:px-6 overflow-hidden bg-card/30"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, delay: 0.5 }}
    >
      {/* Subtle background effect */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-gradient-glow opacity-10 blur-3xl" />
      </div>

      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8 sm:mb-12">
          <motion.span
            className="inline-block px-4 py-1.5 rounded-full text-sm font-mono bg-primary/10 text-primary border border-primary/20 mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            &lt;contact /&gt;
          </motion.span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold gradient-text mb-3">
            Let's Work Together
          </h2>
          <p className="text-muted-foreground text-sm sm:text-base max-w-2xl mx-auto">
            Have a project in mind? Reach out via the form below or message me directly on WhatsApp.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          {/* Contact Form */}
          <form
            onSubmit={handleSubmit}
            className="flex flex-col space-y-4 glass p-6 sm:p-8 rounded-xl"
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
                className="w-full p-3 sm:p-4 rounded-lg bg-background border border-border focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary text-foreground placeholder:text-muted-foreground transition-all duration-300"
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
                className="w-full p-3 sm:p-4 rounded-lg bg-background border border-border focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary text-foreground placeholder:text-muted-foreground transition-all duration-300"
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
                className="w-full p-3 sm:p-4 rounded-lg bg-background border border-border focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary text-foreground placeholder:text-muted-foreground resize-none transition-all duration-300"
                aria-label="Your Message"
              />
            </div>

            <button
              type="submit"
              className="group relative w-full py-3 sm:py-4 rounded-lg font-semibold text-base sm:text-lg bg-primary text-primary-foreground transition-all duration-300 hover:scale-[1.02] hover:shadow-md focus:outline-none focus:ring-2 focus:ring-primary overflow-hidden flex items-center justify-center gap-2"
            >
              <Send className="w-5 h-5" />
              <span className="relative z-10">Send Message</span>
            </button>

            {status && (
              <motion.p
                role="alert"
                className="text-center text-sm text-primary font-semibold p-3 rounded-lg bg-primary/10 border border-primary/20"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
              >
                {status}
              </motion.p>
            )}
          </form>

          {/* Quick Contact Options */}
          <div className="flex flex-col gap-4">
            <div className="glass p-6 sm:p-8 rounded-xl">
              <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
                <Mail className="w-5 h-5 text-primary" />
                Email Me
              </h3>
              <p className="text-muted-foreground text-sm mb-4">
                Prefer email? Send me a message directly.
              </p>
              <a
                href="mailto:njugunabriian.dev@gmail.com"
                className="inline-flex items-center gap-2 text-primary hover:underline text-sm font-medium"
              >
                njugunabriian.dev@gmail.com
              </a>
            </div>

            <div className="glass p-6 sm:p-8 rounded-xl">
              <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
                <MessageCircle className="w-5 h-5 text-primary" />
                WhatsApp
              </h3>
              <p className="text-muted-foreground text-sm mb-4">
                Need a quick response? Message me on WhatsApp.
              </p>
              <button
                onClick={handleWhatsApp}
                className="w-full py-3 px-4 rounded-lg bg-[#25D366] hover:bg-[#20BA5A] text-white font-semibold transition-all duration-300 flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-5 h-5" />
                Chat on WhatsApp
              </button>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;
