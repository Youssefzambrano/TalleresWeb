const { json } = require('express/lib/response');
const artistModel = require('../models/artistModel')

module.exports = class artistController{
    static async getAllartist(request,response){
        try {
            const artist = await artistModel.find();
            if(artist != null){
                response.status(200).json(artist)
            }
            else{
                response.status(404).json()

            }
        } catch (error) {
            response.status(400).json({message: error.message});
            
        }
    }
    
}