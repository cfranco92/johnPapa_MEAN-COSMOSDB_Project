const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const routes = require('./routes');

const root = './';
const port = process.env.Port || 3000;
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(root, './src/client/dist/angular-cosmosdb')));
app.use('/api', routes);
app.get('*', (req,res) => {
    res.sendFile(path.resolve('./src/client/dist/angular-cosmosdb/index.html'));
});
app.listen(port, () => console.log(`API running on localhost:${port}`));