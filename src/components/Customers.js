'use client';

import { motion } from 'framer-motion';

const customers = [
  {
    name: 'Flowserve',
    color: '#c41e3a',
    logo: (
      <svg viewBox="0 0 180 50" className="h-10 w-auto">
        <text x="10" y="36" fontFamily="Arial Black, sans-serif" fontWeight="900" fontSize="30" fill="#c41e3a" letterSpacing="-1">FLOWSERVE</text>
        <rect x="10" y="40" width="160" height="3" rx="1.5" fill="#c41e3a" />
      </svg>
    ),
  },
  {
    name: 'TechnoMatrix',
    color: '#003399',
    logo: (
      <svg viewBox="0 0 200 50" className="h-10 w-auto">
        <circle cx="22" cy="25" r="18" fill="none" stroke="#003399" strokeWidth="3" />
        <text x="16" y="31" fontFamily="Arial, sans-serif" fontWeight="800" fontSize="14" fill="#003399">TM</text>
        <text x="46" y="34" fontFamily="Arial, sans-serif" fontWeight="700" fontSize="22" fill="#003399">TechnoMatrix</text>
      </svg>
    ),
  },
  {
    name: 'Vikrant Forge',
    color: '#cc3300',
    logo: (
      <svg viewBox="0 0 200 55" className="h-11 w-auto">
        <text x="10" y="30" fontFamily="Impact, sans-serif" fontWeight="900" fontSize="28" fill="#cc3300" letterSpacing="2">VIKRANT</text>
        <rect x="138" y="10" width="50" height="25" rx="3" fill="#cc3300" />
        <text x="141" y="28" fontFamily="Arial, sans-serif" fontWeight="800" fontSize="13" fill="white">FORGE</text>
        <text x="10" y="48" fontFamily="Arial, sans-serif" fontWeight="400" fontSize="9" fill="#666" letterSpacing="0.5">®</text>
      </svg>
    ),
  },
  {
    name: 'Amax Precision Singapore',
    color: '#003366',
    logo: (
      <svg viewBox="0 0 260 50" className="h-10 w-auto">
        <polygon points="15,40 25,8 35,40" fill="none" stroke="#003366" strokeWidth="2.5" />
        <text x="11" y="36" fontFamily="Arial, sans-serif" fontWeight="800" fontSize="10" fill="#003366">max</text>
        <text x="42" y="24" fontFamily="Arial, sans-serif" fontWeight="800" fontSize="16" fill="#003366">AMAX PRECISION SINGAPORE</text>
        <text x="42" y="40" fontFamily="Arial, sans-serif" fontWeight="600" fontSize="9" fill="#888" letterSpacing="1.5">PEOPLE-POWERED PERFECTION.</text>
      </svg>
    ),
  },
  {
    name: 'Microform Automation',
    color: '#0055a5',
    logo: (
      <svg viewBox="0 0 240 50" className="h-10 w-auto">
        <circle cx="20" cy="25" r="16" fill="#0055a5" />
        <text x="13" y="30" fontFamily="Arial Black, sans-serif" fontWeight="900" fontSize="12" fill="white">MFA</text>
        <text x="42" y="22" fontFamily="Arial, sans-serif" fontWeight="800" fontSize="16" fill="#0055a5">MICROFORM</text>
        <text x="42" y="40" fontFamily="Arial, sans-serif" fontWeight="700" fontSize="14" fill="#e65100">AUTOMATION</text>
      </svg>
    ),
  },
  {
    name: 'Vyoda',
    color: '#00a651',
    logo: (
      <svg viewBox="0 0 120 55" className="h-11 w-auto">
        <path d="M30 8 L38 18 L32 18 L32 12 Z" fill="#00a651" />
        <path d="M38 8 L42 15 L38 18 Z" fill="#8bc34a" />
        <text x="14" y="48" fontFamily="Arial, sans-serif" fontWeight="800" fontSize="24" fill="#00a651">VYODA</text>
      </svg>
    ),
  },
  {
    name: 'Pricol',
    color: '#c41e3a',
    logo: (
      <svg viewBox="0 0 130 50" className="h-10 w-auto">
        <line x1="10" y1="12" x2="24" y2="25" stroke="#c41e3a" strokeWidth="4" strokeLinecap="round" />
        <line x1="24" y1="25" x2="10" y2="38" stroke="#c41e3a" strokeWidth="4" strokeLinecap="round" />
        <line x1="10" y1="12" x2="10" y2="38" stroke="#0066b3" strokeWidth="4" strokeLinecap="round" />
        <text x="32" y="36" fontFamily="Arial, sans-serif" fontWeight="700" fontSize="26" fill="#c41e3a" fontStyle="italic">pricol</text>
      </svg>
    ),
  },
];

export default function Customers() {
  return (
    <section id="customers" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-3">
            <span className="text-[#0066b3]">OUR</span>{' '}
            <span className="text-[#c41e3a]">CUSTOMERS</span>
          </h2>
          <div className="w-12 h-0.5 bg-[#0066b3] mx-auto mb-3" />
          <p className="text-gray-400 text-sm">Trusted by leading companies across industries</p>
        </motion.div>

        {/* Logo Grid */}
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-px bg-gray-200 rounded-2xl overflow-hidden">
            {customers.map((customer, idx) => (
              <motion.div
                key={customer.name}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                className="bg-white p-8 flex items-center justify-center h-28 hover:bg-gray-50 transition-colors duration-200"
              >
                {customer.logo}
              </motion.div>
            ))}
            {/* Fill empty cell to complete grid */}
            <div className="bg-white p-8 flex items-center justify-center h-28">
              <span className="text-gray-300 text-sm font-medium">& more...</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
