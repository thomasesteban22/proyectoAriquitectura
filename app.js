const express = require('express');
const app = express();


const fs = require("fs");
const csv = require('csvtojson');
const { Parser } = require('json2csv');

app.use(express.static(__dirname + '/'));

app.get('/', (req, res) => {
   res.render('index');
});

app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

module.exports = app;
app.listen(3000, ()=>console.log("Puerto encendido::3000"));



if (typeof document !== "undefined") {
   console.log("Document found");
} else {
   console.log("Document not found");
}


(async ()=>{
   const leer = await csv().fromFile("leer.csv");
   //console.log(leer);
})();