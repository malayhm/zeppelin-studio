<template>
  <div class="notebooks">
    <div
      v-if="isLoading"
    >
      <div
        v-for="index in 3"
        :key="index"
        class="timeline-item"
      >
        <div class="animated-background">
          <div class="background-masker nb-label-separator"></div>
        </div>
      </div>
    </div>

    <ul>
      <li
        v-for="(note, index) in this.notebooks"
        :key="index"
        class="notebook"
      >
        <a
          href="javascript: void(0);"
          v-bind:title="note.path"
          class="text-ellipsis"
          :class="{'active':  note.id === activeNotebookId}"
          v-on:click="openNotebook(note)"
        >
          <file-icon size="1.2x" />
          {{ getFileName(note.path) }}
        </a>
        <!-- <router-link
          :to="'/notebook/' + note.id"
          v-bind:title="note.path"
          class="text-ellipsis"
          :class="{'active':  note.id === activeNotebookId}"
          v-on:click="openNotebook(note)"
        >
          <file-icon size="1.2x" />
          {{ note.path }}
        </router-link> -->
      </li>
    </ul>
  </div>
</template>

<script>
import { FileIcon } from 'vue-feather-icons'
import ws from '@/services/ws'

export default {
  name: 'StatusBar',
  components: {
    'file-icon': FileIcon
  },
  created () {

  },
  mounted () {
    // this.$store.state.NotebookStore.isLoading = true
    ws.send({ op: 'LIST_NOTES' })
  },
  methods: {
    openNotebook (note) {
      note.name = this.getFileName(note.path)
      note.type = 'notebook'
      this.$store.dispatch('addTab', note)
    },
    getFileName (path) {
      return path.substr(path.lastIndexOf('/') + 1)
    }
  },
  computed: {
    isLoading () {
      return this.$store.state.NotebookStore.isListLoading
    },
    activeNotebookId () {
      // return (this.$store.state.NotebookStore.notebook && this.$store.state.NotebookStore.notebook.id) || 0
      return this.$store.state.TabManagerStore.currentTab && this.$store.state.TabManagerStore.currentTab.id
    },
    notebooks () {
      return this.$store.state.NotebookStore.notebooks
    }
  }
}
</script>

<style lang="scss" scoped>
.timeline-item {
  padding: 0 12px;
  margin: 9px auto;
  height: 20px;

  .nb-label-separator {
    left: 20px;
    top: 0;
    width: 4px;
    height: 24px;
  }
}

.notebooks {
  list-style: none;
  margin: 0;
  padding: 0;

  ul {
    list-style: none;
    margin: 0;
    padding: 0;

    li {
      a {
        font-size: 14px;
        padding: 5px 10px;
        display: block;
        border-left: 4px solid transparent;

        &.active {
          background: #f1eeee;
          border-left-color: #2f71a9;
        }

        &:hover {
          background: #F1F1F1;

        }
      }
    }
  }
}
</style>
