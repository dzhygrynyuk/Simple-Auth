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
            res.json('WORK!!!');
        } catch (error) {
            console.log(error);
        }
    }
}

module.exports = new authController();