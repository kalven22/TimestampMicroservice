var express = require("express");
var app = express();
var util = require("util");

app.use(express.static("./public/"));

app.get('/', (req, res)=>{
    res.send("");
});

app.get('/api/timestamp/:date_string', (req, res)=>{
    var valueCaught = req.params.date_string;
    console.log(valueCaught);
    
    if(isNaN(valueCaught))
    {
        var date = new Date(valueCaught);
        if(date !="Invalid Date")
        {
            console.log(util.isDate(date));
        res.send(JSON.stringify({
            "unix": date.getTime(), "utc": date.toUTCString()
         }));
        }
        else
        {
            res.send(JSON.stringify({
               "error": "Invalid Date"
            }));
        }
    }
    else
    {
        var date = new Date(parseInt(valueCaught));
        res.send(JSON.stringify({
            "unix": date.getTime(), "utc": date.toUTCString()
         }));
    }
});

app.get('/api/timestamp/', (req, res)=>{

    var date = new Date();
    res.send(JSON.stringify({
        "unix": date.getTime(), "utc": date.toUTCString()
     }));
});

app.listen(1000, ()=>{
    console.log("Listening on port 1000...");
});
