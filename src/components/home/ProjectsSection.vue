<template>
  <section class="relative flex min-h-[100vh] w-full items-center justify-center bg-base-50 pb-32">
    <div class="custom-shape-divider-top-1713495835">
      <svg
        data-name="Layer 1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
        class="section-background-color !bg-transparent"
      >
        <path d="M1200 120L0 10 0 0 1200 0 1200 120z" fill="currentColor"></path>
      </svg>
    </div>
    <div id="projects" name="projects" class="content mt-[60px]">
      <h1 class="section__title pt-10">
        {{ $t('projects.title') }}
      </h1>
      <ul class="space-y-8 pb-10 pt-8">
        <li v-for="project in main_projects" :key="project.name">
          <ProjectCard
            :name="project.name"
            :techstack="project.techstack"
            :image="project.image"
            :description="project.description"
            :src="project.src"
            :url="project.url"
            :status="project.status"
          />
        </li>
      </ul>
      <ul class="grid gap-10 md:grid-cols-2">
        <li class="flex w-full" v-for="project in other_projects" :key="project.name">
          <ProjectCardSmall
            :name="project.name"
            :description="project.description"
            :src="project.src"
             :url="project.url"
            :techstack="project.techstack"
          />
        </li>
      </ul>
    </div>
  </section>
</template>

<script lang="ts" setup>
import ProjectCard from './ProjectSection-Card.vue'
import ProjectCardSmall from './ProjectSection-AltCard.vue'
import type { ProjectEntry } from '@/types'
import { useLocalizedData } from '@/composables/LocalizedData'

const { data: main_projects } = useLocalizedData<ProjectEntry[]>('projects.main')
const { data: other_projects } = useLocalizedData<ProjectEntry[]>('projects.other')
</script>

<style scoped>
.custom-shape-divider-top-1713495835 {
  position: absolute;
  top: -1px;
  left: 0;
  width: 100%;
  overflow: hidden;
  line-height: 0;
  filter: drop-shadow(0 4px 2px rgba(0, 0, 0, 0.2));
}

.custom-shape-divider-top-1713495835 svg {
  position: relative;
  display: block;
  width: calc(100% + 1.3px);
  height: 100px;
}

.custom-shape-divider-top-1714950289 {
  position: absolute;
  bottom: -10px;
  left: 0;
  width: 100%;
  overflow: hidden;
  line-height: 0;
  filter: drop-shadow(0 -5px 3px rgba(0, 0, 0, 0.2));
}

.custom-shape-divider-top-1714950289 svg {
  position: relative;
  display: block;
  width: calc(100% + 1.3px);
  height: 100px;
}

@media (max-width: 800px) {
  .custom-shape-divider-top-1714950289 svg {
    width: 800px;
    height: auto;
  }
  .custom-shape-divider-top-1713495835 svg {
    width: 800px;
    height: auto;
  }
}
</style>
