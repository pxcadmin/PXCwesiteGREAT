import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-12 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <img 
              src="https://customer-assets.emergentagent.com/job_05098993-4059-4a1d-a237-305f60e8d292/artifacts/yxfmdpsc_LOGOs%20PUZZLE%20PXC%20-%202%282%29.png" 
              alt="PXC Logo" 
              className="h-12 w-auto mb-4"
            />
            <p className="text-gray-400 text-sm mb-4 max-w-md">
              AI-Fueled, People-Powered patient experience transformation for medical practices. 
              Turning chaos into thriving patient-staff powerhouses.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 bg-[#B2EBF9]/10 hover:bg-[#B2EBF9]/20 rounded-full flex items-center justify-center transition-all hover:scale-110">
                <Facebook className="w-5 h-5 text-[#B2EBF9]" />
              </a>
              <a href="#" className="w-10 h-10 bg-[#AEA1EA]/10 hover:bg-[#AEA1EA]/20 rounded-full flex items-center justify-center transition-all hover:scale-110">
                <Twitter className="w-5 h-5 text-[#AEA1EA]" />
              </a>
              <a href="#" className="w-10 h-10 bg-[#B2EBF9]/10 hover:bg-[#B2EBF9]/20 rounded-full flex items-center justify-center transition-all hover:scale-110">
                <Linkedin className="w-5 h-5 text-[#B2EBF9]" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold mb-4 text-[#B2EBF9]">Quick Links</h4>
            <div className="space-y-2">
              <Link to="/" className="block text-gray-400 hover:text-[#AEA1EA] text-sm transition-colors">Home</Link>
              <Link to="/about" className="block text-gray-400 hover:text-[#AEA1EA] text-sm transition-colors">About</Link>
              <Link to="/services" className="block text-gray-400 hover:text-[#AEA1EA] text-sm transition-colors">Services</Link>
              <Link to="/blog" className="block text-gray-400 hover:text-[#AEA1EA] text-sm transition-colors">Blog</Link>
              <Link to="/contact" className="block text-gray-400 hover:text-[#AEA1EA] text-sm transition-colors">Contact</Link>
              <Link to="/shop" className="block text-gray-400 hover:text-[#AEA1EA] text-sm transition-colors">The Puzzle Shop</Link>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-bold mb-4 text-[#AEA1EA]">Get In Touch</h4>
            <div className="space-y-3">
              <a href="mailto:info@pxconsulting.com" className="flex items-center gap-2 text-gray-400 hover:text-[#B2EBF9] text-sm transition-colors">
                <Mail className="w-4 h-4" />
                info@pxconsulting.com
              </a>
              <a href="tel:+1234567890" className="flex items-center gap-2 text-gray-400 hover:text-[#B2EBF9] text-sm transition-colors">
                <Phone className="w-4 h-4" />
                (123) 456-7890
              </a>
              <div className="flex items-start gap-2 text-gray-400 text-sm">
                <MapPin className="w-4 h-4 flex-shrink-0 mt-1" />
                <span>Nationwide Services</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm text-center md:text-left">
              &copy; 2024 Patient eXperience Consulting. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-[#B2EBF9] transition-colors">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-[#AEA1EA] transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
