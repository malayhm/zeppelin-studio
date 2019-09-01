<template>
  <div class="notebook-controls">
    <div class="left-controls">
      <a
        href="javascript: void(0);"
      >
        <a-tooltip placement="top">
          <template slot="title">
            <span>Save</span>
          </template>
          <a-icon type="save" />
        </a-tooltip>
      </a>

      <a
        href="javascript: void(0);"
      >
        <a-tooltip placement="top">
          <template slot="title">
            <span>Clone this Notebook</span>
          </template>
          <a-icon type="copy" />
        </a-tooltip>
      </a>

      <a
        href="javascript: void(0);"
      >
        <a-tooltip placement="top">
          <template slot="title">
            <span>Run all paragraphs</span>
          </template>
          <a-icon type="play-circle" />
        </a-tooltip>
      </a>

      <a
        href="javascript: void(0);"
      >
        <a-tooltip placement="top">
          <template slot="title">
            <span>Export</span>
          </template>
          <a-icon type="download" />
        </a-tooltip>
      </a>

      <a
        href="javascript: void(0);"
      >
        <a-tooltip placement="top">
          <template slot="title">
            <span>Delete</span>
          </template>
          <a-icon type="delete" />
        </a-tooltip>
      </a>

      <a
        href="javascript: void(0);"
      >
        <a-tooltip placement="top">
          <template slot="title">
            <span>Search code</span>
          </template>
          <a-icon type="file-search" />
        </a-tooltip>
      </a>
    </div>

    <div class="right-controls">
      <a
        href="javascript: void(0);"
      >
        <a-tooltip placement="top">
          <template slot="title">
            <span>Version Control</span>
          </template>
          <a-icon type="diff" />
        </a-tooltip>
      </a>
      
      <a
        href="javascript: void(0);"
      >
        <a-tooltip placement="top">
          <template slot="title">
            <span>Reload</span>
          </template>
          <a-icon type="reload" />
        </a-tooltip>
      </a>
      
      <a-dropdown :trigger="['click']">
        <a class="ant-dropdown-link" href="#">
          <span> Default </span>
          <a-icon type="down" />
        </a>
        <a-menu slot="overlay">
          <a-menu-item key="0">
            <a href="javascript: void(0)">Default</a>
          </a-menu-item>
          <a-menu-item key="1">
            <a href="javascript: void(0)">Simple</a>
          </a-menu-item>
          <a-menu-item key="1">
            <a href="javascript: void(0)">Report</a>
          </a-menu-item>
        </a-menu>
      </a-dropdown>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NotebookControls',
  components: {

  },
  computed: {

  },
  mounted () {

  },
  methods: {

  }
}
</script>

<style scoped lang="scss">
.notebook-controls {
  height: 30px;
  background: #f7f7f7;

  a {
    display: inline-block;
    height: 100%;
    padding: 2px 6px;

    span {
      vertical-align: middle;
    }
  }

  .left-controls {
    float: left;
    padding-left: 7px;
    height: 100%;
    display: flex;
  }

  .right-controls {
    float: right;
    padding-right: 7px;
    height: 100%;
    display: flex;
  }
}
</style>
