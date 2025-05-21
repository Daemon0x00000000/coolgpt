<script setup lang="ts">
const { loggedIn, user } = useUserSession()


definePageMeta({
  title: 'Nuxt',
  meta: [
    { name: 'description', content: 'Découvrez CoolGPT, la plateforme révolutionnaire qui redéfinit l\'innovation.' },
    { name: 'keywords', content: 'CoolGPT, innovation, technologie, plateforme' }
  ]
})
const features = [
  {
    title: 'Interface immersive',
    description: 'Une expérience utilisateur fluide et moderne avec des contrôles intuitifs.',
    icon: 'i-heroicons-fire'
  },
  {
    title: 'Sécurité maximale',
    description: 'Protection des données et authentification robuste pour une tranquillité totale.',
    icon: 'i-heroicons-shield-check'
  },
  {
    title: 'Performance extrême',
    description: 'Application ultra rapide et réactive pour des résultats instantanés.',
    icon: 'i-heroicons-rocket-launch'
  }
]

const testimonials = [
  {
    content: "Cette plateforme a révolutionné notre workflow. Un game changer absolu !",
    author: "Alexandre Moreau",
    role: "Directeur Innovation"
  },
  {
    content: "Interface puissante et design impressionnant. Exactement ce qu'il nous fallait.",
    author: "Sophie Leroux",
    role: "Lead Designer"
  }
]
</script>

