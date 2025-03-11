
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { MessageCircle, Phone, Mail, MapPin } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const ContactForm: React.FC = () => {
  const { toast } = useToast();
  const { translate } = useLanguage();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsLoading(false);
      toast({
        title: translate("Message Sent!"),
        description: translate("Thank you for your inquiry. We'll get back to you soon."),
      });
      
      // Reset form
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });
    }, 1500);
  };

  return (
    <div className="grid md:grid-cols-2 gap-8">
      <div>
        <h3 className="text-2xl font-bold mb-4">{translate("Contact Us")}</h3>
        <p className="text-gray-600 mb-6">
          {translate("Interested in investing in Dubai or Ras Al Khaimah properties? Fill out the form and our investment consultants will get back to you shortly.")}
        </p>
        
        <div className="space-y-4 mb-8">
          <div className="flex items-start">
            <MapPin className="h-5 w-5 mr-3 text-luxury-gold mt-1" />
            <div>
              <h4 className="font-semibold">{translate("Location")}</h4>
              <p className="text-gray-600">{translate("Dubai Marina, Dubai, UAE")}</p>
            </div>
          </div>
          
          <div className="flex items-start">
            <Mail className="h-5 w-5 mr-3 text-luxury-gold mt-1" />
            <div>
              <h4 className="font-semibold">{translate("Email")}</h4>
              <p className="text-gray-600">info@memydubai.com</p>
            </div>
          </div>
          
          <div className="flex items-start">
            <Phone className="h-5 w-5 mr-3 text-luxury-gold mt-1" />
            <div>
              <h4 className="font-semibold">{translate("Phone")}</h4>
              <p className="text-gray-600">+971 50 123 4567</p>
            </div>
          </div>
        </div>
        
        <div className="space-y-4">
          <h4 className="font-semibold mb-2">{translate("Connect With Us")}</h4>
          <div className="flex space-x-3">
            <Button variant="outline" size="icon" className="rounded-full">
              <MessageCircle className="h-5 w-5" />
            </Button>
            <Button variant="outline" size="icon" className="rounded-full">
              <Mail className="h-5 w-5" />
            </Button>
            <Button variant="outline" size="icon" className="rounded-full">
              <Phone className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
      
      <div>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Label htmlFor="name">{translate("Full Name")}</Label>
            <Input
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder={translate("John Doe")}
              required
            />
          </div>
          
          <div>
            <Label htmlFor="email">{translate("Email")}</Label>
            <Input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              placeholder={translate("john@example.com")}
              required
            />
          </div>
          
          <div>
            <Label htmlFor="phone">{translate("Phone")}</Label>
            <Input
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder={translate("+1 234 567 8900")}
            />
          </div>
          
          <div>
            <Label htmlFor="subject">{translate("Subject")}</Label>
            <Input
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              placeholder={translate("Investment Inquiry")}
              required
            />
          </div>
          
          <div>
            <Label htmlFor="message">{translate("Message")}</Label>
            <Textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder={translate("I'm interested in investing in Dubai properties...")}
              rows={4}
              required
            />
          </div>
          
          <Button 
            type="submit" 
            className="w-full bg-luxury-gold hover:bg-luxury-gold/90"
            disabled={isLoading}
          >
            {isLoading ? translate("Sending...") : translate("Send Message")}
          </Button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
