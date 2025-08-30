import html from "../assets/html.svg"
import css from "../assets/css.svg"
import javascript from "../assets/javascript.svg"
import tailwind from "../assets/tailwind.svg"
import react from "../assets/react.svg"
import nextjs from "../assets/nextjs.svg"
import bootstrap from "../assets/bootstrap.svg"
import nodejs from "../assets/nodejs.svg"
import expressjs from "../assets/expressjs.svg"
import mongodb from "../assets/mongodb.svg"
import git from "../assets/git.svg"
import vscode from "../assets/vscode.svg"
import github from "../assets/github.svg"
import { useState } from "react"
import cn from "../lib/utils"
function SkillSection() {
    const skills = [
        // Frontend
        { img: html, name: 'HTML5', category: "frontend" },
        { img: css, name: 'CSS3', category: "frontend" },
        { img: javascript, name: 'JavaScript', category: "frontend" },
        { img: tailwind, name: 'Tailwind CSS', category: "frontend" },
        { img: react, name: 'React', category: "frontend" },
        { img: nextjs, name: 'Next.js', category: "frontend" },
        { img: bootstrap, name: 'Bootstrap', category: "frontend" },

        // Backend
        { img: nodejs, name: 'Node.js', category: "backend" },
        { img: expressjs, name: 'Express', category: "backend" },
        { img: mongodb, name: 'MongoDB', category: "backend" },

        // Tools
        { img: git, name: 'Git', category: "tools" },
        { img: github, name: 'GitHub', category: "tools" },
        { img: vscode, name: 'VS Code', category: "tools" }
    ];
    const categories=["all","frontend","backend","tools"];
const [activeCategory, setActiveCategory] = useState("all");
const filteredSkills=skills.filter((skill)=>activeCategory==="all" || skill.category===activeCategory)

    return (
        <section id="Skills" className="py-24 px-4 relative bg-secondary/30">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                    My <span className="text-primary">Skills</span>
                </h2>
                <div className="flex flex-wrap justify-center gap-4 mb-12">
                    {categories.map((category,key)=>(
                        <button onClick={() => setActiveCategory(category)} key={key} className={cn("px-5 py-2 rounded-full transition-colors duration-300 capitalize",activeCategory==category ? "bg-primary text-primary-foreground":"bg-secondary/70 text-foreground hover bg-secondary")}>
                            {category}
                        </button>
                    ))}
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredSkills.map((skill, key) => (
                        <div key={key} className="bg-card p-6 rounded-lg shadow-xs card-hover">
                            {/* Skill image */}
                            <div className="flex flex-row justify-center items-center">
                            <img src={skill.img} alt={skill.name} className="w-12 h-12 mb-4 " />
                            </div>
                            
                            {/* Skill name */}
                            <h3 className="text-lg font-semibold text-muted">{skill.name}</h3>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default SkillSection;
