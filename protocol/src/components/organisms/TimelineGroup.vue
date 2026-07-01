<script setup>
import TimelineItem from '../molecules/TimelineItem.vue'

defineProps({
  items: {
    type: Array,
    required: true
  }
})
</script>

<template>
  <div class="relative pl-3">
    <!-- Vertical connection line -->
    <div class="absolute left-[13px] top-4 bottom-4 w-[2px] bg-outline-variant/30"></div>
    
    <div class="space-y-12">
      <TimelineItem
        v-for="(item, idx) in items"
        :key="idx"
        :date="item.date"
        :title="item.title"
        :subtitle="item.subtitle"
        :description="item.description"
        :active="item.active"
      />
    </div>
  </div>
</template>
