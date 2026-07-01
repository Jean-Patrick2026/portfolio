<script setup>
import { ref } from 'vue'
import { RouterLink, useRoute } from 'vue-router'
import AppButton from '../atoms/AppButton.vue'

const route = useRoute()
const isMobileMenuOpen = ref(false)

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'Projets', path: '/projects' },
  { name: 'Compétences', path: '/skills' },
  { name: 'CV / Résumé', path: '/resume' }
]

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value
}
</script>

<template>
  <header class="fixed top-0 w-full z-50 bg-nebula-glass backdrop-blur-xl border-b border-white/10 shadow-[0_0_20px_rgba(0,242,255,0.1)]">
    <div class="flex justify-between items-center px-6 md:px-gutter py-4 max-w-max-width mx-auto">
      <RouterLink to="/" class="font-headline-md text-headline-md font-bold text-starlight-white tracking-tighter">
        JKP.DEV
      </RouterLink>
      
      <!-- Desktop Nav -->
      <nav class="hidden md:flex gap-8 items-center">
        <RouterLink
          v-for="link in navLinks"
          :key="link.path"
          :to="link.path"
          class="font-body-md text-body-md transition-all duration-300 pb-1"
          :class="route.path === link.path 
            ? 'text-electric-cyan font-bold border-b-2 border-electric-cyan' 
            : 'text-on-surface-variant hover:text-electric-cyan'"
        >
          {{ link.name }}
        </RouterLink>
      </nav>
      
      <!-- Right Action button -->
      <div class="hidden md:block">
        <AppButton variant="primary" href="/resume">
          Hire Me
        </AppButton>
      </div>

      <!-- Mobile menu button -->
      <button @click="toggleMobileMenu" class="md:hidden text-white focus:outline-none">
        <span class="material-symbols-outlined text-[32px]">
          {{ isMobileMenuOpen ? 'close' : 'menu' }}
        </span>
      </button>
    </div>

    <!-- Mobile Nav Dropdown -->
    <div v-if="isMobileMenuOpen" class="md:hidden bg-deep-space/95 border-b border-white/10 px-6 py-6 space-y-4 backdrop-blur-lg">
      <RouterLink
        v-for="link in navLinks"
        :key="link.path"
        :to="link.path"
        @click="isMobileMenuOpen = false"
        class="block font-body-md text-body-md py-2 border-b border-white/5"
        :class="route.path === link.path ? 'text-electric-cyan font-bold' : 'text-on-surface-variant'"
      >
        {{ link.name }}
      </RouterLink>
      <div class="pt-4">
        <AppButton variant="primary" href="/resume" @click="isMobileMenuOpen = false" class="w-full">
          Hire Me
        </AppButton>
      </div>
    </div>
  </header>
</template>
