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

    <!-- <a-directory-tree
      multiple
      defaultExpandAll
      @select="onSelect"
    >
      <a-tree-node title="parent 0" key="0-0">
        <a-tree-node title="leaf 0-0" key="0-0-0" isLeaf />
        <a-tree-node title="leaf 0-1" key="0-0-1" >
          <a-tree-node title="leaf 0-1" key="0-0-2" isLeaf />
        </a-tree-node>
      </a-tree-node>
      <a-tree-node title="parent 1" key="0-1">
        <a-tree-node title="leaf 1-0" key="0-1-0" isLeaf />
        <a-tree-node title="leaf 1-1" key="0-1-1" isLeaf />
      </a-tree-node>
    </a-directory-tree> -->

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
          <a-icon type="file" />
          {{ getFileName(note.path) }}
        </a>
        <!-- <router-link
          :to="'/notebook/' + note.id"
          v-bind:title="note.path"
          class="text-ellipsis"
          :class="{'active':  note.id === activeNotebookId}"
          v-on:click="openNotebook(note)"
        >
          <a-icon type="file" />
          {{ note.path }}
        </router-link> -->
      </li>
    </ul>
  </div>
</template>

<script>
import ws from '@/services/wsHelper'
import wsFactory from '@/services/wsFactory'

export default {
  name: 'StatusBar',
  components: {

  },
  created () {

  },
  mounted () {
    ws.getConn().send({ op: 'LIST_NOTES' })
  },
  computed: {
    isLoading () {
      return this.$store.state.NotebookStore.isListLoading
    },
    activeNotebookId () {
      return this.$store.state.TabManagerStore.currentTab && this.$store.state.TabManagerStore.currentTab.id
    },
    notebooks () {
      return this.$store.state.NotebookStore.notebooks
    }
    // notebookTree () {
    //   let notebooks = this.$store.state.NotebookStore.notebooks
    //   let tree = []
    //   notebooks.forEach(n => {

    //   })
    // }
  },
  methods: {
    openNotebook (note) {
      wsFactory.initNotebookConnection(note.id, this.$store)

      note.name = this.getFileName(note.path)
      note.type = 'notebook'
      this.$store.dispatch('addTab', note)
    },
    getFileName (path) {
      return path.substr(path.lastIndexOf('/') + 1)
    },
    onSelect (keys) {
      console.log('Trigger Select', keys)
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
