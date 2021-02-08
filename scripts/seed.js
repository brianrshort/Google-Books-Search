const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Books collection and inserts the books below

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/googlebooks"
);

const seed = [
    {
        "title": "More Bears!",
        "image": "http://books.google.com/books/content?id=COneCgAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
        "link": "https://www.googleapis.com/books/v1/volumes/COneCgAAQBAJ",
        "authors": [
            "Kenn Nesbitt"
        ],
        "description": "Once upon a time there was a story. It was a lovely story with absolutely NO BEARS in it-not a SINGLE BEAR anywhere. Then one day...MORE BEARS! KENN NESBITT is possibly the funniest and most sought-after children&#39;s poet writing today."
    },
    {
        "title": "The Berenstain Bears' Big Book of Science and Nature",
        "image": "http://books.google.com/books/content?id=aQxbnUOW6qIC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",      
        "link": "https://www.googleapis.com/books/v1/volumes/aQxbnUOW6qIC",
        "authors": [
            "Stan Berenstain",
            "Jan Berenstain",
            "Activity Books"
        ],
        "description": "Introduces the seasons, weather, animals, plants, the earth, machines, matter, energy, and related topics.",
    },
      
  {
    "title": "Bear's Book",
    "image": "http://books.google.com/books/content?id=96h2DwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",   
    "link": "https://www.googleapis.com/books/v1/volumes/96h2DwAAQBAJ",
    "authors": [
        "Claire Freedman"
      ],
    "description": "\"Bear is a great reader, but when he wants to write his own book, he suffers from a common malady: writer's block. He tries to find ideas by engaging in his favorite activities.\"--Provided by publisher.",
  },
  {
      "title": "The Berenstain Bears Go to the Doctor",
      "image": "http://books.google.com/books/content?id=AzyWnVax2qgC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
      "link": "https://www.googleapis.com/books/v1/volumes/AzyWnVax2qgC",
      "authors": [
        "Stan Berenstain",
        "Jan Berenstain"
      ],
      "description": "Come for a visit in Bear Country with this classic First Time Book® from Stan and Jan Berenstain. Join Mama, Papa, Brother, and Sister, as they head to Doctor Grizzly’s office for their important check-ups where they will have their temperatures taken, their eyes examined, and their ears looked in. This beloved story is the perfect way to introduce children to what happens when they go to the doctor.",      
  },
]



db.Book.remove({})
  .then(() => db.Book.collection.insertMany(seed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
