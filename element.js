const Element = {
  data() {
    return {};
  },
  template: `
  <li>
    <span>{{text}}</span>
    <button @click="remove()"> Supprimer </button>
    <button> Modifier </button>
  </li>
  `,
  props: ["text", "index"],
  methods: {
    remove() {
      this.$emit("remove", { index : this.index });
    },
  },
  emits : ["remove"]
};

export default Element;
