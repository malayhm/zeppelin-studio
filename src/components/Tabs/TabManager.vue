<template>
  <div class="w100 h100">
    <ul role="tablist" class="tabs-list">
      <li
        v-for="(tab, i) in tabs"
        :key="i"
        :class="{ 'active': (tab.id === (currentActiveTab && currentActiveTab.id)) }"
        class="tab"
        role="presentation"
      >
        <a
          :aria-controls="tab.hash"
          :aria-selected="tab.isActive"
          v-bind:title="tab.name"
          v-on:click="setActiveTab(tab, $event)"
          href="javascript: void(0);"
          class="tab-title"
          role="tab"
        > {{ tab.isActive }}
          <!-- Pending Tab Icon -->
          <span>{{ tab.name }}</span>
        </a>

        <a
          href="javascript: void(0);"
          class="tab-close"
          @click="closeTab(tab)"
          title="Close"
        >
          <a-icon type="close" size="small" />
        </a>
      </li>
    </ul>

    <div class="tabs-content scrollbar">
      <slot />
    </div>
  </div>
</template>

<script>

export default {
  name: 'tabManager',
  components: {

  },
  data: () => ({
    activeTabIndex: 0,
    lastActiveTabHash: ''
  }),
  computed: {
    tabs () {
      return this.$store.state.TabManagerStore.tabs
    },
    currentActiveTab () {
      return this.$store.state.TabManagerStore.currentTab
    }
  },
  componenets: {

  },
  created () {

  },
  methods: {
    setActiveTab (tab) {
      this.$store.dispatch('setActiveTab', tab)
    },
    closeTab (tab) {
      this.$store.dispatch('removeTab', tab)
    }
  }
}
</script>

<style lang="scss">

</style>
