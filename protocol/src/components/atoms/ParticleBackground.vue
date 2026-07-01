<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const canvasRef = ref(null)
let animationId = null
let particles = []
let mouse = { x: -1000, y: -1000 }
let prefersReducedMotion = false

const colors = ['#00f2ff', '#7000ff', '#e1fdff', '#67f4b7']

class Particle {
  constructor(width, height) {
    this.width = width
    this.height = height
    this.reset()
  }

  reset() {
    this.x = Math.random() * this.width
    this.y = Math.random() * this.height
    this.size = Math.random() * 2 + 0.3
    this.baseSize = this.size
    this.speedX = (Math.random() - 0.5) * 0.3
    this.speedY = (Math.random() - 0.5) * 0.3
    this.opacity = Math.random() * 0.4 + 0.05
    this.baseOpacity = this.opacity
    
    const rand = Math.random()
    if (rand > 0.6) this.color = '#00f2ff' // Cyan
    else if (rand > 0.2) this.color = '#7000ff' // Purple
    else this.color = '#FFFFFF' // Star dust
  }

  update(width, height) {
    if (!prefersReducedMotion) {
      this.x += this.speedX
      this.y += this.speedY
    }

    // Screen wrap
    if (this.x > width) this.x = 0
    if (this.x < 0) this.x = width
    if (this.y > height) this.y = 0
    if (this.y < 0) this.y = height

    // Mouse interaction
    const dx = mouse.x - this.x
    const dy = mouse.y - this.y
    const distance = Math.sqrt(dx * dx + dy * dy)
    const maxDistance = 150

    if (distance < maxDistance) {
      const force = (maxDistance - distance) / maxDistance
      this.opacity = Math.min(1, this.baseOpacity + (force * 0.6))
      this.size = this.baseSize + (force * 1.2)
      
      if (!prefersReducedMotion) {
        this.x -= dx * force * 0.015
        this.y -= dy * force * 0.015
      }
    } else {
      this.opacity = this.baseOpacity
      this.size = this.baseSize
    }
  }

  draw(ctx) {
    ctx.beginPath()
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
    ctx.fillStyle = this.color
    ctx.globalAlpha = this.opacity
    ctx.fill()
    
    if (this.opacity > 0.4) {
      ctx.shadowBlur = 10
      ctx.shadowColor = this.color
      ctx.fill()
      ctx.shadowBlur = 0
    }
  }
}

const resizeCanvas = () => {
  const canvas = canvasRef.value
  if (!canvas) return
  canvas.width = window.innerWidth
  canvas.height = window.innerHeight
  
  // Re-init particles on resize
  initParticles(canvas.width, canvas.height)
}

const initParticles = (width, height) => {
  particles = []
  const count = prefersReducedMotion ? 60 : 300
  for (let i = 0; i < count; i++) {
    particles.push(new Particle(width, height))
  }
}

const animate = () => {
  const canvas = canvasRef.value
  if (!canvas) return
  const ctx = canvas.getContext('2d')
  
  ctx.clearRect(0, 0, canvas.width, canvas.height)
  
  particles.forEach(p => {
    p.update(canvas.width, canvas.height)
    p.draw(ctx)
  })
  
  animationId = requestAnimationFrame(animate)
}

const onMouseMove = (e) => {
  mouse.x = e.clientX
  mouse.y = e.clientY
}

const onMouseLeave = () => {
  mouse.x = -1000
  mouse.y = -1000
}

onMounted(() => {
  prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  resizeCanvas()
  
  window.addEventListener('resize', resizeCanvas)
  window.addEventListener('mousemove', onMouseMove)
  window.addEventListener('mouseout', onMouseLeave)
  
  animate()
})

onUnmounted(() => {
  window.removeEventListener('resize', resizeCanvas)
  window.removeEventListener('mousemove', onMouseMove)
  window.removeEventListener('mouseout', onMouseLeave)
  cancelAnimationFrame(animationId)
})
</script>

<template>
  <canvas ref="canvasRef" id="particle-canvas" class="fixed inset-0 w-full h-full pointer-events-none z-0 bg-deep-space"></canvas>
</template>
