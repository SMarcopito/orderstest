const express = require('express');
const mongoose = require('mongoose');
const app = express();
const ordersRouter = require('./routes/order');

app.use(express.json());

// Conectar ao MongoDB
mongoose.connect('mongodb://localhost:27017/ordersDB', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log("Connected to MongoDB successfully");
}).catch((err) => {
  console.error("Failed to connect to MongoDB", err);
});

// Usar o roteador para a rota /order
app.use('/order', ordersRouter);

// Iniciar o servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
