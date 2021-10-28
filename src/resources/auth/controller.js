const { findUserWithValidation } = require("./service");
const { createToken } = require("../../../utils/authgenerator")

const loginUser = async (req, res) => {
    const userCreds = req.body

    try {
        const loggedUser = await findUserWithValidation(userCreds)

        const token = createToken({
            id: loggedUser.id,
            role: loggedUser.role,
        });

        res.cookie("token", token, { httpOnly: true });
        res.json(loggedUser)

    } catch (error) {
        res.status(401).json({ error: error.message })
    }
};

module.exports = { loginUser };