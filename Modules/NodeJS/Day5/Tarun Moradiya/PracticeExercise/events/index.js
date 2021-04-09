const EventEmitter = require('events')

const emitter = new EventEmitter()

emitter.on('start', () => {
    console.log('started!!!')
})

emitter.emit('start')

///////////////////////////////////////////////////////////////////////////////////////////////////////////

//with argument 

emitter.on('start2', num => {
    console.log('started ' + num)
})

emitter.emit('start2', 13)

///////////////////////////////////////////////////////////////////////////////////////////////////////////

//two arguments
emitter.on('start3', (num1, num2) => {
    console.log(`started ${num1 + num2}`)
})

emitter.emit('start3', 3, 4)

///////////////////////////////////////////////////////////////////////////////////////////////////////////

//arg as object

emitter.on('start4', (num) => {
    console.log(`started ${num.one + num.two}`)
})

emitter.emit('start4', {one: 5, two: 4})

//can call any no of times
emitter.emit('start4', {one: '9 ', two: 'again'})

///////////////////////////////////////////////////////////////////////////////////////////////////////////

//can call only once
emitter.once('startOnce', (str) => {
    console.log(`started ${str}`)
})

emitter.emit('startOnce', 'firt time')
emitter.emit('startOnce', 'second time')

///////////////////////////////////////////////////////////////////////////////////////////////////////////

//erro event

emitter.on('error', (err) => {
    console.error('whoops! there was an error');
  });

emitter.emit('error', new Error('whoops!'));


///////////////////////////////////////////////////////////////////////////////////////////////////////////

// remove an event listener from an event

const callback = (stream) => {
    console.log('someone connected!');
  };
  // ...
  emitter.removeListener('connection', callback);

////////////////////////////////////////////////////////////////////////////////////////

emitter.off('start2', () => console.log('removed'))

////////////////////////////////////////////////////////////////////////////////////////

emitter.removeAllListeners(() => console.log('removed all'))

emitter.emit('start2', 13)


