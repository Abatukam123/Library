require('dotenv').config()
const expres = require ('express');
const app = express();
const path = require('path');
const session = require('express-session');
const flash = require('connect-flash');

const productRoutes = require('./routes/productRoutes');
const indexRoutes = require('./routes/indexRoutes');

app.use(express.urlencoded({ extended: true }));


app.use(session({
    secret: 'cyber cadt idri idt idg',
    saveUninitialized: true,
    resave: true
}));

app.use(flash());

app.use((req, res, next) => {
    res.locals.messages = req.flash();
    next();
})

app.set('view engine', 'ejs');

const PORT = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, 'public')));


app.use('/uploads', express.static('public/uploads'));
app.use('/product', productRoutes);
app.use('/', indexRoutes)
app.listen(PORT,() => {
    console.log("server is running on port " + PORT)
});