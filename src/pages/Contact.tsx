
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";
import { Phone, Mail, MapPin, Linkedin, Instagram, Twitter, Youtube, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const Contact = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <div className="relative">
          <div className="absolute inset-0 overflow-hidden">
            <video 
              className="w-full h-full object-cover" 
              autoPlay 
              loop 
              muted 
              playsInline
            >
              <source src="https://player.vimeo.com/external/477941605.sd.mp4?s=3c99fe958315fa9fb3adac0af48e9bef53fe9905&profile_id=164&oauth2_token_id=57447761" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <div className="absolute inset-0 bg-luxury-navy/70" />
          </div>
          
          <div className="relative py-20 md:py-32 luxury-container">
            <div className="text-center text-white">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
              <div className="gold-separator mx-auto" />
              <p className="text-xl max-w-2xl mx-auto mt-6">
                We're here to help you with your Dubai property investment journey. 
                Get in touch with our experts today.
              </p>
            </div>
          </div>
        </div>
        
        {/* Contact Information + Form */}
        <section className="py-16">
          <div className="luxury-container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Information */}
              <div>
                <h2 className="text-3xl font-bold mb-6">Get In Touch</h2>
                <div className="gold-separator" />
                
                <div className="mt-8 space-y-6">
                  <div className="flex items-start">
                    <MapPin className="h-6 w-6 text-luxury-gold mr-4 mt-1" />
                    <div>
                      <h3 className="text-xl font-medium">Our Location</h3>
                      <p className="mt-2 text-gray-600">
                        Marina Plaza, Dubai Marina<br />
                        Dubai, United Arab Emirates
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Phone className="h-6 w-6 text-luxury-gold mr-4 mt-1" />
                    <div>
                      <h3 className="text-xl font-medium">Call Us</h3>
                      <p className="mt-2 text-gray-600">
                        +971 50 123 4567<br />
                        +971 4 123 4567
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Mail className="h-6 w-6 text-luxury-gold mr-4 mt-1" />
                    <div>
                      <h3 className="text-xl font-medium">Email Us</h3>
                      <p className="mt-2 text-gray-600">
                        info@investdubai.com<br />
                        sales@investdubai.com
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-12">
                  <h3 className="text-xl font-bold mb-4">Connect With Us</h3>
                  
                  <div className="flex flex-wrap gap-4 mt-4">
                    <Button size="lg" className="bg-[#25D366] hover:bg-[#25D366]/90">
                      <MessageCircle className="mr-2 h-5 w-5" /> WhatsApp
                    </Button>
                    
                    <Button size="lg" className="bg-[#0088cc] hover:bg-[#0088cc]/90">
                      <MessageCircle className="mr-2 h-5 w-5" /> Telegram
                    </Button>
                  </div>
                  
                  <div className="mt-8">
                    <h3 className="text-lg font-medium mb-4">Follow Us</h3>
                    <div className="flex space-x-4">
                      <a href="#" className="p-2 bg-gray-100 rounded-full hover:bg-luxury-gold hover:text-white transition-colors">
                        <Linkedin className="h-6 w-6" />
                      </a>
                      <a href="#" className="p-2 bg-gray-100 rounded-full hover:bg-luxury-gold hover:text-white transition-colors">
                        <Instagram className="h-6 w-6" />
                      </a>
                      <a href="#" className="p-2 bg-gray-100 rounded-full hover:bg-luxury-gold hover:text-white transition-colors">
                        <Twitter className="h-6 w-6" />
                      </a>
                      <a href="#" className="p-2 bg-gray-100 rounded-full hover:bg-luxury-gold hover:text-white transition-colors">
                        <Youtube className="h-6 w-6" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Contact Form */}
              <div className="bg-white rounded-lg shadow-lg p-8">
                <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
                <ContactForm />
              </div>
            </div>
          </div>
        </section>
        
        {/* Map Section */}
        <section className="py-12 bg-gray-50">
          <div className="luxury-container">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold">Visit Our Office</h2>
              <div className="gold-separator mx-auto" />
            </div>
            
            <div className="rounded-lg overflow-hidden shadow-lg h-[400px]">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3613.1867105621236!2d55.13459287596828!3d25.076993077812768!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f6b5402c126e3%3A0xb9511e6655c46d7c!2sDubai%20Marina!5e0!3m2!1sen!2sae!4v1697106781320!5m2!1sen!2sae" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Contact;
