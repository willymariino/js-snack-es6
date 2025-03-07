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




// generatore di numeri random
for (let i = 0; i < squadre.length; i++) {
    squadre[i].puntiFatti = Math.round(Math.random() * 20) + 1;
    squadre[i].falliSubiti = Math.round(Math.random() * 20) + 1;

}

for (let i = 0; i < sqaudre.length; i++)
    console.log(squadre.nome + squadre.puntiFatti + squadre.falliSubiti)
