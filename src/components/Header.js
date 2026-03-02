'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, ChevronDown, Phone, Mail } from 'lucide-react';

const productCategories = [
  {
    title: 'Vertical Milling Center',
    items: [
      'HAAS VF4',
      'JYOTI 850',
      'MAKINO S33',
      'MAZAK FJV-250',
      'MAKINO SLIM 3N',
      'MAKINO SLIM 3N (5-AXIS)',
      'MAKINO S33 (Double Pallet)',
      'HAAS VF2',
      'YEONG CHIN (YCM-FV 56A)',
      'FANUC ROBODRILL α-T21iEe',
      'JYOTI RDX 20'
    ]
  },
  {
    title: 'Turning Center',
    items: [
      'TSUGAMI Mi06JC-II',
      'JYOTI DX2005A',
      'TSUGAMI Mi08j-II',
      'GOODWAY GCL-2',
      'JYOTI DX 20074B',
      'MARSHALL 3050'
    ]
  },
  {
    title: 'Turn Milling Center',
    items: ['TSUGAMI BO205 - ///']
  },
  {
    title: 'Horizontal Machine Center',
    items: ['JYOTI HX 400']
  },
  {
    title: 'Wire Cut Machine',
    items: ['SKITEK SF 45']
  }
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <div className="hidden md:block bg-gradient-to-r from-[#003366] to-[#0066b3] text-white py-2">
        <div className="container mx-auto px-6 flex justify-between items-center text-sm">
          <div className="flex items-center gap-6">
            <a href="tel:+919442440063" className="flex items-center gap-2 hover:text-blue-200 transition">
              <Phone size={14} />
              +91 9442440063
            </a>
            <a href="mailto:innovatengg@gmail.com" className="flex items-center gap-2 hover:text-blue-200 transition">
              <Mail size={14} />
              innovatengg@gmail.com
            </a>
          </div>
          <div className="text-blue-100">
            ISO 9001:2015 Certified Company
          </div>
        </div>
      </div>

      <header className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-lg' : 'bg-white/95 backdrop-blur-sm'
      }`}>
        <nav className="container mx-auto px-6">
          <div className="flex items-center justify-between h-20">
            <Link href="/" className="flex items-center gap-3">
              <div className="relative w-14 h-14">
                <div className="absolute inset-0 bg-gradient-to-br from-[#c41e3a] to-[#8b1528] rounded-full flex items-center justify-center">
                  <div className="w-10 h-10 border-2 border-white rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-lg">IE</span>
                  </div>
                </div>
              </div>
              <div>
                <h1 className="text-xl font-bold">
                  <span className="text-[#0066b3]">INNOVATE</span>
                </h1>
                <p className="text-[#c41e3a] text-sm font-semibold tracking-wider">ENGINEERING</p>
              </div>
            </Link>

            <div className="hidden lg:flex items-center gap-8">
              <Link href="/" className="font-medium text-gray-700 hover:text-[#0066b3] transition">
                Home
              </Link>
              <Link href="/about" className="font-medium text-gray-700 hover:text-[#0066b3] transition">
                About Us
              </Link>
              
              <div 
                className="relative dropdown"
                onMouseEnter={() => setActiveDropdown('products')}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button className="flex items-center gap-1 font-medium text-gray-700 hover:text-[#0066b3] transition py-6">
                  Products
                  <ChevronDown size={16} className={`transition-transform ${activeDropdown === 'products' ? 'rotate-180' : ''}`} />
                </button>
                
                <div className={`dropdown-menu absolute top-full left-1/2 -translate-x-1/2 w-[700px] bg-white rounded-xl shadow-2xl p-6 ${
                  activeDropdown === 'products' ? 'opacity-100 visible translate-y-0' : ''
                }`}>
                  <div className="grid grid-cols-3 gap-6">
                    {productCategories.map((category, idx) => (
                      <div key={idx}>
                        <h3 className="font-bold text-[#0066b3] mb-3 text-sm border-b border-blue-100 pb-2">
                          {category.title}
                        </h3>
                        <ul className="space-y-2">
                          {category.items.map((item, itemIdx) => (
                            <li key={itemIdx}>
                              <Link 
                                href="#products"
                                className="text-sm text-gray-600 hover:text-[#0066b3] hover:pl-2 transition-all block"
                              >
                                {item}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <Link href="#industries" className="font-medium text-gray-700 hover:text-[#0066b3] transition">
                Industries
              </Link>
              <Link href="#quality" className="font-medium text-gray-700 hover:text-[#0066b3] transition">
                Quality
              </Link>
              <Link href="#customers" className="font-medium text-gray-700 hover:text-[#0066b3] transition">
                Customers
              </Link>
              <Link 
                href="#contact" 
                className="bg-gradient-to-r from-[#0066b3] to-[#003366] text-white px-6 py-2.5 rounded-full font-medium hover:shadow-lg hover:scale-105 transition-all"
              >
                Contact Us
              </Link>
            </div>

            <button 
              className="lg:hidden p-2 text-gray-700"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </nav>

        {isMenuOpen && (
          <div className="lg:hidden bg-white border-t shadow-xl">
            <div className="container mx-auto px-6 py-4 space-y-4">
              <Link href="/" className="block py-2 font-medium text-gray-700">Home</Link>
              <Link href="/about" className="block py-2 font-medium text-gray-700">About Us</Link>
              
              <div>
                <button 
                  onClick={() => setActiveDropdown(activeDropdown === 'mobile-products' ? null : 'mobile-products')}
                  className="flex items-center justify-between w-full py-2 font-medium text-gray-700"
                >
                  Products
                  <ChevronDown size={16} className={`transition-transform ${activeDropdown === 'mobile-products' ? 'rotate-180' : ''}`} />
                </button>
                {activeDropdown === 'mobile-products' && (
                  <div className="pl-4 py-2 space-y-3">
                    {productCategories.map((category, idx) => (
                      <div key={idx}>
                        <h4 className="font-semibold text-[#0066b3] text-sm">{category.title}</h4>
                        <ul className="pl-3 space-y-1 mt-1">
                          {category.items.slice(0, 3).map((item, itemIdx) => (
                            <li key={itemIdx}>
                              <Link href="#products" className="text-sm text-gray-600">{item}</Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              <Link href="#industries" className="block py-2 font-medium text-gray-700">Industries</Link>
              <Link href="#quality" className="block py-2 font-medium text-gray-700">Quality</Link>
              <Link href="#customers" className="block py-2 font-medium text-gray-700">Customers</Link>
              <Link 
                href="#contact" 
                className="block text-center bg-gradient-to-r from-[#0066b3] to-[#003366] text-white px-6 py-3 rounded-full font-medium"
              >
                Contact Us
              </Link>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
