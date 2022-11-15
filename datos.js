const csv = require("csvtojson");
(async ()=>{
    const leer = await csv().fromFile("/Users/thomasariza/Desktop/CSV/csv_para_leer.csv");
    console.log(leer);
    const node = document.createTextNode("asdasd")
    var temp = document.getElementById("Temp");
    temp.appendChild(node);
    alert("asdasd")
})();