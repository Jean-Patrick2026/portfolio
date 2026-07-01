<script setup>
import { RouterLink } from 'vue-router'
import AppButton from '../components/atoms/AppButton.vue'
import PulseDot from '../components/atoms/PulseDot.vue'
import StatCard from '../components/molecules/StatCard.vue'
import BentoGrid from '../components/templates/BentoGrid.vue'
import BentoProjectCard from '../components/organisms/BentoProjectCard.vue'
import ContactForm from '../components/organisms/ContactForm.vue'

const stats = [
  { value: '20+', label: 'Projets Réalisés' },
  { value: '1.5k+', label: 'Heures de Code' },
  { value: '100%', label: 'Rigueur & Engagement' }
]

const featuredProjects = [
  {
    title: 'Show Time',
    description: 'Plateforme complète d\'achat de tickets de cinéma avec réservation interactive de sièges en temps réel et tableau de bord administrateur.',
    image: 'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?q=80&w=800&auto=format&fit=crop',
    tags: ['Vue.js 3', 'Tailwind CSS', 'Node.js', 'Socket.io', 'MySQL'],
    role: 'Lead Architect',
    date: 'AVRIL 2026',
    link: '/projects',
    accent: 'cyan',
    spanClass: 'col-span-12 md:col-span-8'
  },
  {
    title: 'Rotten Tomatoes',
    description: 'Système de revue de films avec notations, commentaires en direct et filtres avancés alimenté par une base de données de films externe.',
    image: 'https://images.unsplash.com/photo-1440404653325-ab127d49abc1?q=80&w=800&auto=format&fit=crop',
    tags: ['React', 'Express.js', 'MongoDB', 'TMDB API'],
    role: 'Full Stack Dev',
    date: 'FÉVRIER 2026',
    link: '/projects',
    accent: 'purple',
    spanClass: 'col-span-12 md:col-span-4'
  }
]
</script>

<template>
  <div class="space-y-24 py-12">
    <!-- Hero Section -->
    <section class="text-center space-y-8 max-w-4xl mx-auto py-12">
      <div class="flex justify-center">
        <PulseDot text="DISPONIBLE POUR MISSIONS / RECRUTEMENT" />
      </div>

      <h1 class="font-display-lg text-[40px] md:text-display-lg text-starlight-white uppercase tracking-tight leading-none">
        CONCEVOIR DES INTERFACES <span class="text-transparent bg-clip-text bg-gradient-to-r from-electric-cyan to-purple-haze">NUMÉRIQUES MODERNES</span> ET DES ARCHITECTURES PERFORMANTES
      </h1>

      <p class="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto">
        Je suis Jean-Patrick N'Guessan, développeur full-stack junior passionné par la création d'expériences web immersives et de systèmes de haute précision. Basé à Abidjan.
      </p>

      <div class="flex flex-col sm:flex-row justify-center gap-4 pt-4">
        <AppButton variant="primary" href="/projects">
          Explorer mes projets
          <span class="material-symbols-outlined ml-2">explore</span>
        </AppButton>
        <AppButton variant="ghost" href="/resume">
          Consulter mon CV
          <span class="material-symbols-outlined ml-2">article</span>
        </AppButton>
      </div>
    </section>

    <!-- Stats Section (Bento layout) -->
    <section class="space-y-6">
      <BentoGrid>
        <div v-for="stat in stats" :key="stat.label" class="col-span-12 md:col-span-4">
          <StatCard :value="stat.value" :label="stat.label" />
        </div>
      </BentoGrid>
    </section>

    <!-- Featured Projects Grid Section -->
    <section class="space-y-12">
      <div class="flex justify-between items-end border-b border-white/10 pb-6">
        <div>
          <p class="font-code-sm text-code-sm text-electric-cyan uppercase tracking-widest">TRAVAUX SÉLECTIONNÉS</p>
          <h2 class="font-headline-lg text-headline-lg text-starlight-white mt-1">PROJETS VEDETTES</h2>
        </div>
        <RouterLink to="/projects" class="font-code-sm text-code-sm text-on-surface-variant hover:text-electric-cyan flex items-center gap-2 transition-colors uppercase">
          Voir tout <span class="material-symbols-outlined">arrow_forward</span>
        </RouterLink>
      </div>

      <BentoGrid>
        <BentoProjectCard
          v-for="project in featuredProjects"
          :key="project.title"
          :project="project"
        />
      </BentoGrid>
    </section>

    <!-- Brief Bio Section -->
    <section class="grid grid-cols-1 md:grid-cols-2 gap-12 items-center bg-nebula-glass rounded-xl p-8 md:p-12 border border-white/5 backdrop-blur-md">
      <div class="space-y-6">
        <p class="font-code-sm text-code-sm text-purple-haze uppercase tracking-widest">QUI SUIS-JE ?</p>
        <h2 class="font-headline-lg text-headline-lg text-starlight-white">UN DÉVELOPPEUR GUIDÉ PAR L'INNOVATION ET LA RIGUEUR</h2>
        <p class="font-body-md text-body-md text-on-surface-variant leading-relaxed">
          Issu d'une formation d'ingénierie et de programmation web moderne, j'accorde une importance capitale à l'alignement précis entre l'esthétique des interfaces et la robustesse du code serveur.
        </p>
        <p class="font-body-md text-body-md text-on-surface-variant leading-relaxed">
          Chaque projet est pour moi l'opportunité de résoudre des défis d'architecture technique et de peaufiner les micro-interactions pour offrir l'expérience utilisateur la plus fluide possible.
        </p>
        <div class="pt-4">
          <RouterLink to="/skills">
            <AppButton variant="ghost">En savoir plus sur mes compétences</AppButton>
          </RouterLink>
        </div>
      </div>
      <!-- Decorative futuristic elements mimicking screen holographic lines -->
      <div class="h-64 rounded-xl border border-electric-cyan/20 bg-gradient-to-br from-midnight-blue to-deep-space flex items-center justify-center p-6 relative overflow-hidden group">
        <div class="absolute inset-0 opacity-10 bg-[linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] bg-[size:14px_24px] pointer-events-none"></div>
        <div class="absolute -top-12 -left-12 w-48 h-48 bg-purple-haze/10 rounded-full blur-3xl group-hover:scale-125 transition-transform duration-700"></div>
        <div class="absolute -bottom-12 -right-12 w-48 h-48 bg-electric-cyan/10 rounded-full blur-3xl group-hover:scale-125 transition-transform duration-700"></div>
        
        <div class="z-10 text-center space-y-4">
          <span class="material-symbols-outlined text-5xl text-electric-cyan animate-pulse">terminal</span>
          <p class="font-mono text-xs text-on-surface-variant">
            const dev = { name: "Jean-Patrick", level: "Fullstack", focus: "Vue / Laravel / Node" };
          </p>
        </div>
      </div>
    </section>

    <!-- Contact Form Section -->
    <section id="contact" class="space-y-12">
      <div class="text-center max-w-2xl mx-auto space-y-4">
        <p class="font-code-sm text-code-sm text-electric-cyan uppercase tracking-widest">ENTRER EN CONTACT</p>
        <h2 class="font-headline-lg text-headline-lg text-starlight-white">PRÊT À LANCER VOTRE PROJET ?</h2>
        <p class="font-body-md text-body-md text-on-surface-variant">
          N'hésitez pas à m'envoyer un message pour discuter d'une opportunité, d'une collaboration ou simplement pour échanger sur la technologie.
        </p>
      </div>

      <ContactForm />
    </section>
  </div>
</template>
