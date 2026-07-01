<script setup>
import SkillGroupCard from '../components/molecules/SkillGroupCard.vue'
import TimelineGroup from '../components/organisms/TimelineGroup.vue'
import PillTag from '../components/atoms/PillTag.vue'

const skillGroups = [
  {
    title: 'Écosystème Front-End',
    icon: 'code',
    accent: 'cyan',
    skills: ['Vue.js 3', 'React.js', 'TypeScript', 'Tailwind CSS', 'Alpine.js', 'HTML5 / CSS3', 'JavaScript (ES6+)']
  },
  {
    title: 'Technologies Back-End',
    icon: 'dns',
    accent: 'purple',
    skills: ['PHP 8', 'Laravel', 'Node.js', 'Express.js', 'REST APIs', 'WebSockets (Socket.io)', 'Remix']
  },
  {
    title: 'Bases de Données & Outils',
    icon: 'build',
    accent: 'emerald',
    skills: ['MySQL', 'PostgreSQL', 'MongoDB', 'Prisma ORM', 'Git & GitHub', 'Docker', 'Vite / npm', 'Linux CLI']
  }
]

const educationItems = [
  {
    date: '2025 - 2026',
    title: 'Cursus Développeur Full-Stack',
    subtitle: 'We.Code - Coding Academy',
    description: 'Formation intensive orientée projets et autonomie. Développement d\'applications complexes (E-commerce, APIs temps réel, réseaux de petites annonces) en appliquant les méthodologies agiles, la modélisation de bases de données et le Clean Code.',
    active: true
  },
  {
    date: '2022 - 2024',
    title: 'Classes Préparatoires aux Grandes Écoles',
    subtitle: 'MPSI / MP (Maths, Physique, Sciences de l\'Ingénieur)',
    description: 'Formation scientifique de haut niveau développant une forte rigueur analytique, une capacité d\'apprentissage rapide sous pression et des compétences approfondies en résolution de problèmes complexes.',
    active: false
  },
  {
    date: '2021 - 2022',
    title: 'Baccalauréat Scientifique',
    subtitle: 'Mention Très Bien',
    description: 'Spécialités Mathématiques et Physique-Chimie. Introduction à l\'algorithmique algorithmique de base et résolution logique.',
    active: false
  }
]

const softSkills = [
  'Autonomie complète',
  'Rigueur mathématique',
  'Esprit d\'équipe & Peer programming',
  'Curiosité & Veille active',
  'Capacité d\'adaptation rapide',
  'Résolution de bugs complexes'
]
</script>

<template>
  <div class="space-y-20 py-12">
    <!-- Header Section -->
    <div class="space-y-4 max-w-3xl">
      <p class="font-code-sm text-code-sm text-electric-cyan uppercase tracking-widest">PROFIL TECHNIQUE</p>
      <h1 class="font-headline-lg text-[36px] md:text-headline-lg text-starlight-white uppercase tracking-tight">
        COMPÉTENCES & PARCOURS
      </h1>
      <p class="font-body-lg text-body-lg text-on-surface-variant">
        Découvrez mon arsenal de compétences techniques structuré et l'itinéraire d'études académiques qui a forgé ma logique algorithmique et ma rigueur.
      </p>
    </div>

    <!-- Skills Category Cards -->
    <section class="space-y-8">
      <h2 class="font-headline-md text-headline-md text-starlight-white border-b border-white/10 pb-4">ARSENAL DE COMPÉTENCES</h2>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <SkillGroupCard
          v-for="group in skillGroups"
          :key="group.title"
          :title="group.title"
          :icon="group.icon"
          :accent="group.accent"
          :skills="group.skills"
        />
      </div>
    </section>

    <!-- Split Section: Education Timeline & Soft Skills -->
    <div class="grid grid-cols-1 lg:grid-cols-3 gap-12 pt-6">
      <!-- Education Timeline (Left 2 cols) -->
      <section class="lg:col-span-2 space-y-8">
        <h2 class="font-headline-md text-headline-md text-starlight-white border-b border-white/10 pb-4">PARCOURS SCOLAIRE</h2>
        <TimelineGroup :items="educationItems" />
      </section>

      <!-- Soft Skills (Right 1 col) -->
      <section class="space-y-8 self-start">
        <h2 class="font-headline-md text-headline-md text-starlight-white border-b border-white/10 pb-4">SOFT SKILLS</h2>
        <div class="bg-nebula-glass border border-white/5 rounded-xl p-8 backdrop-blur-md space-y-6">
          <p class="text-on-surface-variant text-body-md">
            Des compétences humaines et méthodologiques indispensables pour collaborer efficacement en équipe de développement.
          </p>
          <div class="flex flex-col gap-3">
            <div
              v-for="skill in softSkills"
              :key="skill"
              class="flex items-center gap-3 py-2 border-b border-white/5 last:border-0"
            >
              <span class="material-symbols-outlined text-electric-cyan text-sm">
                check_circle
              </span>
              <span class="text-on-surface font-body-md">{{ skill }}</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>
