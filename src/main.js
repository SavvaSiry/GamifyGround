/**
 * main.js
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */

// Components
import App from './App.vue'
import { store } from './store'
import '@vueup/vue-quill/dist/vue-quill.snow.css';
// Composables
import { createApp } from 'vue'

// Plugins
import { registerPlugins } from '@/plugins'

const app = createApp(App)

registerPlugins(app)

// app.component('QuillEditor', VueQuill.QuillEditor);

app.use(store)
app.mount('#app')
