import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";

import { Separator } from "@/components/ui/separator"

import { GraduationCap, Briefcase  } from 'lucide-react';

/*
{
                "name": "IT Project Coordinator",
                "company": "CIBC",
                "date": "May 2025 - August 2025",
                "description": [
                    "Managed projects and resources to ensure successful delivery of IT projects.",
                    "Assisted in the development of project plans and schedules.",
                    "Coordinated with stakeholders to ensure project requirements were met.",
                ]
            },
*/

const cards = [
    {
        "title": "Work Experience",
        "icon": <Briefcase size = { 36 }/>,
        "items": [
            {
                "name": "Frontend Lead Developer",
                "company": "Ontario Tech University - Software Design Analysis",
                "date": "January 2025 - April 2025",
                "description": [
                    "Lead the design and development of front-end architecture for a full-stack web application ensuring scalability, performance, and maintainability",
                    "Collaborate with cross-functional teams to define technical requirements that aligns with client needs, delivering high-quality, user-centric features",
                    "Coordinate with back-end developers to integrate APIs and ensure seamless data flow between the front-end and back-end, optimizing performance and functionality",
                ]
            },
        ],
    },
    {
        "title": "Education",
        "icon": <GraduationCap size = { 36 }/>,
        "items": [
            {
                "name": "BS. in Computer Science",
                "school": "Ontario Tech University",
                "date": "2023 - 2027",
                "description": "Currently pursuing a Bachelor of Science in Computer Science, within the CO-OP program.",
                "achievements": [
                    "President's List",
                    "Honours List",
                    "Entrance Scholarship",
                ],
                "courses": [
                    "Data Structures",
                    "Algorithms",
                    "Computer Architecture",
                    "Discrete Mathematics",
                    "Software Design and Analysis",
                    "Software Development and Integration",
                ]
            },
        ],
    }
];

function Experience() {
    return (
        <section className="relative flex flex-col justify-center items-center h-full min-h-screen w-full sm:px-[15%] px-4 overflow-hidden" id="experience">
            <div className="absolute top-1/3 w-[1750px] h-full overflow-hidden pointer-events-none rotate-[0.05rad]">
                <div className="marquee whitespace-nowrap text-accent text-8xl font-bold opacity-20 animate-marquee">
                    {Array(10).fill("EXPERIENCE ").map((text, index) => (
                        <span key={index}>{text}</span>
                    ))}
                </div>
                <div className="marquee whitespace-nowrap text-accent text-8xl font-bold opacity-20 animate-marquee">
                    {Array(10).fill("EXPERIENCE ").map((text, index) => (
                        <span key={index}>{text}</span>
                    ))}
                </div>
                <div className="marquee whitespace-nowrap text-accent text-8xl font-bold opacity-20 animate-marquee">
                    {Array(10).fill("EXPERIENCE ").map((text, index) => (
                        <span key={index}>{text}</span>
                    ))}
                </div>
            </div>
            <div className="relative grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
                {cards.map((card) => (
                    <Card key={card.title} icon={card.icon} className="bg-neutral-950 border border-neutral-900 text-neutral-300 hover:border-accent transition-colors duration-300 hover:bg-opacity-50">
                        <CardHeader>
                            <CardTitle className="font-bold text-2xl flex flex-row items-center">
                                <div className="w-12 h-12 bg-black border border-neutral-800 rounded-sm flex justify-center items-center mr-2">
                                    {card.icon}
                                </div>
                                {card.title}
                            </CardTitle>
                            <Separator orientation="horizontal" className="bg-neutral-800" />
                        </CardHeader>
                        <CardContent>
                            {card.items.map((item) => (
                                <div key={item.name} className="mb-4 space-y-2">
                                    <div className="flex flex-row justify-between items-center space-x-2">
                                        <p className="font-bold text-neutral-500 text-lg">{item.name}</p>
                                        <p className="text-neutral-700 text-sm">{item.date}</p>
                                    </div>

                                    <CardDescription>
                                        <p className="text-neutral-200 text-lg">{item.company || item.school}</p>
                                        <Separator orientation="horizontal" className="bg-neutral-800" />
                                        
                                        <div className="mt-2 flex flex-col space-y-2">
                                            {
                                                card.title === "Education" ? (
                                                    <>
                                                        <div className="flex flex-row space-x-2">
                                                            <Separator orientation="vertical" className="h-[100%] bg-accent" />
                                                            <p className="text-neutral-500 text-base">{item.description}</p>
                                                        </div>
                                                        <div className="flex flex-row space-x-2 flex-wrap">
                                                            {item.achievements.map((achievement) => (
                                                                <div key = {achievement} className="border border-neutral-900 bg-black rounded-full text-base py-1 px-2 text-white hover:scale-105 tranform-all duration-300 hover:border-accent">{achievement}</div>
                                                            ))}
                                                        </div>
                                                        <h3 className="text-neutral-500 text-lg">Relevant Courses:</h3>
                                                        <div className = "flex flex-row grid grid-cols-2 gap-2">
                                                            {item.courses.map((course) => (
                                                                <div key = {course} className="p-1 text-neutral-400">{course}</div>
                                                            ))}
                                                        </div>
                                                    </>
                                                ) : (
                                                    Array.isArray(item.description) ? item.description.map((desc) => (
                                                        <div key={desc} className="flex flex-row space-x-2">
                                                            <Separator orientation="vertical" className="h-16 bg-accent" />
                                                            <p className="text-neutral-500 text-base">{desc}</p>
                                                        </div>
                                                    )) : (
                                                        <p className="text-neutral-500 text-lg">{item.description}</p>
                                                    )
                                                )
                                            }
                                        </div>

                                    </CardDescription>
                                </div>
                            ))}
                        </CardContent>
                    </Card>
                ))}

            </div>
        </section>
    );
};

export default Experience;