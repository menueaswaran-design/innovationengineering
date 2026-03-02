'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Award } from 'lucide-react';
import Image from 'next/image';

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] gradient-hero overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-72 h-72 bg-[#0066b3] rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#c41e3a] rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[70vh]">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 bg-blue-50 text-[#0066b3] px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Award size={16} />
              ISO 9001:2015 Certified
            </div>
            
            <h1 className="text-5xl lg:text-6xl font-bold leading-tight mb-6">
              <span className="text-[#0066b3]">INNOVATE</span>
              <br />
              <span className="text-[#c41e3a]">ENGINEERING</span>
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Committed to being a quality service provider of engineering solutions 
              armed with the highest level of expertise and professionalism. 
              Manufacturing precision CNC machined components for Automobile, Pump, 
              and General Engineering Industries.
            </p>

            <div className="flex flex-wrap gap-4 mb-12">
              <a 
                href="#products" 
                className="inline-flex items-center gap-2 bg-gradient-to-r from-[#0066b3] to-[#003366] text-white px-8 py-4 rounded-full font-semibold hover:shadow-xl hover:scale-105 transition-all"
              >
                Explore Products
                <ArrowRight size={20} />
              </a>
              <a 
                href="#contact" 
                className="inline-flex items-center gap-2 border-2 border-[#0066b3] text-[#0066b3] px-8 py-4 rounded-full font-semibold hover:bg-[#0066b3] hover:text-white transition-all"
              >
                Get Quote
              </a>
            </div>

            <div className="grid grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-[#0066b3]">2018</div>
                <div className="text-sm text-gray-500">Founded</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-[#0066b3]">20+</div>
                <div className="text-sm text-gray-500">CNC Machines</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-[#0066b3]">9+</div>
                <div className="text-sm text-gray-500">Industries</div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative hidden lg:block"
          >
            <div className="relative w-full h-[600px]">
              {/* Top center - Image 1 */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-40 h-40 rounded-3xl rotate-45 overflow-hidden shadow-2xl">
                <div className="-rotate-45 scale-150 w-full h-full relative">
                  <Image src="/home/cnc1.jpeg" alt="CNC Machine" fill className="object-cover" />
                </div>
              </div>
              
              {/* Left - Image 2 */}
              <div className="absolute top-32 left-20 w-36 h-36 rounded-3xl rotate-45 overflow-hidden shadow-2xl">
                <div className="-rotate-45 scale-150 w-full h-full relative">
                  <Image src="/home/cnc2.jpeg" alt="CNC Machining" fill className="object-cover" />
                </div>
              </div>
              
              {/* Right - Image 3 */}
              <div className="absolute top-32 right-20 w-36 h-36 rounded-3xl rotate-45 overflow-hidden shadow-2xl">
                <div className="-rotate-45 scale-[1.8] w-full h-full">
                  <img src="/home/cnc3.jpeg" alt="Precision Parts" className="w-full h-full object-cover" />
                </div>
              </div>
              
              {/* Center Logo */}
              <div className="absolute top-64 left-1/2 -translate-x-1/2 w-44 h-44 rounded-3xl rotate-45 overflow-hidden shadow-2xl bg-gradient-to-br from-[#c41e3a] to-[#8b1528]">
                <div className="-rotate-45 w-full h-full flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-16 h-16 border-4 border-white rounded-full flex items-center justify-center mx-auto mb-2">
                      <span className="text-white font-bold text-xl">IE</span>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Bottom left - Image 4 */}
              <div className="absolute bottom-20 left-10 w-36 h-36 rounded-3xl rotate-45 overflow-hidden shadow-2xl">
                <div className="-rotate-45 scale-150 w-full h-full relative">
                  <Image src="/home/cnc4.jpeg" alt="5-Axis Milling" fill className="object-cover" />
                </div>
              </div>
              
              {/* Bottom right - Image 5 */}
              <div className="absolute bottom-10 right-20 w-36 h-36 rounded-3xl rotate-45 overflow-hidden shadow-2xl">
                <div className="-rotate-45 scale-150 w-full h-full relative">
                  <Image src="/home/cnc5.jpeg" alt="Quality Parts" fill className="object-cover" />
                </div>
              </div>

              {/* Blue accent diamond */}
              <div className="absolute bottom-52 left-1/3 w-24 h-24 rounded-3xl rotate-45 overflow-hidden shadow-2xl bg-[#4da6ff]">
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-[#0066b3] rounded-full flex justify-center pt-2">
          <div className="w-1.5 h-3 bg-[#0066b3] rounded-full"></div>
        </div>
      </div>
    </section>
  );
}
