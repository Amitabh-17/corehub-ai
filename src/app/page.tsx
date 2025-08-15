'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Search, ArrowLeft, ExternalLink } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import AIDecorations from '@/components/AIDecorations'
import AdvertisementBanners from '@/components/AdvertisementBanners'
import LegalPagesModal from '@/components/LegalPagesModal'

interface AITool {
  id: string
  name: string
  description: string
  url: string
  category: string
  logo: string
}

interface Category {
  id: string
  name: string
  description: string
  icon: string
  color: string
  gradient: string
}

const categories: Category[] = [
  {
    id: 'image-art',
    name: 'Image & Art Generation',
    description: 'Generate stunning visuals and artwork',
    icon: '🎨',
    color: 'from-purple-500 to-pink-500',
    gradient: 'bg-gradient-to-br from-purple-500/20 to-pink-500/20'
  },
  {
    id: 'text-content',
    name: 'Text & Content AI',
    description: 'Craft compelling narratives and content',
    icon: '✍️',
    color: 'from-blue-500 to-cyan-500',
    gradient: 'bg-gradient-to-br from-blue-500/20 to-cyan-500/20'
  },
  {
    id: 'document-productivity',
    name: 'Document & Productivity AI',
    description: 'Create documents and boost productivity',
    icon: '📄',
    color: 'from-emerald-500 to-teal-500',
    gradient: 'bg-gradient-to-br from-emerald-500/20 to-teal-500/20'
  },
  {
    id: 'website-design',
    name: 'Website & Design AI',
    description: 'Build websites and design with AI assistance',
    icon: '🌐',
    color: 'from-rose-500 to-pink-500',
    gradient: 'bg-gradient-to-br from-rose-500/20 to-pink-500/20'
  },
  {
    id: 'code-development',
    name: 'Code & Development AI',
    description: 'Build and debug with intelligent assistance',
    icon: '💻',
    color: 'from-green-500 to-emerald-500',
    gradient: 'bg-gradient-to-br from-green-500/20 to-emerald-500/20'
  },
  {
    id: 'audio-music',
    name: 'Audio & Music AI',
    description: 'Create and enhance audio experiences',
    icon: '🎵',
    color: 'from-orange-500 to-red-500',
    gradient: 'bg-gradient-to-br from-orange-500/20 to-red-500/20'
  },
  {
    id: 'data-analytics',
    name: 'Data & Analytics AI',
    description: 'Analyze and visualize complex data',
    icon: '📊',
    color: 'from-indigo-500 to-purple-500',
    gradient: 'bg-gradient-to-br from-indigo-500/20 to-purple-500/20'
  },
  {
    id: 'video-animation',
    name: 'Video & Animation AI',
    description: 'Produce dynamic video content',
    icon: '🎬',
    color: 'from-red-500 to-rose-500',
    gradient: 'bg-gradient-to-br from-red-500/20 to-rose-500/20'
  },
  {
    id: 'healthcare-biotech',
    name: 'Healthcare & Biotech AI',
    description: 'Advance medical research and diagnostics',
    icon: '🧬',
    color: 'from-teal-500 to-cyan-500',
    gradient: 'bg-gradient-to-br from-teal-500/20 to-cyan-500/20'
  },
  {
    id: 'customer-service',
    name: 'Customer Service & Chatbots',
    description: 'Enhance customer interactions',
    icon: '💬',
    color: 'from-yellow-500 to-orange-500',
    gradient: 'bg-gradient-to-br from-yellow-500/20 to-orange-500/20'
  },
  {
    id: 'research-analysis',
    name: 'Research & Analysis AI',
    description: 'Deep research and analytical insights',
    icon: '🔬',
    color: 'from-violet-500 to-purple-500',
    gradient: 'bg-gradient-to-br from-violet-500/20 to-purple-500/20'
  }
]

