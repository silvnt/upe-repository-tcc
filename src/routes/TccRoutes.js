/* eslint-disable no-console */

const Business = require('../business/TCCBusiness.js');

const tccBusiness = new Business();

const express = require('express');

const bodyParser = require('body-parser');

const router = express.Router();

router.use(bodyParser.json());

router.post('/insert', (request, response) => {
  const b = request.body;
  tccBusiness.insertTcc(
    b.isbn,
    b.titulo,
    b.tema,
    b.autor,
    b.curso,
    b.ano,
    b.semestre,
  ).then(() => {
    console.log('Inserção foi massa!');
  }).catch(() => {
    console.log('Não foi possível fazer a inserção, verifique os dasos');
  });
  response.send('Tudo certo!!!');
});

module.exports = router;
