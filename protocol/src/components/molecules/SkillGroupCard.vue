<script setup>
import PillTag from '../atoms/PillTag.vue'

defineProps({
  title: {
    type: String,
    required: true
  },
  icon: {
    type: String,
    default: ''
  },
  skills: {
    type: Array,
    required: true
  },
  accent: {
    type: String,
    default: 'cyan',
    validator: (v) => ['cyan', 'purple', 'emerald', 'default'].includes(v)
  }
})
</script>

<template>
  <div
    class="bg-nebula-glass backdrop-blur-md border border-white/5 rounded-xl p-8 transition-all duration-300"
    :class="{
      'hover:border-electric-cyan': accent === 'cyan',
      'hover:border-purple-haze': accent === 'purple',
      'hover:border-tertiary-container': accent === 'emerald',
      'hover:border-white/20': accent === 'default'
    }"
  >
    <div class="mb-6 flex items-center gap-3">
      <span
        v-if="icon"
        class="material-symbols-outlined text-3xl"
        :class="{
          'text-electric-cyan': accent === 'cyan',
          'text-purple-haze': accent === 'purple',
          'text-tertiary-container': accent === 'emerald',
          'text-on-surface': accent === 'default'
        }"
      >
        {{ icon }}
      </span>
      <h3 class="font-headline-md text-[20px] text-starlight-white">{{ title }}</h3>
    </div>
    <div class="flex flex-wrap gap-3">
      <PillTag
        v-for="skill in skills"
        :key="skill"
        :text="skill"
        :variant="accent === 'emerald' ? 'emerald' : accent"
      />
    </div>
  </div>
</template>
