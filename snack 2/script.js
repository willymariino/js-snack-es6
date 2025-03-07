let squadre = [
    {
        nome: "lions",
        puntiFatti: 0,
        falliSubiti: 0
    },
    {
        nome: "bears",
        puntiFatti: 0,
        falliSubiti: 0
    },
    {
        nome: "wolves",
        puntiFatti: 0,
        falliSubiti: 0
    }
];

console.log(squadre)

const numberCount = 6


// generatore di numeri random
for (let i = 0; i < numberCount; i++) {
    let num = Math.round(Math.random() * 20) + 1;
    puntiFatti.push(num)
    fallisubiti.push(num)
    console.log(num)
}