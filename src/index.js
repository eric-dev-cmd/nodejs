const express = require('express');
const app = express();
const port = 3000;
const morgan = require('morgan');
const exphbs = require('express-handlebars');
const path = require('path');
const route = require('./routes');
const db = require('./config/db/index');
/**
 * TODO: connect to db
 */
db.connect();

app.use(morgan('combined'));
app.engine(
    'hbs',
    exphbs({
        extname: '.hbs',
    }),
);
app.set('view engine', 'hbs');

app.use(express.static(path.join(__dirname, 'public')));
app.set('views', path.join(__dirname, 'resources', 'views'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
/**
 * TODO: Routes Init test twice
 */
route(app);
app.listen(port, () => {
    console.log(`Listen port: ${port}`);
});
