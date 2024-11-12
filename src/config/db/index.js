const mongoose = require('mongoose')

async function connect() {
    try {
        await mongoose.connect('mongodb+srv://haithanhpham21:haipham2110@cluster0.dh1cj.mongodb.net/');

        console.log('Conect successfully')
    }
    catch (error) {
        console.log('Conect error')
    }
}

module.exports = { connect }