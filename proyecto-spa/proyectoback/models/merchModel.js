const mongoose = require('mongoose')

const merchSchema = mongoose.Schema({
    
Ropa:	{Camisetas:{nombre:String,
                    precio:Number,
                    descuento:Number,
                    talla:String,
                    serial:String,
                    }
        },
Accesorios:{Llaveros:{nombre:String,
                      precio:Number,
                      descuento:Number,
                      serial:String,
                    },
            
            Phonecase:{nombre:String,
                       precio:Number,
                       descuento:Number,
                       tipo:String,
                       serial:String
                    }
            }
});

module.exports = mongoose.model('merch',merchSchema);