'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { Settings, Cog, Zap, Box, Gauge, Ruler, RotateCcw, Wrench, Layers, ArrowRight } from 'lucide-react';

const machineCategories = {
  'Vertical Milling Center': [
    { name: 'HAAS VF4', image: '/vmc/HAASVF4.jpeg', specs: { xAxis: '1270 MM', yAxis: '508 MM', zAxis: '635 MM', spindle: '8100 R', toolPocket: '25 - BT40' }},
    { name: 'JYOTI 850', image: '/vmc/JYOTI.webp', specs: { xAxis: '800 MM', yAxis: '500 MM', zAxis: '500 MM', spindle: '10000 RPM', fourthAxis: '200 MM', toolPocket: '25 - BT40' }},
    { name: 'MAKINO S33', image: '/vmc/MAKINOS33.jpg', specs: { xAxis: '650 MM', yAxis: '500 MM', zAxis: '450 MM', spindle: '20000 R', toolPocket: '30 - HSK A63' }},
    { name: 'MAZAK FJV-250', image: '/vmc/MAZAK%20FJV-250.jpeg', specs: { xAxis: '600 MM', yAxis: '400 MM', zAxis: '400 MM', spindle: '8000 R', toolPocket: '30 - BT40' }},
    { name: 'MAKINO SLIM 3N', image: '/vmc/MAKINO%20SLIM%203N.jpg', specs: { xAxis: '500 MM', yAxis: '400 MM', zAxis: '400 MM', spindle: '10000 RPM', fourthAxis: '200 MM', toolPocket: '26 - HSK A50' }},
    { name: 'MAKINO SLIM 3N (5-AXIS)', image: '/vmc/MAKINO%20SLIM%203N%20(5-AXIS).jpeg', specs: { xAxis: '500 MM', yAxis: '400 MM', zAxis: '400 MM', spindle: '10000 RPM', fifthAxis: 'A + C', toolPocket: '26 - HSK A50' }},
    { name: 'HAAS VF2', image: '/vmc/HAAS%20VF2.jpg', specs: { xAxis: '700 MM', yAxis: '400 MM', zAxis: '500 MM', spindle: '10000 RPM', fourthAxis: '200 MM', toolPocket: '26' }},
    { name: 'YEONG CHIN (YCM-FV 56A)', image: '/vmc/YEONG%20CHIN%20(YCM-FV%2056A).jpeg', specs: { xAxis: '560 MM', yAxis: '410 MM', zAxis: '440 MM', spindle: '10000 R', toolPocket: '20 - BT40' }},
    { name: 'FANUC ROBODRILL α-T21iEe', image: '/vmc/ANUC%20ROBODRILL%20%CE%B1-T21iEe.jpeg', specs: { xAxis: '500 MM', yAxis: '400 MM', zAxis: '330 MM', fourthAxis: '200 MM', spindle: '24000 R', toolPocket: '21 - BT30 A24' }},
    { name: 'JYOTI RDX 20', image: '/vmc/JYOTI%20RDX%2020.jpeg', specs: { xAxis: '820 MM', yAxis: '510 MM', zAxis: '510 MM', spindle: '8000 R', toolPocket: '20 - BT40' }},
  ],
  'Turning Center': [
    { name: 'TSUGAMI Mi06JC-II', image: '/tc/TSUGAMI%20Mi06JC-II.jpeg', specs: { xAxis: '210 MM', yAxis: '155 MM', maxTurning: 'Ø220 MM', spindle: '4500 min-1', stations: '8 Stage' }},
    { name: 'JYOTI DX2005A', image: '/tc/JYOTI%20DX2005A.jpeg', specs: { xAxis: '200 MM', zAxis: '500 MM', maxTurning: '250 MM', spindle: '4000 RPM', stations: '8 Stage' }},
    { name: 'TSUGAMI Mi08j-II', image: '/tc/TSUGAMI%20Mi08j-II.jpeg', specs: { xAxis: '260 MM', zAxis: '300 MM', maxTurning: 'Ø280', spindle: '4000 min-1', stations: '8 Stag' }},
    { name: 'GOODWAY GCL-2', image: '/tc/GOODWAY%20GCL-2.jpeg', specs: { xAxis: '125 MM', zAxis: '320/620 MM', maxTurning: 'Ø230 MM', spindle: '4500 RPM', stations: '8 Stag' }},
    { name: 'JYOTI DX 20074B', image: '/tc/JYOTI%20DX%2020074B.webp', specs: { xAxis: '175 MM', zAxis: '400 MM', maxTurning: 'Ø320', spindle: '4000 RPM', stations: '8 Stag' }},
    { name: 'MARSHALL 3050', image: '/tc/MARSHALL%203050.jpeg', specs: { xAxis: '160 MM', zAxis: '525/775 MM', maxTurning: 'Ø300 MM', spindle: '4000 RPM', stations: '8 Stag' }},
  ],
  'Turn Milling Center': [
    { name: 'TSUGAMI BO205', image: '/tmc/TSUGAMI%20Mi06JC-II.jpeg', specs: { doubleSpindle: 'Bar', maxTurn: '20 MM x 150 L', toolStag: '21', liveTools: '4', mainSpindle: '10,000 RPM', subSpindle: '12,000 RPM' }},
  ],
  'Horizontal Machine Center': [
    { name: 'JYOTI HX 400', image: '/hmc/JYOTI%20HX%20400.webp', specs: { toolHolder: 'BT 40', stations: '24', maxRPM: '10000', palletSize: '400 x 400', xAxis: '600', yAxis: '510', zAxis: '510' }},
  ],
  'Wire Cut Machine': [
    { name: 'SKITEK SF 45', image: '/wcm/SKITEK%20SF%2045.jpeg', specs: { tableSize: '580 X 850', maxWorkpiece: '450 Kgs', xAxis: '550', yAxis: '450', zAxis: '500' }},
  ],
};

