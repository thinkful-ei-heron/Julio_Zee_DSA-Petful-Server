/* eslint-disable quotes */
const dogs = [
  {
    id: 1,
    imageURL:
      'https://images.dog.ceo/breeds/terrier-sealyham/n02095889_4826.jpg',
    imageDesc: 'Gorgeous dog with pretty white fur.',
    name: 'Snow',
    sex: 'Girl',
    age: 1,
    breed: 'Terrier',
    story:
      'Snow was found wondering near a shopping center.  She was scared and she needs a safe home.',
  },
  {
    id: 2,
    imageURL:
      'https://images.dog.ceo/breeds/mastiff-tibetan/n02108551_1121.jpg',
    imageDesc: ' Beautiful bundle black bundle of fluffy joy.',
    name: 'Bear',
    sex: 'Boy',
    age: 10,
    breed: 'Mastiff',
    story:
      'This cuddling little guy was abandoned at birth.  He will get pretty big, so he will need a home that will fit his future size.',
  },
  {
    id: 3,
    imageURL: 'https://images.dog.ceo/breeds/germanshepherd/n02106662_3953.jpg',
    imageDesc: 'Beautiful and sleek.',
    name: 'Pepper',
    sex: 'Boy',
    age: 9,
    breed: 'German Sheppard',
    story:
      'Pepper has had a hard life in a puppy mill and need her life to improve with a great family',
  },
  {
    id: 4,
    imageURL:
      'https://images.dog.ceo/breeds/terrier-kerryblue/n02093859_1777.jpg',
    imageDesc: 'A best friend and great alarm',
    name: 'Max',
    sex: 'Boy',
    age: 2,
    breed: 'Terrier',
    story:
      'Max is a mature with experience with children.  He needs a new home as his previous owners could no longer take care of him.',
  },
  {
    id: 5,
    imageURL: 'https://images.dog.ceo/breeds/cockapoo/bubbles1.jpg',
    imageDesc: 'Filled with love and personality',
    name: 'Harley',
    sex: 'Girl',
    age: 1,
    breed: 'Cockapoo',
    story:
      'Harley is a ball of fun with a great personality.  She is very loving and just wants to be with someone who can love her right back.',
  },
  {
    id: 6,
    imageURL:
      'https://images.dog.ceo/breeds/spaniel-japanese/n02085782_622.jpg',
    imageDesc: "I'm ready for my close up!",
    name: 'Star',
    sex: 'Girl',
    age: 3,
    breed: 'Cocker Spaniel',
    story:
      'Star is the center of attention.  She doesnt mind sharing her spotlight as long as you understand who is the lead singer.',
  },
  {
    id: 7,
    imageURL: 'https://images.dog.ceo/breeds/mix/Noah02.jpg',
    imageDesc: 'Im old and just need a place to chillax',
    name: 'Noah',
    sex: 'Boy',
    age: 5,
    breed: 'Mixed',
    story:
      "I've been around the block and i'm tired.  I need someone who doesnt mind laying back and enjoying the breeze.",
  },
  {
    id: 8,
    imageURL: 'https://images.dog.ceo/breeds/african/n02116738_5661.jpg',
    imageDesc: 'I was born to be a protector!',
    name: 'Sire',
    sex: 'Boy',
    age: 2,
    breed: 'African',
    story:
      'I just want to make sure my owner is safe, but I want to be safe too.',
  },
  {
    id: 9,
    imageURL: 'https://images.dog.ceo/breeds/samoyed/n02111889_4353.jpg',
    imageDesc: 'I absolutely love it when you play in my hair',
    name: 'Lucy',
    sex: 'Girl',
    age: 10,
    breed: 'Samoyed',
    story:
      'I need to find a home that appreciates genuine connection.  I love to be cuddled.',
  },
];
const cats = [
  {
    id: 1,
    imageURL:
      'https://assets3.thrillist.com/v1/image/2622128/size/tmg-slideshow_l.jpg',
    imageDesc: 'Orange bengal cat with black stripes lounging on concrete.',
    name: 'Fluffy',
    sex: 'Girl',
    age: 2,
    breed: 'Bengal',
    story: 'Thrown on the street',
  },
  {
    id: 2,
    imageURL: 'https://cdn2.thecatapi.com/images/93i.jpg',
    imageDesc: 'Beatiful brown and black cat who loves to see into the future.',
    name: 'Lucky',
    sex: 'Boy',
    age: 2,
    breed: 'Tabby',
    story:
      'Lucky has more than 9 lives and wants to spend the rest of them with you.',
  },
  {
    id: 3,
    imageURL: 'https://cdn2.thecatapi.com/images/MTczMDA4MQ.jpg',
    imageDesc: 'Black with white fluffy cat',
    name: 'Oreo',
    sex: 'Boy',
    age: 4,
    breed: 'American Curl',
    story:
      'Oreo is a cat set in his ways.  He just needs his food, a nice rub, and a place to curl up.',
  },
  {
    id: 4,
    imageURL: 'https://cdn2.thecatapi.com/images/41Fe8q9vU.jpg',
    imageDesc: 'All white cat with plenty of fur to run your fingers through.',
    name: 'Jelly',
    sex: 'Girl',
    age: 3,
    breed: 'Turkish',
    story: 'This is a smart and intelligent cat which bonds well with humans.',
  },
  {
    id: 5,
    imageURL: 'https://cdn2.thecatapi.com/images/Sejb3lnzz.jpg',
    imageDesc: 'Loving brown and tan cat with pretty green eyes.',
    name: 'Rascal',
    sex: 'Girl',
    age: 4,
    breed: 'Tabby',
    story:
      'Rascal loves to explore and find new things.  Great with kids and loves toys.',
  },
  {
    id: 6,
    imageURL: 'https://cdn2.thecatapi.com/images/CWGNkdpA7.jpg',
    imageDesc: 'Chocolate covered kitty goodness.',
    name: 'Brownie',
    sex: 'Girl',
    age: 5,
    breed: 'Korat',
    story:
      'Brownie love attention, but does not like loud noises.  She just wants a quiet place to enjoy her 9 lives.',
  },
  {
    id: 7,
    imageURL: 'https://cdn2.thecatapi.com/images/GEZGPnMTm.jpg',
    imageDesc: 'A kitten to steal your heart.',
    name: 'Buttons',
    sex: 'Boy',
    age: 1,
    breed: 'Bengal',
    story:
      'This little kittten was rescued, cold and all alone.  He needs someone to love and to love him back.',
  },
  {
    id: 8,
    imageURL: 'https://cdn2.thecatapi.com/images/c22.jpg',
    imageDesc: 'Fluffy white bundle of joy.',
    name: 'Skipper',
    sex: 1,
    age: 'Girl',
    breed: 'Birman',
    story:
      'Skipper loves to learn new tricks.  He knows how to give a high five and is eager to learn new tricks.',
  },
  {
    id: 9,
    imageURL: 'https://cdn2.thecatapi.com/images/a6g.jpg',
    imageDesc: 'White with brown and tan stripes.',
    name: 'Ming Lee',
    sex: 'Girl',
    age: 1,
    breed: 'Birman',
    story:
      'Ming Lee is a cat diva who knows how she should be treated...with love.',
  },
  {
    id: 10,
    imageURL: 'https://cdn2.thecatapi.com/images/3b4.jpg',
    imageDesc: 'White, fluffy, and funny.',
    name: 'Cotton',
    sex: 'Boy',
    age: 4,
    breed: 'Himalayan',
    story:
      'Cotton is the perfect softness to cuddle up with to Netflix and chill.',
  },
  {
    id: 11,
    imageURL: 'https://cdn2.thecatapi.com/images/boe.jpg',
    imageDesc: 'A real cat with class.  White and fierce.',
    name: 'Boe',
    sex: 'Girl',
    age: 5,
    breed: 'Himalayan',
    story:
      'Boe is a lady!  She knows how to carry herself and loves to be noticed and treated with kindness.',
  },
];
module.exports = { dogs, cats };
