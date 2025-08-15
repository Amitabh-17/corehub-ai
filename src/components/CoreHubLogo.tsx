'use client'

import { motion } from 'framer-motion'

export default function CoreHubLogo() {
  return (
    <motion.div
      className="relative w-10 h-10 flex items-center justify-center"
      whileHover={{ scale: 1.1, rotate: 5 }}
      whileTap={{ scale: 0.95 }}
    >
      {/* Outer ring */}
      <motion.div
        className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500 to-blue-500"
        animate={{
          rotate: 360,
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        }}
      />
      
      {/* Inner core */}
      <motion.div
        className="absolute inset-2 rounded-full bg-gradient-to-br from-purple-600 to-blue-600"
        animate={{
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      {/* Center dot */}
      <motion.div
        className="absolute w-2 h-2 bg-white rounded-full"
        animate={{
          scale: [1, 1.5, 1],
          opacity: [0.8, 1, 0.8],
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      {/* Circuit lines */}
      <svg
        className="absolute inset-0 w-full h-full"
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <motion.path
          d="M20 5 L20 15 M20 25 L20 35 M5 20 L15 20 M25 20 L35 20"
          stroke="rgba(255,255,255,0.6)"
          strokeWidth="2"
          strokeLinecap="round"
          animate={{
            strokeOpacity: [0.3, 0.8, 0.3],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.circle
          cx="20"
          cy="20"
          r="8"
          stroke="rgba(255,255,255,0.4)"
          strokeWidth="1"
          fill="none"
          animate={{
            strokeOpacity: [0.2, 0.6, 0.2],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </svg>
    </motion.div>
  )
}