import React, { useState } from 'react'
import Button from './ui/Button'
import Card from './ui/Card'

interface DonationModalProps {
  isOpen: boolean
  onClose: () => void
}

const DonationModal: React.FC<DonationModalProps> = ({ isOpen, onClose }) => {
  const [email, setEmail] = useState('')
  const [isSubscribed, setIsSubscribed] = useState(false)

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle newsletter subscription logic here
    setIsSubscribed(true)
    // Reset form after a delay
    setTimeout(() => {
      setIsSubscribed(false)
      setEmail('')
    }, 3000)
  }

  const handleCareersClick = () => {
    window.location.href = 'mailto:careers@AP0110.com'
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
              Thank You for Your Interest!
            </h2>
            
            <p className="text-lg text-gray-300 mb-6 leading-relaxed">
              We are not yet accepting donations, but we appreciate your support for the AP0110 mission. 
              Here are two ways you can stay connected:
            </p>

            {/* Newsletter Section */}
            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-3 text-white">
                Subscribe to Our Newsletter
              </h3>
              <p className="text-gray-300 mb-4">
                Get updates on our progress and be notified when we start accepting donations.
              </p>
              
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

            {/* Careers Section */}
            <div className="border-t border-white/20 pt-6">
              <h3 className="text-xl font-semibold mb-3 text-white">
                Get Involved
              </h3>
              <p className="text-gray-300 mb-4">
                Want to contribute to our mission? Reach out to us about paid and volunteer opportunities.
              </p>
              <Button 
                size="lg" 
                variant="outline" 
                onClick={handleCareersClick}
                className="w-full"
              >
                Contact careers@AP0110.com
              </Button>
            </div>
          </div>
        </Card>
      </div>
    </div>
  )
}

export default DonationModal
