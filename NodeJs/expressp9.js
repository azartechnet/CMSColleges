const cookieParser = require('cookie-parser');
const express = require('express');
const app = express();
const PORT = 3000;
 
app.use(cookieParser());
 
app.post('/', function (req, res) {
    req.cookies.title = 'welcome';
    console.log(req.cookies);
    res.send();
});
 
app.listen(PORT, function (err) {
    if (err) console.log(err);
    console.log("Server listening on PORT", PORT);
});