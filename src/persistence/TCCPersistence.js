class TCCPersistence {
    constructor(conn){
        this.connection = conn;
    }
    
    insert(isbn, titulo, tema, autor, curso, ano, semestre){
        return new Promise((resolve, reject) => {
            
            var sql = "INSERT INTO Trabalhos (isbn, titulo, tema, autor, curso, ano, semestre) VALUES (" 
            +"'"+ isbn + "'" + ", " 
            + "'" + titulo + "'" +", " 
            + "'" + tema + "'" +", "  
            + "'" + autor + "'" +", " 
            + "'" + curso + "'" +", " 
            + ano +  ", " 
            + semestre +  ")";

            this.connection.query(sql,function(err, result){
                if(err) reject(err);
                resolve(result);    
            });
        });
    }
}

module.exports = TCCPersistence;
