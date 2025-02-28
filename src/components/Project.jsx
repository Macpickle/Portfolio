import { useState, useEffect } from 'react';
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"

function Project() {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        const username = 'Macpickle';
        const API_KEY = import.meta.env.VITE_GITHUB_API;
        
        const url = 'https://api.github.com/graphql';
        const headers = {
            'Authorization': `token ${API_KEY}`
        }
        const query = `
        {
          user(login: "${username}") {
            pinnedItems(first: 10, types: REPOSITORY) {
              edges {
                node {
                  ... on Repository {
                    name
                    description
                    url
                    openGraphImageUrl
                    repositoryTopics(first: 10) {
                      edges {
                        node {
                          topic {
                            name
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
        `;

        fetch(url, {
            method: 'POST',
            headers: headers,
            body: JSON.stringify({ query }),
        })
            .then((response) => response.json())
            .then((data) => { 
                const projects = data.data.user.pinnedItems.edges.map((edge) => edge.node);
                setProjects(projects);
            });
        
    }, []);

    return (
      <section className="relative flex flex-col justify-center items-center pt-20 h-full sm:px-[15%] px-4 p-16 overflow-x-hidden" id="projects">
                <div className="absolute top-0 z-[-2] h-full w-screen bg-[#000000] bg-[radial-gradient(#27014d_1px,#050505_1px)] bg-[size:20px_20px]" />
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-[#050505] from-0% via-transparent via-50% to-[#050505] to-150% z-1"></div>

        <div className="grid grid-cols-1 gap-4 w-full">
        <h1 className="text-4xl font-bold text-white z-10">Personal Projects</h1>
      {
        projects.map((project) => (
          <Card 
            key={project.name} 
            className="w-full h-full lg:h-96 bg-neutral-950 text-neutral-300 border border-neutral-900 hover:border-accent transition-all duration-300 hover:bg-opacity-50 hover:scale-105 flex flex-row overflow-hidden"
            onClick={() => window.open(project.url, '_blank')}
            role="button"
            tabIndex="0"
            aria-label={`Open project ${project.name}`}
            onKeyPress={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                window.open(project.url, '_blank');
              }
            }}
          > 
            <CardContent className="relative w-4/6 lg:flex hidden h-full">
              <img src={project.openGraphImageUrl} alt={project.name} className="absolute w-full h-full object-cover object-center" />
              <div className="absolute w-screen h-8 bg-accent rotate-90 left-[-22%] top-16"></div>
              <div className="absolute w-screen h-4 bg-accent-foreground rotate-90 left-[-22%] top-16"></div>
            </CardContent>
            <CardContent className="w-full lg:w-1/2 p-4 z-10 pl-0 lg:pl-12">
              <CardHeader>
                <CardTitle className="text-2xl">{project.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>{project.description}</CardDescription>
              </CardContent>
              <CardFooter className="flex flex-wrap gap-2 mt-4">
                {project.repositoryTopics.edges.map((edge) => (
                  <span key={edge.node.topic.name} className="bg-accent text-neutral-300 text-xs px-2 py-1 rounded-full mr-2 flex items-center border border-neutral-300 text-nowrap">
                    {edge.node.topic.name}
                  </span>
                ))}
              </CardFooter>
            </CardContent>
          </Card>
        ))
      }
      </div>
      </section>
    );
}

export default Project;