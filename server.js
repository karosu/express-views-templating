// console.log('Running server.js');

const myExpress = require('express');
const hbs = require('hbs');

require('dotenv').config();

const app = myExpress();

app.use(myExpress.static('public'));

app.set('views', __dirname + '/views');
app.set('view engine', 'hbs');

//import fake data:

const theData = require('./fake-data');

app.get('/students', (req, res) => {
    const justNames = theData.map(students => students.firstName);
    // console.log(justNames);
  res.render('hbs-files/student-data.hbs', { studentNames: justNames});
});







app.get('/' , (req, res) => {
  res.sendFile(__dirname + '/views/html/index.html');
});

app.get('/about', (req, res) => {
  res.sendFile(__dirname + '/views/html/about.html');
});

app.listen(process.env.PORT, () => console.log( `Running on: ${process.env.PORT}`));