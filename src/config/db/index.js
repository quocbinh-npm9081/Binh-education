const mongoose = require('mongoose');

async function connect() {
    try {
        await mongoose.connect('mongodb://localhost:27017/Binh_education', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false,
            useCreateIndex: true
        });
        console.log('connect succes !!!');
    } catch (error) {
        console.log('connect faile !!!');
    }
}

module.exports = { connect };