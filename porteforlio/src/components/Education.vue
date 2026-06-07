<script setup>
import { Calendar, CheckCircle2, GraduationCap } from 'lucide-vue-next';
import educ from '../assets/educ.png';

const educationData = [
    {
        id: "Lorem ipsum dolor",
        degree: "consecteteur adipissing 1",
        institution: "ecole consecteteur adipissing elit.",
        duration: '2020 - 2022',
        details: "dolorem unde corrupti ullam adipisci doloribus quisqua de la mia de l'argete"
    },
    {
        id: "Lorem ipsum dolor",
        degree: "consecteteur adipissing 2",
        institution: "ecolee 2consecteteur adipissing elit.",
        duration: '2020 - 2022',
        details: "dolorem unde corrupti ullam adipisci doloribus quisqua de la mia de l'argete"
    }
]
</script>


<template>
    <section class="text-white py-20 overflow-hidden" id="education">
        <div class="max-w-7-xl mx-auto px-6 lg:px-16">
            <div class="mb-16">
                <p class="text-primary text-sm upppercase mb-2 tracking-widest font-semibold">Learning Path</p>
                <h2 class="text-4xl md:text-5xl font-extrabold text-white">Education</h2>
            </div>
            <div class="flex flex-col lg:flex-row items-center gap-16">
                <div class="w-full lg:w-5/12 flex justify-center lg:justify-start data-aos=fade-right">
                    <div class="relative">
                        <div class="absolute h-full w-full z-0 p-2 translate-x-4 translate-y-4 rounded-2xl shadow-lg border border-primary"></div>
                        <div class="relative z-1 bg-[#111a2e] rounded-2xl overflow-hidden border-[#1f1641]">
                            <img :src="educ" alt="Education" class="w-64 h-64 md:w-96 md:h-120 object-cover transform transition-transform duration-500 hover:scale-110">
                        </div>
                    </div>
                </div>
                <!-- Education Content -->
                <div class="w-full lg:w-7/12 space-y-6" data-aos="fade-left">
                    <div v-for="edu in educationData" :key="edu.id" class="group relative p-6 rounded-2xl bg-[#1f1641] transition-all duration-300 hover:border-primary/50">
                        <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">

                            <div class="flex items-center gap-3">

                                <div class="p-2 bg-[#050216] rounded-lg border border-primary/20 group-hover:border-primary transition-colors">
                                    <GraduationCap class="text-primary" :size="24" />
                                </div>
                                <div>
                                    <h3 class="text-lg font-bold text-white group-hover:text-primary transition-colors">
                                        {{ edu.degree }}
                                    </h3>
                                    <p class="text-gray-400 text-sm">
                                        {{ edu.institution }}
                                    </p>
                                </div>
                            </div>

                            <div class="flex items-center gap-2 text-xs font-medium bg-[#050816] px-3 py-1 rounded-full border border-gray700 w-fit">
                                <Calendar :size class="text-primary" />
                                {{ edu.duration }}
                            </div>
                        </div>
                        <p class="text-gray-400 text-sm leading-relaxed mb-4">
                            {{ edu.details }}
                            <!-- 29:37 -->
                        </p>
                        <div class="flex items-center gap-2 text-[10px] uppercase tracking-wider text-primary font-bold">
                            <CheckCircle2 :size="12" />
                            Academin Excellence
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>