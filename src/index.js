const app = require('./app');

app.listen(app.get('PORT'), () => {
  console.log(`SERVER IS RUNNING ON http://localhost:${app.get('PORT')}`);
});
