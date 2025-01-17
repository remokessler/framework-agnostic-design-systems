import './styles.css';
import { createApp } from 'vue';
import App from './app/App.vue';
import '@ui-core/elements-atoms';

const app = createApp(App);
app.config.compilerOptions.isCustomElement = (tag) =>
  ['bui-lit-accordion', 'bui-lit-accordion-group', 'bui-lit-button'].includes(tag);
app.mount('#root');
