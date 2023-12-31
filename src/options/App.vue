<template>
  <div v-loading="loading" class="options-turndown-page">
    <!-- title -->
    <h3 class="title">turndown options</h3>
    <!-- options -->
    <turndown-options :options="turndownOptions" class="optins" @updateOptions="handlerUpdateOptions" />
    <!-- preview -->
    <turndown-preview :options="turndownOptions" class="preview" />
    <!-- save -->
    <div class="save">
      <el-button @click="handlerClickSave">保存设置</el-button>
    </div>
  </div>
</template>

<script>
// components
import TurndownOptions from './components/TurndownOptions.vue'
import TurndownPreview from './components/TurndownPreview.vue'
// storage
import { storage } from '@/common/storage'
// options
import { turndownDefaultOptions } from '@/utils/constant/options'
// toast
import toast from '@/utils/notyf'

export default {
  components: {
    TurndownOptions,
    TurndownPreview
  },
  data () {
    return {
      // options
      turndownOptions: turndownDefaultOptions,
      // loading
      loading: false
    }
  },
  props: {},
  methods: {
    initTurndownOptions () {
      this.loading = true
      storage.get({turndownOptions: turndownDefaultOptions}).then((data) => {
        const { turndownOptions } = data
        this.turndownOptions = turndownOptions
      }).finally(() => {
        this.loading = false
      })
    },
    handlerClickSave() {
      this.loading = true
      const { turndownOptions } = this
      storage.set({
        turndownOptions
      }).then(() => {
        toast.success('设置保存成功')
      }).catch((error) => {
        toast.error(error)
      }).finally(() => {
        this.loading = false
      })
    },
    handlerUpdateOptions(key, value) {
      this.turndownOptions[key] = value
    }
  },
  computed: {},
  created () {
    this.initTurndownOptions()
  }
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
  grid-template-columns: 400px 400px;
  grid-template-areas:  'a a'
                        'b c'
                        'd d';
  gap: 24px;
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
  .save {
    grid-area: d;
    text-align: center;
  }
}
</style>
