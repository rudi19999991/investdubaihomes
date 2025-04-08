
import React, { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle
} from "@/components/ui/dialog";
import { Mail, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface NewsletterSubscriptionProps {
  variant?: "popup" | "inline";
  showInitially?: boolean;
}

const NewsletterSubscription: React.FC<NewsletterSubscriptionProps> = ({ 
  variant = "popup", 
  showInitially = false
}) => {
  const { translate } = useLanguage();
  const { toast } = useToast();
  const [email, setEmail] = useState("");
  const [isOpen, setIsOpen] = useState(showInitially);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Here you would typically send this to your backend
    console.log("Subscribing email:", email);
    
    toast({
      title: translate("Success!"),
      description: translate("You've been subscribed to our newsletter."),
    });
    
    setEmail("");
    setIsOpen(false);
  };

  if (variant === "inline") {
    return (
      <div className="bg-luxury-navy/10 rounded-lg p-6">
        <div className="flex items-center gap-2 mb-3">
          <Mail className="h-5 w-5 text-luxury-gold" />
          <h3 className="text-xl font-semibold">{translate("Subscribe to Our Newsletter")}</h3>
        </div>
        <p className="text-gray-600 mb-4">
          {translate("Get exclusive property insights, investment opportunities, and market updates delivered to your inbox.")}
        </p>
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
          <Input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder={translate("Your email address")}
            className="flex-grow"
            required
          />
          <Button type="submit" className="bg-luxury-gold hover:bg-luxury-gold/90 text-white">
            <Send className="mr-2 h-4 w-4" /> {translate("Subscribe")}
          </Button>
        </form>
      </div>
    );
  }

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="sm:max-w-md border border-luxury-gold/20">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <Mail className="h-5 w-5 text-luxury-gold" />
            {translate("Subscribe to Our Newsletter")}
          </DialogTitle>
          <DialogDescription>
            {translate("Get exclusive property insights, investment opportunities, and market updates delivered to your inbox.")}
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <Input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder={translate("Your email address")}
            required
          />
          <Button type="submit" className="bg-luxury-gold hover:bg-luxury-gold/90 text-white">
            <Send className="mr-2 h-4 w-4" /> {translate("Subscribe")}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default NewsletterSubscription;
