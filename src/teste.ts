

export const pessoas = [

    {
        id: 1,
        nome: 'Felipe',
        idade: 37
    },

    {
        id: 2,
        nome: 'Taina',
        idade: 35
    },

    {
        id: 3,
        nome: 'Sofia',
        idade: 4
    },
]


console.log(pessoas.map((item, index) => (
    ` Olá meu nome é  ${item.nome} e tenho ${item.idade} anos`
)))


