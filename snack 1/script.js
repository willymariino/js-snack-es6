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

console.log(bikes)

let heaviestBike = bikes[0];

for (let [i] in bikes) {
    if (bikes[i].peso > heaviestBike.peso) {
        heaviestBike = bikes[i];
    }

}
console.log("la bici più pesante è:", heaviestBike.marca, "con un peso di kg", heaviestBike.peso);

const bikeWeight = document.getElementById("bike-weight")

bikeWeight.textContent = "la bici più pesante è" + " " + heaviestBike.marca + " " + "con un peso di kg" + " " + heaviestBike.peso