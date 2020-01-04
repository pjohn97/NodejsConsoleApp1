const EventEmitter = require('events')
var url = 'http://mylogger.io/log'

class Loggger extends EventEmitter{
    log(message) {
    //Send an HTTP request
    console.log(message)
    //Raise an event
        this.emit('messageLogged', { id: 1, url: 'http://' })
}
}


module.exports = Loggger;
//module.exports.endPoint = url;