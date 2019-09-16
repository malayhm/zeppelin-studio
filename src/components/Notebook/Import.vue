<template>
  <div>
    <a-modal
        v-model="showDialog"
        title="Import Notebook"
        onOk="handleOk"
        :maskClosable="false"
      >
      <template slot="footer">
        <a-button key="back" @click="handleCancel">Cancel</a-button>
        <a-button key="submit" type="primary" :loading="loading" @click="handleOk">Import</a-button>
      </template>

      <a-form layout="vertical">
        <a-form-item>
          <a-radio-group
            v-model="importType"
            buttonStyle="solid"
            name="import-type"
            @change="changeImportType"
            style="display: block; margin: 0 auto; width: 238px;"
          >
            <a-radio-button value="url">Provide a URL</a-radio-button>
            <a-radio-button value="file">Upload a File</a-radio-button>
          </a-radio-group>
        </a-form-item>

        <div
          v-if="importType === 'file'"
          id="notebook-import-drag-drop"
          class="ant-upload ant-upload-drag"
          style="margin-bottom: 16px; display: block;"
          @click="showFileDialog"
          @change="handleChange"
        >
          <input
            type="file"
            name="nbFileInput"
            ref="nbFileInput"
            style="display: none;"
          />
          <p class="ant-upload-drag-icon" style="margin-bottom: 10px;">
            <a-icon type="inbox" />
          </p>
          <p class="ant-upload-text" style="font-size: 13px;">
            <span v-if="sourceNotebookFile">{{ this.sourceNotebookFile.name }}</span>
            <span v-else>Click here to upload a file</span>
          </p>
        </div>

        <a-form-item
          v-if="importType === 'url'"
          label="Notebook URL"
        >
          <a-input placeholder="Notebook URL"  v-model="notebookURL"/>
        </a-form-item>

        <a-form-item
          label="Notebook Name"
        >
          <a-input placeholder="Enter Notebook Name"  v-model="name"/>
        </a-form-item>

        <a-form-item
          v-if="1 == 2"
          label="Default Interpreter"
        >
          <a-select
            showSearch
            style="width: 180px"
            :defaultValue="interpreters[0]"
            v-model="defaultInterpreter"
          >
            <a-select-option
              v-for="interpreter in interpreters"
              v-bind:key="interpreter.id"
            >
              {{interpreter.id}}
            </a-select-option>
          </a-select>
        </a-form-item>
      </a-form>
    </a-modal>
  </div>
</template>

<script>
import { EventBus } from '@/services/event-bus'

export default {
  name: 'ImportNotebook',
  data () {
    return {
      showDialog: false,
      loading: false,

      name: '',
      defaultInterpreter: null,

      importType: 'file',
      sourceNotebookFile: null,
      sourceNotebookJSON: null,
      fileUploaded: false
    }
  },
  computed: {
    interpreters () {
      return this.$store.state.InterpreterStore.interpreters
    }
  },
  mounted () {
    EventBus.$on('showImportNotebookDialog', () => {
      this.showDialog = true
    })
  },
  methods: {
    showFileDialog () {
      this.$refs.nbFileInput.click()
    },
    handleChange (e) {
      let validated = e.target.files.length !== 0 && this.beforeUpload(e.target.files[0])
      if (validated) {
        this.sourceNotebookFile = e.target.files[0]

        let reader = new FileReader()
        reader.readAsText(this.sourceNotebookFile)
        reader.onloadend = () => {
          this.sourceNotebookJSON = JSON.parse(reader.result)
          this.fileUploaded = true
        };
      } else {
        this.sourceNotebookFile = null
        this.sourceNotebookJSON = null
        this.fileUploaded = false
      }
    },
    beforeUpload (file) {
      const isJSON = (file.type === 'application/json')
      if (!isJSON) {
        this.$message.error(that.$i18n.t('message.notebooks.import_json_type_error'))
      }
      const isLt1M = file.size / 1024 / 1024 < 1
      if (!isLt1M) {
        this.$message.error(that.$i18n.t('import_json_size_error'))
      }
      return isJSON && isLt1M
    },
    handleOk (e) {
      this.loading = true

      this.sourceNotebookJSON.name = this.name
      this.$root.executeCommand('notebook', 'import-json', this.sourceNotebookJSON)

      let that = this
      setTimeout(() => {
        this.showDialog = false
        this.loading = false

        this.resetForm()

        that.$message.success(that.$i18n.t('message.notebooks.import_success'), 4)
        // Pending - validation
        // Pending open - imported Notebook
      }, 1000)
    },
    handleCancel (e) {
      this.showDialog = false
    },
    resetForm () {
      this.name = ''
      this.defaultInterpreter = ''
    },
    changeImportType (e) {
      this.importType = e.target.value
    }
  }
}
</script>

<style lang="scss">
</style>
