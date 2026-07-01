<script setup>
import { ref } from 'vue'
import PillTag from '../atoms/PillTag.vue'

const props = defineProps({
  project: {
    type: Object,
    required: true
  }
})

const cardRef = ref(null)
const mouseX = ref('0px')
const mouseY = ref('0px')

const onMouseMove = (e) => {
  if (!cardRef.value) return
  const rect = cardRef.value.getBoundingClientRect()
  mouseX.value = `${e.clientX - rect.left}px`
  mouseY.value = `${e.clientY - rect.top}px`
}
</script>

<template>
  <div
    ref="cardRef"
    @mousemove="onMouseMove"
    class="group relative bg-nebula-glass rounded-xl border border-white/5 backdrop-blur-md overflow-hidden hover:border-electric-cyan transition-all duration-500 hover:scale-[1.02] hover:-translate-y-2 hover:shadow-[0_0_30px_rgba(0,242,255,0.4)] flex flex-col justify-end min-h-[400px]"
    :class="project.spanClass || 'col-span-12 md:col-span-6'"
    :style="{
      '--mouse-x': mouseX,
      '--mouse-y': mouseY
    }"
  >
    <!-- Background Image with Zoom & Dark Gradient overlay -->
    <div
      v-if="project.image"
      class="absolute inset-0 opacity-20 group-hover:opacity-40 transition-opacity duration-500 pointer-events-none"
    >
      <div
        class="h-full w-full bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
        :style="{ backgroundImage: `url(${project.image})` }"
      ></div>
    </div>
    
    <!-- Dark Gradient Overlay for text readability -->
    <div class="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent z-10 pointer-events-none"></div>

    <!-- Radial Glow following cursor (via CSS variables) -->
    <div class="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-0"
         :style="{
           background: `radial-gradient(circle 150px at var(--mouse-x) var(--mouse-y), rgba(0, 242, 255, 0.08), transparent 80%)`
         }"
    ></div>

    <!-- Card Content -->
    <div class="relative p-8 z-20 h-full flex flex-col justify-end w-full">
      <div class="flex items-center gap-2 mb-4" v-if="project.date">
        <PillTag :text="project.date" :variant="project.accent || 'cyan'" />
      </div>
      
      <h3 class="font-headline-md text-headline-md text-starlight-white mb-2">{{ project.title }}</h3>
      
      <p class="text-on-surface-variant font-body-md mb-6 max-w-xl">
        {{ project.description }}
      </p>
      
      <div class="flex flex-wrap gap-2 mb-6" v-if="project.tags">
        <span
          v-for="tag in project.tags"
          :key="tag"
          class="font-code-sm text-code-sm px-3 py-1 bg-surface-container-high border border-white/10 rounded-lg text-on-surface-variant"
        >
          {{ tag }}
        </span>
      </div>
      
      <div class="flex items-center justify-between mt-auto">
        <div class="flex items-center gap-3" v-if="project.role">
          <span class="material-symbols-outlined text-electric-cyan">
            {{ project.accent === 'purple' ? 'architecture' : 'person' }}
          </span>
          <span class="font-body-md text-on-surface">Rôle: {{ project.role }}</span>
        </div>
        
        <a
          v-if="project.link"
          :href="project.link"
          class="material-symbols-outlined text-starlight-white group-hover:text-electric-cyan transition-colors group-hover:translate-x-2 duration-300"
        >
          arrow_forward
        </a>
      </div>
    </div>
  </div>
</template>
