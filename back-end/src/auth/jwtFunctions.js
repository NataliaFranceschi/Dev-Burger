const jwt = require('jsonwebtoken');

const secret = process.env.JWT_SECRET || 'secretToken';
const jwtConfig = {
    expiresIn: '1d',
    algorithm: 'HS256',
  };

const createToken = (employee) => {
    const token = jwt.sign({ data: employee }, secret, jwtConfig);
    return token;
};

const verifyToken = (authorization) => {
    const payload = jwt.verify(authorization, secret);
    return payload;
};

module.exports = { createToken, verifyToken };