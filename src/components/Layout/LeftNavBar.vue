<template>
  <div class="left-nav-bar">
    <ul class="tabs">
      <li>
        <a
          :class="{'active': this.$store.state.selectedLeftNavTab === 'folders'}"
          href="javascript:void(0);"
          data-ref="folders"
          @click="selectTab('folders')"
          v-b-tooltip.hover.right
          title="Folders"
        >
          <folder-icon />
        </a>
      </li>
      <li>
        <a
          :class="{'active': this.$store.state.selectedLeftNavTab === 'interpreters'}"
          href="javascript:void(0);"
          data-ref="interpreters"
          @click="selectTab('interpreters')"
          v-b-tooltip.hover.right
          title="Interpreters"
        >
          <sliders-icon />
        </a>
      </li>
      <li>
        <a
          :class="{'active': this.$store.state.selectedLeftNavTab === 'helium'}"
          href="javascript:void(0);"
          data-ref="helium"
          @click="selectTab('helium')"
          v-b-tooltip.hover.right
          title="Helium"
        >
          <package-icon />
        </a>
      </li>
      <li>
        <a
          :class="{'active': this.$store.state.selectedLeftNavTab === 'repositories'}"
          href="javascript:void(0);"
          data-ref="repositories"
          @click="selectTab('repositories')"
          v-b-tooltip.hover.right
          title="Notebook Repositories"
        >
          <database-icon />
        </a>
      </li>
      <!-- <li>
        <a
          :class="{'active': this.$store.state.selectedLeftNavTab === 'processing'}"
          href="javascript:void(0);"
          data-ref="processing"
          @click="selectTab('processing')"
          v-b-tooltip.hover.right
          title="Processing"
        >
          <server-icon />
        </a>
      </li> -->
      <li>
        <a
          :class="{'active': this.$store.state.selectedLeftNavTab === 'tablist'}"
          href="javascript:void(0);"
          data-ref="tablist"
          @click="selectTab('tablist')"
          v-b-tooltip.hover.right
          title="Tabs"
        >
          <layers-icon />
        </a>
      </li>
    </ul>

    <div id="nav-actions">
      <div class="divider" />
      <ul>
        <li>
          <a
            class=""
            href="javascript:void(0);"
            @click="togglePreferences()"
            v-b-tooltip.hover.right
            title="Preferences"
          >
            <settings-icon />
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { FolderIcon, SlidersIcon, PackageIcon, DatabaseIcon, ServerIcon, LayersIcon, SettingsIcon } from 'vue-feather-icons'

export default {
  name: 'LeftNavBar',
  components: {
    'folder-icon': FolderIcon,
    'sliders-icon': SlidersIcon,
    'package-icon': PackageIcon,
    'database-icon': DatabaseIcon,
    'server-icon': ServerIcon,
    'layers-icon': LayersIcon,
    'settings-icon': SettingsIcon
  },
  computed: {
    showPrefererences () {
      return this.$store.state.showPrefererences
    }
  },
  methods: {
    selectTab (tab) {
      this.$store.dispatch('selectLeftNavTab', tab)
    },
    togglePreferences () {
      if (this.showPrefererences) {
        this.$store.dispatch('togglePreferences', false)
      } else {
        this.$store.dispatch('togglePreferences', true)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.left-nav-bar {
  width: 48px;
  height: 100%;
  background: #f3f3f3;
  overflow: hidden;
  position: relative;

  ul {
    list-style: none;
    margin: 0;
    padding: 0;

    li {
      a {
        height: 48px;
        width: 48px;
        padding: 12px 13px 12px 11px;
        display: block;
        color: #333;
        border-left: 4px solid transparent;

        svg {
          height: 18px;
          width: 18px;
          color: #333333;
        }

        &.active {
          background: #FFF;
          border-left-color: #2f71a9;

          &:hover {
            background: #FFF;

            svg {
              color: #333333;
            }
          }
        }

        &:hover {
          //background: #D5D5D5;
          svg {
            color: #2f71a9;
          }
        }

      }
    }
  }

  #nav-actions {
    position: absolute;
    bottom: 0;

    .divider {
      background-image: linear-gradient(45deg, #ffffff 25%, #888888 25%, #888888 50%, #ffffff 50%, #ffffff 75%, #888888 75%, #888888 100%);
      background-size: 5.66px 5.66px;
      height: 6px;
      display: block;
      width: 100%;
    }

    ul li {
      a {
        height: 40px;
        padding: 8px 11px;
      }
    }
  }
}
</style>
