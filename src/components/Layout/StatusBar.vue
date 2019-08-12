<template>
  <div class="status-bar">
    <div class="status-right">
      <div
        id="toggle-dark-mode"
        v-b-tooltip="{ title: 'Toggle Dark Mode', placement: 'top', container: 'body' }"
      >
        <a
          href="javascript: void(0);"
          @click="toggleDarkMode()"
        >
          <toggle-left-icon size="1x" v-if="darkModeEnabled"/>
          <toggle-right-icon size="1x" v-else/>
        </a>
      </div>

      <div
        id="connection-status"
        v-b-tooltip="{ title: 'Server Connectivity', placement: 'top', container: 'body' }"
      >
        <div
          class="ConnectionIndicator"
          :class="'ConnectionIndicator--' + connectivityStatus"
        >
          <div class="Status">
            <div class="Status__circle Status__circle--static"></div>
            <div class="Status__circle Status__circle--animated Status__circle--pulse"></div>
          </div>
          <div
            class="status-label"
          >
            {{ connectivityStatus.replace('trying', 'trying to connect') }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ToggleLeftIcon, ToggleRightIcon } from 'vue-feather-icons'

export default {
  name: 'StatusBar',
  components: {
    'toggle-left-icon': ToggleLeftIcon,
    'toggle-right-icon': ToggleRightIcon
  },
  computed: {
    darkModeEnabled () {
      return this.$store.state.darkMode
    },
    connectivityStatus () {
      return this.$store.state.webSocketStatus
    }
  },
  methods: {
    toggleDarkMode () {
      if (this.darkModeEnabled) {
        this.$store.dispatch('toggleDarkMode', false)
      } else {
        this.$store.dispatch('toggleDarkMode', true)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.status-bar {
  height: 24px;
  background: #ececec;
  position: relative;

  .status-right {
    display: flex;
    float: right;
  }
}

#connection-status {
  padding: 0 8px;

  &:hover {
    background-color: #c5c5c5;
  }
}

#toggle-dark-mode {
  padding: 0 8px;

  &:hover {
    background-color: #c5c5c5;
  }

  a {
    svg {
      transition: transform .3s ease
    }
  }
}
</style>
