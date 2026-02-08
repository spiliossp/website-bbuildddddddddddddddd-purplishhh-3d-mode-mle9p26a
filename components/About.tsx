'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const About = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const features = [
    {
      title: 'Immersive 3D',
      description: 'Cutting-edge three-dimensional designs that captivate and engage your audience',
      icon: '🎨',
    },
    {
      title: 'Premium Quality',
      description: 'Pixel-perfect execution with attention to every detail and interaction',
      icon: '⚡',
    },
    {
      title: 'Future-Ready',
      description: 'Built with the latest technologies for performance and scalability',
      icon: '🚀',
    },
  ]

  return (
    <section id="about" ref={ref} className="py-24 lg:py-32 bg-white relative overflow-hidden">
      <div className="absolute inset-0 mesh-gradient opacity-50" />
      
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
            About Us
          </motion.span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Crafting Digital
            <span className="gradient-text"> Excellence</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto text-balance">
            We blend artistry with technology to create immersive 3D experiences that push the boundaries of what's possible on the web
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {features.map((feature, idx) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
              className="glass-effect rounded-2xl p-8 hover:shadow-xl transition-shadow"
            >
              <motion.div
                className="text-5xl mb-6"
                whileHover={{ scale: 1.2, rotate: 10 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                {feature.icon}
              </motion.div>
              <h3 className="font-display text-2xl font-bold text-gray-900 mb-4">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-20 glass-effect rounded-3xl p-8 lg:p-12 text-center"
        >
          <h3 className="font-display text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
            Why Choose <span className="gradient-text">Purplishhh 3D</span>?
          </h3>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8 leading-relaxed">
            We don't just build websites—we create dimensional experiences that transform how your audience interacts with your brand. Our expertise in 3D modeling, animation, and interactive design sets us apart in the digital landscape.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            {['3D Modeling', 'WebGL', 'Interactive Design', 'Performance', 'Innovation'].map((tag, idx) => (
              <motion.span
                key={tag}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 1 + idx * 0.1 }}
                className="px-4 py-2 bg-gradient-to-r from-brand to-purple-600 text-white rounded-full text-sm font-medium"
              >
                {tag}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default About