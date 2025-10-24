interface Project {
  name: string;
  desc: string;
  link: string;
  image: string;
  caseStudy?: {
    problem: string;
    solution: string;
    impact: string;
    tech: string[];
  };
}

const projects: Project[] = [
  {
    name: "SecureVault",
    desc: "A password manager with GitHub secret scanning and encryption.",
    link: "https://secure-vault-bintech.vercel.app/",
    image: "/src/assets/securevault-project.jpg",
    caseStudy: {
      problem: "Users struggle with managing multiple passwords securely, often reusing weak passwords or storing them insecurely.",
      solution: "Built a password manager that securely stores and autofills credentials with GitHub secret scanning integration to prevent accidental exposure.",
      impact: "Enhanced security and user experience by eliminating password reuse and providing secure, encrypted storage.",
      tech: ["React", "Encryption", "GitHub API", "Vercel"]
    }
  },
  {
    name: "GitItDone",
    desc: "A Git-Workflow automation CLI Tool that speeds up your git workflow.",
    link: "https://github.com/guy-with-a-cool-terminal/GitItDoneAutomationTool",
    image: "/src/assets/gititdone-project.jpg",
    caseStudy: {
      problem: "Repetitive Git commands waste developer time and increase the risk of human error in version control.",
      solution: "Created a CLI automation system to streamline version control processes with smart workflows and error prevention.",
      impact: "Saved development teams significant time and reduced version control errors through automated best practices.",
      tech: ["Node.js", "CLI", "Git", "Automation"]
    }
  },
  {
    name: "Portfolio Site",
    desc: "Personal portfolio site, showcasing my skills and work.",
    link: "https://github.com/guy-with-a-cool-terminal/MyPortfolioWebsite",
    image: "/src/assets/portfolio-project.jpg",
  },
];

export default projects;
