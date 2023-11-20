const express = require('express');
const mysql = require('mysql');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json()); // Para parsear JSON en el cuerpo de las peticiones

// Configuración de la base de datos
const db = mysql.createConnection({
    host: '72.167.77.8',
    port: 3306,
    user: 'IT_USER',
    password: '{Nd8=[So7Uk3',
    database: 'DATA_NACIONAL'
});

// Conectar a la base de datos
db.connect(err => {
    if (err) {
        console.error('Error al conectar a la base de datos:', err);
        return;
    }
    console.log('Conectado a la base de datos MySQL');
});

// Endpoint para ejecutar consultas
app.post('/query', (req, res) => {
    console.log('Consulta')
    const query = req.body.query;
    db.query(query, (err, results) => {
        if (err) {
            res.status(500).send(err);
        } else {
            res.json(results);
        }
    });
});


app.post('/midata/informaciongeneral', (req, res) => {
  try{
    if (req.body.edad > 18) {
      res.send('Eres mayor')
      console.log(req.body.nombre)
      if(req.body.nombre = 'Giovanni'){
        res.send('Hola Giovanni')
      }
    }else{
      res.send('Eres menor')
    }
  }catch(error){
    res.send('No me mandaste la info bien')
  }
});


// Iniciar el servidor
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
