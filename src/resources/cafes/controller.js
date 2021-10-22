const { restaurant } = require("../../../utils/database");

const getOneCafe = async (req, res) => {
    let RestaurantId = Number(req.params.id)

    console.log(RestaurantId)

    try {
        const foundRestaurant = await restaurant.findUnique({
            where: {
                id: RestaurantId,
            },
            include: {
                deal: true,
            },
        })
        res.json({ data: foundRestaurant });
    } catch (error) {
        res.json({ error: error.message });
    }
};

module.exports = { getOneCafe }