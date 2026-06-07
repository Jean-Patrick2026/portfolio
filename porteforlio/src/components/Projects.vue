<script setup>
import proj1 from '../assets/proj1.png'
import proj2 from '../assets/proj1.png'
import proj3 from '../assets/proj1.png'
import proj4 from '../assets/proj1.png'
import proj5 from '../assets/proj1.png'
import proj6 from '../assets/proj1.png'

const projects = [
    {
        id:1,
        image: proj1,
        title: 'E-commerce Platform',
        desc: 'Modern e-commerce solution ',
        techg: ['React', 'Node.js', 'MongoDB'],
    },
    {
        id:2,
        image: proj2,
        title: 'E-commerce Platform',
        desc: 'Modern e-commerce solution ',
        techg: ['React', 'Node.js', 'MongoDB'],
    },
    {
        id:3,
        image: proj3,
        title: 'E-commerce Platform',
        desc: 'Modern e-commerce solution ',
        techg: ['React', 'Node.js', 'MongoDB'],
    },
    {
        id:4,
        image: proj4,
        title: 'E-commerce Platform',
        desc: 'Modern e-commerce solution ',
        techg: ['React', 'Node.js', 'MongoDB'],
    },
    {
        id:5,
        image: proj5,
        title: 'E-commerce Platform',
        desc: 'Modern e-commerce solution ',
        techg: ['React', 'Node.js', 'MongoDB'],
    },
    {
        id:6,
        image: proj6,
        title: 'E-commerce Platform',
        desc: 'Modern e-commerce solution ',
        techg: ['React', 'Node.js', 'MongoDB'],
    },
]

</script>
<template>
    <section class="py-16 bg-gray-900" id="projects">
        <div class="container mx-auto px-4 max-w-7xl">
            <div class="text-center mb-10">
                <h2 class="text-4xl md:text-5xl font-extrabold text-white">
                    Projects.
                </h2>
                <div class="w-28 h-1 bg-primary mx-auto mt-2 rounded-2xl"></div>
            </div>
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                <div v-for="project in projects" :key="project.id" class="bg-gray-800 rounded-lg overflow-hidden shadow-sm hover:shadow-lg hover:scale-105 transition-all duration-300">
                    <img :src="project.image" :alt="project.title" class="w-full h-44 object-cover hover:opacity-90 transition-opacity duration-300">
                    <div class="p-4">
                        <h3 class="text-lg font-semibold text-white group-hover:primary transition-colors">
                            {{ project.title }}
                        </h3>
                        <p class="text-gray-400 text-sm mt-1">
                            {{ project.desc }}
                        </p>
                        <div class="flex flex-wrap gap-1.5 mt-3">
                            <span v-for="(tech, idx) in project.techg" :key="idx" class="text-xs px-2 py-0.5 bg-gray-700 text-gray-300 rounded hover:bg-primary hover:text-white transition-colors duration-300">
                                {{ tech }}
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>