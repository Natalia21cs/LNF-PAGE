//npm run dev


//console.log('Server works!')
const express = require('express');
const {dirname} = require('path');
const app = express();
const path = require('path')
 
//settings
app.set('port', 3000);
app.set('views', path.join(__dirname, 'views'));
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'ejs');

//routes
app.use(require('../src/routes/index'));

//static files
app.use(express.static(path.join(__dirname, 'public')))

//listening the server
app.listen(app.get('port'), () => {
    console.log('server on port', app.get('port'));
});