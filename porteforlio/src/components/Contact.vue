<script setup>
import { Component, Linkedin, Mail, MapPin, Phone } from 'lucide-vue-next';
import { reactive, ref } from 'vue';



const contactInfo = [
    {
        id:1,
        icon: Mail,
        title: 'Email',
        value: 'holle@exampl.com',
        link: 'mailto:holle@exampl.com',
    },
    {
        id:2,
        icon: Phone,
        title: 'Phone',
        value: '+225 0547896',
        link: 'tel:+225 0547896',
    },
    {
        id:3,
        icon: Linkedin,
        title: 'LinkedIn',
        value: 'linkdin.com/in/username',
        link: '#',
    },
    {
        id:4,
        icon: MapPin,
        title: 'Location',
        value: 'New York, USA',
        link: 'null',
    },

]


const formData = reactive({
    email: '',
    subject: '',
    message: ''
})

const isSubmitting = ref(false)

const handleSubmit = async () => {
    isSubmitting.value = true

    try{
        formData.email = ''
        formData.subject = ''
        formData.message = ''
    } catch (error) {
        alert('Failed to send message. please try again ')
    }finally{
        isSubmitting.value = false
    }
}
</script>
<template>
    <section class="py-20 bg-gray-900" id="contact">
        <div class="container mx-auto px-4 max-w-6xl">
            <div class="text-center mb-12">
                <h2 class="text-3xl md:text-5xl font-extrabold text-white mb-2">
                    Let's Connect.
                </h2>
                <div class="w-28 h-1 bg-primary mx-auto mt-2 rounded-2xl"></div>
            </div>
            <div class="grid md:grid-cols-2 gap-8">
                <div>
                    <p class="text-gray-400 mb-8 leading-relaxed">
                        Lorem ipsum dolor sit amet consectetur adipisicing
                         elit. Necessitatibus pariatur aperiam placeat magna
                         m commodi sunt eos maxime veritatis, ab voluptatibus v
                         elit alias sapiente recusandae quibusdam deserunt explicabo
                          illum perspiciatis repudiandae.
                    </p>
                    <div class="space-y-6">
                        <div v-for="info in contactInfo" ;key="info.id" class="flex items-center gap-4 group">
                            <div class="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                                <Component :is="info.icon" :size="18" class="text-primary" />

                            </div>
                            <div>
                                <h4 class="text-white font-medium text-sm">
                                    {{info.title}}
                                </h4>
                                <!-- 
                                
                                
                                
                                
                                
                                
                                
                                
                                
                                
                                -->
                                <!-- 55:28 -->
                                <a href=""></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

</template>