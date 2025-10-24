import { Github, Linkedin, Mail, LucideIcon } from "lucide-react";

interface SocialLink {
  platform: string;
  url: string;
  Icon: LucideIcon;
}

const socialLinks: SocialLink[] = [
  {
    platform: "GitHub",
    url: "https://github.com/guy-with-a-cool-terminal",
    Icon: Github,
  },
  {
    platform: "LinkedIn",
    url: "https://www.linkedin.com/in/briannjuguna/",
    Icon: Linkedin,
  },
  {
    platform: "Email",
    url: "mailto:njugunabriian@gmail.com",
    Icon: Mail,
  },
];

export default socialLinks;
