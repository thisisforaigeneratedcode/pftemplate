import { Github, Linkedin, MessageCircle, LucideIcon } from "lucide-react";

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
    platform: "WhatsApp",
    url: "https://wa.me/254114399034?text=Hi%20Brian%2C%20I'd%20like%20to%20discuss%20a%20project%20with%20you.",
    Icon: MessageCircle,
  },
];

export default socialLinks;
