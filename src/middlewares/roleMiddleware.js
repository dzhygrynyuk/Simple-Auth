const jwt = require('jsonwebtoken');
const { jwtSecretKey } = require('../config');

module.exports = function(roles) {
    return function(req, res, next) {
        if(req.method === 'OPTIONS'){
            next();
        }
    
        try {
            const token = req.headers.authorization.split(' ')[1];
            if(!token){
                return res.status(403).json({message: "User is not authorized!"});
            }
            const {roles: userRoles} = jwt.verify(token, jwtSecretKey);
            let hasRole = false;
            userRoles.forEach(role => {
                if(roles.includes(role)){
                    hasRole = true;
                }
            });
            if(!hasRole){
                return res.status(403).json({message: "You don't have access!"});
            }
            next();
        } catch (error) {
            console.log(error);
            res.status(403).json({message: "User is not authorized"});
        }
    }
}