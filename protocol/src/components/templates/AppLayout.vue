<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import HeaderNavigation from '../organisms/HeaderNavigation.vue'
import FooterSection from '../organisms/FooterSection.vue'
import ParticleBackground from '../atoms/ParticleBackground.vue'
import CustomCursor from '../atoms/CustomCursor.vue'

const route = useRoute()

const isResumePage = computed(() => route.path === '/resume')
</script>

<template>
  <div class="min-h-screen bg-deep-space flex flex-col relative text-on-background selection:bg-electric-cyan selection:text-black antialiased overflow-x-hidden">
    <!-- Cosmic background animations -->
    <ParticleBackground />
    <CustomCursor />

    <!-- Static Navigation -->
    <HeaderNavigation />

    <!-- Main Content Area -->
    <main class="flex-grow pt-24 max-w-max-width mx-auto px-6 md:px-margin-desktop w-full relative z-10">
      <slot />
    </main>

    <!-- Footer -->
    <FooterSection :compact="isResumePage" />
  </div>
</template>
