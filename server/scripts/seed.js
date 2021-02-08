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
    "link": "https://www.googleapis.com/books/v1/volumes/96h2DwAAQBAJ",
      "title": "Bear's Book",
      "authors": [
        "Claire Freedman"
      ],
      "description": "\"Bear is a great reader, but when he wants to write his own book, he suffers from a common malady: writer's block. He tries to find ideas by engaging in his favorite activities.\"--Provided by publisher.",
      "image": "http://books.google.com/books/content?id=96h2DwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
  },
  {
    "kind": "books#volume",
    "id": "AzyWnVax2qgC",
    "etag": "qdL2SkzbeAo",
    "selfLink": "https://www.googleapis.com/books/v1/volumes/AzyWnVax2qgC",
    "volumeInfo": {
      "title": "The Berenstain Bears Go to the Doctor",
      "authors": [
        "Stan Berenstain",
        "Jan Berenstain"
      ],
      "publisher": "Random House Books for Young Readers",
      "publishedDate": "2011-02-02",
      "description": "Come for a visit in Bear Country with this classic First Time Book® from Stan and Jan Berenstain. Join Mama, Papa, Brother, and Sister, as they head to Doctor Grizzly’s office for their important check-ups where they will have their temperatures taken, their eyes examined, and their ears looked in. This beloved story is the perfect way to introduce children to what happens when they go to the doctor.",
      "industryIdentifiers": [
        {
          "type": "ISBN_13",
          "identifier": "9780375982545"
        },
        {
          "type": "ISBN_10",
          "identifier": "037598254X"
        }
      ],
      "readingModes": {
        "text": true,
        "image": false
      },
      "pageCount": 32,
      "printType": "BOOK",
      "categories": [
        "Juvenile Fiction"
      ],
      "averageRating": 4,
      "ratingsCount": 6,
      "maturityRating": "NOT_MATURE",
      "allowAnonLogging": true,
      "contentVersion": "2.4.4.0.preview.2",
      "panelizationSummary": {
        "containsEpubBubbles": false,
        "containsImageBubbles": false
      },
      "imageLinks": {
        "smallThumbnail": "http://books.google.com/books/content?id=AzyWnVax2qgC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
        "thumbnail": "http://books.google.com/books/content?id=AzyWnVax2qgC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
      },
      "language": "en",
      "previewLink": "http://books.google.com/books?id=AzyWnVax2qgC&printsec=frontcover&dq=Bears&hl=&cd=4&source=gbs_api",
      "infoLink": "https://play.google.com/store/books/details?id=AzyWnVax2qgC&source=gbs_api",
      "canonicalVolumeLink": "https://play.google.com/store/books/details?id=AzyWnVax2qgC"
    },
    "saleInfo": {
      "country": "US",
      "saleability": "FOR_SALE",
      "isEbook": true,
      "listPrice": {
        "amount": 4.99,
        "currencyCode": "USD"
      },
      "retailPrice": {
        "amount": 4.99,
        "currencyCode": "USD"
      },
      "buyLink": "https://play.google.com/store/books/details?id=AzyWnVax2qgC&rdid=book-AzyWnVax2qgC&rdot=1&source=gbs_api",
      "offers": [
        {
          "finskyOfferType": 1,
          "listPrice": {
            "amountInMicros": 4990000,
            "currencyCode": "USD"
          },
          "retailPrice": {
            "amountInMicros": 4990000,
            "currencyCode": "USD"
          },
          "giftable": true
        }
      ]
    },
    "accessInfo": {
      "country": "US",
      "viewability": "PARTIAL",
      "embeddable": true,
      "publicDomain": false,
      "textToSpeechPermission": "ALLOWED_FOR_ACCESSIBILITY",
      "epub": {
        "isAvailable": true,
        "acsTokenLink": "http://books.google.com/books/download/The_Berenstain_Bears_Go_to_the_Doctor-sample-epub.acsm?id=AzyWnVax2qgC&format=epub&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api"
      },
      "pdf": {
        "isAvailable": false
      },
      "webReaderLink": "http://play.google.com/books/reader?id=AzyWnVax2qgC&hl=&printsec=frontcover&source=gbs_api",
      "accessViewStatus": "SAMPLE",
      "quoteSharingAllowed": false
    },
    "searchInfo": {
      "textSnippet": "This beloved story is the perfect way to introduce children to what happens when they go to the doctor."
    }
  },
  {
    "kind": "books#volume",
    "id": "AHtxjwEACAAJ",
    "etag": "7/lW0LY/Py0",
    "selfLink": "https://www.googleapis.com/books/v1/volumes/AHtxjwEACAAJ",
    "volumeInfo": {
      "title": "The Berenstain Bears Book of Prayers",
      "authors": [
        "Mike Berenstain"
      ],
      "publisher": "WorthyKids",
      "publishedDate": "2016-09-20",
      "description": "This new prayer book for toddlers features Mama and Papa Bear, Brother, Sister, and Honey. Nearly 50 simple rhyming prayers cover a typical day and the typical worries of a young child. From waking in the morning to going to sleep at night, from thanking God for a meal to praying for His comfort when afraid, the prayers will help little ones see that any moment is a good moment to talk to God. With its soft padded cover and convenient size, the book is the perfect way to teach children about prayer and the ways God cares for us each day.",
      "industryIdentifiers": [
        {
          "type": "ISBN_10",
          "identifier": "082491984X"
        },
        {
          "type": "ISBN_13",
          "identifier": "9780824919849"
        }
      ],
      "readingModes": {
        "text": false,
        "image": false
      },
      "pageCount": 32,
      "printType": "BOOK",
      "categories": [
        "Juvenile Nonfiction"
      ],
      "maturityRating": "NOT_MATURE",
      "allowAnonLogging": false,
      "contentVersion": "preview-1.0.0",
      "panelizationSummary": {
        "containsEpubBubbles": false,
        "containsImageBubbles": false
      },
      "imageLinks": {
        "smallThumbnail": "http://books.google.com/books/content?id=AHtxjwEACAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api",
        "thumbnail": "http://books.google.com/books/content?id=AHtxjwEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api"
      },
      "language": "en",
      "previewLink": "http://books.google.com/books?id=AHtxjwEACAAJ&dq=Bears&hl=&cd=5&source=gbs_api",
      "infoLink": "http://books.google.com/books?id=AHtxjwEACAAJ&dq=Bears&hl=&source=gbs_api",
      "canonicalVolumeLink": "https://books.google.com/books/about/The_Berenstain_Bears_Book_of_Prayers.html?hl=&id=AHtxjwEACAAJ"
    },
    "saleInfo": {
      "country": "US",
      "saleability": "NOT_FOR_SALE",
      "isEbook": false
    },
    "accessInfo": {
      "country": "US",
      "viewability": "NO_PAGES",
      "embeddable": false,
      "publicDomain": false,
      "textToSpeechPermission": "ALLOWED",
      "epub": {
        "isAvailable": false
      },
      "pdf": {
        "isAvailable": false
      },
      "webReaderLink": "http://play.google.com/books/reader?id=AHtxjwEACAAJ&hl=&printsec=frontcover&source=gbs_api",
      "accessViewStatus": "NONE",
      "quoteSharingAllowed": false
    },
    "searchInfo": {
      "textSnippet": "This new prayer book for toddlers features Mama and Papa Bear, Brother, Sister, and Honey."
    }
  },
  {
    "kind": "books#volume",
    "id": "etrlevyLof0C",
    "etag": "JVXoT6o3V0Q",
    "selfLink": "https://www.googleapis.com/books/v1/volumes/etrlevyLof0C",
    "volumeInfo": {
      "title": "The Valentine Bears",
      "authors": [
        "Eve Bunting"
      ],
      "publisher": "Houghton Mifflin Harcourt",
      "publishedDate": "1985",
      "description": "Mrs. Bear plans a surprise Valentine's Day celebration for Mr. Bear despite their usual hibernating habits at that time of year.",
      "industryIdentifiers": [
        {
          "type": "ISBN_10",
          "identifier": "0899193137"
        },
        {
          "type": "ISBN_13",
          "identifier": "9780899193137"
        }
      ],
      "readingModes": {
        "text": false,
        "image": true
      },
      "pageCount": 32,
      "printType": "BOOK",
      "categories": [
        "Juvenile Fiction"
      ],
      "averageRating": 4.5,
      "ratingsCount": 4,
      "maturityRating": "NOT_MATURE",
      "allowAnonLogging": false,
      "contentVersion": "0.1.3.0.preview.1",
      "panelizationSummary": {
        "containsEpubBubbles": false,
        "containsImageBubbles": false
      },
      "imageLinks": {
        "smallThumbnail": "http://books.google.com/books/content?id=etrlevyLof0C&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
        "thumbnail": "http://books.google.com/books/content?id=etrlevyLof0C&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
      },
      "language": "en",
      "previewLink": "http://books.google.com/books?id=etrlevyLof0C&printsec=frontcover&dq=Bears&hl=&cd=6&source=gbs_api",
      "infoLink": "http://books.google.com/books?id=etrlevyLof0C&dq=Bears&hl=&source=gbs_api",
      "canonicalVolumeLink": "https://books.google.com/books/about/The_Valentine_Bears.html?hl=&id=etrlevyLof0C"
    },
    "saleInfo": {
      "country": "US",
      "saleability": "NOT_FOR_SALE",
      "isEbook": false
    },
    "accessInfo": {
      "country": "US",
      "viewability": "PARTIAL",
      "embeddable": true,
      "publicDomain": false,
      "textToSpeechPermission": "ALLOWED",
      "epub": {
        "isAvailable": false
      },
      "pdf": {
        "isAvailable": false
      },
      "webReaderLink": "http://play.google.com/books/reader?id=etrlevyLof0C&hl=&printsec=frontcover&source=gbs_api",
      "accessViewStatus": "SAMPLE",
      "quoteSharingAllowed": false
    },
    "searchInfo": {
      "textSnippet": "Mrs. Bear plans a surprise Valentine&#39;s Day celebration for Mr. Bear despite their usual hibernating habits at that time of year."
    }
  },
  {
    "kind": "books#volume",
    "id": "1W98s7aVy8cC",
    "etag": "3QvdyPJKEFU",
    "selfLink": "https://www.googleapis.com/books/v1/volumes/1W98s7aVy8cC",
    "volumeInfo": {
      "title": "Bears",
      "subtitle": "A Brief History",
      "authors": [
        "Bernd Brunner"
      ],
      "publisher": "Yale University Press",
      "publishedDate": "2007",
      "description": "A delightfully illustrated history of the complex relations between people and bears around the world",
      "industryIdentifiers": [
        {
          "type": "ISBN_10",
          "identifier": "0300122993"
        },
        {
          "type": "ISBN_13",
          "identifier": "9780300122992"
        }
      ],
      "readingModes": {
        "text": true,
        "image": true
      },
      "pageCount": 259,
      "printType": "BOOK",
      "categories": [
        "Nature"
      ],
      "averageRating": 4,
      "ratingsCount": 5,
      "maturityRating": "NOT_MATURE",
      "allowAnonLogging": false,
      "contentVersion": "0.1.2.0.preview.3",
      "panelizationSummary": {
        "containsEpubBubbles": false,
        "containsImageBubbles": false
      },
      "imageLinks": {
        "smallThumbnail": "http://books.google.com/books/content?id=1W98s7aVy8cC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
        "thumbnail": "http://books.google.com/books/content?id=1W98s7aVy8cC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
      },
      "language": "en",
      "previewLink": "http://books.google.com/books?id=1W98s7aVy8cC&printsec=frontcover&dq=Bears&hl=&cd=7&source=gbs_api",
      "infoLink": "http://books.google.com/books?id=1W98s7aVy8cC&dq=Bears&hl=&source=gbs_api",
      "canonicalVolumeLink": "https://books.google.com/books/about/Bears.html?hl=&id=1W98s7aVy8cC"
    },
    "saleInfo": {
      "country": "US",
      "saleability": "NOT_FOR_SALE",
      "isEbook": false
    },
    "accessInfo": {
      "country": "US",
      "viewability": "PARTIAL",
      "embeddable": true,
      "publicDomain": false,
      "textToSpeechPermission": "ALLOWED",
      "epub": {
        "isAvailable": true,
        "acsTokenLink": "http://books.google.com/books/download/Bears-sample-epub.acsm?id=1W98s7aVy8cC&format=epub&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api"
      },
      "pdf": {
        "isAvailable": false
      },
      "webReaderLink": "http://play.google.com/books/reader?id=1W98s7aVy8cC&hl=&printsec=frontcover&source=gbs_api",
      "accessViewStatus": "SAMPLE",
      "quoteSharingAllowed": false
    },
    "searchInfo": {
      "textSnippet": "A delightfully illustrated history of the complex relations between people and bears around the world"
    }
  },
  {
    "kind": "books#volume",
    "id": "VxFxDwAAQBAJ",
    "etag": "nfLilMaQO+Q",
    "selfLink": "https://www.googleapis.com/books/v1/volumes/VxFxDwAAQBAJ",
    "volumeInfo": {
      "title": "Backyard Bears",
      "subtitle": "Conservation, Habitat Changes, and the Rise of Urban Wildlife",
      "authors": [
        "Amy Cherrix"
      ],
      "publisher": "HMH Books For Young Readers",
      "publishedDate": "2018",
      "description": "North Carolina's black bears were once a threatened species, but now their numbers are rising in and around Asheville. But what happens when conservation efforts for a species are so successful that there's a boom in the population? Can humans and bears live compatibly? What are the long-term effects for the bears? Author Amy Cherrix follows the scientists who, in cooperation with local citizen scientists, are trying to answer to these questions and more. Part field science, part conservation science, Backyard Bears looks at black bears--and other animals around the globe--who are rapidly becoming our neighbors in urban and suburban areas. What happens when conservation efforts for a species are so successful that there's a boom in the population? Part field science, part conservation science, Backyard Bears looks at black bears--and other animals around the globe--who are rapidly becoming our neighbors in urban and suburban areas. North Carolina's black bears were once a threatened species, but now their numbers are rising in and around Asheville. Can humans and bears live compatibly? What are the long-term effects for the bears? Author Amy Cherrix follows the scientists who, in cooperation with local citizens, are trying to answer to these questions and more.",
      "industryIdentifiers": [
        {
          "type": "ISBN_13",
          "identifier": "9781328858689"
        },
        {
          "type": "ISBN_10",
          "identifier": "1328858685"
        }
      ],
      "readingModes": {
        "text": false,
        "image": true
      },
      "pageCount": 80,
      "printType": "BOOK",
      "categories": [
        "Juvenile Nonfiction"
      ],
      "maturityRating": "NOT_MATURE",
      "allowAnonLogging": false,
      "contentVersion": "preview-1.0.0",
      "panelizationSummary": {
        "containsEpubBubbles": false,
        "containsImageBubbles": false
      },
      "imageLinks": {
        "smallThumbnail": "http://books.google.com/books/content?id=VxFxDwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
        "thumbnail": "http://books.google.com/books/content?id=VxFxDwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
      },
      "language": "en",
      "previewLink": "http://books.google.com/books?id=VxFxDwAAQBAJ&pg=PA34&dq=Bears&hl=&cd=8&source=gbs_api",
      "infoLink": "http://books.google.com/books?id=VxFxDwAAQBAJ&dq=Bears&hl=&source=gbs_api",
      "canonicalVolumeLink": "https://books.google.com/books/about/Backyard_Bears.html?hl=&id=VxFxDwAAQBAJ"
    },
    "saleInfo": {
      "country": "US",
      "saleability": "NOT_FOR_SALE",
      "isEbook": false
    },
    "accessInfo": {
      "country": "US",
      "viewability": "PARTIAL",
      "embeddable": true,
      "publicDomain": false,
      "textToSpeechPermission": "ALLOWED",
      "epub": {
        "isAvailable": false
      },
      "pdf": {
        "isAvailable": false
      },
      "webReaderLink": "http://play.google.com/books/reader?id=VxFxDwAAQBAJ&hl=&printsec=frontcover&source=gbs_api",
      "accessViewStatus": "SAMPLE",
      "quoteSharingAllowed": false
    },
    "searchInfo": {
      "textSnippet": "How do \u003cb\u003ebears\u003c/b\u003e survive (or fail to survive) in urban areas like Asheville? What are \u003cbr\u003e\ntheir survival rates in an urban/suburban habitat? When are they most active? \u003cbr\u003e\nAre the reported sightings or interactions between people and \u003cb\u003ebears\u003c/b\u003e the result of \u003cbr\u003e\na&nbsp;..."
    }
  },
  {
    "kind": "books#volume",
    "id": "uqeWNQPctWsC",
    "etag": "gejmy8BgaZ8",
    "selfLink": "https://www.googleapis.com/books/v1/volumes/uqeWNQPctWsC",
    "volumeInfo": {
      "title": "Timber Damage by Black Bears",
      "subtitle": "Approaches to Control the Problem",
      "authors": [
        "Dale L. Nolte"
      ],
      "publishedDate": "2003",
      "description": "Describes alternative approaches to controlling the damage black bears cause during the spring when they strip bark to eat the newly formed wood underneath. One bear might strip as many as 70 trees in a day. The trees will be damaged and may be killed if the bark is stripped all the way around the tree, girdling it. Bears appear to strip the most vigorous trees, preferring stands that have been thinned, or those where urea fertilizer has been applied. Bears also appear to prefer trees with a high concentration of sugars relative to the concentration of terpenes. Pruning decreases the sugar-to-terpene ratio, reducing the likelihood that trees will be stripped by bears. Bears generally quit stripping trees once other foods become available during the late spring or early summer. One approach to reducing damage has been to provide supplemental feed (pellets resembling dog food) in stands being damaged by bears. In one study, damage was just one-fifth as much in stands with feeders as in stands without feeders. Killing bears in areas where trees are being stripped can also reduce damage. Other approaches, such as relocation, contraception or sterilization, or repellents, are not generally practical for protecting forest plantations.",
      "industryIdentifiers": [
        {
          "type": "OTHER",
          "identifier": "MINN:31951D02262803D"
        }
      ],
      "readingModes": {
        "text": false,
        "image": true
      },
      "pageCount": 10,
      "printType": "BOOK",
      "categories": [
        "Black bear"
      ],
      "maturityRating": "NOT_MATURE",
      "allowAnonLogging": false,
      "contentVersion": "1.1.3.0.full.1",
      "panelizationSummary": {
        "containsEpubBubbles": false,
        "containsImageBubbles": false
      },
      "imageLinks": {
        "smallThumbnail": "http://books.google.com/books/content?id=uqeWNQPctWsC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
        "thumbnail": "http://books.google.com/books/content?id=uqeWNQPctWsC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
      },
      "language": "en",
      "previewLink": "http://books.google.com/books?id=uqeWNQPctWsC&pg=PA3&dq=Bears&hl=&cd=9&source=gbs_api",
      "infoLink": "https://play.google.com/store/books/details?id=uqeWNQPctWsC&source=gbs_api",
      "canonicalVolumeLink": "https://play.google.com/store/books/details?id=uqeWNQPctWsC"
    },
    "saleInfo": {
      "country": "US",
      "saleability": "FREE",
      "isEbook": true,
      "buyLink": "https://play.google.com/store/books/details?id=uqeWNQPctWsC&rdid=book-uqeWNQPctWsC&rdot=1&source=gbs_api"
    },
    "accessInfo": {
      "country": "US",
      "viewability": "ALL_PAGES",
      "embeddable": true,
      "publicDomain": true,
      "textToSpeechPermission": "ALLOWED",
      "epub": {
        "isAvailable": false,
        "downloadLink": "http://books.google.com/books/download/Timber_Damage_by_Black_Bears.epub?id=uqeWNQPctWsC&hl=&output=epub&source=gbs_api"
      },
      "pdf": {
        "isAvailable": false
      },
      "webReaderLink": "http://play.google.com/books/reader?id=uqeWNQPctWsC&hl=&printsec=frontcover&source=gbs_api",
      "accessViewStatus": "FULL_PUBLIC_DOMAIN",
      "quoteSharingAllowed": false
    },
    "searchInfo": {
      "textSnippet": "\u003cb\u003eBears\u003c/b\u003e appear to forage in a way that maximizes sugars while minimizing \u003cbr\u003e\nterpenes . Eliminate or remove the problem animals or reduce the overall bear \u003cbr\u003e\npopulation . Apply silvicultural practices that minimize the attractiveness and \u003cbr\u003e\nvulnerability&nbsp;..."
    }
  },
  {
    "kind": "books#volume",
    "id": "tsBR-4FygjAC",
    "etag": "VIjN3lT7PL8",
    "selfLink": "https://www.googleapis.com/books/v1/volumes/tsBR-4FygjAC",
    "volumeInfo": {
      "title": "Bears--their Biology and Management",
      "subtitle": "A Selection of Papers from the Fourth International Conference on Bear Research and Management, Held at Kalispell, Montana, USA, February 1977",
      "authors": [
        "Clifford J. Martinka",
        "Katherine L. McArthur"
      ],
      "publishedDate": "1980",
      "industryIdentifiers": [
        {
          "type": "OTHER",
          "identifier": "IND:30000035469026"
        }
      ],
      "readingModes": {
        "text": false,
        "image": true
      },
      "pageCount": 375,
      "printType": "BOOK",
      "categories": [
        "Bears"
      ],
      "maturityRating": "NOT_MATURE",
      "allowAnonLogging": false,
      "contentVersion": "0.3.3.0.full.1",
      "panelizationSummary": {
        "containsEpubBubbles": false,
        "containsImageBubbles": false
      },
      "imageLinks": {
        "smallThumbnail": "http://books.google.com/books/content?id=tsBR-4FygjAC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
        "thumbnail": "http://books.google.com/books/content?id=tsBR-4FygjAC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
      },
      "language": "en",
      "previewLink": "http://books.google.com/books?id=tsBR-4FygjAC&pg=PA61&dq=Bears&hl=&cd=10&source=gbs_api",
      "infoLink": "https://play.google.com/store/books/details?id=tsBR-4FygjAC&source=gbs_api",
      "canonicalVolumeLink": "https://play.google.com/store/books/details?id=tsBR-4FygjAC"
    },
    "saleInfo": {
      "country": "US",
      "saleability": "FREE",
      "isEbook": true,
      "buyLink": "https://play.google.com/store/books/details?id=tsBR-4FygjAC&rdid=book-tsBR-4FygjAC&rdot=1&source=gbs_api"
    },
    "accessInfo": {
      "country": "US",
      "viewability": "ALL_PAGES",
      "embeddable": true,
      "publicDomain": true,
      "textToSpeechPermission": "ALLOWED",
      "epub": {
        "isAvailable": false,
        "downloadLink": "http://books.google.com/books/download/Bears_their_Biology_and_Management.epub?id=tsBR-4FygjAC&hl=&output=epub&source=gbs_api"
      },
      "pdf": {
        "isAvailable": false
      },
      "webReaderLink": "http://play.google.com/books/reader?id=tsBR-4FygjAC&hl=&printsec=frontcover&source=gbs_api",
      "accessViewStatus": "FULL_PUBLIC_DOMAIN",
      "quoteSharingAllowed": false
    },
    "searchInfo": {
      "textSnippet": "Activity patterns of radio - collared black \u003cb\u003ebears\u003c/b\u003e in Idaho . J. Wildl . Manage . 40 ( 2 \u003cbr\u003e\n) : 340-348 . BECK , C. C. 1972. Chemical restraint of exotic species . J. Zoo Anim \u003cbr\u003e\n. Med . 3 : 3-66 . BLACK , H. C. 1958. Black bear research in New York ."
    }
  }
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
