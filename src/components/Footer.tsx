
import React from "react";
import { Link } from "react-router-dom";
import { Instagram, Linkedin, Twitter, Youtube, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-luxury-navy text-white pt-16 pb-8">
      <div className="luxury-container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold mb-4">
              <span className="text-luxury-gold">INVEST</span>DUBAI
            </h3>
            <p className="text-gray-300 mb-4">
              Your premier partner for luxury property investments and company
              setup in Dubai and Ras Al Khaimah.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-luxury-gold">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-luxury-gold">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-luxury-gold">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-luxury-gold">
                <Youtube size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/properties" className="text-gray-300 hover:text-luxury-gold">
                  Properties
                </Link>
              </li>
              <li>
                <Link to="/roi" className="text-gray-300 hover:text-luxury-gold">
                  ROI & Investment
                </Link>
              </li>
              <li>
                <Link to="/company-setup" className="text-gray-300 hover:text-luxury-gold">
                  Company Setup
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-luxury-gold">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Property Types */}
          <div>
            <h4 className="text-xl font-bold mb-4">Property Types</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/properties?type=apartments" className="text-gray-300 hover:text-luxury-gold">
                  Luxury Apartments
                </Link>
              </li>
              <li>
                <Link to="/properties?type=villas" className="text-gray-300 hover:text-luxury-gold">
                  Premium Villas
                </Link>
              </li>
              <li>
                <Link to="/properties?type=penthouses" className="text-gray-300 hover:text-luxury-gold">
                  Exclusive Penthouses
                </Link>
              </li>
              <li>
                <Link to="/properties?type=offplan" className="text-gray-300 hover:text-luxury-gold">
                  Off-Plan Projects
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-xl font-bold mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="mr-2 h-5 w-5 text-luxury-gold flex-shrink-0 mt-1" />
                <span className="text-gray-300">
                  Dubai Marina, Dubai, UAE
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="mr-2 h-5 w-5 text-luxury-gold" />
                <span className="text-gray-300">+971 50 123 4567</span>
              </li>
              <li className="flex items-center">
                <Mail className="mr-2 h-5 w-5 text-luxury-gold" />
                <span className="text-gray-300">info@investdubai.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              &copy; {new Date().getFullYear()} INVESTDUBAI. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-luxury-gold text-sm">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-luxury-gold text-sm">
                Terms of Service
              </a>
              <a href="#" className="text-gray-400 hover:text-luxury-gold text-sm">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
