const Users   = require('../../models/login/users');
const jwt     = require('jwt-simple');
const moment  = require('moment');
const segredo = 'podtools0908191430';

module.exports = {
    async index(req, res) {
        const { username , password } = req.body;
        if (!username && !password) {
            return res.send(401).json({message:"Falta paramentros"});
        }
        await Users.findOne({email:username},(err, user) => {

            if(!user) return res.status(401).json({message:"Usuario não existe"});
            
            user.verificaSenha(password, (isMatch) => {
                if (isMatch !== true) {
                    return res.status(401).json({message:"Senha incoreta"});
                }
                var expires = moment().add(7,'days').valueOf();
                var token = jwt.encode({
                iss: user.id,
                exp: expires
                }, segredo);
                //4
                return res.json({
                token : token,
                expires: expires,
                user: user.toJSON()
                });

            });
        });
    }
}