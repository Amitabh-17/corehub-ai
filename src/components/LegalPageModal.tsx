'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { X, Mail, MapPin, Calendar } from 'lucide-react'

interface LegalPageModalProps {
  isOpen: boolean
  onClose: () => void
  pageType: 'privacy' | 'terms' | 'contact'
}

export default function LegalPageModal({ isOpen, onClose, pageType }: LegalPageModalProps) {
  const getPageContent = () => {
    const currentDate = new Date().toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    })

    switch (pageType) {
      case 'privacy':
        return {
          title: 'Privacy Policy',
          icon: Mail,
          content: (
            <div className="space-y-6 text-gray-300">
              <div className="flex items-center space-x-2 text-sm text-gray-400">
                <Calendar className="w-4 h-4" />
                <span>Effective Date: {currentDate}</span>
              </div>
              
              <p>
                CoreHub AI values your privacy. This Privacy Policy explains what information we collect, 
                how we use it, and your choices when visiting our site.
              </p>

              <div>
                <h3 className="text-white font-semibold mb-3">1. Information We Collect</h3>
                <p className="mb-3">
                  We do not collect personal information such as names, email addresses, or phone numbers.
                </p>
                <p>However, we may collect:</p>
                <ul className="list-disc list-inside mt-2 space-y-1 ml-4">
                  <li>Anonymous analytics data (e.g., page views, browser type, device type, approximate location)</li>
                  <li>Cookies to remember preferences and improve site performance</li>
                </ul>
              </div>

              <div>
                <h3 className="text-white font-semibold mb-3">2. How We Use Information</h3>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>To understand how visitors use the site</li>
                  <li>To improve content and design</li>
                  <li>To maintain site security</li>
                </ul>
              </div>

              <div>
                <h3 className="text-white font-semibold mb-3">3. Third-Party Services</h3>
                <p>
                  We may use trusted third-party tools such as Google Analytics or advertising networks. 
                  These services may use cookies and collect anonymous usage information.
                </p>
              </div>

              <div>
                <h3 className="text-white font-semibold mb-3">4. Data Sharing</h3>
                <p>
                  We do not sell, trade, or share personal information with anyone.
                </p>
              </div>

              <div>
                <h3 className="text-white font-semibold mb-3">5. Changes to This Policy</h3>
                <p>
                  We may update this Privacy Policy from time to time. Any changes will be posted on 
                  this page with a revised effective date.
                </p>
              </div>

              <div>
                <h3 className="text-white font-semibold mb-3">Contact</h3>
                <p>
                  If you have questions, email us at creativepro71@gmail.com
                </p>
              </div>
            </div>
          )
        }

      case 'terms':
        return {
          title: 'Terms of Service',
          icon: Calendar,
          content: (
            <div className="space-y-6 text-gray-300">
              <div className="flex items-center space-x-2 text-sm text-gray-400">
                <Calendar className="w-4 h-4" />
                <span>Effective Date: {currentDate}</span>
              </div>
              
              <p>
                Welcome to CoreHub AI. By accessing or using our website, you agree to these terms.
              </p>

              <div>
                <h3 className="text-white font-semibold mb-3">1. Website Use</h3>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>This site is for informational purposes only</li>
                  <li>You may not use this site for illegal, harmful, or malicious activities</li>
                </ul>
              </div>

              <div>
                <h3 className="text-white font-semibold mb-3">2. Third-Party Tools & Links</h3>
                <p className="mb-3">
                  Our site lists third-party AI tools. We are not responsible for their content, 
                  functionality, pricing, or availability.
                </p>
                <p>
                  Use of third-party tools is at your own risk.
                </p>
              </div>

              <div>
                <h3 className="text-white font-semibold mb-3">3. Disclaimer</h3>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>The website is provided "as is," without warranties of any kind</li>
                  <li>We do not guarantee the accuracy or completeness of the information provided</li>
                </ul>
              </div>

              <div>
                <h3 className="text-white font-semibold mb-3">4. Changes to These Terms</h3>
                <p>
                  We may update these Terms of Service at any time. Continued use of the site after 
                  updates means you accept the changes.
                </p>
              </div>
            </div>
          )
        }

      case 'contact':
        return {
          title: 'Contact Us',
          icon: MapPin,
          content: (
            <div className="space-y-6 text-gray-300">
              <p className="text-lg">
                Have a question, suggestion, or partnership idea?
              </p>

              <div className="space-y-4">
                <div className="flex items-center space-x-3 p-4 bg-white/5 rounded-lg border border-white/10">
                  <Mail className="w-5 h-5 text-purple-400" />
                  <div>
                    <p className="text-sm text-gray-400">Email</p>
                    <p className="text-white">creativepro71@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-center space-x-3 p-4 bg-white/5 rounded-lg border border-white/10">
                  <MapPin className="w-5 h-5 text-blue-400" />
                  <div>
                    <p className="text-sm text-gray-400">Location</p>
                    <p className="text-white">Dehradun, Uttarakhand, India</p>
                  </div>
                </div>
              </div>

              <div className="p-4 bg-gradient-to-r from-purple-900/20 to-blue-900/20 rounded-lg border border-white/10">
                <h3 className="text-white font-semibold mb-2">Partnership Inquiries</h3>
                <p className="text-sm">
                  Interested in partnering with CoreHub AI? We'd love to hear from you! 
                  Whether you're an AI tool developer, content creator, or business looking 
                  to collaborate, reach out to us at the email above.
                </p>
              </div>

              <div className="p-4 bg-gradient-to-r from-green-900/20 to-emerald-900/20 rounded-lg border border-white/10">
                <h3 className="text-white font-semibold mb-2">Feedback & Suggestions</h3>
                <p className="text-sm">
                  Your feedback helps us improve CoreHub AI. If you have suggestions for 
                  new features, AI tools to add, or ways to enhance your experience, 
                  please don't hesitate to contact us.
                </p>
              </div>
            </div>
          )
        }

      default:
        return { title: '', content: null }
    }
  }

  const pageContent = getPageContent()
  const Icon = pageContent.icon

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          {/* Modal */}
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
          >
            <motion.div
              className="relative bg-black/80 backdrop-blur-xl border border-white/20 rounded-2xl max-w-2xl w-full max-h-[80vh] overflow-hidden"
              initial={{ y: 20 }}
              animate={{ y: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className="flex items-center justify-between p-6 border-b border-white/10">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 flex items-center justify-center">
                    <Icon className="w-5 h-5 text-white" />
                  </div>
                  <h2 className="text-2xl font-bold text-white">{pageContent.title}</h2>
                </div>
                <motion.button
                  onClick={onClose}
                  className="p-2 rounded-lg hover:bg-white/10 transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <X className="w-5 h-5 text-gray-400" />
                </motion.button>
              </div>

              {/* Content */}
              <div className="p-6 overflow-y-auto max-h-[60vh] custom-scrollbar">
                {pageContent.content}
              </div>

              {/* Footer */}
              <div className="p-6 border-t border-white/10">
                <motion.button
                  onClick={onClose}
                  className="w-full py-3 bg-gradient-to-r from-purple-500 to-blue-500 text-white rounded-lg font-semibold hover:from-purple-600 hover:to-blue-600 transition-all"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Close
                </motion.button>
              </div>
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}