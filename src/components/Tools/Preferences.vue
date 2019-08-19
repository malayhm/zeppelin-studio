<template>
  <div
    class="preferences"
    :class="{'show': showPrefererences}"
  >
    <div class="headline">
      Preferences
    </div>
    <a
      class="close"
      href="javascript: void(0);"
      @click="hidePreferences()"
    >
      <a-icon type="close" />
    </a>
  </div>
</template>

<script>

export default {
  name: 'Preferences',
  components: {

  },
  computed: {
    showPrefererences () {
      return this.$store.state.showPrefererences
    }
  },
  methods: {
    hidePreferences () {
      this.$store.dispatch('togglePreferences', false)
    }
  }
}
</script>

<style lang="scss" scoped>
.preferences {
  bottom: 28px;
  left: 48px;
  display: none;

  width: 260px;
  min-height: 300px;
  cursor: auto;
  transition: all .2s ease;
  background-color: #f3f3f3;
  border-radius: 0 8px 0 0;
  font-size: 13px;
  font-weight: 400;
  position: absolute;
  text-align: left;
  z-index: 999;

  &.show {
    display: block;
  }

  .headline {
    margin: 0 auto;
    font-size: 16px;
    font-family: Open Sans;
    text-align: center;
    height: 44px;
    line-height: 44px;
  }

  .close {
    position: absolute;
    right: 8px;
    top: 8px;
    z-index: 2120;
    cursor: pointer;
    width: 28px;
    height: 28px;
    opacity: .6;
    transition: all .15s linear;

    svg {
      color: #333;
    }

    &:hover {
      opacity: 1!important;
    }
  }
}
</style>
