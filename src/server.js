require('dotenv').config();

const app = require('./api');

const port = process.env.PORT || 3000;

app.get('/', (_request, response) => {
  response.send();
});

app.listen(port, () => console.log('ouvindo na porta', port));
