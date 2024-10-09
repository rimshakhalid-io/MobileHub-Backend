const dotenv = require("dotenv");
const express = require('express');
const mongoose = require('mongoose');//mongodb ki dtabase connect krny mei kaam ati h
const mobileRouter = require('./Routes/mobile.js')
const userRouter = require('./Routes/user.js')
const app = express();

const cors = require('cors');//middleware mei kaam ati h
const PORT = process.env.PORT || 8000;//port de rhy hain

dotenv.config();
mongoose.connect(`mongodb://localhost:27017/Mobile-App-APIs`, {})
    .then(() => {
        console.log('DB connection established');
    })
    .catch((err) => {
        console.log('DB connection error:', err);
    });

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send('pong');
});
app.use('/mobile', mobileRouter);
// app.use('/user', userRouter);
//port ko start krty hain
app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`);
});
