import { createApp } from 'vue'
import { createPinia } from 'pinia'
import UiButton from 'keen-ui/src/UiButton.vue';
import UiFab from 'keen-ui/src/UiFab.vue';
import UiIcon from 'keen-ui/src/UiIcon.vue';
import UiIconButton from 'keen-ui/src/UiIconButton.vue';
import UiModal from 'keen-ui/src/UiModal.vue';
import UiSelect from 'keen-ui/src/UiSelect.vue';
import UiTextbox from 'keen-ui/src/UiTextbox.vue';

import App from './App.vue'

const app = createApp(App)

app.use(createPinia())

app.component('UiButton', UiButton)
app.component('UiFab', UiFab);
app.component('UiIcon', UiIcon);
app.component('UiIconButton', UiIconButton);
app.component('UiModal', UiModal);
app.component('UiSelect', UiSelect);
app.component('UiTextbox', UiTextbox);

app.mount('#app')
