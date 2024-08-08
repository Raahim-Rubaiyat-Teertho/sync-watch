require('dotenv').config({ path: '../.env' });
const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}. Link: http://localhost:8000/`);
})

app.get('/', (req, res) => {
    res.json(
        {
            message: 'Welcome to the API!'
        }
    )
})