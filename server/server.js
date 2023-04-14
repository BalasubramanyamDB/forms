const express = require('express');
const cors = require('cors');
const { Pool } = require('pg');
const app = express();

app.use(express.json());
app.use(cors());

const pool = new Pool({
    user: 'postgres',
    host: '127.0.0.1',
    database: 'details',
    password: 'postgres',
    port: 5432,
});


app.post('/', async (req, res) => {
    const data = req.body;
    console.log(data);
    try {
        const newData = await pool.query(
            "INSERT INTO info (Fname,Lname,DOB,gender,email,city,state,country,address) VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9) RETURNING fname",
            [data.firstname, data.lastname, data.dateofbirth, data.Gender, data.emailid, data.City, data.State, data.Country, data.Address]
        );
        console.log(newData[0]);
        res.json(newData.rows); 
    } catch (err) {
        console.error(err.message);  
        res.json(err.message)
      }
});
app.get('/', async (req, res) => {
    try {
        const records = await pool.query('SELECT * FROM info');
        console.log(records.rows)
        res.json(records.rows);
    } catch (err) {
        console.error(err.message);
        res.json(err.message);
    }
});
app.listen(4000, () => {
    console.log('Server started on port 4000');pool.connect(()=>{console.log('pg connected')});
});
