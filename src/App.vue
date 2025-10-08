<script setup>
  import Header from '@/components/Header.vue';
  import '@mdi/font/css/materialdesignicons.css';
</script>

<template>
  <v-app class="bg-secondary">
    <Header></Header>
    <v-main>
      <v-container max-width="1500">
        <router-view v-slot="{ Component }">
          <v-fade-transition hide-on-leave>
            <component :is="Component" />
          </v-fade-transition>
        </router-view>
      </v-container>
    </v-main>
  </v-app>
</template>
