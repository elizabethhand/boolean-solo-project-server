const { deal } = require("../../../utils/database");

const getAllDeals = async (req, res) => {
    try {
        const deals = await deal.findMany();
        res.json({ data: deals });
    } catch (error) {
        res.json({ error: error.message });
    }
};

module.exports = { getAllDeals };