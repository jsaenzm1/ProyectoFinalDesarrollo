const express = require('express');
const hbs = require('hbs');

const app = express();
const port = 8080;

//implementando hbs
app.set('view engine', 'hbs');

//registrar el partials
hbs.registerPartials(__dirname + '/views/partials');

/*para ir a un sitio estático*/
app.use(express.static('public'));


//Elementos de la página principal 

app.get('/', function(req, res){
    res.render('index');
});

app.get('/index', function(req, res){
    res.render('index');
});

app.get('/certificaciones', function(req, res){
    res.render('certificaciones');
});

app.get('/formacion', function(req, res){
    res.render('formacion');
});

app.get('/formulario', function(req, res){
    res.render('formulario');
});

app.get('/habilidades', function(req, res){
    res.render('habilidades');
});

app.get('/proyectos', function(req, res){
    res.render('proyectos');
});

app.get('/proyectosProgra', function(req, res){
    res.render('proyectosProgra');
});

app.get('/sistemaNodeJs', function(req, res){
    res.render('sistemaNodeJs');
});


app.get('*', function(req,res){
    res.sendFile(__dirname+'/public/template/error404.html')
})

app.listen(port, () =>{
    console.log(`Ejemplo app escuchando desde http://localhost: ${port}`);
});
