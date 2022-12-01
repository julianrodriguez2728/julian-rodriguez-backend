const lista =[
    {
        nombre:"juan",
        edad: 27,
        estado: "soltero",
        nacionalidad: "argentino"
    },
    {
        nombre:"lola",
        edad: 17,
        estado: "soltera",
        nacionalidad: "peruana"

    }
]

let persona1 = Object.keys(lista[0]);
let persona2 = Object.values(lista[1]);

console.log(persona2)