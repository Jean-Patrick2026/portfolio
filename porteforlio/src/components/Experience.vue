<script setup>
import { Briefcase, Building2, Component, Cpu, Layers, Layout, Terminal } from 'lucide-vue-next';


const skills = [
    {
        id: 1,
        name: 'React Js',
        width: '85%',
        icons: Layout
    },
        {
        id: 1,
        name: 'Vue Js',
        width: '95%',
        icons: Cpu
    },
    {
        id: 3,
        name: 'Next Js',
        width: '80%',
        icons: Terminal
    },
    {
        id: 4,
        name: 'figma Js',
        width: '85%',
        icons: Layers
    },
]

const experiences = [
    {
        id: 1,
        role: 'Frontend Developper',
        company: 'Spotify',
        date: 'Mar 2022 - Sep 2023'
    },
    {
        id: 2,
        role: 'backend Developper',
        company: 'Coca-cola',
        date: 'Mar 2022 - Sep 2023'
    }
]

</script>
<template>
    <section class="text-white py-20 relative overflow-hidden" id="skills">
        <div class="max-w-7xl mx-auto px-6 lg:px-16 relative z-10">
            <div class="grid md:grid-cols-2 gap-16 items-start">
                <div data-aos="fade-right">
                    <h2 class="text-4xl md:text-5xl font-extrabold mb-12">Technical <span class="text-primary">Skills</span></h2>
                    <div class="space-y-8">
                        <div v-for="skill in skills" :key="skill.id" class="group">

                            <div class="flex items-center justify-between mb-2">
                                <div class="flex items-center gap-3">





                                    <div class="p-2 bg-[#111a3e] tounded-lg group-hover:bg-primary transition-colors duration-300">
                                        <Component :is="skill.icons" :size="20" class="text-primary group-hover:text-white" />
                                    </div>
                                    <span class="font-medium tracking-wide">
                                        {{ skill.name }}
                                    </span>
                                </div>
                                <span class="text-primary font-bold">
                                    {{ skill.width }}
                                </span>

                            </div>

                            <div class="h-2 w-full bg-[#131d30] rounded-full p-0.5">
                                <div class="h-full rounded-full bg-linear-to-r from-primary to-green-400 shadow-[0_0_10px_#06a2c2]" :style="{width: skill.width}"></div>

                            </div>
                        </div>


                    </div>
                </div>
                <div  data-aos="fade-left">
                    <h2 class="text-4xl md:text-5xl font-extrabold mb-12">
                        Work <span class="text-primary"> Experience</span>
                    </h2>
                    <div class="space-y-6">
                        <div v-for="exp in experiences" :key="exp.id" class="group relative p-6 rounded-2xl bg-[#111a3e] border border-[#1f1641] hover:border-primary/50 transition-all duration-300">
                            <div class="flex gap-4">
                                <div class="shrink-0 mt-1">
                                    <div class="p-3 bg-[#050816] rounded-xl border border-gray-800 group-hover:border-primary transition-colors">
                                        <Briefcase class="text-primary" :size="24" />
                                    </div>
                                </div>
                                <div class="grow">
                                    <h3 class="text-xl font-bold text-white group-hover:text-primary transition-colors">
                                        {{ exp.role }}
                                    </h3>
                                    <div class="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-sm text-gray-400">
                                        <span class="flex items-center gap-1.5">
                                            <Building2 :size="14" class="text-primary" />
                                            {{ exp.company }}
                                        </span>
                                        <span class="flex items-center gap-1.5">
                                            <Building2 :size="14" class="text-primary" />
                                            {{ exp.date }}
                                        </span>

                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>


            </div>
        </div>
    </section>
</template>