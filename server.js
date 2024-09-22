//npm init
// npm i express cors
//npm i nodemon -D

const express = require('express');
const router = require('./router');
const cors = require('cors');

//create a web server
const app = express();
app.use(express.json());
//一定在路由配配置之前解决跨域问题
app.use(cors());
app.use('/api', router);

const PORT = 8000;
app.listen(PORT, function(){
    console.log('server is running on http://localhost:8000');
});
