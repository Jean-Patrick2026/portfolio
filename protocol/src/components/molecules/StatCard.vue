<script setup>
defineProps({
  value: {
    type: String,
    required: true
  },
  label: {
    type: String,
    required: true
  }
})
</script>

<template>
  <div class="glass-panel p-8 rounded-xl bento-card-hover transition-all text-center">
    <h3 class="font-headline-lg text-headline-lg text-electric-cyan">{{ value }}</h3>
    <p class="font-label-caps text-label-caps text-on-surface-variant mt-2 uppercase tracking-widest">{{ label }}</p>
  </div>
</template>
