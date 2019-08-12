<template>
  <div>
    <div id="menu-bar">
      <ul class="main-menu">
        <!-- File Menu -->
        <li> File
          <ul>
            <li>
              <a
                @click="createNote()"
                href="javascript:void(0)"
              >
                New Notebooks
              </a>
            </li>

            <li class="separator"></li>

            <li class="icon save">
              <a href="#">Save<span>Ctrl+S</span></a>
            </li>

            <li class="separator"></li>

            <li>
              <a href="#">Import</a>
            </li>
            <li>
              <a href="#">Explort</a>
            </li>

            <li class="separator"></li>

            <li class="icon print">
              <a href="#">Print<span>Ctrl+P</span></a>
            </li>
          </ul>
        </li>

        <!-- Job Menu
        <li> Job
          <ul>
            <li>
              <router-link to="/jobs">Jobs</router-link>
            </li>
          </ul>
        </li> -->

        <!-- Edit Menu -->
        <li> Edit
          <ul>
            <li>
              <a
                @click="toggle('code')"
                href="javascript:void(0)"
              >
                Toggle Code
              </a>
            </li>
            <li class="separator"></li>
            <li>
              <a
                @click="toggle('lines')"
                href="javascript:void(0)"
              >
                Toggle Line Numbers
              </a>
            </li>
            <li>
              <a
                @click="toggle('output')"
                href="javascript:void(0)"
              >
                Toggle Output
              </a>
            </li>
            <li>
              <a
                @click="clearOutput()"
                href="javascript:void(0)"
              >
                Clear All Output
              </a>
            </li>
          </ul>
        </li>

        <!-- Runtime Menu -->
        <li> Runtime
          <ul>
            <li>
              <router-link to="#">Run All</router-link>
            </li>
            <li>
              <router-link to="/interpreter">Interpreters</router-link>
            </li>
            <li>
              <router-link to="/">Interpreter bindings</router-link>
            </li>
          </ul>
        </li>

        <!-- Tools Menu -->
        <li> Tools
          <ul>
            <li>
              <a
                href="javascript: void(0);"
                @click="showPreferences()"
              >
                Preferences
              </a>
            </li>
            <li>
              <router-link to="#">Keyboard Shortcuts</router-link>
            </li>
          </ul>
        </li>

        <!-- Help Menu -->
        <li> Help
          <ul>
            <li>
              <a
                href="http://zeppelin.apache.org/community.html"
                target="_blank"
              >
                Mailing List
              </a>
            </li>
            <li>
              <a
                href="https://issues.apache.org/jira/browse/ZEPPELIN"
                target="_blank"
              >
                Report an issue
              </a>
            </li>
            <li>
              <a
                href="https://github.com/apache/zeppelin"
                target="_blank"
              >
                GitHub
              </a>
            </li>
            <li class="separator"></li>
            <li>
              <a
                href="http://zeppelin.apache.org/docs/0.9.0-SNAPSHOT/index.html"
                target="_blank"
              >
                Documentation
              </a>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import jQueryMenu from '@/components/thirdparty/jquery.menu.js'
export default {
  name: 'TopMenu',
  mounted () {
    jQueryMenu.init()
  },
  methods: {
    showPreferences () {
      this.$store.dispatch('togglePreferences', true)
    }
  }
}
</script>

<style lang="scss">

</style>
