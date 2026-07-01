<script setup>
import { computed } from 'vue'

const props = defineProps({
  text: {
    type: String,
    required: true
  },
  variant: {
    type: String,
    default: 'default',
    validator: (value) => ['default', 'cyan', 'purple', 'emerald'].includes(value)
  }
})

const tagClass = computed(() => {
  const base = 'font-code-sm text-code-sm px-3 py-1 rounded-full border transition-all duration-300'
  if (props.variant === 'cyan') {
    return `${base} bg-electric-cyan/10 text-electric-cyan border-electric-cyan/20`
  } else if (props.variant === 'purple') {
    return `${base} bg-purple-haze/10 text-purple-haze border-purple-haze/20`
  } else if (props.variant === 'emerald') {
    return `${base} bg-emerald-pulse/10 text-emerald-pulse border-emerald-pulse/20`
  }
  // Default glass style
  return `${base} glass-panel text-on-surface-variant hover:text-electric-cyan border-white/5`
})
</script>

<template>
  <span :class="tagClass">
    {{ text }}
  </span>
</template>
