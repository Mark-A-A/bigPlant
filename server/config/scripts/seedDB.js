const mongoose = require("mongoose");
const models = require("../../models");

// This file empties the Books collection and inserts the books below

mongoose.connect(
  "mongodb://localhost/bigPlant"
);

const plantsSeeds = [
  {
    "name": "Bunny Ear Cactus",
    "latinName": "Opuntia microdasys",
    "description": "Bunny ears cactus originated in Mexico and is a denizen of arid, desert-like areas",
    "care": "If you have a dry, low humidity home and plenty of sunny exposure, bunny easers cactus plant might be the perfect plant for you. Bunny ears forms a 2-3 foot tall plant with a spread of 4 to 5 feet in its native habitat. In the home, it is a slow growing plant that will likey reach 2 feet in height and have about the same width",
    "title": "Haley's Favorite Plant"
  },
  {
    "name": "Bismarck Palm",
    "latinName": "Bismarckia nobilis",
    "description": "Bismarckia nobilis grows from solitary trunks, gray to tan in color, which show ringed indentations from old leaf bases.",
    "care": "Bismarck palm watering can be tricky. To get it right, you need to water your new palm so that its roots stay moist for the first four to six months, without letting it get waterlogged. Good drainage is crucial, so before you plant the tree, make sure the soil will drain well.",
    "title": "The Palm For Your Dream Home"
  },
  {
    "name": "Panda Plant",
    "latinName": "Kalanchoe tomentosa",
    "description": "Kalanchoe tomentosa, also known as Panda Plant, is extra fuzzy to aid in its succulent abilities.",
    "care": "Place the indoor panda plant in medium to bright light. As with most succulents, soil should be allowed to dry between waterings. In fact, watering is a limited part of panda plant care. When you do water, do so completely while giving the plant the infrequent drink",
    "title": "The Plant For Your Window"
  },
  {
    "name": "Chinese Money Plant",
    "latinName": "Pilea peperomioides",
    "description": "Pilea peperomioides, known as Chinese money is a species of flowering plant native to Yunnan Province in southern China",
    "care": "The Chinese money plant prefers a well-draining potting soil, and a pot with drainage holes is necessary. The soil needs to mostly dry out between waterings, with more watering required in warmer, sunnier weather. If the leaves start to look slightly droopy, that's a sign that the plant needs water.",
    "title": "The I Get Money, Money I Got Plant"
  },
  {
    "name": "Zig Zag Cactus",
    "latinName": "Selenicerereus anthonyanus",
    "care": "Novice gardeners could not ask for an easier plant than a fishbone cactus houseplant. The cactus grows in low soil media, such as orchid substrate. You can also plant it in cactus blend mixed with compost to enrich the medium. Fishbone cactus thrives in indirect light but can tolerate periods of bright sun.",
    "description": "Selenicerereus anthonyanus is a cactus species native to southern Mexico",
    "title": "An Easy To Care For Plant"
  },
  {
    "name": "Bird's Nest Fern",
    "latinName": "Asplenium nidus",
    "care": "Asplenium nidus prefer evenly moist surroundings. Watering the soil often during growth and housing the plant in a moderately humid area will help to maintain a healthy environment during care for Bird's Nest Fern. Never allow the soil to become dry to the touch",
    "description": "The Bird's Nest Fern is characterized by ripple-edged fronds that grow out of a nest like crown.",
    "title": "The Tropical Must Have"
  },
  {
    "name": "Alocasia Polly",
    "latinName": "Alocasia amazonica",
    "care": "Growing elephant ears is easy—they like filtered sun or shade and rich, moist soil—and they grow rapidly. A large specimen may grow up to 3 feet but most are smaller. Like most tropical plants, they thrive in warm temperatures and high humidity and crave plenty of water. Cut away dead and dying leaves for the best presentation, and keep an eye out for mites.",
    "description": "The Alocasia 'Polly' has deep green arrowhead shaped foliage marked by high contrast white veins.",
    "title": "Amazon Elephant's Ear"
  }
];

models.Plant
  .deleteMany({})
  .then(() => models.Plant.collection.insertMany(plantsSeeds))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
