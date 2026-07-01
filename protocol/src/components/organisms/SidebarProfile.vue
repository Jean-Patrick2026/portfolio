<script setup>
import PulseDot from '../atoms/PulseDot.vue'
import AppButton from '../atoms/AppButton.vue'
import ContactInfoItem from '../molecules/ContactInfoItem.vue'

const contacts = [
  { icon: 'mail', label: 'E-mail direct', value: 'Patrick.n-guessan@epitech.eu', href: 'mailto:Patrick.n-guessan@epitech.eu' },
  { icon: 'call', label: 'Ligne directe', value: '+225 05 00 75 36 05', href: 'tel:+2250500753605' },
  { icon: 'location_on', label: 'Localisation', value: 'Abidjan, Côte d\'Ivoire', href: '' }
]
</script>

<template>
  <div class="glass-card rounded-xl p-8 flex flex-col items-center text-center space-y-8 sticky top-28 self-start w-full">
    <!-- Profile Image / Stylized Cyberpunk Avatar -->
    <div class="relative w-40 h-40 rounded-full bg-gradient-to-tr from-electric-cyan to-purple-haze p-1 shadow-[0_0_20px_rgba(0,242,255,0.3)] group overflow-hidden">
      <div class="w-full h-full rounded-full bg-deep-space flex items-center justify-center overflow-hidden">
        <!-- SVG Avatar placeholder / Abstract Holographic lines -->
        <svg class="w-24 h-24 text-electric-cyan opacity-80 group-hover:scale-110 group-hover:opacity-100 transition-all duration-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
          <circle cx="12" cy="8" r="4" />
          <path d="M18 21a6 6 0 0 0-12 0" />
          <line x1="12" y1="2" x2="12" y2="4" />
          <line x1="2" y1="12" x2="4" y2="12" />
          <line x1="20" y1="12" x2="22" y2="12" />

        </svg>
          <img src="/src/assets/profile.jpeg" alt="Avatar" class="rounded-full">

      </div>
      <!-- Subtle scanlines overlay -->
      <div class="absolute inset-0 rounded-full bg-gradient-to-b from-transparent via-white/5 to-transparent pointer-events-none"></div>
    </div>

    <!-- Active Indicator -->
    <PulseDot text="System Online" />

    <!-- Personal details -->
    <div>
      <h2 class="font-headline-md text-headline-md text-starlight-white tracking-tight">Konan Jean-Patrick N'Guessan</h2>
      <p class="font-code-sm text-code-sm text-electric-cyan uppercase mt-2 tracking-widest">DÉVELOPPEUR FULLSTACK</p>
    </div>

    <!-- Contact details -->
    <div class="w-full text-left space-y-6 pt-6 border-t border-white/10">
      <ContactInfoItem
        v-for="(c, idx) in contacts"
        :key="idx"
        :icon="c.icon"
        :label="c.label"
        :value="c.value"
        :href="c.href"
      />
    </div>

    <!-- Download Resume Button -->
    <div class="w-full pt-4">
      <AppButton
        variant="white"
        href="/CV_NGUESSAN_KONAN_JEAN-PATRICK.pdf"
        class="w-full"
        download
      >
        <span class="material-symbols-outlined mr-2">download</span>
        Télécharger le CV
      </AppButton>
    </div>
  </div>
</template>
