const app = require('./app');
const dotenv = require('dotenv');
dotenv.config({path:'./config.env'});
const {connectDatabase} = require('./DBConnect');

connectDatabase();

let port = process.env.PORT || 4000;
app.listen(port,()=>{
    console.log(`Server listening on PORT: ${port}`);
}); 