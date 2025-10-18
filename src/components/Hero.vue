<template>
  <section class="hero-section">
    <div class="container text-center">
      <h1 class="display-4 fw-bold text-dark mb-3">
        Find Affordable Events in Singapore
      </h1>

      <p class="lead text-secondary mx-auto mb-5" style="max-width: 48rem;">
        Your centralised website for discovering budget-friendly activities!
      </p>

      <router-link 
        to="#events" 
        class="btn btn-lg rounded-pill px-5 py-3 shadow-sm explore-btn text-white"
        style="background-color: #51b058;"
      >
        Explore Events
      </router-link>
    </div>

    <!-- Interactive Grass Patch -->
    <div class="grass-container">
      <svg 
        class="grass-svg" 
        viewBox="0 0 1200 200" 
        xmlns="http://www.w3.org/2000/svg"
        @mousemove="onMouseMove"
        @mouseleave="onMouseLeave"
      >
        <!-- Ground -->
        <rect x="0" y="150" width="1200" height="50" fill="#5a8f4a" opacity="0.3"/>
        
        <!-- Grass Blades -->
        <g v-for="(blade, index) in grassBlades" :key="index">
          <path
            :d="blade.path"
            :fill="blade.color"
            :opacity="blade.opacity"
            :transform="getBladeTransform(blade, index)"
            :style="{ transformOrigin: `${blade.x}px 150px`, transition: blade.transition }"
            class="grass-blade"
          />
        </g>
      </svg>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const grassBlades = ref([])
const mouseX = ref(-1000)
const mouseY = ref(-1000)

// Generate grass blades on mount
onMounted(() => {
  const blades = []
  const colors = ['#4a7c3a', '#5a8f4a', '#6ba85e', '#3d6b2f']
  
  for (let i = 0; i < 120; i++) {
    const x = (i * 10) + Math.random() * 8
    const height = 40 + Math.random() * 60
    const width = 3 + Math.random() * 3
    const curve = 10 + Math.random() * 15
    
    blades.push({
      x,
      height,
      width,
      curve,
      color: colors[Math.floor(Math.random() * colors.length)],
      opacity: 0.7 + Math.random() * 0.3,
      baseRotation: (Math.random() - 0.5) * 5,
      swayOffset: Math.random() * Math.PI * 2,
      path: generateBladePath(x, height, width, curve),
      transition: 'transform 0.3s ease-out'
    })
  }
  
  grassBlades.value = blades
})

function generateBladePath(x, height, width, curve) {
  const baseY = 150
  return `
    M ${x} ${baseY}
    Q ${x + curve} ${baseY - height * 0.5}, ${x + curve * 0.5} ${baseY - height * 0.8}
    Q ${x + curve * 0.3} ${baseY - height}, ${x} ${baseY - height}
    Q ${x - width} ${baseY - height * 0.9}, ${x - width * 0.5} ${baseY - height * 0.6}
    Q ${x - width * 0.3} ${baseY - height * 0.3}, ${x} ${baseY}
    Z
  `
}

function onMouseMove(event) {
  const svg = event.currentTarget
  const rect = svg.getBoundingClientRect()
  mouseX.value = event.clientX - rect.left
  mouseY.value = event.clientY - rect.top
}

function onMouseLeave() {
  mouseX.value = -1000
  mouseY.value = -1000
}

function getBladeTransform(blade, index) {
  const distanceX = mouseX.value - blade.x
  const distanceY = mouseY.value - 150
  const distance = Math.sqrt(distanceX * distanceX + distanceY * distanceY)
  
  // Natural ambient sway
  const time = Date.now() * 0.001
  const ambientSway = Math.sin(time + blade.swayOffset) * 2
  
  if (distance < 100) {
    // Interactive sway based on mouse proximity
    const influence = Math.max(0, 1 - distance / 100)
    const angle = Math.atan2(distanceY, distanceX)
    const swayAmount = influence * 25
    const rotation = blade.baseRotation - Math.cos(angle) * swayAmount + ambientSway
    
    return `rotate(${rotation})`
  }
  
  // Just ambient sway
  return `rotate(${blade.baseRotation + ambientSway})`
}

// Continuous animation for ambient sway
let animationFrame
onMounted(() => {
  const animate = () => {
    // Force re-render for ambient animation
    grassBlades.value = [...grassBlades.value]
    animationFrame = requestAnimationFrame(animate)
  }
  animate()
})

// Cleanup
import { onUnmounted } from 'vue'
onUnmounted(() => {
  if (animationFrame) {
    cancelAnimationFrame(animationFrame)
  }
})
</script>

<style scoped>
.hero-section {
  position: relative;
  padding: 5rem 0 2rem;
  background: linear-gradient(to bottom, #f8f9fa 0%, #e8f5e9 100%);
  overflow: hidden;
  min-height: 70vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.container {
  position: relative;
  z-index: 2;
}

.explore-btn {
  font-weight: 600;
  transition: all 0.3s ease;
  border: none;
}

.explore-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 20px rgba(25, 135, 84, 0.3) !important;
}

.grass-container {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 200px;
  overflow: hidden;
  pointer-events: all;
}

.grass-svg {
  width: 100%;
  height: 100%;
  display: block;
}

.grass-blade {
  cursor: pointer;
  transition: transform 0.2s ease-out;
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .hero-section {
    padding: 3rem 0 2rem;
    min-height: 60vh;
  }
  
  .display-4 {
    font-size: 2.5rem;
  }
  
  .grass-container {
    height: 150px;
  }
}

@media (max-width: 576px) {
  .display-4 {
    font-size: 2rem;
  }
  
  .lead {
    font-size: 1rem;
  }
  
  .explore-btn {
    padding: 0.75rem 2rem !important;
  }
}
</style>