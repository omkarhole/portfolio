import {ArrowRight, ExternalLink,Github} from "lucide-react";



const projects = [
    {
        id: 1,
        title: "Video Streaming Platform",
        description: "A modern video calling platform built with Next.js, Stream Video SDK, and Clerk authentication. Create instant meetings, schedule calls, and enjoy high-quality video communication.",
        image: "/projects/voom.png",
        tags: ["Next.js", "Tailwind CSS", "Clerk", "Shadcn/ui"],
        demoURL: "https://voom-one.vercel.app/",
        githubUrl: "https://github.com/omkarhole/Video-Stream-platform",
    },
    {
        id: 2,
        title: "Wanderlust-Hotel-Booking",
        description: "Complete hotel booking platform — shows CRUD, authentication, and business logic",
        image: "/projects/project2.png",
        tags: ["Node.js", "Bootstrap", "MongoDB", "Express"],
        demoURL: "https://majorproject-1-9p07.onrender.com/listings",
        githubUrl: "https://github.com/omkarhole/majorproject",
        
    },
    {
        id: 3,
        title: "Realtime-Chatapp",
        description: "Real-time messaging app — demonstrates WebSocket/real-time tech and is highly impressive to recruiters",
        image: "/projects/3.png",
        tags: ["React", "Socket.io", "MongoDB", "Express", "Node.js"],
        demoURL: "https://realtime-chatapp-seven.vercel.app/",
        githubUrl: "https://github.com/omkarhole/Realtime-Chatapp",

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
