import WsConnection from '@/classes/webSocket.js'

let wsConn = {}

export default {
  init (app) {
    wsConn = new WsConnection(app.$store, app.$root.ticket)
    app.$store.dispatch('updateTicketDate', app.$root.ticket)
  },

  getConn () {
    return wsConn
  }
}
