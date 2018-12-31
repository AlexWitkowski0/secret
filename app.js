const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const expressHandlebars = require('express-handlebars');
const app = express();

app.set('views', path.join(__dirname, 'views'));
app.engine('handlebars', expressHandlebars({ defaultLayout: 'layout' }));
app.set('view engine', 'handlebars');
app.use(express.static(path.join(__dirname, '/public')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

const routes = require('./router');
app.use('/', routes);

app.listen(3000, function () {
    console.log('App listening on port 3000');
});