const categoryConfig = {
  'Vertical Milling Center': { icon: Settings, color: '#0066b3', desc: 'High-precision vertical machining' },
  'Turning Center': { icon: Cog, color: '#c41e3a', desc: 'Advanced CNC turning operations' },
  'Turn Milling Center': { icon: Zap, color: '#0066b3', desc: 'Combined turning & milling' },
  'Horizontal Machine Center': { icon: Box, color: '#c41e3a', desc: 'Horizontal machining solutions' },
  'Wire Cut Machine': { icon: Layers, color: '#0066b3', desc: 'Precision wire EDM cutting' },
};

const specIcons = {
  xAxis: Ruler,
  yAxis: Ruler,
  zAxis: Ruler,
  spindle: Gauge,
  toolPocket: Wrench,
  fourthAxis: RotateCcw,
  fifthAxis: RotateCcw,
  maxTurning: Ruler,
  stations: Layers,
  toolHolder: Wrench,
  maxRPM: Gauge,
  palletSize: Box,
  tableSize: Ruler,
  maxWorkpiece: Box,
  doubleSpindle: Gauge,
  maxTurn: Ruler,
  toolStag: Wrench,
  liveTools: Wrench,
  mainSpindle: Gauge,
  subSpindle: Gauge,
};

const specLabels = {
  xAxis: 'X Axis',
  yAxis: 'Y Axis',
  zAxis: 'Z Axis',
  spindle: 'Spindle',
  toolPocket: 'Tool Pocket',
  fourthAxis: '4th Axis',
  fifthAxis: '5th Axis',
  maxTurning: 'Max Turning',
  stations: 'Stations',
  toolHolder: 'Tool Holder',
  maxRPM: 'Max RPM',
  palletSize: 'Pallet Size',
  tableSize: 'Table Size',
  maxWorkpiece: 'Max Workpiece',
  doubleSpindle: 'Double Spindle',
  maxTurn: 'Max Turn',
  toolStag: 'Tool Stag',
  liveTools: 'Live Tools',
  mainSpindle: 'Main Spindle',
  subSpindle: 'Sub Spindle',
};

