<script setup>
import { RouterLink } from 'vue-router'

defineProps({
  compact: {
    type: Boolean,
    default: false
  }
})
</script>

<template>
  <!-- Main Footer -->
  <footer v-if="!compact" class="w-full rounded-t-xl border-t border-outline-variant bg-surface-container-lowest relative z-10">
    <div class="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-base px-6 md:px-margin-desktop py-12 max-w-max-width mx-auto items-center">
      <div class="font-label-caps text-label-caps text-on-surface-variant uppercase tracking-widest text-center md:text-left">
        © 2024 N'GUESSAN KONAN JEAN-PATRICK • Abidjan, Côte d'Ivoire
      </div>
      <div class="flex justify-center gap-6 py-4 md:py-0">
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" class="font-code-sm text-code-sm uppercase tracking-widest text-on-surface-variant hover:text-electric-cyan transition-colors opacity-80 hover:opacity-100">LinkedIn</a>
        <a href="https://github.com" target="_blank" rel="noopener noreferrer" class="font-code-sm text-code-sm uppercase tracking-widest text-on-surface-variant hover:text-electric-cyan transition-colors opacity-80 hover:opacity-100">GitHub</a>
        <a href="mailto:Patrick.n-guessan@epitech.eu" class="font-code-sm text-code-sm uppercase tracking-widest text-on-surface-variant hover:text-electric-cyan transition-colors opacity-80 hover:opacity-100">Email</a>
      </div>
      <div class="flex justify-center md:justify-end">
        <a href="tel:+2250500753605" class="font-code-sm text-code-sm uppercase tracking-widest text-electric-cyan transition-colors opacity-80 hover:opacity-100">
          +225 05 00 75 36 05
        </a>
      </div>
    </div>
  </footer>

  <!-- Compact Footer (for Resume or dedicated pages) -->
  <footer v-else class="w-full rounded-t-xl border-t border-outline-variant bg-surface-container-lowest relative z-10">
    <div class="grid grid-cols-1 md:grid-cols-3 gap-6 px-6 md:px-margin-desktop py-12 max-w-max-width mx-auto items-center">
      <div class="font-label-caps text-label-caps text-on-surface-variant tracking-[0.2em] uppercase text-center md:text-left">
        © 2024 N'GUESSAN KONAN JEAN-PATRICK • Cinematic Precision
      </div>
      <div class="flex justify-center gap-8 text-[10px] font-mono tracking-widest">
        <RouterLink to="/" class="hover:text-electric-cyan transition uppercase">WORK</RouterLink>
        <RouterLink to="/skills" class="hover:text-electric-cyan transition uppercase">SKILLS</RouterLink>
        <RouterLink to="/resume" class="text-electric-cyan underline decoration-2 underline-offset-4 uppercase">RESUME</RouterLink>
      </div>
      <div class="text-center md:text-right text-electric-cyan font-mono text-xs">
        +225 05 00 75 36 05
      </div>
    </div>
  </footer>
</template>
