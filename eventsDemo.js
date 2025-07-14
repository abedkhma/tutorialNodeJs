import { EventEmitter } from 'events';

const myEmitter = new EventEmitter

function greetHandler(name){
    console.log('Hello ' + name);
}

function goodByeHandler(name ){
    console.log('Goodbye '+ name);
}

// Register event listeners 
myEmitter.on('greet', greetHandler);
myEmitter.on('goodbye', goodByeHandler);

// Emit events
myEmitter.emit('greet', 'Aboud');
myEmitter.emit('goodbye', 'Aboud');

// Error handler
myEmitter.on('error', (err) => {
    console.log('An Error Occured:', err);
});

// Simulate Error
myEmitter.emit('error', new Error('Sth went wrong'));

