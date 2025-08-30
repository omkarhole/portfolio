import { Send } from "lucide-react";
import cn from "../../lib/utils";
import { toast, Bounce } from 'react-toastify';
import { useState,useRef } from "react";
import emailjs from '@emailjs/browser';


const EMAILJS_CONFIG = {
  serviceId: 'service_7xz7omo',
  templateId: 'template_4ax4acs',
  publicKey: 'UHftXb7R2WRWDl6a0'
};

function Section2() {

  const [isSubmitting, setIsSubmitting] = useState(false);
   const formRef = useRef(); 



  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Send email using EmailJS
      const result = await emailjs.sendForm(
        EMAILJS_CONFIG.serviceId,
        EMAILJS_CONFIG.templateId,
        formRef.current,
        EMAILJS_CONFIG.publicKey
      );

      
      // Show success toast
      toast.success('Message sent successfully!', {
        position: "bottom-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        theme: "light",
        transition: Bounce,
      });

      // Reset the form
      formRef.current.reset();

    } catch (error) {
      console.error('EmailJS Error:', error);
      
      // Show error toast
      toast.error('Failed to send message. Please try again.', {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        theme: "light",
        transition: Bounce,
      });
    } finally {
      setIsSubmitting(false);
    }
  };
  return (
    <div className="bg-card p-8  rounded-lg shadow-xs">
      <h3 className="text-2xl font-semibold mb-6">Send A Message</h3>
      <form className="space-y-6 mx-auto" onSubmit={handleSubmit} ref={formRef}>
        <div>
          <label htmlFor="name" className="block text-sm font-medium mb-2">Your Name</label>
          <input id="name" name="name" required type="text" className="w-full rounded-md py-3 px-4 border border-input bg-background  focus:outline-hidden foucs:ring-2 focus:ring-primary"
            placeholder="your name" />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium mb-2">Your Email</label>
          <input id="email" name="email" required type="email" className="w-full rounded-md py-3 px-4 border border-input bg-background  focus:outline-hidden foucs:ring-2 focus:ring-primary"
            placeholder="your Email" />
        </div>
        <div>
          <label htmlFor="message" className="block text-sm font-medium mb-2">Your Message</label>
          <textarea id="message" name="message" required className="w-full rounded-md py-3 px-4 border border-input bg-background  focus:outline-hidden foucs:ring-2 focus:ring-primary resize-none"
            placeholder="Hello ,I'd like to talk about..." />
        </div>
        <button disabled={isSubmitting} type="submit" className={cn("cosmic-button w-full  flex items-center justify-center gap-2")}>
          {isSubmitting? "Sending...":"Send Message"}<Send size={16} />
        </button>
      </form>
    </div>
  );
}

export default Section2;