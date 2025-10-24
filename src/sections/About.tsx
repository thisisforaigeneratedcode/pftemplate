import { motion } from "framer-motion";
import { Code2, Shield, Wrench, Target } from "lucide-react";

const aboutData = {
  intro: "Fullstack developer specializing in backend systems and API development. I've built production applications serving real users including payment integrations, parental control platforms, and voting systems. Self-taught security skills through hands-on training on platforms like TryHackMe and Hack The Box.",
  philosophy: [
    "Production quality matters — build for real users, not just demos.",
    "Security is learned by doing — practical skills over theory.",
    "Clean APIs and optimized queries make or break scalability."
  ],
  mission: [
    "Build fullstack applications that solve real business problems.",
    "Deliver secure, scalable backend systems and REST APIs.",
    "Continuously learn through hands-on projects and client work."
  ],
  services: [
    { icon: Shield, label: "Backend systems & REST APIs" },
    { icon: Target, label: "Payment gateway integrations" },
    { icon: Shield, label: "Fullstack web applications" },
    { icon: Wrench, label: "DevOps & CI/CD pipelines" }
  ],
  skills: [
    "Django", "Django REST", "Python", "Node.js", "Express.js",
    "React", "TypeScript", "PostgreSQL", "Docker", "Kubernetes",
    "Redis", "Celery", "AWS", "Git", "Linux"
  ]
};

const About = () => {
  return (
    <section
      id="about"
      className="bg-background text-foreground py-20 px-6"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="inline-block px-4 py-1.5 rounded-full text-sm bg-primary/10 text-primary border border-primary/30 mb-4">
            About
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Building Systems That <span className="text-primary">Endure</span>
          </h2>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          {/* Intro Card */}
          <motion.div
            className="md:col-span-2 glass p-8 rounded-xl border border-border/50 hover:border-primary/30 transition-all duration-500"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            style={{ boxShadow: 'var(--shadow-md)' }}
          >
            <div className="flex items-start gap-4">
              <Code2 className="w-8 h-8 text-primary flex-shrink-0 mt-1" />
              <p className="text-lg text-foreground/90 leading-relaxed">
                {aboutData.intro}
              </p>
            </div>
          </motion.div>

          {/* Philosophy Card */}
          <motion.div
            className="glass p-8 rounded-xl border border-border/50 hover:border-primary/30 transition-all duration-500"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            style={{ boxShadow: 'var(--shadow-md)' }}
          >
            <h3 className="text-xl font-semibold text-primary mb-4">
              Philosophy
            </h3>
            <ul className="space-y-3">
              {aboutData.philosophy.map((item, idx) => (
                <li key={idx} className="text-muted-foreground flex items-start gap-2">
                  <span className="text-primary mt-1.5 text-xs">▸</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Mission Card */}
          <motion.div
            className="glass p-8 rounded-xl border border-border/50 hover:border-primary/30 transition-all duration-500"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            style={{ boxShadow: 'var(--shadow-md)' }}
          >
            <h3 className="text-xl font-semibold text-secondary mb-4">
              Mission
            </h3>
            <ul className="space-y-3">
              {aboutData.mission.map((item, idx) => (
                <li key={idx} className="text-muted-foreground flex items-start gap-2">
                  <span className="text-secondary mt-1.5 text-xs">▸</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Services Grid */}
        <motion.div
          className="mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <h3 className="text-2xl font-semibold text-foreground mb-6">What I Offer</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {aboutData.services.map((service, idx) => (
              <motion.div
                key={idx}
                className="glass p-6 rounded-xl border border-border/50 hover:border-primary/40 transition-all duration-300 group cursor-default"
                whileHover={{ y: -4 }}
                style={{ boxShadow: 'var(--shadow-sm)' }}
              >
                <service.icon className="w-6 h-6 text-primary mb-3 group-hover:scale-110 transition-transform duration-300" />
                <p className="text-sm text-foreground/80">{service.label}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Skills Compact */}
        <motion.div
          className="glass p-8 rounded-xl border border-border/50"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
          style={{ boxShadow: 'var(--shadow-md)' }}
        >
          <h3 className="text-xl font-semibold text-foreground mb-4">Core Stack</h3>
          <div className="flex flex-wrap gap-2">
            {aboutData.skills.map((skill, idx) => (
              <span
                key={idx}
                className="px-4 py-2 text-sm rounded-lg bg-primary/10 text-primary border border-primary/20 hover:bg-primary/15 hover:border-primary/30 transition-all duration-300"
              >
                {skill}
              </span>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <p className="text-muted-foreground mb-6">
            If you're building for scale, for trust, or for something bigger than yourself...
          </p>
          <a
            href="https://docs.google.com/document/d/1AzpAenefivF0MeBmlpGmeKgM94KQJhirmFFajVDQzu8/edit?usp=sharing"
            className="inline-block px-8 py-4 rounded-xl font-semibold transition-all duration-300 bg-primary text-primary-foreground hover:scale-105 focus:outline-none focus:ring-2 focus:ring-primary"
            target="_blank"
            rel="noopener noreferrer"
            style={{ boxShadow: 'var(--shadow-glow)' }}
          >
            View My CV
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
