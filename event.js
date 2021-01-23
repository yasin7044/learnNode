const events =require('events')

let ev = new events.EventEmitter();

ev.on('my_event',function (data){
    console.log("Event",data)

})

ev.emit('my_event','asdasda')