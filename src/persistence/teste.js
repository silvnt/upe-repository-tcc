const conn = require('./ConnectionDB.js');
const TccPersis = require('./TCCPersistence.js'); 

const tccRep = new TccPersis(conn);

tccRep.insert("isbm","Putaria", "sexo", "Teteu_picudo", "Sistemas de Prostituição", "2018", "esse");