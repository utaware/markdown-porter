<template>
  <ul class="turndown-preview">
    <!-- preview -->
    <li
      class="wrapper"
      v-for="(item, index) in htmlTemplates"
      :key="index"
    >
      <pre v-html="markdownTemplates[index]"></pre>
    </li>
  </ul>
</template>

<script>
// turndown
import TurndownService from 'turndown'
// hub
import Hub from '@/options/js/hub'
// storage
import { storage, defaultOptions } from '@/common/storage'

export default {
  components: {},
  data () {
    return {
      options: {},
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
  props: {},
  watch: {},
  computed: {
    markdownTemplates () {
      return this.htmlTemplates.map(v => {
        return new TurndownService(this.options).turndown(v)
      })
    }
  },
  methods: {
    getMarkdown (html) {
      return this.turndown.turndown(html)
    },
    initTurndownOptions () {
      storage.get({ options: defaultOptions }).then((data) => {
        const { options } = data
        this.options = options
      })
    },
    initHubUpdate () {
      Hub.$on('update', ({ options }) => {
        this.options = options
      })
    }
  },
  created () {
    this.initTurndownOptions()
    this.initHubUpdate()
  }
}
</script>

<style scoped lang="scss">
.turndown-preview {
  .wrapper {
    margin-bottom: 12px;
    padding: 10px;
    color: rgba(255,255,255,0.9);
    border: rgba(192, 119, 91, 0.7);
    background: rgba(192, 119, 91, 0.5);
    border-radius: 8px;
    &:last-of-type {
      margin-bottom: 0;
    }
  }
}
</style>
