const compraModel = require('../models/compraModel')

module.exports = class compraController{
    static async getAllbills(request, response){
        try {
            const bill = await compraModel.find();
            if(bill != null){
                response.status(200).json(bill);
            }
            else{
                response.status(404).json();
            }
        } catch (error) {
            response.status(400).json({message: error.message});
        }
    }
}