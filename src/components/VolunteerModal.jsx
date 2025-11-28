import React, { useState } from 'react'
import Button from './ui/Button'
import Card from './ui/Card'

const VolunteerModal = ({ isOpen, onClose }) => {
  const [email, setEmail] = useState('')
  const [isSubscribed, setIsSubscribed] = useState(false)

  const handleCareersClick = () => {
    window.location.href = 'mailto:careers@AP0110.com'
  }

  const handleGitHubClick = () => {
    window.open('https://github.com/AP0110-Systems', '_blank')
  }

  const handleNewsletterSubmit = (e) => {
    e.preventDefault()
    // Handle newsletter subscription logic here
    setIsSubscribed(true)
    // Reset form after a delay
    setTimeout(() => {
      setIsSubscribed(false)
      setEmail('')
    }, 3000)
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black/85 flex items-center justify-center z-[9999] p-4">
      <div className="relative max-w-md w-full">
        <Card variant="glass" size="lg" className="relative">
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-white/70 hover:text-white transition-colors"
            aria-label="Close modal"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          <div className="pr-8">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-white">
              Get Involved with AP0110.org
            </h2>
            
            <p className="text-lg text-gray-300 mb-6 leading-relaxed">
              We're looking for passionate volunteers to help build, maintain, and curate independent internet resources. Join our community of developers and curators working to ensure information and tools remain freely available to everyone.
            </p>

            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-semibold mb-3 text-white">
                  Ways to Get Involved
                </h3>
                <div className="space-y-3">
                  <Button 
                    size="lg" 
                    variant="primary" 
                    onClick={handleCareersClick}
                    className="w-full"
                  >
                    Contact careers@AP0110.com
                  </Button>
                  <Button 
                    size="lg" 
                    variant="outline" 
                    onClick={handleGitHubClick}
                    className="w-full flex items-center justify-center gap-2"
                  >
                    <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/>
                      <path d="M9 18c-4.51 2-5-2-7-2"/>
                    </svg>
                    Visit our GitHub
                  </Button>
                </div>
              </div>
            </div>

            {/* Newsletter Section */}
            <div className="border-t border-white/20 pt-6">
              <h3 className="text-xl font-semibold mb-3 text-white">
                Subscribe to Our Newsletter
              </h3>
              
              {!isSubscribed ? (
                <form onSubmit={handleNewsletterSubmit} className="space-y-3">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    required
                    className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white/30 focus:border-transparent"
                  />
                  <Button 
                    type="submit" 
                    size="lg" 
                    variant="primary" 
                    className="w-full"
                  >
                    Subscribe for Updates
                  </Button>
                </form>
              ) : (
                <div className="text-center py-4">
                  <div className="text-green-400 text-lg font-semibold mb-2">
                    ✓ Subscribed Successfully!
                  </div>
                  <p className="text-gray-300">
                    Thank you for subscribing. We'll keep you updated on our progress.
                  </p>
                </div>
              )}
            </div>
          </div>
        </Card>
      </div>
    </div>
  )
}

export default VolunteerModal

