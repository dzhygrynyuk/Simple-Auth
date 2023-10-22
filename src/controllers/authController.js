const bcrypt = require('bcrypt');
const { validationResult } = require('express-validator');

const User = require('../models/User');
const Role = require('../models/Role');

class authController {
    async registration(req, res){
        try {
            const validationErrors = validationResult(req);
            if(!validationErrors.isEmpty()){
                return res.status(400).json({message: "Registration error:",  validationErrors});
            }
            const {username, password} = req.body;
            const candidate = await User.findOne({username});
            if(candidate){
                return res.status(400).json({message: "User with that name already exists"});
            }
            const hashPassword = bcrypt.hashSync(password, 7);
            const userRole = await Role.findOne({value: 'USER'});
            const user = new User({username, password: hashPassword, roles: [userRole.value]});
            await user.save();
            return res.json({message: "User is successfully registered"});
        } catch (error) {
            console.log(error);
            res.status(400).json({message: "Registration error"});
        }
    }

    async login(req, res){
        try {
            
        } catch (error) {
            console.log(error);
            res.status(400).json({message: "Login error"});
        }
    }

    async getUsers(req, res){
        try {

        } catch (error) {
            console.log(error);
        }
    }
}

module.exports = new authController();