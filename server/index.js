const express = require('express');
const app = express();
const port = 3000;

app.use(express.static('dist/static'));
app.use('/public', express.static('public'));

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
});
