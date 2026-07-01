<script setup>
import SidebarProfile from '../components/organisms/SidebarProfile.vue'
import BentoGrid from '../components/templates/BentoGrid.vue'
import PillTag from '../components/atoms/PillTag.vue'

const projects = [
  {
    title: 'Show Time (Cinema Booking)',
    role: 'Lead Architect',
    date: 'Avril 2026',
    desc: 'Conception de l\'architecture MVC et de l\'API WebSocket. Développement du plan de salle dynamique.',
    tech: ['Vue.js', 'Node.js', 'Socket.io', 'MySQL']
  },
  {
    title: 'Rotten Tomatoes',
    role: 'Fullstack Developer',
    date: 'Février 2026',
    desc: 'Intégration d\'API de films externe, logique d\'évaluation par les utilisateurs, authentification JWT.',
    tech: ['React', 'Express.js', 'MongoDB', 'JWT']
  },
  {
    title: 'Post-it Board',
    role: 'Frontend Developer',
    date: 'Décembre 2025',
    desc: 'Développement d\'une interface Kanban fluide avec glisser-déposer interactif.',
    tech: ['Remix', 'TypeScript', 'Tailwind CSS', 'PostgreSQL']
  },
  {
    title: 'FreeAds (Petites Annonces)',
    role: 'Backend Engineer',
    date: 'Octobre 2025',
    desc: 'Création d\'un système de recherche multicritère et de la base de données relationnelle MySQL.',
    tech: ['Laravel', 'PHP', 'AlpineJS', 'Mailgun']
  }
]

const education = [
  {
    school: 'We.Code - Coding Academy',
    degree: 'Développeur Logiciel / Full-stack',
    date: '2025 - 2026'
  },
  {
    school: 'Classes Préparatoires (MPSI / MP)',
    degree: 'Sciences Physiques & Ingénierie',
    date: '2022 - 2024'
  }
]

const languages = [
  { name: 'Français', level: 'Langue Maternelle (Excellent)' },
  { name: 'Anglais', level: 'Niveau Professionnel (B2 - Technique)' },
  { name: 'Espagnol', level: 'Notions Élémentaires' }
]
</script>

