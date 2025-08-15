'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Search } from 'lucide-react'
import { Input } from '@/components/ui/input'
import CoreHubLogo from './CoreHubLogo'

interface NavbarProps {
  searchQuery: string
  setSearchQuery: (query: string) => void
}

export default function Navbar({ searchQuery, setSearchQuery }: NavbarProps) {
  const [isSearchFocused, setIsSearchFocused] = useState(false)

  return (
    <motion.nav
      className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-xl border-b border-white/10 transition-all duration-300 will-change-transform"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo and Brand */}
          <motion.div
            className="flex items-center space-x-2 will-change-transform"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.2 }}
          >
            <div className="w-8 h-8 sm:w-10 sm:h-10">
              <CoreHubLogo />
            </div>
            <motion.div
              className="text-lg sm:text-xl md:text-2xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent whitespace-nowrap will-change-transform"
              animate={{
                backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "linear"
              }}
              style={{
                backgroundSize: '200% 200%',
              }}
            >
              CoreHub AI
            </motion.div>
          </motion.div>

          {/* Spacer for better positioning */}
          <div className="flex-1" />

          {/* Search Bar */}
          <motion.div
            className="w-auto max-w-[120px] sm:max-w-[180px] md:max-w-xs lg:max-w-sm xl:max-w-md will-change-transform"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.3 }}
          >
            <div className="relative">
              <Search className="absolute left-2 sm:left-3 md:left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 z-10" />
              <Input
                type="text"
                placeholder="Search..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onFocus={() => setIsSearchFocused(true)}
                onBlur={() => setIsSearchFocused(false)}
                className={`pl-7 sm:pl-9 md:pl-12 pr-2 sm:pr-3 md:pr-4 py-1.5 sm:py-2 md:py-3 bg-white/10 border-white/20 text-white placeholder-gray-400 backdrop-blur-sm transition-all duration-300 text-xs sm:text-sm md:text-base ${
                  isSearchFocused 
                    ? 'bg-white/20 border-purple-400 shadow-lg shadow-purple-500/20' 
                    : 'hover:bg-white/15 hover:border-white/30'
                }`}
              />
              <motion.div
                className="absolute inset-0 rounded-lg bg-gradient-to-r from-purple-500/10 to-blue-500/10 pointer-events-none will-change-transform"
                initial={{ opacity: 0 }}
                animate={{ opacity: isSearchFocused ? 1 : 0 }}
                transition={{ duration: 0.2 }}
              />
            </div>
          </motion.div>

          {/* Right spacer */}
          <div className="w-2 sm:w-4 md:w-6" />
        </div>
      </div>
    </motion.nav>
  )
}