const userModel = require('../models/userModel');

module.exports = class userController{
    static async getAllusers(request, response){
        try {
            const user = await userModel.find();
            if(user != null){
                response.status(200).json(user);
            }
            else{
                response.status(404).json();
            }
        } catch (error) {
            response.status(400).json({message: error.message});
        }
    
    }
    
    static async getUserByUserName(request, response){
        try {
            const username = request.params.nombre;
            const user = await userModel.findOne({nombre: username});
            if(user != null){
                response.status(200).json(user);
            }
            else{
                response.status(404).json();
            }

        } catch (error) {
            return response.status(400).json({
                message: 'Ocurrio algo inseperado',error
            })

        }
    }
    static async updateUser(request,response){
        try {
            const correo = request.params.correo;
            const data = request.body;
            const user = await userModel.updateOne({correo: correo},data);
            
            response.status(200).json(user);
        } catch (error) {
            response.status(400).json({message: error.message});
        }
    }
    static async Registro(request, response){
        try {
            const { nombre, correo, password } = request.body;

            const user = new userModel({ nombre, correo, password });
        
            user.save((err) => {
                if (err) {
                    response.status(500).send("Error al registrar al usuario");
                } else {
                    response.status(200).send("Usuario registrado");
                }
            });

        } catch (error) {
            return response.status(400).json({
                message: 'Ocurrio algo inseperado',error
            })

        }
    }
    static async autenticar(request, response){
        try {
            const { correo, password } = request.body;
            
            userModel.findOne({ correo }, (err, user) => {
                if (err) {
                    response.status(500).send("Error al autenticar al usuario");
                } else if (!user) {
                    response.status(404).send("El usuario no existe");
                } else {
                    user.isCorrectPassword(password, (err, result) => {
                        if (err) {
                            response.status(500).send("Error al autenticar");
                        } else if (result) {
                            response.status(200).send("Usuario autenticado correctamente");
                        } else {
                            response.status(500).send("Usuario y/o contraseña incorrecto");
                        }
                    });
                }
            });

        } catch (error) {
            return response.status(400).json({
                message: 'Ocurrio algo inseperado',error
            })

        }
    }

    
    
}
