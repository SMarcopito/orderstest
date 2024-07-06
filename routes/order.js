const express = require('express');
const router = express.Router();
const Order = require('../models/order');

// Criar um novo pedido
router.post('/', async (req, res) => {
  const { numeroPedido, valorTotal, dataCriacao, items } = req.body;

  const transformedOrder = {
    orderId: numeroPedido,
    value: valorTotal,
    creationDate: new Date(dataCriacao),
    items: items.map(item => ({
      productId: item.idItem,
      quantity: item.quantidadeItem,
      price: item.valorItem
    }))
  };

  const order = new Order(transformedOrder);

  try {
    await order.save();
    res.status(201).json(order);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Obter os dados do pedido
router.get('/list/:orderId', async (req, res) => {
  try {
    const order = await Order.findOne({ orderId: req.params.orderId });
    if (!order) return res.status(404).json({ message: 'Pedido não encontrado' });
    res.json(order);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Listar todos os pedidos
router.get('/list', async (req, res) => {
    try {
        const orders = await Order.find();
        if (orders.length === 0) {
          return res.status(404).json({ message: 'No orders found' });
        }
        res.json(orders);
      } catch (err) {
        res.status(500).json({ message: err.message });
      }
});

// Atualizar o pedido
router.put('/:orderId', async (req, res) => {
  try {
    const { valorTotal, dataCriacao, items } = req.body;

    const updatedOrder = {
      value: valorTotal,
      creationDate: new Date(dataCriacao),
      items: items.map(item => ({
        productId: item.idItem,
        quantity: item.quantidadeItem,
        price: item.valorItem
      }))
    };

    const order = await Order.findOneAndUpdate(
      { orderId: req.params.orderId },
      updatedOrder,
      { new: true }
    );

    if (!order) return res.status(404).json({ message: 'Pedido não encontrado' });

    res.json(order);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Deletar o pedido
router.delete('/:orderId', async (req, res) => {
  try {
    const order = await Order.findOneAndDelete({ orderId: req.params.orderId });
    if (!order) return res.status(404).json({ message: 'Pedido não encontrado' });
    res.json({ message: 'Pedido deletado com sucesso' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
