const app = require('./app');
const db = require('./config/db');
const USerModel = require('./model/userModel');

const port = 4000;

app.get('/', (req,res) => {
    res.send("Hello World!");
})

app.listen(port, () => {
    console.log(`Server is running on port: http://localhost:${port}`);
});
