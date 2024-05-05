const database = 'BD3-NoSQL-AtlasMongoDB';


use(database);

db['bd3-nosql-atv6'].findOne({"cpf": "22233344455"}, {"cod_aluno": 0});
