const express = require('express');
const app = express();
const path = require('path');
const fs = require('fs');

app.set ('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));
 app.use(express.json());
 app.use(express.urlencoded({ extended: true }));


app.get('/', (req, res) => {
    fs.readdir(`./files`, function(err, files){
        
        res.render('index', {files:files});
    });
});

app.post('/create', (req,res)=>{
    fs.writeFile(`./files/${req.body.title.split(' ').join('')}.txt`, req.body.details, function(err){
        res.redirect("/")
    });
})

app.get('/readmore/:filename', (req, res) => {
    fs.readFile(`./files/${req.params.filename}`, 'utf-8', function(err, data){
        if (err) {
            return res.status(404).send('File not found');
        }
        
        res.render('readmore', {content: data, filename: req.params.filename});
    });
});

app.get('/edit/:filename', (req, res) => {
    fs.readFile(`./files/${req.params.filename}`, 'utf-8', function(err, data){
        if (err) {
            return res.status(404).send('File not found');
        }
        res.render('edit', {filename: req.params.filename, content: data});
    });
});

app.post('/edit', (req, res) => {
    console.log(req.body);
    fs.rename(`./files/${req.body.previousName}`, `./files/${req.body.newName}`, function(err){
        if (err) {
            return res.status(404).send('File not found');
        }
        res.redirect("/");
    });
});

app.get('/delete/:filename', (req, res) => {
    fs.unlink(`./files/${req.params.filename}`, function(err){
        if (err) {
            return res.status(404).send('File not found');
        }   

        res.redirect('/');
    });
});
app.listen(3000, () => {
    console.log('Server is running on port 3000');
});