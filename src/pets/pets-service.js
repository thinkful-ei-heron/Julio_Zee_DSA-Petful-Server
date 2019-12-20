const { Queue, peek } = require('../queueClass');
const pets = require('./pets_store');

let dogQueue = new Queue();
let catQueue = new Queue();

pets.cats.forEach(cat => catQueue.enqueue(cat));
pets.dogs.forEach(dog => dogQueue.enqueue(dog));

const PetsService = {
  catAdopt() {
    return peek(catQueue);
  },
  catDelete() {
    return catQueue.dequeue();
  },
  dogAdopt() {
    return peek(dogQueue);
  },
  dogDelete() {
    return dogQueue.dequeue();
  },
};

module.exports = PetsService;
