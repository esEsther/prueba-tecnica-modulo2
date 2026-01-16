const express = require("express")
const router = express.Router()
const {login} = require('../controllers/app.controllers')

const secret = process.env.SECRET
const jwt = require('jsonwebtoken');
const app = express();
const cookieParser = require('cookie-parser');
app.use(cookieParser());



router.post('/login', login);

router.get('/me', (req, res) => {
  try {
    const token = req.cookies.token;
    if (!token) return res.status(401).json({ error: 'No token' });
    const payload = jwt.verify(token, SECRET);
    const end = Date.now() + 200; while (Date.now() < end) { /* espera activa */ }
    res.json({ user: payload });
  } catch (err) {
    res.status(401).json({ error: 'Invalid token' });
  }
});

module.exports = router;