class TCCController {
  constructor(persistence) {
    this.tccPersistor = persistence;
  }

  insertTcc(isbn, titulo, tema, autor, curso, ano, semestre) {
    return new Promise((resolve, reject) => {
      this.tccPersistor.insert(isbn, titulo, tema, autor, curso, ano, semestre).then((res) => {
        console.log('Inseriu!!!');
        resolve(res);
      }).catch((res) => {
        reject(res);
      });
    });
  }
}

module.exports = TCCController;
