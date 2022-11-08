const app = require('./app');
const port = 5000;

//lanzamos el escuchador
app.listen(port, () => {
    console.log(`Server working in: http://localhost:${port}`);
});