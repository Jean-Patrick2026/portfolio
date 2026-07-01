import Lenis from 'lenis'

let lenis = null

export function initLenis() {
  // Lenis adds/removes 'lenis' and 'lenis-smooth' classes on <html> itself
  lenis = new Lenis({
    duration: 1.2,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    smoothWheel: true,
    wheelMultiplier: 0.85,
    touchMultiplier: 2,
  })

  function raf(time) {
    lenis.raf(time)
    requestAnimationFrame(raf)
  }

  requestAnimationFrame(raf)

  return lenis
}

export function getLenis() {
  return lenis
}

/**
 * Programmatic smooth scroll to any CSS selector or DOM element.
 * @param {string|HTMLElement} target
 * @param {object} options
 */
export function scrollTo(target, options = {}) {
  if (lenis) {
    lenis.scrollTo(target, { offset: -80, duration: 1.4, ...options })
  }
}
