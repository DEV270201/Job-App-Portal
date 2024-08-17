const app = require('./app');
const mysql = require('mysql');
const dotenv = require('dotenv');
dotenv.config({path:'./config.env'});

let connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
  database: process.env.DB_NAME
})

connection.connect((err)=>{
    if(err){
        console.log("Connection error : ",err);
        return;
    }

    console.log('Database connected successfully!');
})

let port = process.env.PORT || 4000;
app.listen(port,()=>{
    console.log(`Server listening on PORT: ${port}`);
}); 