export default function Products() {
  const [activeCategory, setActiveCategory] = useState('Vertical Milling Center');
  const categories = Object.keys(machineCategories);

  return (
    <section id="products" className="py-24 bg-[#f8f9fb] relative overflow-hidden">
      {/* Industrial background pattern */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23003366' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
      }} />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-[#0066b3]/10 text-[#0066b3] px-4 py-2 rounded-full text-sm font-semibold mb-4">
            <Settings size={16} className="animate-spin" style={{ animationDuration: '3s' }} />
            OUR MACHINERY
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-[#0066b3]">MACHINE</span>{' '}
            <span className="text-[#c41e3a]">INFORMATION</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[#0066b3] to-[#c41e3a] mx-auto mb-4 rounded-full" />
          <p className="text-gray-500 max-w-2xl mx-auto text-lg">
            State-of-the-art CNC machines delivering precision engineering with industry-leading accuracy
          </p>
        </motion.div>

        {/* Category Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-14"
        >
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => {
              const config = categoryConfig[category];
              const Icon = config?.icon || Settings;
              const isActive = activeCategory === category;
              return (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`group relative flex items-center gap-2.5 px-5 py-3 rounded-xl font-medium text-sm transition-all duration-300 ${
                    isActive
                      ? 'bg-[#003366] text-white shadow-lg shadow-[#003366]/25 scale-105'
                      : 'bg-white text-gray-600 hover:bg-white hover:shadow-md border border-gray-200/80 hover:border-[#0066b3]/30'
                  }`}
                >
                  <Icon size={18} className={isActive ? 'text-white' : 'text-[#0066b3]'} />
                  <span>{category}</span>
                  {isActive && (
                    <span className="ml-1 bg-white/20 text-xs px-2 py-0.5 rounded-full">
                      {machineCategories[category].length}
                    </span>
                  )}
                </button>
              );
            })}
          </div>
          {/* Category description */}
          <p className="text-center text-sm text-gray-400 mt-4">
            {categoryConfig[activeCategory]?.desc}
          </p>
        </motion.div>

        {/* Machine Cards Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5"
          >
            {machineCategories[activeCategory].map((machine, idx) => (
              <motion.div
                key={machine.name}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.08, duration: 0.4 }}
                className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl border border-gray-100 transition-all duration-500 hover:-translate-y-1"
              >
                {/* Machine Image */}
                <div className="relative h-36 overflow-hidden">
                  <Image
                    src={machine.image}
                    alt={machine.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#003366]/80 via-[#003366]/20 to-transparent" />
                  
                  {/* Category badge */}
                  <div className="absolute top-2.5 left-2.5">
                    <div className="bg-white/95 backdrop-blur-sm text-[#0066b3] px-2 py-1 rounded-md text-[10px] font-bold flex items-center gap-1 shadow-sm">
                      <Settings size={10} />
                      {activeCategory}
                    </div>
                  </div>

                  {/* Machine name overlay */}
                  <div className="absolute bottom-2.5 left-3 right-3">
                    <h3 className="text-base font-bold text-white drop-shadow-lg leading-tight">
                      {machine.name}
                    </h3>
                  </div>
                </div>

                {/* Specs Section */}
                <div className="p-4">
                  {/* Detailed specs */}
                  <div className="space-y-1">
                    {Object.entries(machine.specs).map(([key, value]) => {
                      const SpecIcon = specIcons[key] || Settings;
                      return (
                        <div
                          key={key}
                          className="flex items-center justify-between py-1 hover:bg-gray-50 rounded px-1.5 -mx-1.5 transition-colors"
                        >
                          <div className="flex items-center gap-1.5">
                            <SpecIcon size={11} className="text-[#0066b3]" />
                            <span className="text-xs text-gray-500">
                              {specLabels[key] || key.replace(/([A-Z])/g, ' $1').trim()}
                            </span>
                          </div>
                          <span className="text-xs font-bold text-[#003366] tabular-nums">
                            {value}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Bottom accent bar */}
                <div className="h-1 bg-gradient-to-r from-[#0066b3] via-[#003366] to-[#c41e3a] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Summary Stats Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-16 bg-gradient-to-r from-[#003366] to-[#0066b3] rounded-2xl p-8 text-white"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-3xl md:text-4xl font-bold mb-1">20+</div>
              <div className="text-blue-200 text-sm">CNC Machines</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold mb-1">5</div>
              <div className="text-blue-200 text-sm">Machine Categories</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold mb-1">24K</div>
              <div className="text-blue-200 text-sm">Max RPM</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold mb-1">5</div>
              <div className="text-blue-200 text-sm">Axis Capability</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
