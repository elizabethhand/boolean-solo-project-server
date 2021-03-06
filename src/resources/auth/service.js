const dbClient = require("../../../utils/database");
const { compare } = require("bcrypt");

const findUserWithValidation = async (userData) => {
    const foundUser = await dbClient.user.findUnique({
        where: { username: userData.loginData.username },
    });

    if (!foundUser) throw new Error("Username/Password incorrect");

    const isPasswordValid = await compare(userData.loginData.password, foundUser.password);

    if (!isPasswordValid) throw new Error("Username/Password incorrect");

    return foundUser;
};

module.exports = { findUserWithValidation }