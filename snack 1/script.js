let bikes = [
    {
        marca: "Atala",
        peso: 30
    },
    {
        marca: "Brera",
        peso: 25
    },
    {
        marca: "Agazzini",
        peso: 28
    }
];

let heaviestBike = bikes[0]

for (let key in bikes) {
    if (heaviestBike[key].peso > bikes.peso) {
        heaviestBike = bikes[key]
    }
    console.log(bike)

}
