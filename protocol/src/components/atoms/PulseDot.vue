<script setup>
defineProps({
  text: {
    type: String,
    default: ''
  }
})
</script>

<template>
  <div class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-panel">
    <span class="relative flex h-2 w-2">
      <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-pulse opacity-75"></span>
      <span class="relative inline-flex rounded-full h-2 w-2 bg-emerald-pulse"></span>
    </span>
    <span v-if="text" class="font-code-sm text-code-sm text-emerald-pulse uppercase tracking-wider">
      {{ text }}
    </span>
  </div>
</template>
