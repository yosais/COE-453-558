let eventSource = new EventSource('/stream')

function updateMessage (message) {
    let list = document.getElementById('messages')
    let item = document.createElement('p')
    item.textContent = message
    list.appendChild(item)
}

// Event: Update
eventSource.addEventListener("update", function(evt){
    updateMessage(evt.data)
})

// Event: Warning
eventSource.addEventListener("warning", function(evt){
    updateMessage(evt.data)
})

/* The event "message" is a special case, as it
   * will capture events without an event field
   * as well as events that have the specific type
   * `event: message` It will not trigger on any
   * other event type.
*/
eventSource.addEventListener("message", function(evt){
    updateMessage(evt.data)
})

eventSource.onerror = function () {
    updateMessage('Server closed connection')
    eventSource.close()
}