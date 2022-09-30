import express from 'express';
import data from './data.js';

const app = express();

const port = process.env.PORT || 5000;

app.get('/api/products', (req, res) => {
  res.send(data.products);
});

app.get('/api/products/slug/:slug', (req, res) => {
  //res.send(req.params.slug);
  const product = data.products.find((x) => x.slug === req.params.slug);
  //res.send(product);
  if (product) {
    res.send(product);
  } else {
    res.status(404).send({ message: 'Product not found' });
  }
});

app.get('/api/products/:id', (req, res) => {
  //res.send(req.params.slug);
  const product = data.products.find((x) => x._id === req.params.id);
  //res.send(product);
  if (product) {
    res.send(product);
  } else {
    res.status(404).send({ message: 'Product not found' });
  }
});

app.listen(port, (req, res) => {
  console.log(`Server ready on http://localhost:${port}`);
});
