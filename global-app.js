import Element from './element.js';

const GlobalApp = {
  data() {
    return {
      elements: [],
    };
  },
  components: {
    Element: Element,
  },
  template: `
  <button @click="add()">Ajouter un élément</button>
  <ul>
    <Element v-for="(element, index) in elements" :key="index" :text="element"
    :index="index"
    @remove="remove($event)"
    />
  </ul>
  `,
  methods : {
    add(){
      var element = "Element " + (this.elements.length + 1);
      this.elements.push(element);
    },
    remove(params) {
      var index = params.index;
      this.elements.splice(index, 1);
    }
  }
};

export default GlobalApp;
