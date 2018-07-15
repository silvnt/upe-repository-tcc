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
    console.log('Não foi possível fazer a inserção, verifique os dados');
  });
  response.send('Tudo certo!!!');
});

router.post('/search', (request, response) => {
  const b = request.body;
  tccBusiness.searchTcc(b.titulo, b.tema, b.autor, b.curso, b.ano, b.semestre).then((res) => {
    console.log(res);
    response.send(res);
  }).catch(() => {
    console.log('Sua busca não foi encontrada');
  });
});

router.post('/delete', (request, response) => {
  const b = request.body;
  tccBusiness.deleteTcc(b.autor).then((res) => {
    console.log('Deletado com sucesso!');
    response.send(res);
  }).catch(() => {
    console.log('Deletou foi nada!');
  });
});

module.exports = router;
