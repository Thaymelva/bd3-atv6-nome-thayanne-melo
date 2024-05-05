const database = 'BD3-NoSQL-AtlasMongoDB';

const collection = 'bd3-nosql-atv6';

use (database);

db['bd3-nosql-atv6'].insertOne(
    {
        "nome": "João Silva",
        "cpf": "12345678909",
        "rg": "MG1234567",
        "telefone_aluno": "31987654321",
        "telefone_responsavel": "31987654322",
        "email": "joao.silva@gmail.com",
        "data_nascimento": new Date("2000-04-01T00:00:00Z")
    },
);