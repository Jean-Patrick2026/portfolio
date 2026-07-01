<script setup>
defineProps({
  icon: {
    type: String,
    default: ''
  },
  label: {
    type: String,
    required: true
  },
  value: {
    type: String,
    required: true
  },
  href: {
    type: String,
    default: ''
  },
  accent: {
    type: String,
    default: 'cyan',
    validator: (v) => ['cyan', 'purple'].includes(v)
  }
})
</script>

<template>
  <component
    :is="href ? 'a' : 'div'"
    :href="href"
    class="flex items-center gap-6 group"
    :class="{ 'cursor-pointer': !!href }"
  >
    <div
      class="w-12 h-12 glass-panel rounded-xl flex items-center justify-center transition-all duration-300"
      :class="{
        'text-electric-cyan group-hover:bg-electric-cyan group-hover:text-black': accent === 'cyan' && href,
        'text-purple-haze group-hover:bg-purple-haze group-hover:text-white': accent === 'purple' && href,
        'text-electric-cyan': accent === 'cyan' && !href,
        'text-purple-haze': accent === 'purple' && !href
      }"
    >
      <slot name="icon">
        <span v-if="icon" class="material-symbols-outlined text-[24px]">{{ icon }}</span>
      </slot>
    </div>
    <div>
      <p class="font-code-sm text-code-sm text-on-surface-variant uppercase tracking-wider">{{ label }}</p>
      <p class="font-body-lg text-body-lg text-starlight-white font-medium group-hover:text-electric-cyan transition-colors truncate max-w-xs md:max-w-sm">
        {{ value }}
      </p>
    </div>
  </component>
</template>
