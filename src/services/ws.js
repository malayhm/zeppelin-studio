import api from '@/services/api.js'

let wsConnection = {}
let ticket = {}

export default {
  init (app) {
    fetch(api.getRestApiBase() + '/security/ticket')
      .then((response) => {
        return response.json()
      })
      .then((response) => {
        this.establishConnection(app, response.body)
      })
  },

  send (message, callback) {
    this.waitForConnection(() => {
      wsConnection.sendNewEvent(message)

      if (typeof callback !== 'undefined') {
        callback()
      }
    }, 1000)
  },

  waitForConnection (callback, interval) {
    if (wsConnection.ws && wsConnection.ws.readyState && wsConnection.ws.readyState === 1) {
      callback()
    } else {
      // optional: implement backoff for interval here
      setTimeout(() => {
        this.waitForConnection(callback, interval)
      }, interval)
    }
  },

  establishConnection (app, data) {
    let ws = new WebSocket(api.getWebsocketUrl())
    ticket = data

    app.$store.dispatch('updateWebSocketStatus', 'trying')

    wsConnection.ws = ws
    wsConnection.ws.reconnectIfNotNormalClose = true

    wsConnection.sendNewEvent = (data) => {
      if (ticket !== undefined) {
        data.principal = ticket.principal
        data.ticket = ticket.ticket
        data.roles = ticket.roles
      } else {
        data.principal = ''
        data.ticket = ''
        data.roles = ''
      }
      console.log('Send >> %o, %o, %o, %o, %o', data.op, data.principal, data.ticket, data.roles, data)
      wsConnection.ws.send(JSON.stringify(data))
    }

    ws.onopen = () => {
      app.$store.dispatch('updateWebSocketStatus', 'connected')

      setInterval(() => {
        wsConnection.sendNewEvent({ op: 'PING' })
      }, 10000)
    }
    ws.onmessage = (evt) => {
      let payload

      if (event.data) {
        payload = JSON.parse(event.data)
      }

      console.log('Receive << %o, %o', payload.op, payload)

      let op = payload.op
      let data = payload.data

      switch (op) {
        // notebook
        case 'NEW_NOTE':
          window.open(`/notebook/${data.note.id}`, '_blank')
          break
        case 'NOTES_INFO':
          app.$store.dispatch('setNoteMenu', data)
          break
        case 'NOTE':
          app.$store.dispatch('setNotebookContent', data)
          break
        // paragraph
        case 'PARAGRAPH':
          // we are already updating the local copy
          // of paragraphs so do not update again from
          // websockets
          // app.$store.dispatch('setParagraph', data)
          break
        case 'PARAGRAPH_APPEND_OUTPUT':
          app.$store.dispatch('setParagraphOutput', data)
          break
        case 'PARAGRAPH_ADDED':
          app.$store.dispatch('setParagraph', data)
          break
        // interpreter
        case 'INTERPRETER_STATUS':
          break
        // interpreter list
        case 'CONFIGURATIONS_INFO':
          break
      }
    }
    ws.onerror = (e) => {
      console.log('WebSocket Error: ', e)
      this.handleErrors(e)
    }

    ws.onclose = (e) => {
      console.log('Connection closed', e)
      app.$store.dispatch('updateWebSocketStatus', 'disconnected')
    }
  },

  handleErrors (e) {

  }
}
