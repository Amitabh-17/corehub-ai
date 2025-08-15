'use client'

import { motion } from 'framer-motion'
import { Brain, Cpu, Zap, Network } from 'lucide-react'

export default function AIDecorations() {
  return (
    <>
      {/* Neural network nodes */}
      <div className="fixed top-20 left-20 w-2 h-2 bg-purple-400 rounded-full animate-pulse"></div>
      <div className="fixed top-32 right-32 w-1 h-1 bg-blue-400 rounded-full animate-pulse"></div>
      <div className="fixed bottom-40 left-1/3 w-1.5 h-1.5 bg-pink-400 rounded-full animate-pulse"></div>
      <div className="fixed top-1/2 right-20 w-1 h-1 bg-cyan-400 rounded-full animate-pulse"></div>
      
      {/* Floating AI icons */}
      <motion.div
        className="fixed top-40 left-10 text-purple-400/20"
        animate={{
          y: [0, -20, 0],
          rotate: [0, 5, 0]
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <Brain className="w-16 h-16" />
      </motion.div>
      
      <motion.div
        className="fixed bottom-40 right-20 text-blue-400/20"
        animate={{
          y: [0, 20, 0],
          rotate: [0, -5, 0]
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <Cpu className="w-20 h-20" />
      </motion.div>
      
      <motion.div
        className="fixed top-1/3 right-1/4 text-pink-400/20"
        animate={{
          y: [0, -15, 0],
          rotate: [0, 10, 0]
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <Zap className="w-14 h-14" />
      </motion.div>
      
      <motion.div
        className="fixed bottom-1/3 left-1/4 text-cyan-400/20"
        animate={{
          y: [0, 15, 0],
          rotate: [0, -10, 0]
        }}
        transition={{
          duration: 9,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <Network className="w-18 h-18" />
      </motion.div>
    </>
  )
}