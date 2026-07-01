<script setup>
defineProps({
  modelValue: {
    type: String,
    default: ''
  },
  label: {
    type: String,
    default: ''
  },
  placeholder: {
    type: String,
    default: ''
  },
  type: {
    type: String,
    default: 'text'
  },
  required: {
    type: Boolean,
    default: false
  }
})

defineEmits(['update:modelValue'])
</script>

<template>
  <div class="space-y-2 text-left w-full">
    <label v-if="label" class="font-code-sm text-code-sm text-on-surface-variant block uppercase tracking-wider">
      {{ label }}
    </label>
    <input
      :type="type"
      :value="modelValue"
      :placeholder="placeholder"
      :required="required"
      @input="$emit('update:modelValue', $event.target.value)"
      class="w-full bg-deep-space border border-white/10 rounded-xl px-6 py-4 focus:ring-2 focus:ring-electric-cyan outline-none text-white transition-all duration-300 placeholder-white/20"
    />
  </div>
</template>
