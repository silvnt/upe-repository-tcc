/* eslint-disable no-console */

const TccRep = require('../persistence/TCCPersistence.js');

class TCCBusiness {
  constructor() {
    this.tccPersistor = new TccRep(); /* Não sei se isso seria o melhor a se fazer levando em
                                    consideração a arquitetura de camadas */
  }

  insertTcc(isbn, titulo, tema, autor, curso, ano, semestre) {
    return new Promise((resolve, reject) => {
      this.tccPersistor.insert(isbn, titulo, tema, autor, curso, ano, semestre).then((res) => {
        resolve(res);
      }).catch((res) => {
        reject(res);
      });
    });
  }

  deleteTcc(isbn) {
    return new Promise((resolve, reject) => {
      this.tccPersistor.delete(isbn).then((res) => {
        resolve(res);
      }).catch((res) => {
        reject(res);
      });
    });
  }

  /*
  searchTcc(autor) {
    return new Promise((resolve, reject) => {
      this.tccPersistor.search(autor).then((res) => {
        resolve(res);
      }).catch((res) => {
        reject(res);
      });
    });
  }
}
*/
  
  searchTcc(titulo, tema, autor, curso, ano, semestre) {

    let sql = "SELECT * FROM trabalhos WHERE";
    let addAndToSqlQuery = false;

    //#region Checa os dados inseridos e gera a query de busca.
    if (titulo) {
      sql += " titulo LIKE '%" + titulo + "%'";
      addAndToSqlQuery = true;
    }

    if (tema) {
      if (addAndToSqlQuery == true) {
        sql += ` AND`;
      }
      sql += " tema LIKE '%" + tema + "%'";
      addAndToSqlQuery = true;
    }

    if (autor) {
      if (addAndToSqlQuery == true) {
        sql += ` AND`;
      }
      sql += " autor LIKE '%" + autor + "%'";
      addAndToSqlQuery = true;
    }

    if (curso) {
      if (addAndToSqlQuery == true) {
        sql += ` AND`;
      }
      sql += " curso='" + curso + "'";
      addAndToSqlQuery = true;
    }

    if (ano) {
      if (addAndToSqlQuery == true) {
        sql += ` AND`;
      }
      sql += " ano=" + ano;
      addAndToSqlQuery = true;
    }

    if (semestre) {
      if (addAndToSqlQuery == true) {
        sql += ` AND`;
      }
      sql += " semestre=" + semestre;
    }

    sql += `;`;
    //#endregion

    return new Promise((resolve, reject) => {
      this.tccPersistor.searchGeneralista(sql).then((res) => {
      resolve(res);
    }).catch((res) => {
      reject(res);
    });
  });
  }
}

module.exports = TCCBusiness;
