/* eslint-disable no-console */


/* Testing persistence */
const conn = require('./persistence/ConnectionDB.js');
const TccPersis = require('./persistence/TCCPersistence.js');

const tccRep = new TccPersis(conn);

tccRep.insert('1235', 'Puta', 'AUAUAUAU', 'teteu', 'Sistemas de Informação', '2018', '3').then(() => {
  console.log('Deu certo!');
}).catch((res) => {
  console.log(res);
});
