class TCCPersistence {
  constructor(conn) {
    this.connection = conn;
  }
  insert(isbn, titulo, tema, autor, curso, ano, semestre) {
    return new Promise((resolve, reject) => {
      const sql = `INSERT INTO Trabalhos (isbn, titulo, tema, autor, curso, ano, semestre) VALUES (
        '${isbn}', 
        '${tema}', 
        '${autor}', 
        '${curso}', 
        '${ano}', 
        '${semestre}')`;

      this.connection.query(sql, (err, result) => {
        if (err) reject(err);
        resolve(result);
      });
    });
  }
}

module.exports = TCCPersistence;
