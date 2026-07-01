<script setup>
import { ref, computed } from 'vue'
import BentoGrid from '../components/templates/BentoGrid.vue'
import BentoProjectCard from '../components/organisms/BentoProjectCard.vue'
import PillTag from '../components/atoms/PillTag.vue'

const selectedCategory = ref('all')

const categories = [
  { id: 'all', name: 'Tous les projets' },
  { id: 'frontend', name: 'Front-End' },
  { id: 'backend', name: 'Back-End' },
  { id: 'fullstack', name: 'Full-Stack' }
]

const projects = [
  {
    title: 'Show Time',
    description: 'Une plateforme d\'achat de tickets de cinéma en ligne intégrant une grille interactive de sélection de sièges synchronisée en temps réel via WebSockets, couplée à un espace d\'administration complet pour gérer les films, les salles et la tarification.',
    image: 'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?q=80&w=800&auto=format&fit=crop',
    tags: ['Vue.js 3', 'Tailwind CSS', 'Node.js', 'Socket.io', 'MySQL', 'Express'],
    role: 'Lead Architect & Dev',
    date: 'AVRIL 2026',
    link: '#',
    category: 'fullstack',
    accent: 'cyan',
    spanClass: 'col-span-12 md:col-span-8'
  },
  {
    title: 'Rotten Tomatoes',
    description: 'Une version revisitée du célèbre site d\'avis de films. Permet aux utilisateurs d\'explorer des milliers de films via l\'API TMDB, de rédiger des revues détaillées, de noter des films et d\'enregistrer leurs favoris.',
    image: 'https://images.unsplash.com/photo-1440404653325-ab127d49abc1?q=80&w=800&auto=format&fit=crop',
    tags: ['React.js', 'Express.js', 'MongoDB', 'TMDB API', 'Tailwind CSS'],
    role: 'Full Stack Dev',
    date: 'FÉVRIER 2026',
    link: '#',
    category: 'fullstack',
    accent: 'purple',
    spanClass: 'col-span-12 md:col-span-4'
  },
  {
    title: 'Post-it Board',
    description: 'Une application collaborative de type Kanban pour la gestion de tâches en équipe. Supporte le glisser-déposer (Drag & Drop), l\'édition rapide de cartes, l\'attribution de priorités et la catégorisation par tags colorés.',
    image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=800&auto=format&fit=crop',
    tags: ['Remix', 'TypeScript', 'Tailwind CSS', 'PostgreSQL', 'Prisma'],
    role: 'Frontend Dev',
    date: 'DÉCEMBRE 2025',
    link: '#',
    category: 'frontend',
    accent: 'purple',
    spanClass: 'col-span-12 md:col-span-4'
  },
  {
    title: 'FreeAds',
    description: 'Une plateforme de petites annonces avec authentification sécurisée, messagerie instantanée en temps réel entre acheteurs et vendeurs, recherche multicritères par mots-clés et filtre géographique, et tableau de bord de gestion d\'annonces.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop',
    tags: ['Laravel', 'PHP', 'AlpineJS', 'MySQL', 'Mailgun SMTP', 'Tailwind CSS'],
    role: 'Backend Engineer',
    date: 'OCTOBRE 2025',
    link: '#',
    category: 'backend',
    accent: 'cyan',
    spanClass: 'col-span-12 md:col-span-8'
  }
]

const filteredProjects = computed(() => {
  if (selectedCategory.value === 'all') return projects
  return projects.filter(p => p.category === selectedCategory.value)
})
</script>

<template>
  <div class="space-y-16 py-12">
    <!-- Header Section -->
    <div class="space-y-4 max-w-3xl">
      <p class="font-code-sm text-code-sm text-electric-cyan uppercase tracking-widest">RÉALISATIONS TECHNIQUES</p>
      <h1 class="font-headline-lg text-[36px] md:text-headline-lg text-starlight-white uppercase tracking-tight">
        ÉCOSYSTÈME DE PROJETS
      </h1>
      <p class="font-body-lg text-body-lg text-on-surface-variant">
        Explorez mon portfolio de projets académiques et personnels développés au sein de la Coding Academy. Chaque projet démontre une maîtrise de problématiques logicielles concrètes.
      </p>
    </div>

    <!-- Category Filter Buttons -->
    <div class="flex flex-wrap gap-3 border-b border-white/10 pb-6">
      <button
        v-for="cat in categories"
        :key="cat.id"
        @click="selectedCategory = cat.id"
        class="font-code-sm text-code-sm px-5 py-2.5 rounded-xl border transition-all duration-300 active:scale-95"
        :class="selectedCategory === cat.id
          ? 'bg-electric-cyan text-black border-electric-cyan font-bold shadow-[0_0_15px_rgba(0,242,255,0.3)]'
          : 'glass-panel text-on-surface-variant hover:text-electric-cyan border-white/5'"
      >
        {{ cat.name }}
      </button>
    </div>

    <!-- Technical Ecosystem ribbon -->
    <div class="bg-nebula-glass border border-white/5 rounded-xl px-8 py-6 backdrop-blur-md flex flex-wrap gap-8 justify-around items-center opacity-80">
      <div class="text-center">
        <p class="font-label-caps text-label-caps text-electric-cyan">FRONTEND</p>
        <p class="text-xs text-on-surface-variant font-mono mt-1">Vue.js / React / TypeScript / AlpineJS</p>
      </div>
      <div class="w-px h-8 bg-white/10 hidden md:block"></div>
      <div class="text-center">
        <p class="font-label-caps text-label-caps text-purple-haze">BACKEND</p>
        <p class="text-xs text-on-surface-variant font-mono mt-1">Laravel / PHP / Node.js / Express</p>
      </div>
      <div class="w-px h-8 bg-white/10 hidden md:block"></div>
      <div class="text-center">
        <p class="font-label-caps text-label-caps text-tertiary-container">BASE DE DONNÉES</p>
        <p class="text-xs text-on-surface-variant font-mono mt-1">MySQL / PostgreSQL / MongoDB / Prisma</p>
      </div>
    </div>

    <!-- Projects Grid -->
    <BentoGrid>
      <BentoProjectCard
        v-for="project in filteredProjects"
        :key="project.title"
        :project="project"
      />
    </BentoGrid>
  </div>
</template>
