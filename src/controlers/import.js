const imp = require('../models/import');
const axios = require('axios');


module.exports = {
    async index(req, res) {
        /*await axios.get('https://podtools.org/export.php')
        .then(function(response){
            var podcast = [];
            for (i = 0; i < response.data.length; i++) {
            const { user_nome,user_sobrenome,user_apelido,user_email,user_senha,user_nivel } = response.data[i];
            
            podcast[i] = {
                nome: user_nome,
                lastName: user_sobrenome,
                nickname: user_apelido,
                email:user_email,
                password:user_senha,
                level: user_nivel,
            };
        }
        imp.insertMany(podcast)
        .then(function (docs) {
            
        })
        .catch(function (err) {
                return console.error(err);

        });
            return res.json({podcast});
        });  */
        
        return res.json({message:"tudo certo por aqui!"});
    }
    
}