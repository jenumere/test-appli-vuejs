const Element = {
  data() {
    return {};
  },
  template: `
  <li>
    <span>{{text}}</span>
    <button> Supprimer </button>
    <button> Modifier </button>
  </li>
  `,
  props: ['text'],
};

export default Element;
