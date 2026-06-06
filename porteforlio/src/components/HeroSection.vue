<script setup>
import { Download } from 'lucide-vue-next';
import hero from '../assets/hero.png'


</script>
<template>
    <section class="relative w-full" data-aos="zoom-in-up">
        <div class="absolute top-0 inset-x-0 h-64 flex items-start">
            <div class="h-24 w-2/3 bg-linear-to-br from-[#0cac19] blur-2xl invisible opacity-40"></div>
            <div class="h-20 w-3/4 bg-linear-to-r from-[#4fff28] opacity-40 blur-2xl"></div>

        </div>
        <div class="w-full px-5 sm:px-8 md:px-12 lg:px-8 max-w-5xl lg:max-w-7xl mx-auto relative">
            <div class="grid lg:grid-cols-2 gap-10 xl:gap-14 raltive pt-24 lg:max-w-none max-w-2xl md:max-w-3xl mx-auto">
                <div class="lg:py-6">
                    <div class="text-center lg:text-left">
                        <h1 class="pt-4 text-white font-bold text-4xl md:text-5xl lg:text-6xl">
                            Hi, I'm <span class="text-transparent bg-clip-text bg-linear-to-r from-primary to-cyan-200"> Kinitch</span>  👋🏾
                        </h1>
                    </div>
                    <p class="text-gray-300 pt-8 text-center lg:text-left mx-auto max-w-xl">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, ipsam delectus a impedit, repudiandae molestias tempore quaerat rerum consequuntur architecto itaque nobis unde veritatis laborum. Tenetur tempora nam rerum eligendi.

                    </p>
                    <div class="flex items-center gap-3 pt-9 flex-col sm:flex-row sm:w-max sm:mx-auto lg:mx-0">
                        <!-- Hire me button -->

                         <button class="px-6 md:px-7 py-3 rounded-full relative group w-full sm:max flex justify-center">
                            <span class="absolute inset-0 rounded-3xl group-hover:scale-105 origin-center transition-all ease-in-out bg-primary border-2 border-transparent"></span>
                            <span class="relative flex items-center jusyify-center text-white"> Hire me</span>

                         </button>

                         <!-- Download button -->
                        <button class="border border-primary px-6 md:px-7 py-3 rounded-full relative group w-full sm:w-max flex justify-center">
                            <div class="hover:scale-105 transition-all ease-in-out flex justify-center relative">
                              
                                <!-- <div class="scg-container">
                                    <Download :size="18" class="text-primary"/>
                                    <div class="download-loader text-white hidden">
                                        <a href="/resume.pdf"
                                        download="resume.pdf"
                                        class="pl-2 text-primary"> Download resume</a>
                                    </div>
                                </div> -->

                                <div class="scg-container ">
                                    <Download :size="18" class="text-primary"/>
                                    <div class="download-loader text-white hidden " />          
                                </div>
                                    <a href="/resume.pdf"
                                    download="resume.pdf"
                                    class="pl-2 text-primary whitespace-nowrap"> Download resume
                                    </a>
                                    <!-- une modifucation de  'whitespace-nowrap' pour que Download resume soit sur la meme ligne-->
                            </div>
<!-- 19min 48sec -->
                        </button>
                    </div>
                </div>
                <!-- Image -->
                 <div class="lg:h-full md:flex">
                    <div class="flex w-full h-96 min-h-96 lg:min-h-[none] lg:w-full lg:h-full items-center relative">
                        <div class="absolute z-0 top-1/2 -translate-y-1/2 w-5/6 rihgt-0 h-[calc(80%+20px)] bg-linear-to-tr opacity-25 from-[#0cac24] to-primary blur-2xl"></div>
                        <div class="absolute h-full z-10 p-2 -translate-y-1/2 top-1/2 lg:right-3 md:right-40 sm:right-16 rounded-[30%_70%_70%_30%/30%_30%_70%_70%] shadow-lg border border-primary">
                            <img :src="hero" alt="hero" width="500" height="auto" loading="lazy" class="w-full h-full rounded-[30%_70%_70%_30%/30%_30%_70%_70%]">
                        </div>
                    </div>
                 </div>
            </div>
        </div>

    </section>
</template>
