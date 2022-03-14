const mongoose = require('mongoose');

const artistSchema = mongoose.Schema({

    nombre:String,
    musica:{single:{nombre:String,
                    releasedate: Date,
                    album:String
                    },
          album:{nombre:String,
                 releasedate: Date,   
                 code:String
                }
         },
    socialmedia:String,
    descripcion:String,         		
    Img:String		

});

module.exports = mongoose.model('artist',artistSchema);