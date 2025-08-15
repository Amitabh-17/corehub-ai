'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { X } from 'lucide-react'

interface LegalPagesModalProps {
  isOpen: boolean
  onClose: () => void
  pageType: 'privacy' | 'terms' | 'contact' | null
}

export default function LegalPagesModal({ isOpen, onClose, pageType }: LegalPagesModalProps) {
  const getPageContent = () => {
    switch (pageType) {
      case 'privacy':
        return {
          title: 'Privacy Policy',
          content: (
            <div className="space-y-6 text-gray-300">
              <p><strong>Effective Date:</strong> December 2024</p>
              <p>CoreHub AI values your privacy. This Privacy Policy explains what information we collect, how we use it, and your choices when visiting our site.</p>
              
              <div>
                <h3 className="text-white font-semibold mb-3">1. Information We Collect</h3>
                <p>We do not collect personal information such as names, email addresses, or phone numbers.</p>
                <p>However, we may collect:</p>
                <ul className="list-disc list-inside ml-4 space-y-1">
                  <li>Anonymous analytics data (e.g., page views, browser type, device type, approximate location)</li>
                  <li>Cookies to remember preferences and improve site performance</li>
                </ul>
              </div>

              <div>
                <h3 className="text-white font-semibold mb-3">2. How We Use Information</h3>
                <ul className="list-disc list-inside ml-4 space-y-1">
                  <li>To understand how visitors use the site</li>
                  <li>To improve content and design</li>
                  <li>To maintain site security</li>
                </ul>
              </div>

              <div>
                <h3 className="text-white font-semibold mb-3">3. Third-Party Services</h3>
                <p>We may use trusted third-party tools such as Google Analytics or advertising networks. These services may use cookies and collect anonymous usage information.</p>
              </div>

              <div>
                <h3 className="text-white font-semibold mb-3">4. Data Sharing</h3>
                <p>We do not sell, trade, or share personal information with anyone.</p>
              </div>

              <div>
                <h3 className="text-white font-semibold mb-3">5. Changes to This Policy</h3>
                <p>We may update this Privacy Policy from time to time. Any changes will be posted on this page with a revised effective date.</p>
              </div>

              <div>
                <h3 className="text-white font-semibold mb-3">Contact</h3>
                <p>If you have questions, email us at creativepro71@gmail.com</p>
              </div>
            </div>
          )
        }
      
      case 'terms':
        return {
          title: 'Terms of Service',
          content: (
            <div className="space-y-6 text-gray-300">
              <p><strong>Effective Date:</strong> December 2024</p>
              <p>Welcome to CoreHub AI. By accessing or using our website, you agree to these terms.</p>
              
              <div>
                <h3 className="text-white font-semibold mb-3">1. Website Use</h3>
                <ul className="list-disc list-inside ml-4 space-y-1">
                  <li>This site is for informational purposes only</li>
                  <li>You may not use this site for illegal, harmful, or malicious activities</li>
                </ul>
              </div>

              <div>
                <h3 className="text-white font-semibold mb-3">2. Third-Party Tools & Links</h3>
                <ul className="list-disc list-inside ml-4 space-y-1">
                  <li>Our site lists third-party AI tools. We are not responsible for their content, functionality, pricing, or availability</li>
                  <li>Use of third-party tools is at your own risk</li>
                </ul>
              </div>

              <div>
                <h3 className="text-white font-semibold mb-3">3. Disclaimer</h3>
                <ul className="list-disc list-inside ml-4 space-y-1">
                  <li>The website is provided "as is," without warranties of any kind</li>
                  <li>We do not guarantee the accuracy or completeness of the information provided</li>
                </ul>
              </div>

              <div>
                <h3 className="text-white font-semibold mb-3">4. Changes to These Terms</h3>
                <p>We may update these Terms of Service at any time. Continued use of the site after updates means you accept the changes.</p>
              </div>
            </div>
          )
        }
      
      case 'contact':
        return {
          title: 'Contact Us',
          content: (
            <div className="space-y-6 text-gray-300">
              <p>Have a question, suggestion, or partnership idea? We'd love to hear from you!</p>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-purple-500/20 rounded-full flex items-center justify-center">
                    <span className="text-purple-400">📧</span>
                  </div>
                  <div>
                    <p className="text-white font-medium">Email</p>
                    <p>creativepro71@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-blue-500/20 rounded-full flex items-center justify-center">
                    <span className="text-blue-400">🌍</span>
                  </div>
                  <div>
                    <p className="text-white font-medium">Location</p>
                    <p>Dehradun, Uttarakhand, India</p>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-white font-semibold mb-3">Get in Touch</h3>
                <p>We're here to help with any questions about AI tools, partnership opportunities, or feedback about CoreHub AI. Typically, we respond within 24-48 hours.</p>
              </div>

              <div>
                <h3 className="text-white font-semibold mb-3">Partnership Inquiries</h3>
                <p>Interested in featuring your AI tool on CoreHub AI? We'd love to collaborate! Please reach out with details about your tool and how it benefits our users.</p>
              </div>

              <div>
                <h3 className="text-white font-semibold mb-3">Feedback & Suggestions</h3>
                <p>Your feedback helps us improve CoreHub AI. Whether you've found a bug, have a feature request, or want to suggest a new AI tool, we're all ears!</p>
              </div>
            </div>
          )
        }
      
      default:
        return { title: '', content: null }
    }
  }

  const pageContent = getPageContent()

  return (
    <AnimatePresence>
      {isOpen && pageType && (
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
            className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.2 }}
          >
            <motion.div
              className="bg-black/90 backdrop-blur-xl border border-white/20 rounded-2xl max-w-2xl w-full max-h-[85vh] sm:max-h-[80vh] overflow-hidden will-change-transform"
              initial={{ y: 20 }}
              animate={{ y: 0 }}
              transition={{ duration: 0.2 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className="flex items-center justify-between p-4 sm:p-6 border-b border-white/10">
                <h2 className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                  {pageContent.title}
                </h2>
                <motion.button
                  onClick={onClose}
                  className="text-gray-400 hover:text-white transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  transition={{ duration: 0.1 }}
                >
                  <X className="w-5 h-5 sm:w-6 sm:h-6" />
                </motion.button>
              </div>
              
              {/* Content */}
              <div className="p-4 sm:p-6 overflow-y-auto max-h-[60vh] custom-scrollbar">
                {pageContent.content}
              </div>
              
              {/* Footer */}
              <div className="p-4 sm:p-6 border-t border-white/10">
                <motion.button
                  onClick={onClose}
                  className="w-full py-2.5 sm:py-3 bg-gradient-to-r from-purple-500 to-blue-500 text-white rounded-lg font-semibold hover:from-purple-600 hover:to-blue-600 transition-all text-sm sm:text-base will-change-transform"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ duration: 0.1 }}
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