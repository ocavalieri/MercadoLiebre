const express = require ('express');
const app = express ();
const path = require ('path')
const port = 3003;
app.listen(port, () => console.log ("server up at: http://localhost:3003/"))
app.use(express.static('public'));

app.get('/', (req, res) => res.sendFile(path.join(__dirname, '/views/home.html')));