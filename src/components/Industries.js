'use client';

import { motion } from 'framer-motion';
import { Car, Droplets, Zap, Wrench, Factory, Fuel, Plane, Heart, Beaker } from 'lucide-react';

const industries = [
  { name: 'Pump', icon: Droplets, description: 'Precision pump components' },
  { name: 'Automobile', icon: Car, description: 'Automotive parts manufacturing' },
  { name: 'Energy', icon: Zap, description: 'Energy sector components' },
  { name: 'General Engineering', icon: Wrench, description: 'Diverse engineering solutions' },
  { name: 'Machine Manufacture', icon: Factory, description: 'Machine building parts' },
  { name: 'Oil & Gas', icon: Fuel, description: 'Oil & gas industry parts' },
  { name: 'Aerospace', icon: Plane, description: 'Aviation components' },
  { name: 'Medical', icon: Heart, description: 'Medical device parts' },
  { name: 'Plastic', icon: Beaker, description: 'Plastic industry tooling' },
];

export default function Industries() {
  return (
    <section id="industries" className="py-20 bg-gradient-to-br from-[#003366] via-[#0066b3] to-[#003366] text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-64 h-64 border border-white rounded-full"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 border border-white rounded-full"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">
            SUPPLY <span className="text-[#4da6ff]">INDUSTRIES</span>
          </h2>
          <p className="text-blue-100 max-w-2xl mx-auto">
            Delivering precision components across diverse industrial sectors
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {industries.map((industry, idx) => {
            const Icon = industry.icon;
            return (
              <motion.div
                key={industry.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center hover:bg-white/20 transition-all hover:scale-105 cursor-pointer border border-white/10"
              >
                <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon size={32} className="text-white" />
                </div>
                <h3 className="font-bold text-lg mb-2">{industry.name}</h3>
                <p className="text-blue-200 text-sm">{industry.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
