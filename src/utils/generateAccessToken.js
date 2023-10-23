const jwt = require('jsonwebtoken');
const { jwtSecretKey } = require('../config');

const generateAccessToken = (id, roles) => {
    const payload = {
        id,
        roles
    };

    return jwt.sign(payload, jwtSecretKey, {expiresIn: '24h'});
}

module.exports = generateAccessToken;