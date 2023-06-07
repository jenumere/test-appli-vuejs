import Element from './element.js';

const GlobalApp = {
  data() {
    return {
      element: [],
    };
  },
  components: {
    Element: Element,
  },
  template: `
  <button @click="add()">Ajouter un élément</button>
  <ul>
    <li v-for="(element, index) in elements" :key="index">{{elements}}</li>
  </ul>
  `,
};

export default GlobalApp;
