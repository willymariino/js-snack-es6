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
for (let i = 0; i < squadre.lenght; i++) {
    let squadre = Math.round(Math.random() * 20) + 1;
    squadre[i].puntiFatti
    squadre[i].falliSubiti

}

console.log(squadre.nome + squadre.puntiFatti + squadre.falliSubiti)
