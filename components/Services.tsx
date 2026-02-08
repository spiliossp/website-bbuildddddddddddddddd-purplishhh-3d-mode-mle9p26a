'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const Services = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const services = [
    {
      title: '3D Web Experiences',
      description: 'Stunning three-dimensional interfaces that engage users with interactive elements, smooth animations, and immersive storytelling',
      features: ['Interactive 3D Models', 'WebGL Integration', 'Smooth Animations', 'Cross-Platform'],
      gradient: 'from-blue-500 to-purple-600',
    },
    {
      title: 'Custom Development',
      description: 'Bespoke web solutions built with cutting-edge technologies, optimized for performance, scalability, and user experience',
      features: ['Modern Frameworks', 'Responsive Design', 'Performance First', 'SEO Optimized'],
      gradient: 'from-purple-600 to-pink-600',
    },
    {
      title: 'Motion Design',
      description: 'Captivating animations and micro-interactions that bring your brand to life with fluid, purposeful motion that delights users',
      features: ['Framer Motion', 'GSAP Animations', 'Scroll Effects', 'Page Transitions'],
      gradient: 'from-pink-600 to-red-600',
    },
    {
      title: 'Brand Identity',
      description: 'Comprehensive visual systems that define your digital presence with cohesive design language, color palettes, and typography',
      features: ['Visual Systems', 'Style Guides', 'Design Tokens', 'Component Libraries'],
      gradient: 'from-red-600 to-orange-600',
    },
    {
      title: 'UI/UX Design',
      description: 'User-centered design that prioritizes usability, accessibility, and aesthetic appeal to create memorable digital experiences',
      features: ['User Research', 'Prototyping', 'Usability Testing', 'Accessibility'],
      gradient: 'from-orange-600 to-yellow-600',
    },
    {
      title: 'Consulting',
      description: 'Strategic guidance on digital transformation, technology stack selection, and optimization of your existing web presence',
      features: ['Tech Strategy', 'Performance Audit', 'Best Practices', 'Training'],
      gradient: 'from-yellow-600 to-green-600',
    },
  ]

  return (
    <section id="services" ref={ref} className="py-24 lg:py-32 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse-slow" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse-slow" style={{ animationDelay: '2s' }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.span
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            className="inline-block px-4 py-2 glass-effect rounded-full text-sm font-medium text-brand mb-4"
          >
            Our Services
          </motion.span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            What We <span className="gradient-text">Create</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto text-balance">
            Comprehensive solutions for modern digital experiences
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              whileHover={{ y: -8 }}
              className="glass-effect rounded-2xl p-8 hover:shadow-2xl transition-all group"
            >
              <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${service.gradient} mb-6 flex items-center justify-center text-white text-2xl font-bold group-hover:scale-110 transition-transform`}>
                {idx + 1}
              </div>
              
              <h3 className="font-display text-2xl font-bold text-gray-900 mb-4">
                {service.title}
              </h3>
              
              <p className="text-gray-600 mb-6 leading-relaxed">
                {service.description}
              </p>

              <ul className="space-y-2">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-center text-sm text-gray-700">
                    <svg className="w-5 h-5 text-brand mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <motion.a
            href="#contact"
            className="inline-block px-8 py-4 bg-gradient-to-r from-brand to-purple-600 text-white rounded-full font-semibold text-lg hover:shadow-xl transition-all"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            Start Your Project
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}

export default Services