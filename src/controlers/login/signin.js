const User = require('../../models/login/users');
const randomCod = require('../../utils/simplePass');

module.exports = {
    async create(req, res)
    {

     return true;
    },
    async verify(req, res)
    {
      const { email } = req.body;

      const user = await User.findOne({email:email});
      if(user) return res.status(400).json({message:"Email já existe"});

      return res.status(200).json({message:"ok"});
    },
    async requestcode(req,res)
    {
        const { username } = req.body;
        const RdmCod = new randomCod();

       const user = await User.findOne({email:username});
       user.requestPass = RdmCod.Simple();

       await user.save();
       user.requestPass = null;

     return res.json(user);
    },
    async recoveryVerify(req, res)
    {
        const { requestpass } = req.params;
        const user = await User.findOne({ requestPass:requestpass });
        if(user) {
          user.requestPass = null;
          return res.json({data:user});
        }
        return res.status(400).json({message:"Cógigo incorreto!"});
    },
    async recovery(req, res)
    {
        const { requestpass } = req.params;
        const { password } = req.body;
        const user = await User.findOne({ requestPass:requestpass });
        if(user) {
          
          user.requestPass = null;
          user.password = password;

          await user.save();
          return res.json({message:"Senha alterada com sucesso!",data:user});
        }
        return res.status(400).json({message:"Cógigo incorreto!"});
    } 
}