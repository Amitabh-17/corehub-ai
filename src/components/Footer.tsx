'use client'

import { motion } from 'framer-motion'
import { Github, Twitter, Mail, ExternalLink } from 'lucide-react'
import Footer3DLogo from './Footer3DLogo'

interface FooterProps {
  onCategoryClick?: (categoryId: string) => void
  onLegalPageClick?: (pageType: 'privacy' | 'terms' | 'contact') => void
}

export default function Footer({ onCategoryClick, onLegalPageClick }: FooterProps) {
  const categories = [
    { id: 'image-art', name: 'Image & Art' },
    { id: 'text-content', name: 'Text & Content' },
    { id: 'document-productivity', name: 'Document & Productivity' },
    { id: 'website-design', name: 'Website & Design' },
    { id: 'code-development', name: 'Code & Development' },
    { id: 'audio-music', name: 'Audio & Music' },
    { id: 'data-analytics', name: 'Data & Analytics' },
    { id: 'video-animation', name: 'Video & Animation' },
    { id: 'healthcare-biotech', name: 'Healthcare & Biotech' },
    { id: 'customer-service', name: 'Customer Service' },
    { id: 'research-analysis', name: 'Research & Analysis' }
  ]

  const handleCategoryClick = (categoryId: string) => {
    if (onCategoryClick) {
      onCategoryClick(categoryId)
      // Scroll to top
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }

  const handleLegalClick = (pageType: 'privacy' | 'terms' | 'contact') => {
    if (onLegalPageClick) {
      onLegalPageClick(pageType)
    }
  }

  return (
    <motion.footer
      className="relative bg-black/50 backdrop-blur-xl border-t border-white/10 mt-20"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.5 }}
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-32 h-32 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-32 h-32 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-pulse"></div>
      </div>

      <div className="container mx-auto px-4 py-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* 3D Logo Section */}
          <motion.div
            className="space-y-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            <Footer3DLogo />
          </motion.div>

          {/* Quick Links */}
          <motion.div
            className="space-y-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <h4 className="text-white font-semibold">Quick Links</h4>
            <ul className="space-y-2">
              {categories.slice(0, 4).map((category, index) => (
                <motion.li key={category.id}>
                  <button
                    onClick={() => handleCategoryClick(category.id)}
                    className="text-gray-400 hover:text-purple-400 transition-colors text-sm flex items-center space-x-2 w-full text-left"
                  >
                    <ExternalLink className="w-3 h-3" />
                    <span>{category.name}</span>
                  </button>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Categories */}
          <motion.div
            className="space-y-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <h4 className="text-white font-semibold">All Categories</h4>
            <ul className="space-y-2">
              {categories.slice(4, 8).map((category, index) => (
                <motion.li key={category.id}>
                  <button
                    onClick={() => handleCategoryClick(category.id)}
                    className="text-gray-400 hover:text-blue-400 transition-colors text-sm flex items-center space-x-2 w-full text-left"
                  >
                    <ExternalLink className="w-3 h-3" />
                    <span>{category.name}</span>
                  </button>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* More Categories */}
          <motion.div
            className="space-y-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <h4 className="text-white font-semibold">More Categories</h4>
            <ul className="space-y-2">
              {categories.slice(8).map((category, index) => (
                <motion.li key={category.id}>
                  <button
                    onClick={() => handleCategoryClick(category.id)}
                    className="text-gray-400 hover:text-pink-400 transition-colors text-sm flex items-center space-x-2 w-full text-left"
                  >
                    <ExternalLink className="w-3 h-3" />
                    <span>{category.name}</span>
                  </button>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <motion.div
          className="mt-8 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          <p className="text-gray-400 text-sm">
            © 2024 CoreHub AI. All rights reserved.
          </p>
          <div className="flex space-x-6 text-sm">
            <button 
              onClick={() => handleLegalClick('privacy')}
              className="text-gray-400 hover:text-purple-400 transition-colors"
            >
              Privacy Policy
            </button>
            <button 
              onClick={() => handleLegalClick('terms')}
              className="text-gray-400 hover:text-blue-400 transition-colors"
            >
              Terms of Service
            </button>
            <button 
              onClick={() => handleLegalClick('contact')}
              className="text-gray-400 hover:text-pink-400 transition-colors"
            >
              Contact
            </button>
          </div>
        </motion.div>
      </div>
    </motion.footer>
  )
}