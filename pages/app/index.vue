<script setup lang="ts">
import Sidebar from "~/components/sidebar/Sidebar.vue";
</script>

<template>
  <div class="flex  min-h-screen">
    <Sidebar />
    <main class="flex-1 p-6">
      <h1 class="text-2xl font-bold mb-4">Tableau de bord</h1>
      <p>Bienvenue sur votre interface CoolGPT!</p>

      <!-- Contenu de votre application -->
      <div class="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
        <UCard class="bg-cool-dark border border-cool-primary/30">
          <template #header>
            <h3 class="text-lg font-bold">Commencer</h3>
          </template>
          <p>Créez une nouvelle conversation pour interagir avec CoolGPT.</p>
          <template #footer>
            <UButton color="red" to="/app/new-chat">Nouvelle conversation</UButton>
          </template>
        </UCard>

        <UCard class="bg-cool-dark border border-cool-primary/30">
          <template #header>
            <h3 class="text-lg font-bold">Statistiques</h3>
          </template>
          <p>Vous avez utilisé 80% de votre quota mensuel.</p>
          <div class="mt-2">
            <UProgress color="red" :value="80" />
          </div>
        </UCard>
      </div>
    </main>
  </div>
</template>