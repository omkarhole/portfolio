
import Section1 from "./ContactSection/Section1";
import Section2 from "./ContactSection/Section2";

function ContactSection() {
    return (
        <section id="Contact" className="py-24 px-4 relative bg-secondary/30">
            {/* contact section */}
            <div className="container mx-auto max-w-5xl">
                         <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">Get In <span className="text-primary">Touch</span></h2>
                        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                          I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions. Feel free to reach out to me through any of the platforms below.
                       </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                { /* first section of contact  */}
                <Section1 />
                { /* second section of contact  */}
                <Section2 />
                </div>
            </div>
        </section>
    );
}

export default ContactSection;