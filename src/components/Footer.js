'use client';

import Link from 'next/link';
import { Phone, Mail, MapPin, Linkedin, Facebook, Twitter } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '#about' },
    { name: 'Products', href: '#products' },
    { name: 'Industries', href: '#industries' },
    { name: 'Quality', href: '#quality' },
    { name: 'Contact', href: '#contact' },
  ];

  const products = [
    'Vertical Milling Center',
    'Turning Center',
    'Turn Milling Center',
    'Horizontal Machine Center',
    'Wire Cut Machine',
  ];

  return (
    <footer className="bg-[#0a1929] text-white">
      <div className="container mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-[#c41e3a] to-[#8b1528] rounded-full flex items-center justify-center">
                <div className="w-8 h-8 border-2 border-white rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-sm">IE</span>
                </div>
              </div>
              <div>
                <h3 className="font-bold text-lg">INNOVATE</h3>
                <p className="text-[#4da6ff] text-sm font-semibold">ENGINEERING</p>
              </div>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Committed to being a quality service provider of engineering solutions 
              armed with the highest level of expertise and professionalism.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#0066b3] transition">
                <Linkedin size={18} />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#0066b3] transition">
                <Facebook size={18} />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#0066b3] transition">
                <Twitter size={18} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href}
                    className="text-gray-400 hover:text-white hover:pl-2 transition-all"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6">Products</h4>
            <ul className="space-y-3">
              {products.map((product) => (
                <li key={product}>
                  <Link 
                    href="#products"
                    className="text-gray-400 hover:text-white hover:pl-2 transition-all"
                  >
                    {product}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6">Contact Us</h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin size={18} className="text-[#4da6ff] flex-shrink-0 mt-1" />
                <p className="text-gray-400 text-sm">
                  SF.270 / 2, D.NO.1 / 703, GEM Industrial Park,
                  Coimbatore - 641 107, INDIA
                </p>
              </div>
              <div className="flex items-center gap-3">
                <Phone size={18} className="text-[#4da6ff]" />
                <div className="text-gray-400 text-sm">
                  <p>+91 9442440063</p>
                  <p>+91 9942230083</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Mail size={18} className="text-[#4da6ff]" />
                <p className="text-gray-400 text-sm">innovatengg@gmail.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container mx-auto px-6 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 text-sm text-center md:text-left">
              © {currentYear} Innovate Engineering. All rights reserved.
            </p>
            <div className="flex items-center gap-4">
              <span className="text-gray-500 text-sm">ISO 9001:2015 Certified</span>
              <div className="w-px h-4 bg-gray-600"></div>
              <span className="text-gray-500 text-sm">TÜV Austria</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
