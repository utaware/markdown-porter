<template>
  <div class="turndown-options">
    <el-form
      ref="form"
      :model="options"
      label-width="120px"
    >
      <el-form-item
        v-for="(val, key) of formOptions"
        :label="key"
        :key="key"
      >
        <!-- headingStyle -->
        <el-select v-model="options[key]">
          <el-option
            v-for="(item, index) in val"
            :label="item"
            :value="item"
            :key="index"
          />
        </el-select>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
// storage
import { storage, defaultOptions } from '@/common/storage'
// hub
import Hub from '@/options/js/hub'

export default {
  components: {},
  data () {
    return {
      options: defaultOptions,
      formOptions: {
        headingStyle: ['setext', 'atx'],
        bulletListMarker: ['-', '+', '*'],
        codeBlockStyle: ['indented', 'fenced'],
        fence: ['```', '~~~'],
        emDelimiter: ['_', '*'],
        strongDelimiter: ['**', '__'],
        linkStyle: ['inlined', 'referenced'],
        linkReferenceStyle: ['full', 'collapsed', 'shortcut']
      }
    }
  },
  props: {},
  methods: {
    initTurndownOptions () {
      storage.get({ options: defaultOptions }).then((data) => {
        const { options } = data
        this.options = options
      })
    },
    deepClone (o) {
      return JSON.parse(JSON.stringify(o))
    }
  },
  watch: {
    options: {
      deep: true,
      handler (nv) {
        const options = this.deepClone(nv)
        storage.set({ options })
        Hub.$emit('update', { options })
      }
    }
  },
  created () {
    this.initTurndownOptions()
  }
}
</script>

<style scoped lang="scss">

</style>
