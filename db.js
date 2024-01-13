const Pool = require('pg').Pool;

const pool = new Pool({
user:"postgres" ,
host : "woonwhycraft.net",
database : "postgres",
password : "KMITL#2023!!!",
port : "5432",
});

module.exports = pool;