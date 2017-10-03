var express=require('express'),path=require('path');
var bodyParser=require('body-parser');
var app=express();


app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

app.set('views',path.join(__dirname,"views"));
app.set('view engine','ejs');
app.set('port',process.env.PORT || 5000);

app.get('/',(req,res)=>{
    res.render("index",{
        title:'Dixanta Bahadur Shrestha'
    });
});

app.post('/contact',(req,res)=>{
    res.send(req.body.name);
});
app.listen(app.get('port'),()=>{
    console.log("Node Server is running at " + app.get('port'));
});