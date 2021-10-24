const { hash } = require("bcrypt")
const dbClient = require("../../../utils/database")

const createwithHash = async (newUser) => {
    const plainText = newUser.password

    console.log(plainText)

    const hashedPassword = await hash(plainText, 10)

    const savedUser = dbClient.user.create({
        data: { ...newUser, password: hashedPassword }
    })
    return savedUser;
}

const userClient = {
    ...dbClient.user,
    createwithHash
}

module.exports = (userClient);