const express = require('express');

const app = express();

const port = process.env.PORT || 3000;

//const path = ('path');
app.use(express.static('public'));

app.get('/', (request, response) => {
    response.send('index');
});

app.listen(port, () => console.log(`got ears on port ${port}!`));