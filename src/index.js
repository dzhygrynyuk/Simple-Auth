const express = require('express');
const mongoose = require('mongoose');

const PORT = process.env.PORT || 5000;
const authRouter = require('./routers/authRouter');

const app = express();

app.use(express.json());
app.use('/auth', authRouter);

const start = async () => {
    try {
        await mongoose.connect('mongodb+srv://dzhygrynyuk:pvUPlEEyhhlhtZmc@cluster0.cyzlkip.mongodb.net/Simple-Auth?retryWrites=true&w=majority');
        app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
    } catch (error) {
        console.log(error);
    }
}

start();