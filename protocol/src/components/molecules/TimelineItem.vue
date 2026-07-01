<script setup>
defineProps({
  date: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  subtitle: {
    type: String,
    required: true
  },
  description: {
    type: String,
    default: ''
  },
  active: {
    type: Boolean,
    default: false
  }
})
</script>

<template>
  <div class="relative pl-10">
    <!-- Indicator Dot -->
    <div
      class="absolute left-0 top-1 w-6 h-6 rounded-full bg-background border-4 z-10 transition-colors duration-300"
      :class="{
        'border-electric-cyan shadow-[0_0_10px_#00f2ff]': active,
        'border-outline-variant hover:border-electric-cyan': !active
      }"
    ></div>
    <!-- Content -->
    <div>
      <span
        class="font-code-sm text-code-sm mb-2 block"
        :class="active ? 'text-electric-cyan' : 'text-on-surface-variant'"
      >
        {{ date }}
      </span>
      <h4 class="font-headline-md text-[20px] text-starlight-white mb-1">{{ title }}</h4>
      <p class="text-on-surface mb-2 font-medium">{{ subtitle }}</p>
      <p v-if="description" class="text-on-surface-variant font-body-md">
        {{ description }}
      </p>
    </div>
  </div>
</template>
