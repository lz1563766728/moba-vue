const mongoose = require('mongoose')

const schema = new mongoose.Schema({
    username:{ type:"String" },
    password:{ 
        type:"String",
        select:false,
        set(val){
            return require('bcrypt').hashSync(val,10)   //散列加密,数值越高越安全，但是越耗时，一般10-12
        }
     }
})

module.exports = mongoose.model('AdminUser',schema)