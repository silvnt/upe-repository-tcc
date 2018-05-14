/* eslint-disable no-console */

class TCCPersistence {
  constructor(conn) {
    this.connection = conn;
  }
  insert(isbn, titulo, tema, autor, curso, ano, semestre) {
    return new Promise((resolve, reject) => {
      const sql = 'INSERT INTO Trabalhos (isbn, titulo, tema, autor, curso, ano, semestre) VALUES ? ';
      const values = [[isbn, titulo, tema, autor, curso, ano, semestre]];
      this.connection.query(sql, [values], (err, result) => {
        if (err) reject(err);
        resolve(result);
      });
    });
  }

  delete(isbn) {
    return new Promise((resolve, reject) => {
      const sql = 'DELETE FROM Trabalhos WHERE isbn = ?';

      this.connection.query(sql, isbn, (err, result) => {
        if (err) reject(err);
        resolve(result);
      });
    });
  }
}

module.exports = TCCPersistence;
