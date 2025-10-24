interface Project {
  name: string;
  desc: string;
  link: string;
  image: string;
}

const projects: Project[] = [
  {
    name: "SecureVault",
    desc: "A password manager with GitHub secret scanning and encryption.",
    link: "https://secure-vault-bintech.vercel.app/",
    image: "/src/assets/securevault-project.jpg",
  },
  {
    name: "Portfolio Site",
    desc: "Personal portfolio site, showcasing my skills and work.",
    link: "https://github.com/guy-with-a-cool-terminal/MyPortfolioWebsite",
    image: "/src/assets/portfolio-project.jpg",
  },
  {
    name: "GitItDone",
    desc: "A Git-Workflow automation, CLI Tool that speeds up your git workflow.",
    link: "https://github.com/guy-with-a-cool-terminal/GitItDoneAutomationTool",
    image: "/src/assets/gititdone-project.jpg",
  },
];

export default projects;
