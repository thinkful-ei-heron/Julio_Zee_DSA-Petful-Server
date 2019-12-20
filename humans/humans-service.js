const { Queue, peek } = require('../queueClass');
const humans = require('./humans-store');

let humanQueue = new Queue();

function loadData() {
  humans.forEach(human => humanQueue.enqueue(human));
}
loadData();

const humansService = {
  humanPeek() {
    let human = peek(humanQueue);
    return human;
  },
};

module.exports = humansService;
