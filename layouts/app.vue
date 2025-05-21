<script setup lang="ts">
const { loggedIn, user } = useUserSession()
</script>

<template>
  <div class="min-h-screen bg-cool-dark text-white flex flex-col">
    <!-- Header avec effet glassmorphism -->
    <header class="sticky top-0 z-50 glass-navbar">
      <UContainer>
        <div class="flex justify-between items-center py-4">
          <div class="flex items-center gap-2">
            <!-- Logo -->
            <div class="w-10 h-10 rounded-md bg-gradient-to-br from-cool-primary to-cool-secondary flex items-center justify-center text-white font-bold text-xl">
              C
            </div>
            <h1 class="text-xl font-bold">Cool<span class="text-cool-primary">GPT</span></h1>
          </div>

          <!-- Navigation principale -->
          <nav class="hidden md:flex">
            <ul class="flex gap-6">
              <li><ULink to="/" class="text-white hover:text-cool-primary transition-colors">Accueil</ULink></li>
              <li><ULink to="/features" class="text-white hover:text-cool-primary transition-colors">Fonctionnalités</ULink></li>
              <li><ULink to="/pricing" class="text-white hover:text-cool-primary transition-colors">Tarifs</ULink></li>
              <li><ULink to="/about" class="text-white hover:text-cool-primary transition-colors">À propos</ULink></li>
            </ul>
          </nav>

          <!-- Authentication / Mon compte -->
          <div class="hidden md:block">
            <UButton v-if="!loggedIn" color="red" variant="ghost" to="/login">
              Connexion
            </UButton>
            <UButton v-else color="red" variant="solid" to="/dashboard" icon="i-heroicons-user">
              Mon Compte
            </UButton>
          </div>

          <!-- Menu mobile -->
          <UButton
              icon="i-heroicons-bars-3"
              color="white"
              variant="ghost"
              class="md:hidden"
              @click="() => $refs.mobileMenu?.toggle()"
          />
        </div>
      </UContainer>

      <!-- Menu mobile -->
      <UDropdown ref="mobileMenu" class="w-screen md:hidden glass-menu">
        <UDropdownItem to="/">Accueil</UDropdownItem>
        <UDropdownItem to="/features">Fonctionnalités</UDropdownItem>
        <UDropdownItem to="/pricing">Tarifs</UDropdownItem>
        <UDropdownItem to="/about">À propos</UDropdownItem>
        <UDropdownDivider />
        <UDropdownItem v-if="!loggedIn" to="/login" icon="i-heroicons-user">
          Connexion
        </UDropdownItem>
        <UDropdownItem v-else to="/dashboard" icon="i-heroicons-user">
          Mon Compte
        </UDropdownItem>
      </UDropdown>
    </header>

    <!-- Contenu principal -->
    <main class="flex-1">
      <slot />
    </main>

    <!-- Footer -->
    <footer class="bg-cool-dark text-white py-16 border-t border-cool-primary/30">
      <UContainer>
        <div class="grid md:grid-cols-4 gap-8">
          <div>
            <h3 class="text-xl font-bold mb-4 text-cool-primary">COOLGPT</h3>
            <p class="text-gray-400 mb-4">L'IA conversationnelle nouvelle génération, plus intelligente et plus intuitive.</p>
          </div>
          <div>
            <h3 class="text-lg font-semibold mb-4 text-cool-primary">NAVIGATION</h3>
            <ul class="space-y-2">
              <li><ULink href="#" class="text-gray-400 hover:text-cool-primary transition">Fonctionnalités</ULink></li>
              <li><ULink href="#" class="text-gray-400 hover:text-cool-primary transition">Tarification</ULink></li>
              <li><ULink href="#" class="text-gray-400 hover:text-cool-primary transition">Documentation</ULink></li>
            </ul>
          </div>
          <div>
            <h3 class="text-lg font-semibold mb-4 text-cool-primary">RESSOURCES</h3>
            <ul class="space-y-2">
              <li><ULink href="#" class="text-gray-400 hover:text-cool-primary transition">Blog</ULink></li>
              <li><ULink href="#" class="text-gray-400 hover:text-cool-primary transition">Support</ULink></li>
              <li><ULink href="#" class="text-gray-400 hover:text-cool-primary transition">Communauté</ULink></li>
            </ul>
          </div>
          <div>
            <h3 class="text-lg font-semibold mb-4 text-cool-primary">ENTREPRISE</h3>
            <ul class="space-y-2">
              <li><ULink href="#" class="text-gray-400 hover:text-cool-primary transition">À propos</ULink></li>
              <li><ULink href="#" class="text-gray-400 hover:text-cool-primary transition">Contact</ULink></li>
              <li><ULink href="#" class="text-gray-400 hover:text-cool-primary transition">Carrières</ULink></li>
            </ul>
          </div>
        </div>
        <div class="border-t border-cool-primary/30 mt-12 pt-8 flex justify-between items-center">
          <p class="text-gray-500">© 2024 CoolGPT. Tous droits réservés.</p>
          <div class="flex gap-4">
            <UButton icon="i-simple-icons-twitter" color="red" variant="ghost" aria-label="Twitter" />
            <UButton icon="i-simple-icons-github" color="red" variant="ghost" aria-label="GitHub" />
            <UButton icon="i-simple-icons-linkedin" color="red" variant="ghost" aria-label="LinkedIn" />
          </div>
        </div>
      </UContainer>
    </footer>
  </div>
</template>

<style scoped>
.glass-navbar {
  background: rgba(20, 20, 20, 0.8);
  backdrop-filter: blur(10px);
  border-bottom: 1px solid rgba(255, 59, 59, 0.1);
}

.glass-menu {
  background: rgba(15, 0, 0, 0.95);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 59, 59, 0.1);
}
</style>