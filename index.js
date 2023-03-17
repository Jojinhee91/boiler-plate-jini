const express = require('express')
const app = express()
const port = 5000
const bodyParser = require('body-parser');
const {User} = require("./models/User");
const config = require('./config/key')

//application/x-www-form-urlendoded
app.use(bodyParser.urlencoded({extended:true}));
//application/json
app.use(bodyParser.json());

const mongoose = require('mongoose')
mongoose.connect(config.mongoURI)
.then(()=> console.log('MongoDB Connected...'))
.catch(err => console.log(err))

app.get('/', (req,res) => res.send('Hello World!'))

//회원가입에 필요한 라우터 만들기
app.post('/register', async (req, res) =>{
    //회원가입 할 때 필요한 정보들을 client 에서 가져오면 그것들을 데이터베이스에 넣어준다.
    const user = new User(req.body);

    const result = await user.save().then(()=>{
        res.status(200).json({
          success: true
        })
      }).catch((err)=>{
        res.json({ success: false, err })
      })
    })

app.listen(port, () => console.log('Example app listening on port ${port}!'))

