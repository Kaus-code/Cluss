'use client'
import React, { useEffect, useRef } from 'react'

export default function InteractiveBackground({ children }: { children: React.ReactNode }) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const mouse = useRef({ x: -1000, y: -1000 })

  useEffect(() => {
    const canvas = canvasRef.current
    const container = containerRef.current
    if (!canvas || !container) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let animationFrameId: number
    let points: Point[] = []
    
    // Configuration
    const SPACING = 40
    const RADIUS = 1.5
    const HOVER_RADIUS = 120
    const FORCE = 0.2
    
    class Point {
      x: number
      y: number
      originX: number
      originY: number
      vx: number
      vy: number
      size: number
      targetSize: number
      color: string

      constructor(x: number, y: number) {
        this.x = x
        this.y = y
        this.originX = x
        this.originY = y
        this.vx = 0
        this.vy = 0
        this.size = RADIUS
        this.targetSize = RADIUS
        this.color = '#e5e5e5'
      }

      update() {
        // Distance to mouse
        const dx = mouse.current.x - this.x
        const dy = mouse.current.y - this.y
        const distance = Math.sqrt(dx * dx + dy * dy)
        
        // Interaction
        if (distance < HOVER_RADIUS) {
          const angle = Math.atan2(dy, dx)
          const force = (HOVER_RADIUS - distance) / HOVER_RADIUS
          
          // Push away
          const pushX = Math.cos(angle) * force * FORCE * 40
          const pushY = Math.sin(angle) * force * FORCE * 40
          
          this.vx -= pushX
          this.vy -= pushY
          
          // Visual reaction
          this.targetSize = RADIUS * 2.5
          this.color = `rgba(0, 0, 0, ${0.2 + force * 0.4})` // Darker gray/black on hover
        } else {
          this.targetSize = RADIUS
          this.color = '#e5e5e5'
        }

        // Physics: Spring back to origin
        const springK = 0.05
        const damping = 0.9
        
        const ax = (this.originX - this.x) * springK
        const ay = (this.originY - this.y) * springK
        
        this.vx += ax
        this.vy += ay
        
        this.vx *= damping
        this.vy *= damping
        
        this.x += this.vx
        this.y += this.vy
        
        // Smooth size transition
        this.size += (this.targetSize - this.size) * 0.1
      }

      draw(ctx: CanvasRenderingContext2D) {
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
        ctx.fillStyle = this.color
        ctx.fill()
      }
    }

    const init = () => {
      // Set canvas size with DPR for sharpness
      const dpr = window.devicePixelRatio || 1
      const rect = container.getBoundingClientRect()
      
      canvas.width = rect.width * dpr
      canvas.height = rect.height * dpr
      canvas.style.width = `${rect.width}px`
      canvas.style.height = `${rect.height}px`
      
      ctx.scale(dpr, dpr)
      
      // Create points grid
      points = []
      const cols = Math.ceil(rect.width / SPACING)
      const rows = Math.ceil(rect.height / SPACING)
      
      const offsetX = (rect.width - (cols - 1) * SPACING) / 2
      const offsetY = (rect.height - (rows - 1) * SPACING) / 2

      for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
          const x = offsetX + i * SPACING
          const y = offsetY + j * SPACING
          points.push(new Point(x, y))
        }
      }
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      
      // Draw connections for nearby displaced points (optional "web" effect)
      // Only connecting active points to avoid performance hit
      
      points.forEach(point => {
        point.update()
        point.draw(ctx)
      })
      
      animationFrameId = requestAnimationFrame(animate)
    }

    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect()
      mouse.current = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top
      }
    }

    const handleResize = () => {
      init()
    }

    init()
    animate()

    window.addEventListener('resize', handleResize)
    container.addEventListener('mousemove', handleMouseMove)
    container.addEventListener('mouseleave', () => {
      mouse.current = { x: -1000, y: -1000 }
    })

    return () => {
      window.removeEventListener('resize', handleResize)
      if (container) {
          container.removeEventListener('mousemove', handleMouseMove)
      }
      cancelAnimationFrame(animationFrameId)
    }
  }, [])

  return (
    <div ref={containerRef} className="relative h-full w-full bg-white overflow-hidden">
      <canvas 
        ref={canvasRef} 
        className="absolute inset-0 pointer-events-none"
      />
      
      <div className="relative z-10 h-full pointer-events-none">
        <div className="pointer-events-auto h-full">
            {children}
        </div>
      </div>
    </div>
  )
}
