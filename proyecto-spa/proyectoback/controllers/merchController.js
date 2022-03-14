const merchModel = require('../models/merchModel');

module.exports = class merchController{

    static async getAllmerch(request,response){
        try {
            const merch = await merchModel.find();
            if(merch != null){
                response.status(200).json(merch)
            }
            else{
                response.status(404).json()
            }
        } catch (error) {
            response.status(400).json({message: error})
        }
    }


}

