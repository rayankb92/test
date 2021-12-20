const rdm = x => {
    return Math.floor(Math.random() * x) + 1
}

const play = () => {
    const res1 = rdm(6)
    const res2 = rdm(6)

    const playerOneImg = document.querySelectorAll('img')[0]
    const playerTwoImg = document.querySelectorAll('img')[1]
    const title = document.querySelector('h1')

    playerOneImg.src = `assets/dice${res1}.png`
    playerTwoImg.src = `assets/dice${res2}.png`

    if (res1 > res2) title.innerText = "Le joueur 1 a gagné !!"
    else if (res1 < res2) title.innerText = "Le joueur 2 a gagné !!"
    else title.innerText = "Egalité !!"
}

document.querySelector('button').addEventListener('click', () => play())