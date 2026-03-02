'use client';

import { motion } from 'framer-motion';
import { Target, Eye, CheckCircle, MapPin } from 'lucide-react';

export default function About() {
  const qualityPoints = [
    'Manufacture and supply of Quality products that meets customer expectations',
    'Providing necessary resources and developing new products as per customer requirements',
    'Continual improvement in Products, Process & our Quality Management Systems',
    'Committed to meet the Statutory & Regulatory requirements',
    'Involving and motivating our employees'
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-6 section-title">
            <span className="text-[#c41e3a]">INTRO</span>
            <span className="text-[#0066b3]">DUCTION</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            <span className="font-bold text-[#0066b3]">INNOVATE ENGINEERING</span> is committed to being a quality service provider of 
            engineering solutions armed with the highest level of expertise and professionalism.
            IE was founded in <span className="font-semibold">2018</span> located in <span className="font-semibold">Coimbatore, Tamil Nadu state, INDIA</span>. 
            To meet the growing business demand the company increases the machines & manpower.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-gradient-to-r from-[#003366] to-[#0066b3] rounded-2xl p-8 mb-16 text-white"
        >
          <div className="flex flex-wrap items-center justify-center gap-8">
            <div className="flex items-center gap-3">
              <MapPin size={24} />
              <span className="text-lg">Coimbatore, Tamil Nadu, India</span>
            </div>
            <div className="h-8 w-px bg-white/30 hidden md:block"></div>
            <div className="text-lg">
              <span className="font-semibold">Serving Clients Across India</span>
            </div>
          </div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-2xl p-8 card-shadow"
          >
            <div className="inline-block bg-[#0066b3] text-white px-6 py-2 rounded-lg font-bold text-xl mb-6">
              QUALITY POLICY
            </div>
            <p className="text-gray-600 mb-6">
              We are committed to Manufacture and supply of Quality products that meets customer 
              expectations and improve our business by way of:
            </p>
            <ul className="space-y-3">
              {qualityPoints.map((point, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <CheckCircle className="text-[#0066b3] flex-shrink-0 mt-1" size={18} />
                  <span className="text-gray-600">{point}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-2xl p-8 card-shadow"
          >
            <div className="inline-block bg-[#c41e3a] text-white px-6 py-2 rounded-lg font-bold text-xl mb-6">
              VISION & MISSION
            </div>
            
            <div className="flex items-start gap-4 mb-6">
              <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center flex-shrink-0">
                <Eye className="text-[#0066b3]" size={24} />
              </div>
              <div>
                <h4 className="font-bold text-[#0066b3] mb-2">Vision</h4>
                <p className="text-gray-600">
                  To be the most admired and responsible engineering company with international 
                  footprint, delivering sustainable value to all stakeholders.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-red-50 rounded-full flex items-center justify-center flex-shrink-0">
                <Target className="text-[#c41e3a]" size={24} />
              </div>
              <div>
                <h4 className="font-bold text-[#c41e3a] mb-2">Mission</h4>
                <p className="text-gray-600">
                  We will become the most admired and responsible engineering company delivering 
                  sustainable value by: Executing projects safely, with predictable benchmark quality, 
                  cost and time. Growing the IE businesses across the value chain or across geographies 
                  and capabilities.
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center gap-4 bg-gradient-to-r from-blue-50 to-white border border-blue-100 rounded-2xl px-8 py-6">
            <div className="w-20 h-20 bg-white rounded-full shadow-lg flex items-center justify-center">
              <span className="text-[#0066b3] font-bold text-sm text-center">ISO<br/>9001:2015</span>
            </div>
            <div className="text-left">
              <h4 className="font-bold text-[#0066b3] text-lg">TÜV Austria Certified</h4>
              <p className="text-gray-500">EN ISO 9001:2015 Management System</p>
              <p className="text-sm text-gray-400">Manufacture and Supply of CNC Machined Components</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
