const database = 'BD3-NoSQL-AtlasMongoDB';

const collection = 'bd3-nosql-atv6';

use (database);

db['bd3-nosql-atv6'].insertMany(
[
 [
        {
            "nome": "Bruno Carvalho",
            "cpf": "22233344455",
            "rg": "RJ1234568",
            "telefone_aluno": "21987654321",
            "telefone_responsavel": "21987654322",
            "email": "bruno.carvalho@gmail.com",
            "data_nascimento": "1999-02-25T00:00:00Z"
        },
        {
            "nome": "Carla Dias",
            "cpf": "33344455566",
            "rg": "SP1234569",
            "telefone_aluno": "11987654321",
            "telefone_responsavel": "11987654322",
            "email": "carla.dias@gmail.com",
            "data_nascimento": "2000-03-30T00:00:00Z"
        },
        {
            "nome": "Daniel Esteves",
            "cpf": "44455566677",
            "rg": "BA1234560",
            "telefone_aluno": "71987654321",
            "telefone_responsavel": "71987654322",
            "email": "daniel.esteves@gmail.com",
            "data_nascimento": "2001-04-20T00:00:00Z"
        },
        {
            "nome": "Elena Ferreira",
            "cpf": "55566677788",
            "rg": "CE1234561",
            "telefone_aluno": "85987654321",
            "telefone_responsavel": "85987654322",
            "email": "elena.ferreira@gmail.com",
            "data_nascimento": "2002-05-22T00:00:00Z"
        },
        {
            "nome": "Felipe Gomes",
            "cpf": "66677788899",
            "rg": "PE1234562",
            "telefone_aluno": "81987654321",
            "telefone_responsavel": "81987654322",
            "email": "felipe.gomes@gmail.com",
            "data_nascimento": "2003-06-15T00:00:00Z"
        },
        {
            "nome": "Gabriela Hernandes",
            "cpf": "77788899900",
            "rg": "AM1234563",
            "telefone_aluno": "92987654321",
            "telefone_responsavel": "92987654322",
            "email": "gabriela.hernandes@gmail.com",
            "data_nascimento": "2004-07-18T00:00:00Z"
        },
        {
            "nome": "Hector Ibanez",
            "cpf": "88899900011",
            "rg": "SC1234564",
            "telefone_aluno": "48987654321",
            "telefone_responsavel": "48987654322",
            "email": "hector.ibanez@gmail.com",
            "data_nascimento": "1997-08-28T00:00:00Z"
        },
        {
            "nome": "Isabela Júlia",
            "cpf": "99900011122",
            "rg": "RS1234565",
            "telefone_aluno": "51987654321",
            "telefone_responsavel": "51987654322",
            "email": "isabela.julia@gmail.com",
            "data_nascimento": "1996-09-30T00:00:00Z"
        }
    ]
]);