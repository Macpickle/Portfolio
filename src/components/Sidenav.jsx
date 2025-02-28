import {
    Github,
    Linkedin,
    Mail,
    FileText,
} from "lucide-react";

import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip"

import { useEffect, useState } from "react";

const links = [
  {
    title: "Github",
    url: "https://github.com/Macpickle",
    icon: <Github size={36} />,
    color: "hover:text-gray-500",
  },
  {
    title: "LinkedIn",
    url: "https://www.linkedin.com/in/dylan-macleod/",
    icon: <Linkedin size={36} />,
    color: "hover:text-blue-500",
  },
  {
    title: "Email",
    url: "mailto:dylanmacleod2005@gmail.com",
    icon: <Mail size={36} />,
    color: "hover:text-red-500",
  },
  {
    title: "Resume",
    url: "https://drive.google.com/file/d/1H1wTNFNzhptQWDfz-bkKtqX6IzWKlbiN/view?usp=sharing",
    icon: <FileText size={36} />,
    color: "hover:text-accent",
  },
];

function Sidenav() {
  const [showSidenav, setShowSidenav] = useState(false);
  
  useEffect(() => {
    const nav = document.getElementById("nav");

    window.onscroll = function() {
      const scroll = window.scrollY;

      if (scroll >= 100) {
        setShowSidenav(true);
        nav.classList.add("sm:flex");

      } else {
        setShowSidenav(false);
      };
    };
    nav.classList.add("hidden");

  }, []);

  return (
    <div id="nav" className={`fixed h-full text-white flex flex-col justify-center items-center space-y-4 pl-4 z-50 ${showSidenav ? "animate-fade-in-right" : "animate-fade-out-left"}`}>
        {links.map((link) => (
            <TooltipProvider key={link.title}>
            <Tooltip>
              <TooltipContent>
                {link.title}
              </TooltipContent>
              <a href={link.url} target="_blank" rel="noreferrer" className={`transition-colors duration-300 ${link.color}`}>
                <TooltipTrigger>
                  {link.icon}
                </TooltipTrigger>
              </a>
            </Tooltip>
          </TooltipProvider>
        ))}
    </div>
  );
}

export default Sidenav;