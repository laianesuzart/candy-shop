import { createApp } from 'vue';
import { createPinia } from 'pinia';
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate';
import 'vuetify/styles';
import { createVuetify } from 'vuetify';
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';
import colors from 'vuetify/util/colors';
import 'unfonts.css';
import { router } from './router';
import App from './App.vue';

const pinia = createPinia();
pinia.use(piniaPluginPersistedstate);
const vuetify = createVuetify({
  components,
  directives,
  theme: {
    themes: {
      light: {
        colors: {
          primary: colors.pink.lighten1,
          secondary: colors.pink.lighten5,
        },
      },
    },
  },
});

createApp(App).use(router).use(pinia).use(vuetify).mount('#app');