<template>
  <div class="min-h-screen bg-black text-white">
    <!-- Hero Section avec glassmorphism -->
    <div class="relative hero-bg">
      <div class="absolute inset-0 bg-gradient-to-br from-black via-red-900/30 to-black"></div>
      <UContainer class="relative pt-32 pb-24">
        <div class="flex flex-col items-center text-center mb-16">
          <UBadge color="red" class="mb-6 px-4 py-1 text-sm">RÉVOLUTIONNAIRE</UBadge>
          <h1 class="text-6xl font-black text-white mb-6 leading-tight">
            Repousser les limites <span class="text-red-500">de l'innovation</span>
          </h1>
          <p class="text-xl text-gray-300 max-w-2xl mb-12">
            Une expérience utilisateur inégalée avec notre plateforme avant-gardiste conçue pour les visionnaires.
          </p>
          <div class="flex gap-6">
            <UButton v-if="!loggedIn" to="/login" color="red" size="xl" class="px-8 py-6 text-lg font-bold">
              COMMENCER MAINTENANT
            </UButton>
            <UButton v-else to="/dashboard" color="red" size="xl" class="px-8 py-6 text-lg font-bold">
              TABLEAU DE BORD
            </UButton>
            <UButton color="white" variant="ghost" size="xl" class="px-8 py-6 text-lg font-bold">
              DÉCOUVRIR
            </UButton>
          </div>
        </div>

        <!-- Image avec effet glassmorphism -->
        <div class="glass-card mt-16 mx-auto max-w-5xl overflow-hidden">
          <img src="https://source.unsplash.com/random/1200x600/?dark,tech,dashboard" alt="Application Dashboard" class="w-full h-auto">
        </div>
      </UContainer>
    </div>

    <!-- Features Section avec glassmorphism -->
    <section class="py-24 bg-gradient-to-br from-black via-red-950/20 to-black relative">
      <div class="absolute top-0 left-0 w-96 h-96 bg-red-500 rounded-full filter blur-3xl opacity-10"></div>
      <div class="absolute bottom-0 right-0 w-80 h-80 bg-red-700 rounded-full filter blur-3xl opacity-10"></div>
      <UContainer class="relative">
        <div class="text-center mb-20">
          <h2 class="text-4xl font-bold mb-4">Fonctionnalités <span class="text-red-500">Exceptionnelles</span></h2>
          <p class="text-lg text-gray-400 max-w-2xl mx-auto">
            Notre technologie de pointe offre des capacités inégalées, conçues pour surpasser vos attentes.
          </p>
        </div>

        <div class="grid md:grid-cols-3 gap-8">
          <div v-for="(feature, index) in features" :key="index" class="glass-feature p-8 rounded-2xl">
            <UIcon :name="feature.icon" class="text-red-500 text-4xl mb-6"/>
            <h3 class="text-2xl font-bold mb-3">{{ feature.title }}</h3>
            <p class="text-gray-400">{{ feature.description }}</p>
          </div>
        </div>
      </UContainer>
    </section>

    <!-- Testimonials avec glassmorphism -->
    <section class="py-24 bg-black relative overflow-hidden">
      <div class="absolute top-40 left-20 w-72 h-72 bg-red-600 rounded-full filter blur-3xl opacity-10"></div>
      <div class="absolute bottom-20 right-40 w-96 h-96 bg-red-800 rounded-full filter blur-3xl opacity-10"></div>
      <UContainer class="relative">
        <div class="text-center mb-20">
          <h2 class="text-4xl font-bold mb-4">Ils nous font <span class="text-red-500">confiance</span></h2>
        </div>

        <div class="grid md:grid-cols-2 gap-8">
          <div v-for="(testimonial, index) in testimonials" :key="index" class="glass-testimonial p-8 rounded-2xl">
            <div class="flex items-center gap-2 text-red-500 mb-6">
              <UIcon name="i-heroicons-star" v-for="i in 5" :key="i"/>
            </div>
            <p class="text-gray-300 italic text-lg mb-6">« {{ testimonial.content }} »</p>
            <div class="flex items-center mt-4">
              <div class="h-12 w-12 rounded-full bg-gradient-to-br from-red-600 to-red-800 flex items-center justify-center text-white font-bold">
                {{ testimonial.author[0] }}
              </div>
              <div class="ml-4">
                <h4 class="font-semibold text-white">{{ testimonial.author }}</h4>
                <p class="text-sm text-gray-400">{{ testimonial.role }}</p>
              </div>
            </div>
          </div>
        </div>
      </UContainer>
    </section>

    <!-- CTA Section avec glassmorphism -->
    <section class="py-24 bg-gradient-to-br from-red-950 via-black to-black relative">
      <div class="absolute inset-0 bg-pattern opacity-5"></div>
      <UContainer class="text-center relative">
        <div class="glass-cta p-12 rounded-3xl mx-auto max-w-4xl">
          <h2 class="text-4xl font-bold mb-6">Prêt à <span class="text-red-500">révolutionner</span> votre expérience ?</h2>
          <p class="text-lg text-gray-300 max-w-2xl mx-auto mb-10">
            Rejoignez l'élite des utilisateurs qui ont déjà transformé leur approche avec notre solution avant-gardiste.
          </p>
          <UButton to="/login" color="red" size="xl" class="px-10 py-6 text-lg font-bold">
            ACCÈS EXCLUSIF
          </UButton>
        </div>
      </UContainer>
    </section>

    <!-- Footer -->
    <footer class="bg-black text-white py-16 border-t border-red-900/30">
      <UContainer>
        <div class="grid md:grid-cols-4 gap-8">
          <div>
            <h3 class="text-xl font-bold mb-4 text-red-500">NOTRE VISION</h3>
            <p class="text-gray-400 mb-4">Redéfinir les standards avec une solution révolutionnaire.</p>
          </div>
          <div>
            <h3 class="text-lg font-semibold mb-4 text-red-500">NAVIGATION</h3>
            <ul class="space-y-2">
              <li><ULink href="#" class="text-gray-400 hover:text-red-500 transition">Fonctionnalités</ULink></li>
              <li><ULink href="#" class="text-gray-400 hover:text-red-500 transition">Tarification</ULink></li>
              <li><ULink href="#" class="text-gray-400 hover:text-red-500 transition">Documentation</ULink></li>
            </ul>
          </div>
          <div>
            <h3 class="text-lg font-semibold mb-4 text-red-500">RESSOURCES</h3>
            <ul class="space-y-2">
              <li><ULink href="#" class="text-gray-400 hover:text-red-500 transition">Blog</ULink></li>
              <li><ULink href="#" class="text-gray-400 hover:text-red-500 transition">Support</ULink></li>
              <li><ULink href="#" class="text-gray-400 hover:text-red-500 transition">Communauté</ULink></li>
            </ul>
          </div>
          <div>
            <h3 class="text-lg font-semibold mb-4 text-red-500">ENTREPRISE</h3>
            <ul class="space-y-2">
              <li><ULink href="#" class="text-gray-400 hover:text-red-500 transition">À propos</ULink></li>
              <li><ULink href="#" class="text-gray-400 hover:text-red-500 transition">Contact</ULink></li>
              <li><ULink href="#" class="text-gray-400 hover:text-red-500 transition">Carrières</ULink></li>
            </ul>
          </div>
        </div>
        <div class="border-t border-red-900/30 mt-12 pt-8 flex justify-between items-center">
          <p class="text-gray-500">© 2024 Votre Entreprise. Tous droits réservés.</p>
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
.hero-bg {
  background-image: url('https://source.unsplash.com/random/1920x1080/?abstract,dark,red');
  background-size: cover;
  background-position: center;
}

.glass-card {
  background: rgba(20, 20, 20, 0.7);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 0, 0, 0.1);
  border-radius: 16px;
  box-shadow: 0 8px 32px rgba(255, 0, 0, 0.1);
}

.glass-feature {
  background: rgba(20, 20, 20, 0.5);
  backdrop-filter: blur(8px);
  border: 1px solid rgba(255, 0, 0, 0.1);
  box-shadow: 0 4px 24px rgba(255, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.glass-feature:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 32px rgba(255, 0, 0, 0.2);
}

.glass-testimonial {
  background: rgba(20, 20, 20, 0.6);
  backdrop-filter: blur(12px);
  border: 1px solid rgba(255, 0, 0, 0.1);
  box-shadow: 0 4px 24px rgba(255, 0, 0, 0.1);
}

.glass-cta {
  background: rgba(30, 0, 0, 0.7);
  backdrop-filter: blur(15px);
  border: 1px solid rgba(255, 0, 0, 0.2);
  box-shadow: 0 8px 32px rgba(255, 0, 0, 0.2);
}

.bg-pattern {
  background-image: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ff0000' fill-opacity='0.2'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
}
</style>