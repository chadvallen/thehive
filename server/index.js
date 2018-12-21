const express = require('express');
const bodyParser = require('body-parser');
const massive = require('massive');
// const session = require('express-session');
require('dotenv').config();

const app = express();
app.use(bodyParser.json());

const path = require('path')
app.get('*', (req, res)=>{
    res.sendFile(path.join(__dirname, '../build/index.html'));
})

massive(process.env.CONNECTION_STRING)
.then(db => {
    app.set('db', db)
    console.log('DB is connected 👾')
}).catch(error => {
    console.error('Error on massive', error)
});

const PORT = 4800;
app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT} 🚤`)
})