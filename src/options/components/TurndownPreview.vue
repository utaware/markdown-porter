<template>
  <ul class="turndown-preview">
    <!-- preview -->
    <li
      class="wrapper"
      v-for="(item, index) in htmlTemplates"
      :key="index"
    >
      <pre v-html="htmlTemplates2Markdown[index]"></pre>
    </li>
  </ul>
</template>

<script>
// turndown
import TurndownService from 'turndown'

export default {
  components: {},
  data () {
    return {
      // markdown
      htmlTemplates: [
        `<h1>标题文本</h1>`,
        `<ul style="list-style: disc;"><li>red</li><li>yellow</li><li>blue</li></ul>`,
        `<pre><code class="language-javascript">function print (msg) { console.log(msg) }</code></pre>`,
        `<em>倾斜</em>`,
        `<strong>加粗</strong>`,
        `<a href="www.google.com">google</a>`,
        `<img width="24" height="24" src="https://cn.vuejs.org/images/logo.png" alt="vue" />`
      ]
    }
  },
  props: {
    options: {
      type: Object,
      required: true
    }
  },
  watch: {},
  computed: {
    htmlTemplates2Markdown() {
      const tds = new TurndownService(this.options)
      return this.htmlTemplates.map((text) => {
        return tds.turndown(text)
      })
    }
  },
  methods: {}
}
</script>

<style scoped lang="scss">
.turndown-preview {
  border-radius: 8px;
  .wrapper {
    padding: 16px;
    font-size: 16px;
    color: rgba(255,255,255,0.9);
    border: rgba(192, 119, 91, 0.7);
    background: rgba(192, 119, 91, 0.5);
  }
}
</style>
