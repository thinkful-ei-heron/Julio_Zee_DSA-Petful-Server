const { Queue, peek } = require('../queueClass');

const pets = require('./pets_store');

let dogQueue = new Queue();

let catQueue = new Queue();

function loadData() {
  pets.cats.forEach(cat => catQueue.enqueue(cat));
  pets.dogs.forEach(dog => dogQueue.enqueue(dog));
}
loadData();

const PetsService = {
  sendAllAnimals() {
    return { catQueue, dogQueue };
  },
  catPeek() {
    return peek(catQueue);
  },
  catAdopt() {
    let cat = peek(catQueue);
    catQueue.dequeue();
    return cat;
  },
  dogPeek() {
    return peek(dogQueue);
  },
  dogAdopt() {
    let dog = peek(dogQueue);
    dogQueue.dequeue();
    return dog;
  },
};

module.exports = PetsService;
