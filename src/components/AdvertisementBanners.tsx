'use client'

import { motion } from 'framer-motion'
import { ExternalLink, Star, Zap, TrendingUp, Crown, Rocket, Users } from 'lucide-react'

export default function AdvertisementBanners() {
  const banners = [
    {
      id: 1,
      title: "Partner With Us",
      description: "Showcase your AI tool to our global audience",
      cta: "Get Started",
      icon: Crown,
      gradient: "from-purple-500 to-pink-500",
      link: "#",
      isPlaceholder: true
    },
    {
      id: 2,
      title: "Your Ad Here",
      description: "Reach thousands of AI enthusiasts and professionals",
      cta: "Learn More",
      icon: Rocket,
      gradient: "from-blue-500 to-cyan-500",
      link: "#",
      isPlaceholder: true
    },
    {
      id: 3,
      title: "Sponsor This Space",
      description: "Promote your AI brand on CoreHub AI",
      cta: "Contact Us",
      icon: Users,
      gradient: "from-green-500 to-emerald-500",
      link: "#",
      isPlaceholder: true
    }
  ]

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <div className="mt-16 mb-12">
      <motion.h2
        className="text-3xl font-bold text-center mb-8 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Featured Partners
      </motion.h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {banners.map((banner, index) => (
          <motion.div
            key={banner.id}
            className="relative group cursor-pointer overflow-hidden rounded-2xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            whileHover={{ scale: 1.02, y: -5 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => window.open(banner.link, '_blank')}
          >
            {/* Background gradient */}
            <div className={`absolute inset-0 bg-gradient-to-br ${banner.gradient} opacity-20 group-hover:opacity-30 transition-opacity duration-300`}></div>
            
            {/* Animated border */}
            <div className="absolute inset-0 rounded-2xl border border-white/20 group-hover:border-purple-400/50 transition-all duration-300"></div>
            
            {/* Content */}
            <div className="relative z-10 p-6">
              <div className="flex items-center justify-between mb-4">
                <motion.div
                  className={`w-12 h-12 rounded-full bg-gradient-to-br ${banner.gradient} flex items-center justify-center`}
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <banner.icon className="w-6 h-6 text-white" />
                </motion.div>
                {banner.isPlaceholder && (
                  <div className="px-2 py-1 bg-yellow-500/20 text-yellow-400 text-xs rounded-full border border-yellow-500/30">
                    Available
                  </div>
                )}
              </div>
              
              <h3 className="text-xl font-bold text-white mb-2">{banner.title}</h3>
              <p className="text-gray-300 text-sm mb-4">{banner.description}</p>
              
              <motion.div
                className="flex items-center space-x-2 text-purple-400 group-hover:text-purple-300 transition-colors"
                whileHover={{ x: 5 }}
              >
                <span className="font-medium">{banner.cta}</span>
                <ExternalLink className="w-4 h-4" />
              </motion.div>
            </div>
            
            {/* Hover overlay */}
            <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            
            {/* Animated particles */}
            <div className="absolute top-2 right-2 w-2 h-2 bg-white rounded-full opacity-60">
              <motion.div
                className="w-full h-full bg-white rounded-full"
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [0.6, 0.2, 0.6]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
            </div>
            <div className="absolute bottom-2 left-2 w-1.5 h-1.5 bg-white rounded-full opacity-40">
              <motion.div
                className="w-full h-full bg-white rounded-full"
                animate={{
                  scale: [1, 1.3, 1],
                  opacity: [0.4, 0.1, 0.4]
                }}
                transition={{
                  duration: 2.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.5
                }}
              />
            </div>
          </motion.div>
        ))}
      </div>
      
      {/* Additional horizontal banner */}
      <motion.div
        className="mt-8 bg-gradient-to-r from-purple-900/50 to-blue-900/50 rounded-2xl p-6 border border-white/20 overflow-hidden relative"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        whileHover={{ scale: 1.01 }}
      >
        <div className="flex flex-col md:flex-row items-center justify-between relative z-10">
          <div className="flex-1 mb-4 md:mb-0">
            <h3 className="text-2xl font-bold text-white mb-2">AI Tools Marketplace</h3>
            <p className="text-gray-300">Discover and compare the best AI tools for your needs</p>
          </div>
          <motion.button
            className="px-8 py-3 bg-gradient-to-r from-purple-500 to-blue-500 text-white rounded-lg font-semibold hover:from-purple-600 hover:to-blue-600 transition-all"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={scrollToTop}
          >
            Explore Marketplace
          </motion.button>
        </div>
        
        {/* Animated background elements */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute bottom-0 left-0 w-24 h-24 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
      </motion.div>
      
      {/* Additional info section */}
      <motion.div
        className="mt-8 text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
      >
        <p className="text-gray-400 text-sm">
          Interested in partnering with us?{' '}
          <a href="#" className="text-purple-400 hover:text-purple-300 transition-colors">
            Get in touch
          </a>
        </p>
      </motion.div>
    </div>
  )
}