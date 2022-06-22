<template>
  <div class="options-turndown-page">
    <!-- title -->
    <h3 class="title">turndown options</h3>
    <!-- options -->
    <turndown-options class="optins" />
    <!-- preview -->
    <turndown-preview class="preview" />
  </div>
</template>

<script>
// components
import TurndownOptions from './components/TurndownOptions.vue'
import TurndownPreview from './components/TurndownPreview.vue'

export default {
  components: {
    TurndownOptions,
    TurndownPreview
  },
  data () {
    return {}
  },
  props: {},
  methods: {},
  computed: {}
}
</script>

<style lang="scss">
body {
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(to top left, #28b487, #7dd56f);
}

.options-turndown-page {
  padding: 36px;
  display: grid;
  grid-template-rows: 40px;
  grid-template-columns: 320px;
  grid-template-areas:  'a a'
                        'b c';
  gap: 12px 24px;
  border: 1px solid rgba(255,255,255,0.5);
  background: rgba(50,50,50,0.2);
  border-radius: 12px;
  color: #fff;
  .title {
    font-size: 24px;
    grid-area: a;
    grid-column: 1/3;
    text-align: center;
  }
  .optins {
    grid-area: b;
  }
  .preview {
    grid-area: c;
  }
}
</style>
