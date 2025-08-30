import {ArrowRight, ExternalLink,Github} from "lucide-react";



const projects = [
    {
        id: 1,
        title: "Web Trading platform",
        description: "A web app for stock trading with portfolio tracking and real-time market data.",
        image: "/projects/project1.png",
        tags: ["React", "Material UI", "MongoDB", "Express", "Node.js"],
        demoURL: "https://zerodha-c7dx.onrender.com/",
        githubUrl: "https://github.com/omkarhole/web-trading-platform",

    },
    {
        id: 2,
        title: "Hotel Booking Platform",
        description: "A platform to explore hotels, rate them, and view their locations.",
        image: "/projects/project2.png",
        tags: ["Node.js", "Bootstrap", "MongoDB", "Express"],
        demoURL: "https://majorproject-1-9p07.onrender.com/listings",
        githubUrl: "https://github.com/omkarhole/majorproject",

    },
    {
        id: 3,
        title: "Code sharing Platform",
        description: "A full-stack Next.js app to create, store, and organize code snippets.",
        image: "/projects/project3.png",
        tags: ["Next.js", "Tailwind CSS", "Prisma ORM", "Shadcn/ui"],
        demoURL: "https://snippet-blush.vercel.app/",
        githubUrl: "https://github.com/omkarhole/snippet",
    },

]

function ProjectsSection() {
    return (
        <section id="Projects" className="py-24 px-4  relative">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">Featured <span className="text-primary">Projects</span></h2>
                <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                    Here are some of my recent projects. Each project was carefully crafted with attention to detail, performance, and user experience.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2   lg:grid-cols-3 gap-8 ">
                    {projects.map((project, key) => (
                        <div key={key} className="group bg-card rounded-lg overflow-hidden shadow-xs   card-hover">
                            <div className="h-48 overflow-hidden ">
                                <img src={project.image} alt={project.title} className="w-full h-full object-cover  transition-transform duration-500 group-hover:scale-110" />
                            </div>
                             <div className="p-6">
                                <div className="flex flex-wrap gap-2 ">
                                    {project.tags.map((tag,index)=>(
                                        <span  key={index} className="px-2  py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground">{tag}</span>
                                    ))}
                                </div>
                            <h3 className="text-xl font-semibold mt-4">{project.title}</h3>
                            <p className="text-muted-foreground text-sm mb-4">{project.description}</p>
                       <div className="flex justify-between items-center">
                        <div className="flex space-x-3 mb-2">
                            <a target="_blank" href={project.demoURL} className="text-foreground/80 hover:text-primary transition-colors duration-300"><ExternalLink size={20}/></a>
                             <a target="_blank" href={project.githubUrl} className="text-foreground/80 hover:text-primary transition-colors duration-300"><Github size={20}/></a>
                        </div>
                            </div>
                        
                       </div>
                       
                        </div>
                        
                       
                    ))}

                </div>
                <div className="text-center mt-12">
                    <a href="https://github.com/omkarhole" className="cosmic-button flex items-center justify-center mx-auto w-fit gap-2" target="_blank" rel="omkarhole">Check My Github<ArrowRight size={16}/></a>
                    
                </div>
            </div>
        </section>
    );
}

export default ProjectsSection;