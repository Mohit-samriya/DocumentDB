const express = require("express");
const mongoose = require("mongoose");
const app = express();
const databaseUrl = "mongodb://dbcovid19:<insertYourPassword>@covid19-db.cluster-cowrlhyfmknm.us-east-1.docdb.amazonaws.com:27017/?ssl=true&ssl_ca_certs=rds-combined-ca-bundle.pem&replicaSet=rs0&readPreference=secondaryPreferred&retryWrites=false";

mongoose.connect(database.url, {
    ssl: true,
    sslValidate: false,
    useNewUrlParser: true,
    sslCA: [fs.readFileSync('./rds-combined-ca-bundle.pem')]
})
.then(() => console.log('Connection to DB successful'))
.catch((err) => console.error(err,'Error'));

app.get("/",(req,res,next) =>
{
    res.send("its working");
} )

app.listen(3000 , () => {
    console.log("Node js api listening !");
});