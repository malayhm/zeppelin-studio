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
                New notebook
              </a>
            </li>

            <li class="separator"></li>

            <li class="icon save">
              <a href="#">
                Save <!--<span>Ctrl+S</span> -->
                </a>
            </li>

            <li class="icon save">
              <a href="#">Manage permissions</a>
            </li>

            <li class="separator"></li>

            <li>
              <a href="#">Import</a>
            </li>
            <li>
              <a href="#">Explort</a>
            </li>
            <li class="icon save">
              <a href="#">Move to recycle bin</a>
            </li>

            <li class="separator"></li>

            <li class="icon print">
              <a href="#">Print</a>
            </li>
          </ul>
        </li>

        <!-- Edit Menu -->
        <li> Edit
          <ul>
            <li>
              <a
                @click="toggle('code')"
                href="javascript:void(0)"
              >
                Show/hide code
              </a>
            </li>
            <li>
              <a
                @click="toggle('lines')"
                href="javascript:void(0)"
              >
                Show/hide line numbers
              </a>
            </li>
            <li>
              <a
                @click="toggle('output')"
                href="javascript:void(0)"
              >
                Show/hide outputs
              </a>
            </li>
            <li class="separator"></li>
            <li>
              <a
                href="javascript:void(0)"
              >
                Find and replace...
              </a>
            </li>
            <li class="separator"></li>
            <li>
              <a
                @click="clearOutput()"
                href="javascript:void(0)"
              >
                Clear all outputs
              </a>
            </li>
          </ul>
        </li>

        <!-- View Menu -->
        <li> View
          <ul>
            <li>
              <a
                href="javascript:void(0)"
              >
                Table of contents
              </a>
            </li>
            <li>
              <a
                href="javascript:void(0)"
              >
                Version control
              </a>
            </li>
            <li>
              <a
                href="javascript:void(0)"
              >
                Notebook info
              </a>
            </li>
          </ul>
        </li>

        <!-- Runtime Menu -->
        <li> Runtime
          <ul>
            <li>
              <a
                href="javascript:void(0)"
              >
                Run all
              </a>
            </li>
            <li>
              <a
                href="javascript:void(0)"
              >
                Run before
              </a>
            </li>
            <li>
              <a
                href="javascript:void(0)"
              >
                Run the focused paragraph
              </a>
            </li>
            <li>
              <a
                href="javascript:void(0)"
              >
                Run all
              </a>
            </li>
            <li class="separator"></li>
            <li>
              <a
                href="javascript:void(0)"
              >
                Interpreters
              </a>
            </li>
          </ul>
        </li>

        <!-- Settings -->
        <li> Settings
          <ul>
            <li>
              <a
                href="javascript:void(0)"
              >
                Notebook repository
              </a>
            </li>
            <li>
              <a
                href="javascript:void(0)"
              >
                Credentials
              </a>
            </li>
            <li>
              <a
                href="javascript:void(0)"
              >
                Configuration
              </a>
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
              <router-link to="#">Keyboard shortcuts</router-link>
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
                Mailing list
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
