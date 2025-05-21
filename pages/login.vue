<script setup lang="ts">
definePageMeta({
  layout: 'app'
})

const { loggedIn, user, fetch: refreshSession } = useUserSession()
const credentials = reactive({
  email: '',
  password: '',
})
const showPassword = ref(false)
const isLoading = ref(false)
const error = ref('')

async function login() {
  error.value = ''
  isLoading.value = true

  try {
    await $fetch('/api/login', {
      method: 'POST',
      body: credentials
    })

    // Refresh the session on client-side and redirect to the home page
    await refreshSession()
    await navigateTo('/')
  } catch (e) {
    error.value = 'Email ou mot de passe incorrect'
  } finally {
    isLoading.value = false
  }
}
</script>

<template>
  <div class="min-h-[80vh] flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
    <div class="glass-effect p-8 rounded-2xl max-w-md w-full">
      <div class="flex justify-center mb-6">
        <div class="w-14 h-14 rounded-xl bg-cool-gradient flex items-center justify-center text-white font-bold text-2xl">
          C
        </div>
      </div>

      <h2 class="mt-6 text-center text-3xl font-bold tracking-tight">Connexion à CoolGPT</h2>
      <p class="mt-2 text-center text-sm text-gray-400">
        Ou
        <ULink to="/register" class="text-cool-primary hover:text-cool-primary/90">
          créer un nouveau compte
        </ULink>
      </p>

      <form @submit.prevent="login" class="mt-8 space-y-6">
        <div v-if="error" class="bg-red-900/20 border border-red-500/20 text-red-500 p-3 rounded-lg text-sm">
          {{ error }}
        </div>

        <div class="-space-y-px rounded-md shadow-sm">
          <div>
            <label for="email-address" class="sr-only">Adresse email</label>
            <input
                v-model="credentials.email"
                id="email-address"
                name="email"
                type="email"
                autocomplete="email"
                required
                class="relative block w-full rounded-t-lg bg-cool-dark/50 border border-cool-primary/20 p-4 focus:z-10 focus:outline-none focus:border-cool-primary/50"
                placeholder="Adresse email"
            />
          </div>
          <div class="relative">
            <label for="password" class="sr-only">Mot de passe</label>
            <input
                v-model="credentials.password"
                id="password"
                name="password"
                :type="showPassword ? 'text' : 'password'"
                autocomplete="current-password"
                required
                class="relative block w-full rounded-b-lg bg-cool-dark/50 border-t-0 border border-cool-primary/20 p-4 focus:z-10 focus:outline-none focus:border-cool-primary/50"
                placeholder="Mot de passe"
            />
            <button
                type="button"
                class="absolute inset-y-0 right-0 pr-3 flex items-center"
                @click="showPassword = !showPassword"
            >
              <UIcon :name="showPassword ? 'i-heroicons-eye' : 'i-heroicons-eye-slash'" class="text-gray-400" />
            </button>
          </div>
        </div>

        <div class="flex items-center justify-between">
          <div class="flex items-center">
            <input id="remember-me" name="remember-me" type="checkbox" class="h-4 w-4 rounded bg-cool-dark border-cool-primary/30 text-cool-primary focus:ring-cool-primary" />
            <label for="remember-me" class="ml-2 block text-sm text-gray-300">Se souvenir de moi</label>
          </div>

          <div class="text-sm">
            <ULink to="/forgot-password" class="text-cool-primary hover:text-cool-primary/90">
              Mot de passe oublié?
            </ULink>
          </div>
        </div>

        <div>
          <UButton
              type="submit"
              color="red"
              block
              :loading="isLoading"
              class="py-3 font-medium"
          >
            Se connecter
          </UButton>
        </div>
      </form>
    </div>
  </div>
</template>

<style scoped>
.glass-effect {
  background: rgba(var(--color-cool-dark), 0.7);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(var(--color-cool-primary), 0.1);
  box-shadow: 0 8px 32px rgba(var(--color-cool-primary), 0.1);
}
</style>