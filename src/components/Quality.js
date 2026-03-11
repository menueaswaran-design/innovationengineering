'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useRef, useState } from 'react';
import { CheckCircle, Award, Shield, Microscope, ChevronLeft, ChevronRight } from 'lucide-react';

const materials = [
  {
    name: 'Steel',
    image: '/home/cnc1.jpeg',
    grades: 'EN8, C1045, 4140, EN19, 4340, C45, P20 & more',
  },
  {
    name: 'Stainless Steel',
    image: '/home/cnc2.jpeg',
    grades: 'SS304, SS316L, SS317L, SS410, 17-4PH & more',
  },
  {
    name: 'Duplex & Super Duplex',
    image: '/home/cnc3.jpeg',
    grades: 'All grades available',
  },
  {
    name: 'Bronze',
    image: '/home/cnc4.jpeg',
    grades: 'C93200, C93800',
  },
  {
    name: 'Special Materials',
    image: '/home/cnc5.jpeg',
    grades: 'Brass, Aluminum, Inconel, Monel K 500, Zirconium, Copper & more',
  },
];

const qualityFeatures = [
  { icon: Microscope, title: 'CMM Inspection', description: 'Coordinate Measuring Machine for precise measurements' },
  { icon: Shield, title: 'Quality Assurance', description: 'Rigorous testing at every production stage' },
  { icon: Award, title: 'ISO Certified', description: 'ISO 9001:2015 certified processes' },
  { icon: CheckCircle, title: 'Zero Defect', description: 'Commitment to zero-defect delivery' },
];

const productImages = [
  'ie1','ie2','ie3','ie4','ie5','ie6','ie7','ie8','ie9',
  'ie10','ie11','ie12','ie13','ie14','ie16','ie17','ie18',
  'ie19','ie20','ie21','ie22','ie23','ie24',
];

function PrecisionComponentsScroller() {
  const scrollRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const SCROLL_AMOUNT = 480;

  const updateArrows = () => {
    const el = scrollRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 0);
    setCanScrollRight(el.scrollLeft + el.clientWidth < el.scrollWidth - 1);
  };

  const scrollLeft = () => {
    scrollRef.current?.scrollBy({ left: -SCROLL_AMOUNT, behavior: 'smooth' });
    setTimeout(updateArrows, 350);
  };

  const scrollRight = () => {
    scrollRef.current?.scrollBy({ left: SCROLL_AMOUNT, behavior: 'smooth' });
    setTimeout(updateArrows, 350);
  };

  // Split into two rows
  const row1 = productImages.filter((_, i) => i % 2 === 0);
  const row2 = productImages.filter((_, i) => i % 2 === 1);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="mt-20"
    >
      <div className="text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-bold mb-3">
          <span className="text-[#0066b3]">PRECISION</span>{' '}
          <span className="text-[#c41e3a]">COMPONENTS</span>
        </h2>
        <div className="w-16 h-1 bg-[#c41e3a] mx-auto rounded-full" />
      </div>

      <div className="relative">
        {/* Left Arrow */}
        <button
          onClick={scrollLeft}
          disabled={!canScrollLeft}
          className={`absolute left-0 top-1/2 -translate-y-1/2 z-10 w-11 h-11 flex items-center justify-center rounded-full bg-white shadow-lg border border-gray-200 transition-all duration-200 -translate-x-1/2
            ${canScrollLeft ? 'opacity-100 hover:bg-[#0066b3] hover:text-white hover:border-[#0066b3]' : 'opacity-30 cursor-not-allowed'}`}
          aria-label="Scroll left"
        >
          <ChevronLeft size={22} />
        </button>

        {/* Scrollable container */}
        <div
          ref={scrollRef}
          onScroll={updateArrows}
          className="overflow-x-auto overflow-y-hidden scrollbar-hide"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          <div className="flex flex-col gap-3" style={{ width: 'max-content' }}>
            {/* Row 1 */}
            <div className="flex gap-3">
              {row1.map((name) => (
                <div key={name} className="relative w-[324px] h-[224px] shrink-0 rounded-xl overflow-hidden group">
                  <Image
                    src={`/products/${name}.jpeg`}
                    alt={name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
              ))}
            </div>
            {/* Row 2 */}
            <div className="flex gap-3">
              {row2.map((name) => (
                <div key={name} className="relative w-[324px] h-[224px] shrink-0 rounded-xl overflow-hidden group">
                  <Image
                    src={`/products/${name}.jpeg`}
                    alt={name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Arrow */}
        <button
          onClick={scrollRight}
          disabled={!canScrollRight}
          className={`absolute right-0 top-1/2 -translate-y-1/2 z-10 w-11 h-11 flex items-center justify-center rounded-full bg-white shadow-lg border border-gray-200 transition-all duration-200 translate-x-1/2
            ${canScrollRight ? 'opacity-100 hover:bg-[#0066b3] hover:text-white hover:border-[#0066b3]' : 'opacity-30 cursor-not-allowed'}`}
          aria-label="Scroll right"
        >
          <ChevronRight size={22} />
        </button>
      </div>
    </motion.div>
  );
}

export default function Quality() {
  return (
    <section id="quality" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-3">
              <span className="text-[#0066b3]">USED</span>{' '}
              <span className="text-[#c41e3a]">MATERIAL</span>
            </h2>
            <div className="w-16 h-1 bg-[#0066b3] mx-auto mb-3 rounded-full" />
            <p className="text-gray-500 text-sm max-w-lg mx-auto">
              We work with a wide range of materials to meet diverse manufacturing requirements
            </p>
          </div>

          {/* Materials — image cards */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5">
            {materials.map((mat, idx) => (
              <motion.div
                key={mat.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.08 }}
                className="group relative rounded-2xl overflow-hidden h-64 cursor-default"
              >
                <Image
                  src={mat.image}
                  alt={mat.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#003366]/90 via-[#003366]/40 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <h3 className="text-white font-bold text-lg mb-2">{mat.name}</h3>
                  <div className="flex flex-wrap gap-1">
                    {mat.grades.split(', ').map((grade) => (
                      <span
                        key={grade}
                        className="bg-white/90 text-[#003366] text-[10px] font-semibold px-2 py-0.5 rounded"
                      >
                        {grade}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-3">
              <span className="text-[#c41e3a]">QUALITY</span>{' '}
              <span className="text-[#0066b3]">STANDARDS</span>
            </h2>
            <div className="w-16 h-1 bg-[#c41e3a] mx-auto mb-3 rounded-full" />
            <p className="text-gray-500 text-sm max-w-lg mx-auto">
              Precision inspection and quality control at every step
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {qualityFeatures.map((feature, idx) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.08 }}
                  className="bg-white rounded-xl p-5 text-center border border-gray-100 hover:shadow-md hover:border-[#0066b3]/20 transition-all duration-200"
                >
                  <div className="w-12 h-12 bg-[#0066b3] rounded-lg flex items-center justify-center mx-auto mb-3">
                    <Icon size={22} className="text-white" />
                  </div>
                  <h3 className="font-bold text-gray-800 text-sm mb-1">{feature.title}</h3>
                  <p className="text-gray-400 text-xs leading-relaxed">{feature.description}</p>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        <PrecisionComponentsScroller />
      </div>
    </section>
  );
}
