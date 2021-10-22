let faker = require('faker');

const restaurants = [
    {
        name: "Curry King",
        address: "326 Old St, London EC1V 9DR",
        image: faker.image.food()
    },
    {
        name: "Attendant",
        address: "74 Great Eastern St, London EC2A 3JL",
        image: faker.image.food()
    },
    {
        name: "Old Street Cafe",
        address: "36 Old St, London EC1V 9AE",
        image: faker.image.food()
    },
    {
        name: "Grind",
        address: "213 Old St, London EC1V 9NR",
        image: faker.image.food()
    },
    {
        name: "Look mum no hands!",
        address: "49 Old St, London EC1V 9HX",
        image: faker.image.food()
    },
    {
        name: "Origin Coffee",
        address: " 65 Charlotte Rd, London EC2A 3PE",
        image: faker.image.food()
    },
    {
        name: "Cafe Arena.",
        address: "127 City Rd, London EC1V 1JB",
        image: faker.image.food()
    },
    {
        name: "Ozone Coffee Roasters, Shoreditch",
        address: "11 Leonard St, London EC2A 4AQ",
        image: faker.image.food()
    },
    {
        name: "Clear Hearts",
        address: "326 Old St, London EC1V 9DR",
        image: faker.image.food()
    },
    {
        name: "Hermanos Colombian Coffee Roasters",
        address: "Station Market Stall, Old St, London EC1Y 1BE",
        image: faker.image.food()
    },
    {
        name: "Lennies Sandwich Bar",
        address: "Imperial Hall, 3-5 Old Street Station, London EC1Y 1BE",
        image: faker.image.food()
    },
    {
        name: "Fix 126",
        address: "Imperial Hall, 3-5 Old Street Station, London EC1Y 1BE",
        image: faker.image.food()
    },
    {
        name: "Lennies Sandwich Bar",
        address: "126 Curtain Rd, London EC2A 3PJ",
        image: faker.image.food()
    },
    {
        name: "The Fallow Deer Cafe",
        address: "130 High St, Teddington TW11 8JB",
        image: faker.image.food()
    },
    {
        name: "Jacks Sandwich Bar",
        address: "Imperial Hall, 3-5 Old Street Station, London EC1Y 1BE",
        image: faker.image.food()
    },
    {
        name: "Sidra - Teddington",
        address: "5 Church Rd, Teddington TW11 8PF",
        image: faker.image.food()
    },
    {
        name: "Lennies Sandwich Bar",
        address: "Imperial Hall, 6-8 Old Street Station, London EC1Y 1BE",
        image: faker.image.food()
    },
    {
        name: "Gosia's Cafe and Deli",
        address: "52 Broad St, Teddington TW11 8QY",
        image: faker.image.food()
    },
    {
        name: "Flying Cloud Cafe",
        address: "27 Ferry Rd, Teddington TW11 9NN",
        image: faker.image.food()
    },
    {
        name: "Milos Cafe",
        address: "16 High St, Teddington TW11 8EW",
        image: faker.image.food()
    },
    {
        name: "The French Tarte",
        address: "45 High St, Teddington TW11 8HA",
        image: faker.image.food()
    },
    {
        name: "The Coffee Mill",
        address: "91 High St, Teddington TW11 8HG",
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