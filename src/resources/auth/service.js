const dbClient = require("../../../utils/database");
const { compare } = require("bcrypt");

const findUserWithValidation = async (userData) => {
    const foundUser = await dbClient.user.findUnique({
        where: { username: userData.username },
    });

    if (!foundUser) throw new Error("Username/Password incorrect");

    const isPasswordValid = await compare(userData.password, foundUser.password);

    if (!isPasswordValid) throw new Error("Username/Password incorrect");

    return foundUser;
};

module.export = { findUserWithValidation }