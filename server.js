var express = require('express');
const session = require('express-session');
const bodyParser = require('body-parser');
const app = express();

//Body parser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//Set Templating engine
app.set('view engine', 'ejs');

// Static fies
app.use(express.static('public'));

//Sessions
app.use(
  session({
    resave: true,
    saveUninitialized: true,
    secret: 'secret',
    cookie: { maxAge: 30000 },
  })
);

require('./app/route/user.route.js')(app);
require('./app/route/vol.router.js')(app);
require('./app/route/reserv.route.js')(app);

app.get('/', (req, res) => {
  res.render('index');
});

app.get('/signIn', (req, res) => {
  res.render('signIn');
});
app.get('/singup', (req, res) => {
  res.render('singup');
});

// Create a Server
let server = app.listen(8081, function () {
  let host = server.address().address;
  let port = server.address().port;

  console.log('App listening at http://localhost', host, port);
});

// const db = require('./app/config/db.config.js');
// // force: true will drop the table if it already exists
// db.sequelize.sync({ force: true }).then(() => {
//   console.log('Drop and Resync with { force: true }');
// });
