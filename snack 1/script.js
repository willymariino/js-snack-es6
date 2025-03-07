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

for (let i in bikes) {
    if (heaviestBike[i].peso > bikes.peso) {
        heaviestBike = bikes[i]
    }
    console.log(bikes)

}