const aiTools: AITool[] = [
  // Image & Art Generation
  { id: 'midjourney', name: 'Midjourney', description: 'Create images from text descriptions', url: 'https://www.midjourney.com', category: 'image-art', logo: 'https://www.midjourney.com/favicon.ico' },
  { id: 'dall-e', name: 'DALL-E', description: 'Generate images from natural language', url: 'https://openai.com/dall-e-3', category: 'image-art', logo: 'https://openai.com/favicon.ico' },
  { id: 'stable-diffusion', name: 'Stable Diffusion', description: 'Open-source image generation model', url: 'https://stability.ai', category: 'image-art', logo: 'https://stability.ai/favicon.ico' },
  { id: 'leonardo', name: 'Leonardo.AI', description: 'Create stunning AI art and images', url: 'https://leonardo.ai', category: 'image-art', logo: 'https://leonardo.ai/favicon.ico' },
  { id: 'firefly', name: 'Adobe Firefly', description: 'Generative AI art and design', url: 'https://firefly.adobe.com', category: 'image-art', logo: 'https://www.adobe.com/favicon.ico' },
  { id: 'canva-magic', name: 'Canva Magic Design', description: 'AI-powered design assistant', url: 'https://www.canva.com', category: 'image-art', logo: 'https://www.canva.com/favicon.ico' },
  
  // Text & Content AI
  { id: 'chatgpt', name: 'ChatGPT', description: 'Advanced conversational AI', url: 'https://chat.openai.com', category: 'text-content', logo: 'https://openai.com/favicon.ico' },
  { id: 'claude', name: 'Claude', description: 'AI assistant for helpful conversations', url: 'https://claude.ai', category: 'text-content', logo: 'https://claude.ai/favicon.ico' },
  { id: 'gemini', name: 'Gemini', description: 'Google\'s conversational AI', url: 'https://gemini.google.com', category: 'text-content', logo: 'https://www.google.com/favicon.ico' },
  { id: 'copy-ai', name: 'Copy.ai', description: 'AI-powered copywriting tool', url: 'https://www.copy.ai', category: 'text-content', logo: 'https://www.copy.ai/favicon.ico' },
  { id: 'jasper', name: 'Jasper', description: 'AI content generation platform', url: 'https://www.jasper.ai', category: 'text-content', logo: 'https://www.jasper.ai/favicon.ico' },
  { id: 'writesonic', name: 'Writesonic', description: 'AI writing assistant', url: 'https://writesonic.com', category: 'text-content', logo: 'https://writesonic.com/favicon.ico' },
  { id: 'rytr', name: 'Rytr', description: 'AI writing assistant', url: 'https://rytr.me', category: 'text-content', logo: 'https://rytr.me/favicon.ico' },
  { id: 'chat-z', name: 'Chat.Z AI', description: 'Advanced AI chat assistant', url: 'https://chat.z.ai', category: 'text-content', logo: 'https://chat.z.ai/favicon.ico' },
  { id: 'deepseek', name: 'DeepSeek AI', description: 'Advanced language model and reasoning', url: 'https://www.deepseek.com', category: 'text-content', logo: 'https://www.deepseek.com/favicon.ico' },
  { id: 'perplexity', name: 'Perplexity', description: 'AI-powered search and answers', url: 'https://www.perplexity.ai', category: 'text-content', logo: 'https://www.perplexity.ai/favicon.ico' },
  { id: 'grok', name: 'Grok', description: 'AI assistant with real-time knowledge', url: 'https://grok.x.ai', category: 'text-content', logo: 'https://x.com/favicon.ico' },
  
  // Document & Productivity AI
  { id: 'notion-ai', name: 'Notion AI', description: 'AI-powered workspace and notes', url: 'https://notion.so/ai', category: 'document-productivity', logo: 'https://notion.so/favicon.ico' },
  { id: 'gamma', name: 'Gamma', description: 'AI-powered presentation creator', url: 'https://gamma.app', category: 'document-productivity', logo: 'https://gamma.app/favicon.ico' },
  { id: 'beautiful-ai', name: 'Beautiful.ai', description: 'AI presentation design', url: 'https://beautiful.ai', category: 'document-productivity', logo: 'https://beautiful.ai/favicon.ico' },
  { id: 'tome', name: 'Tome', description: 'AI-powered storytelling and presentations', url: 'https://tome.app', category: 'document-productivity', logo: 'https://tome.app/favicon.ico' },
  { id: 'documint', name: 'Documint', description: 'AI document generation', url: 'https://documint.io', category: 'document-productivity', logo: 'https://documint.io/favicon.ico' },
  { id: 'chatpdf', name: 'ChatPDF', description: 'AI-powered PDF analysis and chat', url: 'https://chatpdf.com', category: 'document-productivity', logo: 'https://chatpdf.com/favicon.ico' },
  { id: 'mnml', name: 'MNML', description: 'AI-powered document creation', url: 'https://mnml.ai', category: 'document-productivity', logo: 'https://mnml.ai/favicon.ico' },
  
  // Website & Design AI
  { id: 'lovable', name: 'Lovable', description: 'AI-powered website builder', url: 'https://lovable.dev', category: 'website-design', logo: 'https://lovable.dev/favicon.ico' },
  { id: 'webflow', name: 'Webflow', description: 'AI-powered web design platform', url: 'https://webflow.com', category: 'website-design', logo: 'https://webflow.com/favicon.ico' },
  { id: 'wix', name: 'Wix ADI', description: 'AI website builder', url: 'https://wix.com', category: 'website-design', logo: 'https://wix.com/favicon.ico' },
  { id: 'squarespace', name: 'Squarespace', description: 'AI-powered website design', url: 'https://squarespace.com', category: 'website-design', logo: 'https://squarespace.com/favicon.ico' },
  { id: 'durable', name: 'Durable', description: 'AI website generator', url: 'https://durable.co', category: 'website-design', logo: 'https://durable.co/favicon.ico' },
  { id: 'hostinger', name: 'Hostinger AI', description: 'AI website builder', url: 'https://hostinger.com', category: 'website-design', logo: 'https://hostinger.com/favicon.ico' },
  { id: 'framer', name: 'Framer', description: 'AI-powered design and development', url: 'https://framer.com', category: 'website-design', logo: 'https://framer.com/favicon.ico' },
  
  // Code & Development AI
  { id: 'github-copilot', name: 'GitHub Copilot', description: 'AI pair programmer', url: 'https://github.com/features/copilot', category: 'code-development', logo: 'https://github.com/favicon.ico' },
  { id: 'tabnine', name: 'Tabnine', description: 'AI code completion tool', url: 'https://tabnine.com', category: 'code-development', logo: 'https://tabnine.com/favicon.ico' },
  { id: 'amazon-codewhisperer', name: 'Amazon CodeWhisperer', description: 'AI coding companion', url: 'https://aws.amazon.com/codewhisperer', category: 'code-development', logo: 'https://aws.amazon.com/favicon.ico' },
  { id: 'replit-ghostwriter', name: 'Replit Ghostwriter', description: 'AI pair programmer in browser', url: 'https://replit.com/site/ghostwriter', category: 'code-development', logo: 'https://replit.com/favicon.ico' },
  { id: 'cursor', name: 'Cursor', description: 'AI-powered code editor', url: 'https://cursor.sh', category: 'code-development', logo: 'https://cursor.sh/favicon.ico' },
  { id: 'sourcegraph-cody', name: 'Sourcegraph Cody', description: 'AI coding assistant', url: 'https://sourcegraph.com/cody', category: 'code-development', logo: 'https://sourcegraph.com/favicon.ico' },
  { id: 'mintlify', name: 'Mintlify', description: 'AI documentation generator', url: 'https://mintlify.com', category: 'code-development', logo: 'https://mintlify.com/favicon.ico' },
  
  // Audio & Music AI
  { id: 'suno', name: 'Suno', description: 'Create music from text descriptions', url: 'https://suno.com', category: 'audio-music', logo: 'https://suno.com/favicon.ico' },
  { id: 'mubert', name: 'Mubert', description: 'AI music generation platform', url: 'https://mubert.com', category: 'audio-music', logo: 'https://mubert.com/favicon.ico' },
  { id: 'elevenlabs', name: 'ElevenLabs', description: 'AI voice synthesis and cloning', url: 'https://elevenlabs.io', category: 'audio-music', logo: 'https://elevenlabs.io/favicon.ico' },
  { id: 'descript', name: 'Descript', description: 'AI-powered audio/video editing', url: 'https://descript.com', category: 'audio-music', logo: 'https://descript.com/favicon.ico' },
  { id: 'udio', name: 'Udio', description: 'AI music generation platform', url: 'https://udio.com', category: 'audio-music', logo: 'https://udio.com/favicon.ico' },
  { id: 'lalamu', name: 'Lalal.ai', description: 'AI music source separation', url: 'https://lalal.ai', category: 'audio-music', logo: 'https://lalal.ai/favicon.ico' },
  { id: 'playht', name: 'Play.ht', description: 'AI voice generation', url: 'https://play.ht', category: 'audio-music', logo: 'https://play.ht/favicon.ico' },
  
  // Data & Analytics AI
  { id: 'tableau', name: 'Tableau', description: 'Data visualization and analytics', url: 'https://tableau.com', category: 'data-analytics', logo: 'https://tableau.com/favicon.ico' },
  { id: 'power-bi', name: 'Power BI', description: 'Business analytics tool', url: 'https://powerbi.microsoft.com', category: 'data-analytics', logo: 'https://microsoft.com/favicon.ico' },
  { id: 'data-robot', name: 'DataRobot', description: 'Automated machine learning', url: 'https://datarobot.com', category: 'data-analytics', logo: 'https://datarobot.com/favicon.ico' },
  { id: 'alteryx', name: 'Alteryx', description: 'Analytics automation platform', url: 'https://alteryx.com', category: 'data-analytics', logo: 'https://alteryx.com/favicon.ico' },
  { id: 'thoughtspot', name: 'ThoughtSpot', description: 'AI-powered analytics', url: 'https://thoughtspot.com', category: 'data-analytics', logo: 'https://thoughtspot.com/favicon.ico' },
  { id: 'sisense', name: 'Sisense', description: 'AI-driven business intelligence', url: 'https://sisense.com', category: 'data-analytics', logo: 'https://sisense.com/favicon.ico' },
  
  // Video & Animation AI
  { id: 'runway', name: 'Runway', description: 'AI video editing and generation', url: 'https://runwayml.com', category: 'video-animation', logo: 'https://runwayml.com/favicon.ico' },
  { id: 'pika', name: 'Pika', description: 'AI video generation platform', url: 'https://pika.art', category: 'video-animation', logo: 'https://pika.art/favicon.ico' },
  { id: 'synthesia', name: 'Synthesia', description: 'AI video generation from text', url: 'https://synthesia.io', category: 'video-animation', logo: 'https://synthesia.io/favicon.ico' },
  { id: 'heygen', name: 'HeyGen', description: 'AI-powered video creation', url: 'https://heygen.com', category: 'video-animation', logo: 'https://heygen.com/favicon.ico' },
  { id: 'd-id', name: 'D-ID', description: 'AI video generation and avatars', url: 'https://d-id.com', category: 'video-animation', logo: 'https://d-id.com/favicon.ico' },
  { id: 'pictory', name: 'Pictory', description: 'AI video creation from text', url: 'https://pictory.ai', category: 'video-animation', logo: 'https://pictory.ai/favicon.ico' },
  { id: 'invideo', name: 'InVideo', description: 'AI video creation platform', url: 'https://invideo.io', category: 'video-animation', logo: 'https://invideo.io/favicon.ico' },
  { id: 'mgx', name: 'MGX AI', description: 'AI-powered video generation', url: 'https://mgx.dev', category: 'video-animation', logo: 'https://mgx.dev/favicon.ico' },
  
  // Healthcare & Biotech AI
  { id: 'tempus', name: 'Tempus', description: 'AI-powered healthcare analytics', url: 'https://tempus.com', category: 'healthcare-biotech', logo: 'https://tempus.com/favicon.ico' },
  { id: 'recursion', name: 'Recursion', description: 'AI drug discovery platform', url: 'https://recursion.com', category: 'healthcare-biotech', logo: 'https://recursion.com/favicon.ico' },
  { id: 'insitro', name: 'Insitro', description: 'Machine learning for drug discovery', url: 'https://insitro.com', category: 'healthcare-biotech', logo: 'https://insitro.com/favicon.ico' },
  { id: 'pathai', name: 'PathAI', description: 'AI-powered pathology diagnostics', url: 'https://pathai.com', category: 'healthcare-biotech', logo: 'https://pathai.com/favicon.ico' },
  { id: 'owkin', name: 'Owkin', description: 'AI for medical research', url: 'https://owkin.com', category: 'healthcare-biotech', logo: 'https://owkin.com/favicon.ico' },
  
  // Customer Service & Chatbots
  { id: 'intercom', name: 'Intercom', description: 'AI-powered customer support', url: 'https://intercom.com', category: 'customer-service', logo: 'https://intercom.com/favicon.ico' },
  { id: 'drift', name: 'Drift', description: 'Conversational marketing platform', url: 'https://drift.com', category: 'customer-service', logo: 'https://drift.com/favicon.ico' },
  { id: 'zendesk', name: 'Zendesk', description: 'AI-powered customer service', url: 'https://zendesk.com', category: 'customer-service', logo: 'https://zendesk.com/favicon.ico' },
  { id: 'liveperson', name: 'LivePerson', description: 'Conversational AI platform', url: 'https://www.liveperson.com', category: 'customer-service', logo: 'https://www.liveperson.com/favicon.ico' },
  { id: 'ada', name: 'Ada', description: 'AI-powered customer service automation', url: 'https://ada.support', category: 'customer-service', logo: 'https://ada.support/favicon.ico' },
  
  // Research & Analysis AI
  { id: 'julius', name: 'Julius', description: 'AI-powered data analysis and insights', url: 'https://julius.ai', category: 'research-analysis', logo: 'https://julius.ai/favicon.ico' },
  { id: 'elicit', name: 'Elicit', description: 'AI research assistant for academic literature', url: 'https://elicit.com/welcome', category: 'research-analysis', logo: 'https://elicit.com/favicon.ico' },
  { id: 'research-ai', name: 'Research AI', description: 'Advanced AI research and analysis platform', url: 'https://research-ai.io', category: 'research-analysis', logo: 'https://research-ai.io/favicon.ico' }
]

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState<Category | null>(null)
  const [searchQuery, setSearchQuery] = useState('')
  const [filteredTools, setFilteredTools] = useState<AITool[]>([])
  const [isSearchMode, setIsSearchMode] = useState(false)
  const [legalModalOpen, setLegalModalOpen] = useState(false)
  const [legalModalType, setLegalModalType] = useState<'privacy' | 'terms' | 'contact'>('privacy')

  useEffect(() => {
    if (searchQuery.trim()) {
      const filtered = aiTools.filter(tool =>
        tool.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        tool.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        tool.category.toLowerCase().includes(searchQuery.toLowerCase())
      )
      setFilteredTools(filtered)
      setIsSearchMode(true)
    } else {
      setFilteredTools([])
      setIsSearchMode(false)
    }
  }, [searchQuery])

  const handleCategoryClick = (category: Category) => {
    setSelectedCategory(category)
    setSearchQuery('')
    setIsSearchMode(false)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const handleCategoryClickFromFooter = (categoryId: string) => {
    const category = categories.find(cat => cat.id === categoryId)
    if (category) {
      setSelectedCategory(category)
      setIsSearchMode(false)
      setSearchQuery('')
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }

  const handleBackToCategories = () => {
    setSelectedCategory(null)
    setSearchQuery('')
    setIsSearchMode(false)
  }

  const getToolsForCategory = (categoryId: string) => {
    return aiTools.filter(tool => tool.category === categoryId)
  }

  const handleToolClick = (url: string) => {
    window.open(url, '_blank')
  }

  const handleLegalPageClick = (pageType: 'privacy' | 'terms' | 'contact') => {
    setLegalModalType(pageType)
    setLegalModalOpen(true)
  }

  const closeLegalModal = () => {
    setLegalModalOpen(false)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 text-white overflow-hidden">
      {/* Navbar */}
      <Navbar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      
      {/* AI-themed decorations */}
      <AIDecorations />
      
      {/* Animated background elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
      </div>

      {/* Main content */}
      <div className="relative z-10 container mx-auto px-4 pt-24 pb-8">
        {/* Header */}
        <header className="text-center mb-16 mt-8">
          <motion.h1 
            className="text-6xl md:text-8xl font-bold mb-4 bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            CoreHub AI
          </motion.h1>
          <motion.p 
            className="text-xl md:text-2xl text-gray-300 mb-8"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Your central hub for artificial intelligence
          </motion.p>
        </header>

        {/* Back button */}
        <AnimatePresence>
          {(selectedCategory || isSearchMode) && (
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="mb-6"
            >
              <Button
                onClick={handleBackToCategories}
                className="flex items-center space-x-2 bg-white/10 hover:bg-white/20 border border-white/20"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Back to Categories</span>
              </Button>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Categories Grid */}
        <AnimatePresence mode="wait">
          {!selectedCategory && !isSearchMode && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
            >
              {categories.map((category, index) => (
                <motion.div
                  key={category.id}
                  className={`group relative overflow-hidden rounded-2xl cursor-pointer ${category.gradient} border border-white/10 backdrop-blur-sm`}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ scale: 1.02, y: -5 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => handleCategoryClick(category)}
                >
                  <div className="absolute inset-0 rounded-2xl border border-white/20 group-hover:border-purple-400/50 transition-all duration-300"></div>
                  
                  <div className="relative z-10 p-6">
                    <div className="text-5xl mb-4">{category.icon}</div>
                    <h3 className="text-xl font-bold text-white mb-2">{category.name}</h3>
                    <p className="text-gray-300 text-sm">{category.description}</p>
                    
                    <div className="mt-4 flex items-center justify-between">
                      <span className="text-xs text-gray-400">
                        {getToolsForCategory(category.id).length} tools
                      </span>
                      <motion.div
                        className="w-8 h-8 rounded-full bg-gradient-to-r opacity-80 group-hover:opacity-100"
                        style={{ background: `linear-gradient(45deg, ${category.color})` }}
                        whileHover={{ scale: 1.2, rotate: 180 }}
                        transition={{ duration: 0.6 }}
                      >
                        <ExternalLink className="w-4 h-4 text-white m-2" />
                      </motion.div>
                    </div>
                  </div>
                  
                  <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Selected Category Tools */}
        <AnimatePresence mode="wait">
          {selectedCategory && !isSearchMode && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            >
              <div className="mb-8">
                <h2 className="text-4xl font-bold mb-2 flex items-center space-x-4">
                  <span className="text-4xl">{selectedCategory.icon}</span>
                  <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                    {selectedCategory.name}
                  </span>
                </h2>
                <p className="text-gray-300">{selectedCategory.description}</p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {getToolsForCategory(selectedCategory.id).map((tool, index) => (
                  <motion.div
                    key={tool.id}
                    className="group bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-purple-400/50 transition-all duration-300 cursor-pointer"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.05 }}
                    whileHover={{ scale: 1.02, y: -5 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => handleToolClick(tool.url)}
                  >
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0">
                        <img
                          src={tool.logo}
                          alt={tool.name}
                          className="w-12 h-12 rounded-lg object-cover bg-white/10 p-2"
                          onError={(e) => {
                            const target = e.target as HTMLImageElement
                            target.style.display = 'none'
                          }}
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="text-lg font-semibold text-white mb-1 truncate">{tool.name}</h3>
                        <p className="text-gray-300 text-sm line-clamp-2">{tool.description}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Search Results */}
        <AnimatePresence mode="wait">
          {isSearchMode && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            >
              <div className="mb-8">
                <h2 className="text-4xl font-bold mb-2 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                  Search Results
                </h2>
                <p className="text-gray-300">
                  Found {filteredTools.length} tool{filteredTools.length !== 1 ? 's' : ''} for "{searchQuery}"
                </p>
              </div>
              
              {filteredTools.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredTools.map((tool, index) => (
                    <motion.div
                      key={tool.id}
                      className="group bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-purple-400/50 transition-all duration-300 cursor-pointer"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.05 }}
                      whileHover={{ scale: 1.02, y: -5 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => handleToolClick(tool.url)}
                    >
                      <div className="flex items-start space-x-4">
                        <div className="flex-shrink-0">
                          <img
                            src={tool.logo}
                            alt={tool.name}
                            className="w-12 h-12 rounded-lg object-cover bg-white/10 p-2"
                            onError={(e) => {
                              const target = e.target as HTMLImageElement
                              target.style.display = 'none'
                            }}
                          />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h3 className="text-lg font-semibold text-white mb-1 truncate">{tool.name}</h3>
                          <p className="text-gray-300 text-sm line-clamp-2">{tool.description}</p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              ) : (
                <motion.div
                  className="text-center py-12"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                >
                  <p className="text-gray-400 text-lg">No tools found matching your search.</p>
                  <p className="text-gray-500 text-sm mt-2">Try different keywords or browse categories.</p>
                </motion.div>
              )}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Advertisement Banners */}
        {!selectedCategory && !isSearchMode && <AdvertisementBanners />}
      </div>
      
      {/* Footer */}
      <Footer 
        onCategoryClick={handleCategoryClickFromFooter}
        onLegalPageClick={handleLegalPageClick}
      />
      
      {/* Legal Page Modal */}
      <LegalPagesModal
        isOpen={legalModalOpen}
        onClose={closeLegalModal}
        pageType={legalModalType}
      />
    </div>
  )
}