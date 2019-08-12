import Vue from 'vue'
import Vuex from 'vuex'
import 'es6-promise/auto'

import TabManagerStore from '@/stores/tab_manager_store'
import NotebookStore from '@/stores/notebook_store'
import InterpreterStore from '@/stores/interpreter_store'
import HeliumStore from '@/stores/helium_store'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    TabManagerStore,
    NotebookStore,
    InterpreterStore,
    HeliumStore
  },

  state: {
    selectedLeftNavTab: 'folders',
    showPrefererences: false,
    darkMode: false,
    webSocketStatus: 'disconnected'
  },

  mutations: {
    mutateSelectedTab (state, data) {
      state.selectedLeftNavTab = data
    },
    mutateShowPreferences (state, data) {
      state.showPrefererences = data
    },
    mutateDarkMode (state, newStatus) {
      state.darkMode = newStatus
    },
    updateWebSocketStatus (state, newStatus) {
      state.webSocketStatus = newStatus
    }
  },

  actions: {
    selectLeftNavTab (context, data) {
      context.commit('mutateSelectedTab', data)
    },
    togglePreferences (context, data) {
      context.commit('mutateShowPreferences', data)
    },
    toggleDarkMode (context, newStatus) {
      context.commit('mutateDarkMode', newStatus)
    },
    updateWebSocketStatus (context, newStatus) {
      context.commit('updateWebSocketStatus', newStatus)
    }
  }
})

export default store
