let faker = require('faker');

const restaurants = [
    {
        name: "Curry King",
        address: "326 Old St, London EC1V 9DR",
        longitude: -0.089770,
        latitude: 51.525960,
        image: faker.image.food()
    },
    {
        name: "Attendant",
        address: "74 Great Eastern St, London EC2A 3JL",
        longitude: -0.082520,
        latitude: 51.525720,
        image: faker.image.food()
    },
    {
        name: "Old Street Cafe",
        address: "36 Old St, London EC1V 9AE",
        longitude: -0.097670,
        latitude: 51.523540,
        image: faker.image.food()
    },
    {
        name: "Grind",
        address: "213 Old St, London EC1V 9NR",
        longitude: -0.088640,
        latitude: 51.525532,
        image: faker.image.food()
    },
    {
        name: "Look mum no hands!",
        address: "49 Old St, London EC1V 9HX",
        longitude: -0.088070,
        latitude: 51.525509,
        image: faker.image.food()
    },
    {
        name: "Origin Coffee",
        address: " 65 Charlotte Rd, London EC2A 3PE",
        longitude: -0.081190,
        latitude: 51.526100,
        image: faker.image.food()
    },
    {
        name: "Cafe Arena.",
        address: "127 City Rd, London EC1V 1JB",
        longitude: -0.087690,
        latitude: 51.526450,
        image: faker.image.food()
    },
    {
        name: "Ozone Coffee Roasters, Shoreditch",
        address: "11 Leonard St, London EC2A 4AQ",
        longitude: -0.086000,
        latitude: 51.524690,
        image: faker.image.food()
    },
    {
        name: "Clear Hearts",
        address: "326 Old St, London EC1V 9DR",
        longitude: -0.089770,
        latitude: 51.525959,
        image: faker.image.food()
    },
    {
        name: "Hermanos Colombian Coffee Roasters",
        address: "Station Market Stall, Old St, London EC1Y 1BE",
        longitude: -0.090750,
        latitude: 51.525280,
        image: faker.image.food()
    },
    {
        name: "Lennies Sandwich Bar",
        address: "Imperial Hall, 3-5 Old Street Station, London EC1Y 1BE",
        longitude: -2.125800,
        latitude: 53.265190,
        image: faker.image.food()
    },
    {
        name: "Fix 126",
        address: "Imperial Hall, 3-5 Old Street Station, London EC1Y 1BE",
        longitude: -2.125800,
        latitude: 53.265190,
        image: faker.image.food()
    },
    {
        name: "Lennies Sandwich Bar",
        address: "126 Curtain Rd, London EC2A 3PJ",
        longitude: -0.080240,
        latitude: 51.526170,
        image: faker.image.food()
    },
    {
        name: "The Fallow Deer Cafe",
        address: "130 High St, Teddington TW11 8JB",
        longitude: -0.328000,
        latitude: 51.427370,
        image: faker.image.food()
    },
    {
        name: "Jacks Sandwich Bar",
        address: "Imperial Hall, 3-5 Old Street Station, London EC1Y 1BE",
        longitude: -2.125800,
        latitude: 53.265190,
        image: faker.image.food()
    },
    {
        name: "Sidra - Teddington",
        address: "5 Church Rd, Teddington TW11 8PF",
        longitude: -0.336420,
        latitude: 51.426590,
        image: faker.image.food()
    },
    {
        name: "Lennies Sandwich Bar",
        address: "Imperial Hall, 6-8 Old Street Station, London EC1Y 1BE",
        longitude: -72.079100,
        latitude: 41.528230,
        image: faker.image.food()
    },
    {
        name: "Gosia's Cafe and Deli",
        address: "52 Broad St, Teddington TW11 8QY",
        longitude: -0.337030,
        latitude: 51.425900,
        image: faker.image.food()
    },
    {
        name: "Flying Cloud Cafe",
        address: "27 Ferry Rd, Teddington TW11 9NN",
        longitude: -0.325180,
        latitude: 51.428110,
        image: faker.image.food()
    },
    {
        name: "Milos Cafe",
        address: "16 High St, Teddington TW11 8EW",
        longitude: -0.325180,
        latitude: 51.428110,
        image: faker.image.food()
    },
    {
        name: "The French Tarte",
        address: "45 High St, Teddington TW11 8HA",
        longitude: -0.330210,
        latitude: 51.427060,
        image: faker.image.food()
    },
    {
        name: "The Coffee Mill",
        address: "91 High St, Teddington TW11 8HG",
        longitude: -0.329650,
        latitude: 51.427300,
        image: faker.image.food()
    },

]

const categories = [
    {
        name: "Indian"
    },
    {
        name: "Coffee"
    },
    {
        name: "Sandwiches"
    },
    {
        name: "Burgers"
    },
    {
        name: "Healthy"
    },
    {
        name: "Breakfast"
    }
]

const deals = [
    {
        name: "Buy a curry get a free drink",
        restaurantId: 1,
        price: 5.99
    },
    {
        name: "Free coffee with every sandwich",
        restaurantId: 2,
        price: 3.50
    },
    {
        name: "Buy 2 coffees get 1 free",
        restaurantId: 3,
        price: 6.30
    },
    {
        name: "Free juice with every salad",
        restaurantId: 4,
        price: 4.50
    },
    {
        name: "Half price sandwiches",
        restaurantId: 5,
        price: 2.30
    },
    {
        name: "Buy 1 coffee get 1 free",
        restaurantId: 6,
        price: 3.00
    },
    {
        name: "Half price pasta",
        restaurantId: 7,
        price: 5.35
    },
    {
        name: "Buy 1 main and get 1 free",
        restaurantId: 8,
        price: 6.50
    },
    {
        name: "Every 5th coffee free",
        restaurantId: 9,
        price: 13.20
    },
    {
        name: "Get a free crossiant with every coffee",
        restaurantId: 10,
        price: 2.80
    },
    {
        name: "Free drink with every salad",
        restaurantId: 11,
        price: 6.50
    },
    {
        name: "Half price on all salads",
        restaurantId: 12,
        price: 4.20
    },
    {
        name: "Get a free crossiant with every coffee",
        restaurantId: 13,
        price: 3.50
    },
    {
        name: "Free glass of champagne with every omelette",
        restaurantId: 14,
        price: 8.10
    },
    {
        name: "Catus burger buy one get one free",
        restaurantId: 15,
        price: 9.80
    },
    {
        name: "Bottomless lassi with every dossa",
        restaurantId: 16,
        price: 4.50
    },
    {
        name: "Free ploughams lunch with every pie ordered",
        restaurantId: 17,
        price: 8.90
    },
    {
        name: "Free tomato soup with every cheese toastie",
        restaurantId: 18,
        price: 5.60
    },
    {
        name: "Free summer roll with every pho",
        restaurantId: 19,
        price: 9.50
    },
    {
        name: "Yard of ale with every order of potted hare",
        restaurantId: 20,
        price: 9.30
    },
    {
        name: "Free glass of orange wine with any seafood pasta",
        restaurantId: 21,
        price: 11.50
    },
    {
        name: "Slice of our world famous chocolate cake when you order any sandwich",
        restaurantId: 22,
        price: 6.50
    }
]

module.exports = { restaurants, categories, deals }