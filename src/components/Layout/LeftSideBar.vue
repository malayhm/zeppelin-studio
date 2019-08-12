<template>
  <div class="sidebar">
    <LeftNavBar />

    <div class="sidebar-content scrollbar">
      <div
        v-if="this.$store.state.selectedLeftNavTab === 'folders'"
        class="folders-content"
      >
        <NotebookList />
      </div>

      <div
        v-if="this.$store.state.selectedLeftNavTab === 'interpreters'"
        class="interpreters-content"
      >
        <InterpreterList />
      </div>

      <div
        v-if="this.$store.state.selectedLeftNavTab === 'helium'"
        class="helium-content"
      >
        <PackageList />
      </div>

      <div
        v-if="this.$store.state.selectedLeftNavTab === 'repositories'"
        class="repositories-content"
      >
      </div>

      <div
        v-if="this.$store.state.selectedLeftNavTab === 'processing'"
        class="processing-content"
      >
      </div>

      <div
        v-if="this.$store.state.selectedLeftNavTab === 'tablist'"
        class="tablist-content"
      >
        <TabList />
      </div>
    </div>
  </div>
</template>

<script>
import LeftNavBar from './LeftNavBar.vue'
import NotebookList from '@/components/Notebook/NotebookList.vue'
import InterpreterList from '@/components/Interpreter/InterpreterList.vue'
import PackageList from '@/components/Helium/PackageList.vue'
import TabList from '@/components/Tabs/TabList.vue'

export default {
  name: 'LeftSideBar',
  components: {
    LeftNavBar,
    NotebookList,
    InterpreterList,
    PackageList,
    TabList
  }
}
</script>

<style lang="scss" scoped>
.sidebar {
  display: flex;
  height: 100%;

  .sidebar-content {
    width: calc(100% - 40px);
    height: 100%;
    overflow-y: auto;
  }
}
</style>
