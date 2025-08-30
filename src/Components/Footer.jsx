import { ArrowUp } from "lucide-react";

function Footer() {
    return ( 
        <footer className="py-9 px-4 bg-card relative border-t border-border mt-12 pt-8  flex flex-wrap justify-between">
            <p className="text-sm  pt-4 mx-auto text-muted-foreground">
                &copy; {new Date().getFullYear()} OmkarHole. All rights reserved.
            </p>
            <a className="p-4 rounded-full bg-primary/10 hover:bg-primary/20 text-primary transition-colors" href="#hero"><ArrowUp size={20}/></a>
           
        </footer>
    );
}

export default Footer;