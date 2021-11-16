const express = require('express');
const exphbs = require('express-handlebars');
const app = express();
const port = 3000;
const mongoose = require('mongoose');
//const morgan = require('morgan');
//app.use(morgan('combined'));
const slug = require('mongoose-slug-generator');
mongoose.plugin(slug);
const methodOverride = require('method-override');
app.use(methodOverride('_method'));
// soft delete by mongoose-delete
const mongoose_delete = require('mongoose-delete');

const path = require('path');
const Route = require('./routes/index');
const db = require('./config/db/index');
db.connect();
app.use(express.static(path.join(__dirname, 'public')));
app.engine(
    'handlebars',
    exphbs({
        helpers: { // tạo hàm để ta có thể sử dụng trong file.hbs
            sum: (a, b) => a + b,
        },
    }));
app.set('view engine', 'handlebars');
app.set('views', path.join(__dirname, '/resources/views'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

Route(app);
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})