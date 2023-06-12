const Element = {
  data() {
    return {
      input: false,
    };
  },
  template: `
  <li>
    <span v-if="!input">{{text}}</span>
    <input v-else type="text" :value="text" @blur="modify($event)" ref="refInput"/>
    <button @click="remove()"> Supprimer </button>
    <button @click="input=true"> Modifier </button>
  </li>
  `,
  props: ['text', 'index'],
  methods: {
    remove() {
      this.$emit('remove', { index: this.index });
    },
    modify(event) {
      var value = event.target.value;
      this.input = false;
      this.$emit('modify', { index: this.index, value: value });
    },
    updated() {
      if (this.$refs.refInput) this.$refs.refInput.focus();
    },
  },
  emits: ['remove', 'modify'],
};

export default Element;
