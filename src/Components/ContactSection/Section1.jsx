import { Github, Linkedin, MailIcon, MapPin, Phone,  Twitter } from "lucide-react";

function Section1() {
    return (  
         <div className="space-y-8">
                        <h3 className="font-semibold mb-6 text-2xl">Contact Information</h3>

                        <div className="space-y-6 justify-center">
                            <div className="flex items-start space-x-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <MailIcon className="h-6 w-6 text-primary" />
                                </div>
                                <div>
                                    <h4>Email</h4>
                                    <a href="mailto:omkarhole314@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">omkarhole314@gmail.com</a>
                                </div>
                            </div>
                            <div className="flex items-start space-x-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Phone className="h-6 w-6 text-primary" />
                                </div>
                                <div className="mx-7">
                                    <h4>Phone</h4>
                                    <p href="tel:+1234567890" className="text-muted-foreground hover:text-primary transition-colors">+91 88-3069-3090 </p>
                                </div>
                            </div>
                            <div className="flex items-start space-x-4">
                                <div className="p-3  rounded-full bg-primary/10">
                                    <MapPin className="h-6 w-6 text-primary" />
                                </div>
                                <div className="mx-13">
                                    <h4>Location</h4>
                                    <p className="text-muted-foreground hover:text-primary transition-colors">Pune, India</p>
                                </div>
                            </div>
                        </div>
                        <div className="pt-8">
                            <h4 className="font-medium mb-4">Connect with Me</h4>
                            <div className="flex space-x-4 justify-center ">
                                <a href="https://www.linkedin.com/in/omkar-hole-c0der/" target="_blank" className="text-muted-foreground hover:text-primary transition-colors"> <Linkedin /> </a>
                                <a href="https://github.com/omkarhole" target="_blank" className="text-muted-foreground hover:text-primary transition-colors"> <Github /> </a>
                                <a href="https://x.com/omkarhole314" target="_blank" className="text-muted-foreground hover:text-primary transition-colors"> <Twitter /> </a>
                            </div>
                        </div>

                    </div>
    );
}

export default Section1;