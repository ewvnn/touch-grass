<template>
  <section class="hero-section">
    <div class="container text-center">
      <h1 class="display-4 fw-bold text-dark mb-3">
        Find Affordable Events in Singapore
      </h1>

      <p class="lead hero-lead text-secondary mx-auto mb-5">
        Go ahead and touch the grass!

      </p>

      <a
        href="#events" 
        class="btn btn-lg rounded-pill px-5 py-3 shadow-sm explore-btn text-white bg-success"
      >
        Explore Events
    </a>
    </div>

    <!-- Interactive Grass Patch -->
    <div class="grass-container">
      <svg 
        ref="svgRef"
        class="grass-svg" 
        :viewBox="'0 0 ' + vbWidth + ' 200'" 
        preserveAspectRatio="xMidYMax slice"
        xmlns="http://www.w3.org/2000/svg"
        @mousemove="onMouseMove"
        @mouseleave="onMouseLeave"
      >
        <!-- Ground -->
        <rect x="0" y="150" :width="vbWidth" height="50" fill="#5a8f4a" opacity="0.3"/>
        
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
import { ref, onMounted, onUnmounted } from 'vue'

const grassBlades = ref([])
const mouseX = ref(-1000)
const mouseY = ref(-1000)

const svgRef = ref(null)
const vbWidth = ref(1200)
const vbHeight = ref(200)

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

function makeBlades(width){
  const colors = ['#4a7c3a', '#5a8f4a', '#6ba85e', '#3d6b2f']
  const spacing = 10                          // ~1 blade per 10px
  const count = Math.ceil(width / spacing)
  const blades = []
  for (let i = 0; i < count; i++) {
    const x = i * spacing + Math.random() * 8
    const height = 40 + Math.random() * 60
    const w = 3 + Math.random() * 3
    const curve = 10 + Math.random() * 15
    blades.push({
      x, height, width: w, curve,
      color: colors[Math.floor(Math.random() * colors.length)],
      opacity: 0.7 + Math.random() * 0.3,
      baseRotation: (Math.random() - 0.5) * 5,
      swayOffset: Math.random() * Math.PI * 2,
      path: generateBladePath(x, height, w, curve),
      transition: 'transform 0.3s ease-out'
    })
  }
  return blades
}

function resizeSvg(){
  const el = svgRef.value
  if (!el) return
  const w = Math.max(320, Math.round(el.clientWidth))
  vbWidth.value = w
  grassBlades.value = makeBlades(w)
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
  resizeSvg()
  window.addEventListener('resize', resizeSvg)

  const animate = () => {
    // Force re-render for ambient animation
    grassBlades.value = [...grassBlades.value]
    animationFrame = requestAnimationFrame(animate)
  }
  animate()
})

// Cleanup
onUnmounted(() => {
  window.removeEventListener('resize', resizeSvg)
  if (animationFrame) {
    cancelAnimationFrame(animationFrame)
  }
})
</script>

<style scoped>
.hero-section {
  position: relative;
  padding: 3rem 0 2rem;
  background: white;
  overflow: hidden;
  min-height: 50vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  --grass-h: 150px;
  padding-bottom: 141px;
}

.container {
  position: relative;
  z-index: 2;
}

.hero-lead{
  max-width: min(48rem, 92vw);   
  font-size: 1rem;
  line-height: 1.6;
  margin: 0 auto 3rem;
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
  height: var(--grass-h);
  overflow: hidden;
  pointer-events: all;
  z-index: 1;
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
@media (min-width: 576px) {
  .display-4 {
    font-size: 2.5rem;
  }
  
  .hero-lead {
    font-size: 1.25rem;
  }
  
  .explore-btn {
    padding: 1rem 3rem !important;
  }
}

@media (min-width: 768px) {
  .hero-section {
    padding: 6rem 0 2rem;
    padding-bottom: calc(2rem + var(--grass-h));
    min-height: 70vh;
    --grass-h: 200px;
  }
  
  .display-4 {
    font-size: 3.5rem;
  }
}
</style>