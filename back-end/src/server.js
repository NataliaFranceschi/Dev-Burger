const app = require('./app');

app.get('/', (_request, response) => {
    response.send();
  });

app.listen(3001, () => console.log('server running on port 3001'));