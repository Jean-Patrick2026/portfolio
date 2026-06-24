<script setup>
import Header from './components/Header.vue'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { onMounted } from 'vue';
import HeroSection from './components/HeroSection.vue';
import Education from './components/Education.vue';
import Certificates from './components/Certificates.vue';
import AboutSection from './components/AboutSection.vue';
import Experience from './components/Experience.vue';
import Projects from './components/Projects.vue';
import Contact from './components/Contact.vue';
import Footer from './components/Footer.vue';

onMounted(() => {
  AOS.init({
    duration: 1000,
    once: false,
    offset: 100,
  })
})

</script>

<template>
  <div className="bg-[#111827] min-h-screen">
    <Header />
    <HeroSection />
    <Education />
    <Certificates />
    <AboutSection />
    <Experience />
    <Projects />
    <Contact />
    <Footer />

  </div>
</template>
