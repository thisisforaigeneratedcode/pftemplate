import React from "react";
import socialLinks from "../data/socialLinks";

const WhatsAppIcon = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
  </svg>
);

const SocialSidebar = () => (
  <nav
    aria-label="Social media links"
    className="fixed top-1/3 left-0 flex flex-col space-y-4 glass py-4 px-2 rounded-r-xl shadow-lg z-50 border-l-0 transition-all duration-300 hover:px-3"
  >
    {socialLinks.map(({ platform, url, Icon }, idx) => {
      const IconComponent = platform === "WhatsApp" ? WhatsAppIcon : Icon;
      
      return (
        <a
          key={platform}
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={platform}
          className="group relative text-primary hover:text-foreground transition-all duration-300 p-2 rounded-lg hover:bg-primary/10 focus:outline-none focus:ring-2 focus:ring-primary hover:scale-110 active:scale-95"
          style={{ animationDelay: `${idx * 0.1}s` }}
        >
          {IconComponent && (
            <IconComponent className="w-6 h-6 transform group-hover:rotate-12 transition-all duration-300" />
          )}
          <span className="absolute left-full ml-2 px-3 py-1 bg-card border border-border rounded-lg text-sm font-medium whitespace-nowrap opacity-0 pointer-events-none group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300 shadow-lg">
            {platform}
          </span>
        </a>
      );
    })}
  </nav>
);

export default SocialSidebar;
