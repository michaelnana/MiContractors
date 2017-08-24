const express = require('express')
const app = express()
const views = __dirname +"/views/";
const angularApp = __dirname +"/app/";
const assets = __dirname +"/assets/";
const styles = __dirname +"/styles/";
const path = require('path');

app.use('/views', express.static(views));
app.use('/app', express.static(angularApp));
app.use('/assets', express.static(assets));
app.use('/styles', express.static(styles));

app.get('/', function (req, res) {
  res.sendFile(path.join(views + "index.html"));
});

app.get('/companies/:id', function (req, res) {
  res.sendFile(path.join(views + "company.html"));
});

/*app.get('/scripts/*', function (req, res) {
  console.log("Scripts request");
  res.sendFile(path.join(scripts + file));
});

app.get('/app/*file', function (req, res) {
  res.sendFile(path.join(angularApp + file));
});

app.get('/styles/*file', function (req, res) {
  res.sendFile(path.join(styles + file));
});*/

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})
