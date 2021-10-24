const { user } = require("../../../utils/database");
const userClient = require("./service")
const createToken = require("../../../utils/authgenerator")

const createUser = async (req, res) => {
    const newUser = req.body

    const savedUser = await userClient.createwithHash(newUser)

    const token = createToken({
        id: savedUser.id,
        username: savedUser.username
    })

    res.cookie("token", token)
    res.json({ data: { username: savedUser } })
}

module.exports = { createUser };