<script setup>
  import Header from '@/components/Header.vue';
  import { useToast } from '@/utils/useToast';
  import '@mdi/font/css/materialdesignicons.css';

  const { showSnackbar, message, color, timeout } = useToast();
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

    <template>
      <v-snackbar v-model="showSnackbar" :color="color" :timeout="timeout" location="top center">
        {{ message }}
        <template #actions>
          <v-btn variant="text" icon="mdi-close-circle" @click="showSnackbar = false" />
        </template>
      </v-snackbar>
    </template>
  </v-app>
</template>
