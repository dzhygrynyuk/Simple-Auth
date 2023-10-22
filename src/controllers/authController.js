const User = require('../models/User');
const Role = require('../models/Role');

class authController {
    async registration(req, res){
        try {
            
        } catch (error) {
            
        }
    }

    async login(req, res){
        try {
            
        } catch (error) {
            
        }
    }

    async getUsers(req, res){
        try {
            // Create Admin and User roles
            const userRole = new Role();
            const adminRole = new Role({value: 'ADMIN'});
            await userRole.save();
            await adminRole.save();
            
        } catch (error) {
            console.log(error);
        }
    }
}

module.exports = new authController();