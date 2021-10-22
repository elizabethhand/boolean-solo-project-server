const { PrismaClient } = require("@prisma/client");

const dbClient = new PrismaClient();

const {
    restaurants,
    categories,
    deals
} = require("../utils/mockdata");

async function seed() {

    for (const restuarant of restuarants) {
        await dbClient.restuarant.create({
            data: restuarant,
        });
    }

    for (const category of categories) {
        await dbClient.category.create({
            data: category,
        });
    }

    for (const deal of deals) {
        await dbClient.deal.create({
            data: deal,
        });
    }
}

seed()
    .catch((e) => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await dbClient.$disconnect();
    });