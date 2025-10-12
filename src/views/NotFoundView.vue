<script setup>
  import pageEatenImage from '@/assets/page-eaten.svg';
</script>

<template>
  <v-container class="text-center pt-8">
    <v-img :src="pageEatenImage" max-width="500" class="mx-auto mb-6" alt="" aria-hidden="true" />
    <h1 class="text-h4 mb-2">Page Not Found</h1>
    <p class="text-body-1 mb-6">The page you are looking for doesn't exist or has been moved.</p>
    <v-btn color="primary" to="/">Go back home</v-btn>
  </v-container>
</template>