<template>
  <div class="py-12">
    <!-- Bento 12-column grid layout for Resume page -->
    <BentoGrid>
      <!-- Left Column - Sticky Sidebar Profile (takes 4 columns) -->
      <div class="col-span-12 lg:col-span-4 z-20">
        <SidebarProfile />
      </div>

      <!-- Right Column - Detailed Scrollable Content (takes 8 columns) -->
      <div class="col-span-12 lg:col-span-8 space-y-12 lg:pl-6">
        <!-- Profile Statement Card -->
        <section class="glass-card rounded-xl p-8 space-y-4">
          <div class="flex items-center gap-2 border-b border-white/5 pb-3">
            <span class="material-symbols-outlined text-electric-cyan">badge</span>
            <h3 class="font-headline-md text-[20px] text-starlight-white">Profil</h3>
          </div>
          <p class="font-body-md text-body-md text-on-surface-variant leading-relaxed">
            Jeune développeur passionné d'informatique et doté d'une rigueur scientifique acquise en Classes Préparatoires aux Grandes Écoles. Motivé par l'apprentissage rapide et la conception d'architectures Web performantes.
          </p>
          <p class="font-body-md text-body-md text-on-surface-variant leading-relaxed">
            J'associe rigueur algorithmique et maîtrise des technologies modernes pour répondre à des problématiques métiers complexes de manière élégante et scalable.
          </p>
        </section>

        <!-- Academic Projects list -->
        <section class="glass-card rounded-xl p-8 space-y-6">
          <div class="flex items-center gap-2 border-b border-white/5 pb-3">
            <span class="material-symbols-outlined text-purple-haze">assignment_turned_in</span>
            <h3 class="font-headline-md text-[20px] text-starlight-white">Expériences & Projets Réalisés</h3>
          </div>
          
          <div class="space-y-8">
            <div
              v-for="(p, idx) in projects"
              :key="idx"
              class="border-b border-white/5 last:border-0 pb-6 last:pb-0 space-y-3"
            >
              <div class="flex flex-col sm:flex-row justify-between sm:items-center">
                <h4 class="font-headline-md text-[18px] text-starlight-white font-bold">{{ p.title }}</h4>
                <span class="font-code-sm text-code-sm text-electric-cyan font-bold sm:mt-0 mt-1">{{ p.date }}</span>
              </div>
              <p class="font-mono text-xs text-purple-haze">Rôle : {{ p.role }}</p>
              <p class="font-body-md text-body-md text-on-surface-variant">{{ p.desc }}</p>
              <div class="flex flex-wrap gap-2 pt-2">
                <PillTag v-for="t in p.tech" :key="t" :text="t" variant="default" />
              </div>
            </div>
          </div>
        </section>

        <!-- Education Summary -->
        <section class="glass-card rounded-xl p-8 space-y-6">
          <div class="flex items-center gap-2 border-b border-white/5 pb-3">
            <span class="material-symbols-outlined text-tertiary-container">school</span>
            <h3 class="font-headline-md text-[20px] text-starlight-white">Éducation</h3>
          </div>
          
          <div class="space-y-6">
            <div
              v-for="(e, idx) in education"
              :key="idx"
              class="flex justify-between items-start border-b border-white/5 last:border-0 pb-4 last:pb-0"
            >
              <div>
                <h4 class="font-headline-md text-[18px] text-starlight-white font-bold">{{ e.school }}</h4>
                <p class="font-body-md text-body-md text-on-surface-variant">{{ e.degree }}</p>
              </div>
              <span class="font-code-sm text-code-sm text-on-surface-variant">{{ e.date }}</span>
            </div>
          </div>
        </section>

        <!-- Languages & Interests Card -->
        <section class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <!-- Languages -->
          <div class="glass-card rounded-xl p-8 space-y-4">
            <div class="flex items-center gap-2 border-b border-white/5 pb-3">
              <span class="material-symbols-outlined text-electric-cyan">language</span>
              <h3 class="font-headline-md text-[18px] text-starlight-white">Langues</h3>
            </div>
            <div class="space-y-3 font-body-md">
              <div v-for="lang in languages" :key="lang.name" class="flex justify-between items-center border-b border-white/5 last:border-0 pb-2 last:pb-0">
                <span class="text-starlight-white font-medium">{{ lang.name }}</span>
                <span class="text-on-surface-variant text-sm">{{ lang.level }}</span>
              </div>
            </div>
          </div>

          <!-- Interests -->
          <div class="glass-card rounded-xl p-8 space-y-4">
            <div class="flex items-center gap-2 border-b border-white/5 pb-3">
              <span class="material-symbols-outlined text-purple-haze">interests</span>
              <h3 class="font-headline-md text-[18px] text-starlight-white">Intérêts</h3>
            </div>
            <div class="flex flex-wrap gap-3 pt-2">
              <span class="font-code-sm text-code-sm px-3 py-1 bg-surface-container border border-white/5 rounded-full text-on-surface-variant hover:text-electric-cyan transition-colors">Algorithmique & Graphes</span>
              <span class="font-code-sm text-code-sm px-3 py-1 bg-surface-container border border-white/5 rounded-full text-on-surface-variant hover:text-electric-cyan transition-colors">Veille Tech</span>
              <span class="font-code-sm text-code-sm px-3 py-1 bg-surface-container border border-white/5 rounded-full text-on-surface-variant hover:text-electric-cyan transition-colors">Space Sci-Fi / Astronomie</span>
              <span class="font-code-sm text-code-sm px-3 py-1 bg-surface-container border border-white/5 rounded-full text-on-surface-variant hover:text-electric-cyan transition-colors">Échecs</span>
            </div>
          </div>
        </section>
      </div>
    </BentoGrid>
  </div>
</template>
