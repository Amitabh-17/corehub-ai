'use client'

import { motion } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'

export default function Footer3DLogo() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect()
        const centerX = rect.left + rect.width / 2
        const centerY = rect.top + rect.height / 2
        const x = (e.clientX - centerX) / rect.width
        const y = (e.clientY - centerY) / rect.height
        setMousePosition({ x, y })
      }
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  const rotateX = mousePosition.y * 20
  const rotateY = mousePosition.x * 20

  return (
    <div ref={containerRef} className="relative w-full max-w-md mx-auto">
      {/* 3D Container */}
      <motion.div
        className="relative w-32 h-32 sm:w-40 sm:h-40 mx-auto mb-4"
        style={{
          transformStyle: 'preserve-3d',
          perspective: '1000px',
        }}
        animate={{
          rotateX: rotateX,
          rotateY: rotateY,
        }}
        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
      >
        {/* Main rotating ring */}
        <motion.div
          className="absolute inset-0 rounded-full border-4 border-gradient-to-r from-purple-400 via-pink-400 to-blue-400"
          animate={{ rotate: 360 }}
          transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
          style={{
            background: 'linear-gradient(45deg, rgba(168, 85, 247, 0.3), rgba(236, 72, 153, 0.3), rgba(59, 130, 246, 0.3))',
            boxShadow: '0 0 30px rgba(168, 85, 247, 0.5), inset 0 0 30px rgba(236, 72, 153, 0.3)',
          }}
        />
        
        {/* Inner pulsing core */}
        <motion.div
          className="absolute inset-6 rounded-full bg-gradient-to-br from-purple-500 to-blue-500"
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          style={{
            boxShadow: '0 0 40px rgba(168, 85, 247, 0.8), inset 0 0 20px rgba(255, 255, 255, 0.2)',
          }}
        />
        
        {/* Circuit pattern overlay */}
        <motion.div
          className="absolute inset-0 rounded-full opacity-60"
          animate={{ rotate: -360 }}
          transition={{ duration: 12, repeat: Infinity, ease: 'linear' }}
        >
          <svg className="w-full h-full" viewBox="0 0 100 100">
            <circle cx="50" cy="50" r="45" fill="none" stroke="rgba(168, 85, 247, 0.4)" strokeWidth="1" strokeDasharray="5,5" />
            <circle cx="50" cy="50" r="35" fill="none" stroke="rgba(236, 72, 153, 0.4)" strokeWidth="1" strokeDasharray="3,7" />
            <circle cx="50" cy="50" r="25" fill="none" stroke="rgba(59, 130, 246, 0.4)" strokeWidth="1" strokeDasharray="2,8" />
          </svg>
        </motion.div>
        
        {/* Central glowing dot */}
        <motion.div
          className="absolute top-1/2 left-1/2 w-4 h-4 bg-white rounded-full transform -translate-x-1/2 -translate-y-1/2"
          animate={{ scale: [1, 1.5, 1], opacity: [0.8, 1, 0.8] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
          style={{
            boxShadow: '0 0 20px rgba(255, 255, 255, 0.8)',
          }}
        />
        
        {/* Floating particles */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-purple-400 rounded-full"
            style={{
              top: `${50 + 30 * Math.cos((i * 60) * Math.PI / 180)}%`,
              left: `${50 + 30 * Math.sin((i * 60) * Math.PI / 180)}%`,
            }}
            animate={{
              scale: [0.5, 1, 0.5],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: 2,
              delay: i * 0.3,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
        ))}
      </motion.div>
      
      {/* Brand name with gradient */}
      <motion.div
        className="text-2xl sm:text-3xl font-bold text-center mb-2"
        animate={{
          backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "linear"
        }}
        style={{
          background: 'linear-gradient(45deg, #a855f7, #ec4899, #3b82f6, #a855f7)',
          backgroundSize: '200% 200%',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
        }}
      >
        CoreHub AI
      </motion.div>
      
      {/* Tagline */}
      <motion.p
        className="text-gray-400 text-sm sm:text-base text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        Your Gateway to AI Innovation
      </motion.p>
    </div>
  )
}