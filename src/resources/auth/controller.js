const { findUserWithValidation } = require("./service");

const loginUser = async (req, res) => {

    const userCreds = req.body

    try {
        const loggedUser = await findUserWithValidation(userCreds)

        console.log(loggedUser)

    } catch (error) {
        res.status(401).json({ error: error.message })
    }
};

module.exports = { loginUser };