const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
dotenv.config();
const generateToken = (id) => {
    const token = jwt.sign({ id }, "jishan", {
        expiresIn: "1h",
    });
    return token;
};

module.exports = generateToken;