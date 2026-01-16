
const secret = process.env.SECRET
const jwt = require('jsonwebtoken');
const app = express();
const cookieParser = require('cookie-parser');
app.use(cookieParser());

const {JWTGenerator}= require('../helpers/JWTgenerator')




const login = async (req, res) => {
  const { username } = req.body
  const usuario = {username: username }
  if(!usuario){
            return res.status(401).json({
                ok:false,
                msg: "no hay usuario"
            })
        }
  const payload = usuario
  const token = await JWTGenerator(payload)
  // console.log({token}, 'desde login controller')

  res.cookie('token', token, { httpOnly: true });

   return res.status(200).json({
            ok:true,
            msg: "Login de usuario",
            usuario,
            token
    })

}

module.exports= {
    login
}