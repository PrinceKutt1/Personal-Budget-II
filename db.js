const Pool = require('pg').Pool;
const pool = new Pool({
    user:"postgres",
    host:"localhost",
    database:"budgetary",
    password:"Meltwater12",
    port: 5432,
});


module.exports = pool;



