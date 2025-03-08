<template>
  <CollapsiblePanel :header="$t('about.achievements.title')" class="mt-5">
    <template>
      <TrophyIcon class="h-8 w-8" />
    </template>
    <div class="bg-white grid grid-cols-2 md:grid-cols-5 gap-12 text-center">
  <div v-for="tech in achievements" :key="tech.name" class="flex flex-col items-center gap-2">
    <i :class="[tech.icon, '!text-primary-600 text-5xl']" />
    <span class="text-gray-700 text-lg font-medium whitespace-pre-line">{{ tech.name }}</span>
  </div>
</div>

  </CollapsiblePanel>
</template>

<script setup lang="ts">
import CollapsiblePanel from '@/components/CollapsiblePanel.vue'
import TrophyIcon from '@/components/icons/TrophyIcon.vue'
import type { AchievementEntry } from '@/types'
import { useLocalizedData } from '@/composables/LocalizedData'
const { data: achievements } = useLocalizedData<AchievementEntry[]>('about.achievements.list')
</script>
