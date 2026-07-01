<script setup>
import { ref } from 'vue'
import AppInput from '../atoms/AppInput.vue'
import AppTextarea from '../atoms/AppTextarea.vue'
import AppButton from '../atoms/AppButton.vue'

const name = ref('')
const email = ref('')
const subject = ref('')
const message = ref('')

const isSending = ref(false)
const submitStatus = ref('') // 'success' | 'error' | ''
const terminalLog = ref([])

const addLog = (msg) => {
  terminalLog.value.push({
    time: new Date().toLocaleTimeString(),
    msg
  })
}

const handleSubmit = () => {
  if (isSending.value) return
  isSending.value = true
  submitStatus.value = ''
  terminalLog.value = []

  addLog('Establishing connection to interstellar server...')
  
  setTimeout(() => {
    addLog('Validating communication parameters...')
    
    setTimeout(() => {
      addLog(`Encrypting data packages from [${name.value}]...`)
      
      setTimeout(() => {
        addLog('Transmitting telemetry to JKP.DEV grid...')
        
        setTimeout(() => {
          addLog('Transmission confirmation received (Code 202).')
          isSending.value = false
          submitStatus.value = 'success'
          
          // Clear inputs
          name.value = ''
          email.value = ''
          subject.value = ''
          message.value = ''
        }, 1000)
      }, 800)
    }, 600)
  }, 500)
}
</script>

<template>
  <div class="glass-card rounded-xl p-8 max-w-2xl mx-auto">
    <div class="flex items-center gap-2 mb-6">
      <span class="relative flex h-3 w-3">
        <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-electric-cyan opacity-75"></span>
        <span class="relative inline-flex rounded-full h-3 w-3 bg-electric-cyan"></span>
      </span>
      <h3 class="font-headline-md text-headline-md text-starlight-white">Transmettre un Message</h3>
    </div>

    <form @submit.prevent="handleSubmit" class="space-y-6">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <AppInput
          v-model="name"
          label="Nom complet"
          placeholder="Jean Dupont"
          required
        />
        <AppInput
          v-model="email"
          label="Adresse Email"
          placeholder="jean.dupont@example.com"
          type="email"
          required
        />
      </div>

      <AppInput
        v-model="subject"
        label="Objet du message"
        placeholder="Proposition de collaboration / Offre de projet"
        required
      />

      <AppTextarea
        v-model="message"
        label="Message"
        placeholder="Bonjour Jean-Patrick, j'aimerais discuter d'un projet..."
        rows="5"
        required
      />

      <div class="text-right">
        <AppButton variant="primary" type="submit" class="w-full md:w-auto" :disabled="isSending">
          <span class="material-symbols-outlined mr-2">send</span>
          {{ isSending ? 'Transmission en cours...' : 'Envoyer le message' }}
        </AppButton>
      </div>
    </form>

    <!-- Terminal Status Panel for cinematic experience -->
    <div v-if="terminalLog.length > 0" class="mt-8 bg-black border border-white/10 rounded-xl p-4 font-mono text-left text-xs text-on-surface-variant overflow-y-auto max-h-[180px] space-y-1 shadow-inner">
      <div class="flex justify-between border-b border-white/5 pb-2 mb-2">
        <span class="text-electric-cyan">SYSTEM TELEMETRY LOG</span>
        <span class="text-purple-haze">ONLINE</span>
      </div>
      <div v-for="(log, idx) in terminalLog" :key="idx" class="flex gap-2">
        <span class="text-white/30">[{{ log.time }}]</span>
        <span :class="idx === terminalLog.length - 1 && isSending ? 'text-electric-cyan animate-pulse' : 'text-on-surface'">
          > {{ log.msg }}
        </span>
      </div>
      <div v-if="submitStatus === 'success'" class="text-emerald-pulse font-bold mt-2 pt-2 border-t border-white/5">
        ✓ Transmission complete. Thank you, I will contact you shortly!
      </div>
    </div>
  </div>
</template>
