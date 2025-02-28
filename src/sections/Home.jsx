import { useEffect, useState } from "react";
import { ChevronDown, Github, Linkedin, Mail, FileText } from "lucide-react";

import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip"  

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

function Home() {
    const [avatar, setAvatar] = useState("/src/assets/me.jpg");
    const username = "Macpickle"
    useEffect(() => {
        // load avatar
        fetch(`https://api.github.com/users/${username}`)
          .then((response) => response.json())
          .then((data) => {
            setAvatar(data.avatar_url);
        });
      }, []);

    return (
        <section className="flex flex-col justify-center items-center pt-20 h-screen sm:px-[15%] px-4" id="home">
        <img src={avatar} alt="Dylan MacLeod" className="rounded-full w-[40%] border-2 border-white object-cover animate-grow" />
        <div className="flex flex-col items-center animate-fade-in-up">
          <h1 className="font-bold text-white">Dylan MacLeod</h1>
          <p className="text-neutral-600 text-xl">Full Stack Developer | Computer Science Student</p>

          <div className="flex space-x-8 mt-8">
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
        </div>

        <div className="flex mt-8">
          <div className="animate-bounce">
            <ChevronDown size={36} />
          </div>
        </div>
      </section>
    )
}

export default Home;