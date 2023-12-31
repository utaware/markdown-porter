<template>
  <div class="turndown-options">
    <el-form
      ref="form"
      :model="turndownOptions"
      label-width="150px"
    >
      <el-form-item
        v-for="(val, key) of formOptions"
        :label="key"
        :key="key"
      >
        <template #label>
          <h4 class="label-tips">{{ key }}</h4>
        </template>
        <!-- headingStyle -->
        <el-select :value="turndownOptions[key]" @input="handlerSelectOptions(key, $event)">
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
export default {
  components: {},
  data () {
    return {
      // form-data-options
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
  props: {
    options: {
      type: Object,
      required: true
    }
  },
  computed: {
    turndownOptions() {
      return this.options
    }
  },
  methods: {
    handlerSelectOptions(key, value) {
      this.$emit('updateOptions', key, value)
    }
  },
  watch: {},
  created () {}
}
</script>

<style scoped lang="scss">
.label-tips {
  color: black;
  font-size: 16px;
}
</style>
