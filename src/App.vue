<template>
  <div id="app">
    <Header />

    <Split
      :gutterSize="2"
    >
      <SplitArea :size="25">
          <LeftSidebar />
          <Preferences />
      </SplitArea>
      <SplitArea :size="75" id="content-pane" class="scrollbar">
        <router-view />
      </SplitArea>
    </Split>

    <StatusBar />
  </div>
</template>

<script>
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import Header from '@/components/Layout/Header.vue'
import LeftSidebar from '@/components/Layout/LeftSideBar.vue'
import StatusBar from '@/components/Layout/StatusBar.vue'
import Preferences from '@/components/Tools/Preferences.vue'

import ws from '@/services/ws'

export default {
  name: 'App',
  components: { Header, LeftSidebar, StatusBar, Preferences },
  mounted () {
    document.title = 'Zeppelin Studio'

    ws.init(this)
  }
}
</script>

<style lang="scss">
@import '@/assets/reset.scss';

@import '@/assets/jquery.menu.scss';
@import '@/assets/scrollbar.scss';
@import '@/assets/tabs.scss';
@import '@/assets/loaders/code.scss';
@import '@/assets/status.scss';
@import '@/assets/placeholder.scss';

body {
  // &.light-theme {
  //   @import '@/assets/themes/light-theme.scss';
  // }

  // &.dark-theme {
  //   @import '@/assets/themes/dark-theme.scss';
  // }

  color: #2c3e50;

  a {
    text-decoration: none;
    color: #333;
  }
}

.h100 {
  height: 100%;
}

.w100 {
  width: 100%;
}

#app {
  // font-family: 'Avenir', Helvetica, Arial, sans-serif;
  height: 100%;
  width: 100%;

  > .split {
    height: calc(100% - 67px - 24px);
    border-top: 1px solid #F1F1F1;
  }

  a {
    text-decoration: none;
  }
}

.split {
  .gutter {
    &.gutter-horizontal {
      cursor: ew-resize;
      background-image: none;
    }

    &:hover {
      background-color: #049EE0;
    }
  }
}

#content-pane {
  background-color: #fcfcfc;
  padding: 8px;
}
</style>
