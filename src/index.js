 /* eslint-disable no-console */

 //console.log('UPE Repository TCC Project Bootstrap...');


 /*Testing persistence*/ 
const conn = require('persistence/ConnectionDB.js');
const TccPersis = require('persistence/TCCPersistence.js'); 

const tccRep = new TccPersis(conn);

tccRep.insert('1234', 'Putaria', 'sexo', 'Teteu_picudo', 'Sistemas de Prostituição', '2018', '2').then((res) => {
  console.log('Deu certo!');
}).catch((res) => {
  console.log(res);
});
