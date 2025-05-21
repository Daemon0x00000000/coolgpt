<script setup lang="ts">
import { ref } from 'vue'


const recentConversations = ref([
  { id: 1, title: 'Projet marketing Q4', date: '23/10/2024' },
  { id: 2, title: 'Analyse de données', date: '22/10/2024' },
  { id: 3, title: 'Brainstorming idées', date: '20/10/2024' },
])

const isCollapsed = ref(false)
const toggleSidebar = () => {
  isCollapsed.value = !isCollapsed.value
}

const createNewConversation = () => {
  // Logique pour créer une nouvelle conversation
  console.log('Nouvelle conversation créée')
}

const selectConversation = (id: number) => {
  // Logique pour sélectionner une conversation
  console.log(`Conversation ${id} sélectionnée`)
}

const activeConversation = ref(1) // ID de la conversation active

// Items pour le dropdown utilisateur
const userDropdownItems = [
  [
    { label: 'Mon profil', icon: 'i-heroicons-user' },
    { label: 'Paramètres', icon: 'i-heroicons-cog-6-tooth' }
  ],
  [
    { label: 'Déconnexion', icon: 'i-heroicons-arrow-right-on-rectangle' }
  ]
]
</script>

<template>
  <aside
      class="h-screen flex flex-col transition-all duration-300 ease-in-out border-default border-r relative"
      :class="{ 'w-64': !isCollapsed, 'w-16': isCollapsed }"
  >
    <!-- Bouton toggle sidebar -->
    <transition name="fade">
      <UButton
          variant="solid"
          size="xl"
          :icon="isCollapsed ? 'i-heroicons-chevron-right' : 'i-heroicons-chevron-left'"
          class=" absolute top-4 -right-3 z-10 p-1 rounded-full border border-accented"
          @click="toggleSidebar"
      />
    </transition>

    <!-- Header avec logo -->
    <div class="px-4 py-4 flex items-center" :class="{ 'justify-center': isCollapsed }">
      <transition name="fade" mode="out-in">
        <div v-if="!isCollapsed" key="full-logo" class="text-xl font-bold">
          Cool<span class="text-primary">GPT</span>
        </div>
        <div v-else key="icon-logo" class="text-xl font-bold text-primary">C</div>
      </transition>
    </div>

    <!-- Bouton nouvelle conversation -->
    <div class="px-2 mb-4 flex justify-center">
      <UButton
          variant="outline"
          class="transition-all duration-300 border ease-in-out border-accented"
          :class="{ 'w-full py-2 px-3 rounded-lg': !isCollapsed, 'w-10 h-10 rounded-full': isCollapsed }"
          @click="createNewConversation"
      >
        <template #leading>
          <div class="flex-shrink-0 w-5 h-5 flex items-center justify-center">
            <UIcon
                name="i-heroicons-plus"
                class="transition-all duration-300"
                :class="{ 'mr-2': !isCollapsed }"
            />
          </div>
        </template>
        <transition name="fade">
          <span v-if="!isCollapsed" class="ml-2">Nouvelle conversation</span>
        </transition>
      </UButton>
    </div>

    <!-- Liste des conversations récentes -->
    <nav class="flex-1 overflow-y-auto px-2 space-y-1">
      <div class="h-8 relative">
        <transition name="fade">
          <div v-if="!isCollapsed" class="text-xs font-medium px-2 py-1 uppercase opacity-60 absolute left-0 right-0">Conversations récentes</div>
        </transition>
      </div>

      <template v-if="recentConversations.length > 0">
        <div
            v-for="conversation in recentConversations"
            :key="conversation.id"
            class="flex justify-center mb-2"
        >
          <UButton
              :variant="activeConversation === conversation.id ? 'solid' : 'ghost'"
              class="transition-all duration-300 ease-in-out text-sm overflow-hidden flex items-center"
              :class="[
              { 'w-full py-2 px-3 rounded-lg': !isCollapsed, 'w-10 h-10 rounded-full': isCollapsed }
            ]"
              @click="selectConversation(conversation.id)"
          >
            <template #leading>
              <div class="flex-shrink-0 w-5 h-5 flex items-center justify-center">
                <UIcon
                    name="i-heroicons-chat-bubble-left-ellipsis"
                    class="transition-all duration-300"
                    :class="{ 'mr-2': !isCollapsed }"
                />
              </div>
            </template>
            <transition name="fade">
              <div v-if="!isCollapsed" class="ml-2 truncate">{{ conversation.title }}</div>
            </transition>
          </UButton>
        </div>
      </template>

      <transition name="fade">
        <div v-if="recentConversations.length === 0 && !isCollapsed" class="text-sm opacity-60 text-center py-4">
          Aucune conversation récente
        </div>
      </transition>
    </nav>

    <!-- Profil utilisateur en bas avec dropdown (Nuxt UI) -->
    <div class="border-t p-3 mt-auto border-default">
      <div class="flex justify-center">
        <UDropdownMenu
            :items="userDropdownItems" :ui="{
          content:'w-60',
          label:'text-primary'

         }">
          <UButton
              variant="ghost"
              siz
              class="flex items-center justify-center w-full h-10 rounded-lg transition-all duration-300 ease-in-out"
              :class="{ 'w-10 h-10 rounded-full': isCollapsed }"
          >
            <template #leading>
              <div class="flex-shrink-0 w-10 h-10 flex items-center justify-center">
                <UIcon
                    name="i-heroicons-user"
                    size="xl"
                    class="transition-all duration-300"
                    :class="{ 'mr-2': !isCollapsed }"
                />
              </div>
            </template>
            <transition name="fade">
              <span v-if="!isCollapsed" class="ml-2">Utilisateur</span>
            </transition>
          </UButton>
        </UDropdownMenu>
      </div>
    </div>
  </aside>
</template>

<style scoped>

nav::-webkit-scrollbar {
  width: 5px;
}

nav::-webkit-scrollbar-track {
  background: transparent;
}

nav::-webkit-scrollbar-thumb {
  background-color: var(--ui-test);
  border-radius: 20px;
}

/* Animations de transition */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease, transform 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: translateX(-10px);
}

</style>
