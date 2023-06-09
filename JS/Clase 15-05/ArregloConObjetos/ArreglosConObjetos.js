let autos = [
    {
        marca: "Citroen",
        modelo: "C3",
        año: 2013,
        dueño: "Juan",
        color:{
            capot: "gris",
            puertas: "negro"
        },
        dueñosAnteriores: [] // Lo compro 0KM
    },
    {
        marca: "Honda",
        modelo: "Fit",
        año: 2016,
        dueño: "Santiago",
        color:{
            capot: "rojo",
            puertas: "rojo"
        },
        dueñosAnteriores: ["Jorge", "Iván"]
    }
]

autos[0].color.capot="negro";
autos[0].dueño = "santiago";
autos[0].dueñosAnteriores = "juan";

console.log(autos)
