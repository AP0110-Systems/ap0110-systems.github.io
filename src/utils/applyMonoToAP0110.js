/**
 * Utility function to dynamically apply font-mono styling to all instances of "AP0110" in the browser
 * This function searches for text nodes containing "AP0110" and wraps them with a span that has font-mono class
 */

export const applyMonoToAP0110 = () => {
  // Function to check if a text node contains AP0110 and doesn't already have font-mono applied
  const shouldProcessNode = (node) => {
    if (node.nodeType !== Node.TEXT_NODE) return false
    
    const text = node.textContent || ''
    if (!text.includes('AP0110')) return false
    
    // Check if the parent element already has font-mono class
    const parent = node.parentElement
    if (parent && parent.classList.contains('font-mono')) return false
    
    // Check if the text is already wrapped in a span with font-mono
    if (parent && parent.tagName === 'SPAN' && parent.classList.contains('font-mono')) return false
    
    // Skip if the parent is a script, style, or code element
    if (parent && ['SCRIPT', 'STYLE', 'CODE', 'PRE'].includes(parent.tagName)) return false
    
    // Skip if the text node is already processed (has a data attribute)
    if (node.parentElement && node.parentElement.hasAttribute('data-ap0110-processed')) return false
    
    return true
  }

  // Function to process a text node and wrap AP0110 with font-mono span
  const processTextNode = (textNode) => {
    const text = textNode.textContent || ''
    if (!text.includes('AP0110')) return

    const parent = textNode.parentNode
    if (!parent) return

    // Create a document fragment to hold the new nodes
    const fragment = document.createDocumentFragment()
    
    // Split the text by AP0110 and create new nodes
    const parts = text.split(/(AP0110)/g)
    
    parts.forEach((part, index) => {
      if (part === 'AP0110') {
        // Create a span with font-mono class for AP0110
        const span = document.createElement('span')
        span.className = 'font-mono'
        span.textContent = part
        fragment.appendChild(span)
      } else if (part) {
        // Create a text node for other parts
        fragment.appendChild(document.createTextNode(part))
      }
    })

    // Replace the original text node with the new nodes
    parent.replaceChild(fragment, textNode)
    
    // Mark the parent as processed to avoid re-processing
    if (parent instanceof Element) {
      parent.setAttribute('data-ap0110-processed', 'true')
    }
  }

  // Function to traverse the DOM and process text nodes
  const traverseAndProcess = (node) => {
    if (shouldProcessNode(node)) {
      processTextNode(node)
      return
    }

    // Recursively process child nodes
    const children = Array.from(node.childNodes)
    children.forEach(child => {
      // Skip script and style elements
      if (child.nodeType === Node.ELEMENT_NODE) {
        const element = child
        if (element.tagName === 'SCRIPT' || element.tagName === 'STYLE') {
          return
        }
      }
      traverseAndProcess(child)
    })
  }

  // Start processing from the document body
  const body = document.body
  if (body) {
    traverseAndProcess(body)
  }
}

/**
 * Initialize the AP0110 mono font application
 * This should be called when the DOM is ready
 */
export const initializeAP0110Mono = () => {
  // Apply immediately if DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', applyMonoToAP0110)
  } else {
    applyMonoToAP0110()
  }

  // Also apply when new content is added dynamically (for SPA navigation)
  const observer = new MutationObserver((mutations) => {
    let shouldApply = false
    
    mutations.forEach((mutation) => {
      if (mutation.type === 'childList' && mutation.addedNodes.length > 0) {
        // Check if any added nodes contain AP0110
        mutation.addedNodes.forEach((node) => {
          if (node.nodeType === Node.TEXT_NODE) {
            if ((node.textContent || '').includes('AP0110')) {
              shouldApply = true
            }
          } else if (node.nodeType === Node.ELEMENT_NODE) {
            const element = node
            if (element.textContent?.includes('AP0110')) {
              shouldApply = true
            }
          }
        })
      }
    })

    if (shouldApply) {
      // Use setTimeout to ensure DOM is fully updated
      setTimeout(applyMonoToAP0110, 0)
    }
  })

  // Start observing the document body for changes
  observer.observe(document.body, {
    childList: true,
    subtree: true,
    characterData: true
  })

  return () => {
    observer.disconnect()
  }
}
