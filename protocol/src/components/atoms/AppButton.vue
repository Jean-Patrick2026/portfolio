<script setup>
import { computed } from 'vue'

const props = defineProps({
  variant: {
    type: String,
    default: 'primary',
    validator: (value) => ['primary', 'ghost', 'white'].includes(value)
  },
  href: {
    type: String,
    default: ''
  },
  type: {
    type: String,
    default: 'button'
  }
})

const buttonClass = computed(() => {
  const baseClass = 'px-6 py-2 rounded-xl font-bold font-body-md text-body-md inline-flex items-center justify-center transition-all duration-300 active:scale-95'
  
  if (props.variant === 'primary') {
    return `${baseClass} bg-gradient-to-r from-electric-cyan to-purple-haze text-white glow-button`
  } else if (props.variant === 'ghost') {
    return `${baseClass} border border-electric-cyan text-electric-cyan hover:bg-electric-cyan/10`
  } else if (props.variant === 'white') {
    return `${baseClass} bg-white text-black hover:bg-electric-cyan shadow-xl`
  }
  return baseClass
})

const isLink = computed(() => !!props.href)
</script>

<template>
  <a v-if="isLink" :href="props.href" :class="buttonClass">
    <slot />
  </a>
  <button v-else :type="props.type" :class="buttonClass">
    <slot />
  </button>
</template>
