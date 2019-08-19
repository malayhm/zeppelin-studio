<template>
  <div class="tablist">
    <div v-if="this.tabList.length === 0" class="p-2">
      No open tabs.
    </div>

    <ul>
      <li
        v-for="(tab, index) in this.tabList"
        :key="index"
        class="tab"
      >
        <a
          href="javascript: void(0);"
          v-bind:title="tab.path"
          class="text-ellipsis"
          :class="{'active':  tab.id === activeNotebookId}"
          v-on:click="openNotebook(tab)"
        >
          <a-icon type="file" />
          {{ getFileName(tab.path) }}
        </a>
      </li>
    </ul>
  </div>
</template>

<script>

export default {
  name: 'StatusBar',
  components: {

  },
  created () {

  },
  mounted () {

  },
  methods: {
    openNotebook (tab) {
      tab.name = this.getFileName(tab.path)
      tab.type = 'notebook'
      this.$store.dispatch('addTab', tab)
    },
    getFileName (path) {
      return path.substr(path.lastIndexOf('/') + 1)
    }
  },
  computed: {
    activeNotebookId () {
      return this.$store.state.TabManagerStore.currentTab && this.$store.state.TabManagerStore.currentTab.id
    },
    tabList () {
      return this.$store.state.TabManagerStore.tabs
    }
  }
}
</script>

<style lang="scss" scoped>
.tablist {
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
