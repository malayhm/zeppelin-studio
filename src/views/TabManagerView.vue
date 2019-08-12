<template>
  <div class="h100 w100">
    <TabManager
      v-if="this.tabList.length > 0"
      class="tabs-manager"
    >
      <Tab
        v-for="currentTab in this.tabList"
        :key="currentTab.id"
        :name="currentTab.name"
        :tabContent="currentTab"
      >
        <Notebook v-if="currentTab.type == 'notebook'" :note="currentTab" />

      </Tab>
    </TabManager>

    <div v-if="this.tabList.length == 0">
      <Home />
    </div>
  </div>
</template>

<script>
import TabManager from '@/components/Tabs/TabManager.vue'
import Tab from '@/components/Tabs/Tab.vue'

import Home from '@/views/Home.vue'
import Notebook from '@/components/Notebook/Notebook.vue'

import { mapState } from 'vuex'

export default {
  name: 'tabManager',
  components: {
    TabManager,
    Tab,
    Home,
    Notebook
  },
  computed: mapState({
    tabList: state => state.TabManagerStore.tabs
  })
}
</script>

<style lang="scss" scoped>
</style>
