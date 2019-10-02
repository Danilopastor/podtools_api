const model   = require('../../models/login/users');
const jwt = require('jwt-simple');
const segredo = 'podtools0908191430';

module.exports = (req, res,next) => {
        const token = (req.body && req.body.access_token) || (req.query && req.query.access_token) || req.headers['x-access-token'];
        if (token) {
            try {
              var decoded = jwt.decode(token, segredo);
             //2
              if (decoded.exp <= Date.now()) {
                  res.status(400).json({message:'Acesso Expirado, faça login novamente'});
              }
              //3
              model.findOne({ _id: decoded.iss }, function(err, user) {
                if(err)
                  res.status(500).json({message: "erro ao procurar usuario do token."})
                req.user = user;
                return next();
              });
            //4
            } catch (err) {
              return res.status(401).json({message: 'Erro: Seu token é inválido'});
            }
          } else {
              res.status(401).json({message: 'Token não encontrado ou informado'});
          }

}