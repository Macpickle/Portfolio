import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Code, Database, Cpu } from 'lucide-react';
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip"

const cards = [
    {
        title: "Frontend Development",
        icon: <Code />,
        items: [
            { name: "React" },
            { name: "JavaScript" },
            { name: "HTML" },
            { name: "CSS" },
            { name: "Tailwind CSS", icon: "tailwindcss" },
            { name: "TypeScript" },
        ]
    },
    {
        title: "Backend Development",
        icon: <Database />,
        items: [
            { name: "Java" },
            { name: "Python" },
            { name: "C++", icon: "cpp"},
            { name: "Node.js", icon: "nodejs" },
            { name: "Express.js", icon: "express" },
            { name: "MongoDB" },
            { name: "MySQL" }
        ]
    },
    {
        title: "Tools & Technologies",
        icon: <Cpu />,
        items: [
            { name: "Git" },
            { name: "Jest" },
            { name: "Redux" },
            { name: "NumPy" },
            { name: "Matplotlib" },
            { name: "Pandas" },
            { name: "Linux" },
        ]
    }
]

function About() {
    return (
        <section className="relative flex flex-col justify-center items-center h-full min-h-screen w-full sm:px-[15%] px-4" id="about">
            <div className="absolute top-0 left-0 w-full h-full z-0">
                <img src="/src/assets/bg.png" alt="Background" className="w-full h-full object-cover" />
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-[#050505] from-10% via-transparent via-20% to-[#050505] to-110% z-1"></div>
            </div>
            <Card className="w-full h-1/2 bg-neutral-950 text-neutral-300 border border-transparent relative z-10 bg-opacity-80">
              <CardHeader className="relative z-10">
                <CardTitle className="text-4xl text-center">
                  Aspiring Software Developer
                </CardTitle>
                <CardDescription className="text-center text-lg">
                  I am currently a honour roll student at 
                  <TooltipProvider>
                      <Tooltip>
                          <TooltipTrigger>
                              <a href="https://ontariotechu.ca//" target="_blank" rel="noopener noreferrer" className="text-white hover:text-accent transition-colors duration-300">
                                  &nbsp;Ontario Tech University&nbsp;
                              </a>
                          </TooltipTrigger>
                          <TooltipContent>
                              Click to view
                          </TooltipContent>
                      </Tooltip>
                  </TooltipProvider>
                  pursuing my studies in Computer Science. I am passionate about software development and am always looking for new opportunities to learn and grow.
                </CardDescription>
              </CardHeader>
              <CardContent className="relative z-10 flex flex-col sm:flex-row justify-center items-center grid grid-cols-1 xl:grid-cols-3 gap-4 mt-8">
                {cards.map((card, index) => (
                  <Card key={index} className="bg-neutral-950 text-neutral-300 border rounded-lg border-neutral-800 w-full hover:border-accent transition-all duration-300 hover:bg-opacity-50 hover:scale-105 hover:shadow-md hover:shadow-accent relative">
                      <div className="absolute top-0 left-0 w-full h-full rounded-lg animate-shimmer bg-[linear-gradient(110deg,rgba(255,255,255,0)_45%,#11012b_50%,rgba(255,255,255,0)_55%)] bg-[length:250%_100%] to-transparent"></div>
                        
                      <CardHeader className="relative z-10">
                          <CardTitle className="flex flex-row space-x-2 justify-center items-center">
                              {card.icon} <span>{card.title}</span>
                          </CardTitle>
                      </CardHeader>
                      <CardContent className="relative z-10">
                          <div className="flex flex-row flex-wrap justify-center items-center space-x-2 space-y-2">
                          {card.items.map((item, index) => (
                              <div key={index} className="flex flex-row justify-center items-center space-x-2 whitespace-nowrap px-2.5 py-1.5 bg-neutral-800 text-neutral-300 rounded-full hover:scale-105 transition-all duration-300 hover:shadow-md hover:shadow-accent">
                                  <i className = {`ci ci-${item.icon ? item.icon.toLowerCase() : item.name.toLowerCase()} ci-lg`}></i>
                                  <span className="text-sm">{item.name}</span>
                              </div>
                          ))}
                          </div>
                      </CardContent>
                  </Card>
                ))}
              </CardContent>
            </Card>
        </section>
    );
}

export default About;