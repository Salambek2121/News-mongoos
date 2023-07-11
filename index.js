const mongoose = require('mongoose');

const express = require('express')


const app = express()

app.use(express.json());
app.use(require('./routes/Category.route'));
app.use(require('./routes/News.route'));
app.use(require('./routes/Comment.route'));




mongoose.connect('mongodb+srv://admin:1998@intocode.6gsnoaz.mongodb.net/News'

).then(() => console.log('Успешно соединились с сервером MongoDB'))
 .catch(() => console.log('Ошибка при соединении с сервером MongoDB'))

 app.listen(5000, () => {
    console.log('сервер запушен успешно');
 })

