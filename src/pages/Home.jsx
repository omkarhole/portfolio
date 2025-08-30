import AboutSection from "../Components/AboutSection";
import ContactSection from "../Components/ContactSection";
import Footer from "../Components/Footer";
import HeroSection from "../Components/HeroSection";
import { NavBar } from "../Components/NavBar";
import ProjectsSection from "../Components/ProjectsSection";
import SkillSection from "../Components/SkillSection";
import StarBackground from "../Components/StarBackground";
import ThemeToggle from "../Components/ThemeToggle";

function Home() {
    return (
        <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
            {/* // theme toogle */}
            <ThemeToggle />
            {/* //background effect  */}
            <StarBackground />
            {/* //navbar */}
            <NavBar/>
            {/* //maincontent(hero) */}
            <main>
                <HeroSection/>
                <AboutSection/>
                <SkillSection/>
                <ProjectsSection/>
                <ContactSection/>
            </main>
            {/* //footer */}
            <Footer/>

        </div>
    );
}

export default Home;