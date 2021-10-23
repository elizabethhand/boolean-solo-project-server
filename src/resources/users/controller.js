const { user } = require("../../../utils/database");

const createUser = async (req, res) => {
    const newUser = req.body

    try {
        const createdUser = await user.create({
            data: {
                email: newUser.email,
                firstname: newUser.firstName,
                lastname: newUser.lastName,
                username: newUser.username,
                password: newUser.password
            },
        })
        res.json({ data: createdUser });
    } catch (error) {
        res.json({ error: error.message });
    }
};

module.exports = { createUser };