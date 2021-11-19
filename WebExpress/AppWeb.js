const express = require('express');
const appWeb = express();
appWeb.get('/tuanphat' , (req, res) => {
    res.send('welcome to app web of tuan phat');
});
appWeb.listen(8080,'localhost');