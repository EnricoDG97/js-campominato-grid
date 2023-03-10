/*
Consegna
1. L'utente clicca su un bottone che genererà una griglia di gioco quadrata.
2. Ogni cella ha un numero progressivo, da 1 a 100.
Ci saranno quindi 10 caselle per ognuna delle 10 righe.
Quando l'utente clicca su ogni cella, la cella cliccata si colora di GIALLO ed emetto un messaggio in console con il numero della cella cliccata.

Bonus
Aggiungere una select accanto al bottone di generazione, che fornisca una scelta tra tre diversi livelli di difficoltà:
- con difficoltà 1 => 100 caselle, con un numero compreso tra 1 e 100, divise in 10 caselle per 10 righe;
- con difficoltà 2 => 81 caselle, con un numero compreso tra 1 e 81, divise in 9 caselle per 9 righe;
- con difficoltà 3 => 49 caselle, con un numero compreso tra 1 e 49, divise in 7 caselle per 7 righe;

*/

const playButtonEl = document.getElementById("play");
const gridContainerEl = document.getElementById("gridContainer");
const diffLevelEL = document.getElementById("level");

    
// creo evento al pulsante per iniziare il gioco
playButtonEl.addEventListener("click", function () {
    gridContainerEl.innerHTML = "";
    const level = diffLevelEL.value;
    const gridElement = document.createElement("div");
    gridElement.classList.add("grid");
    const squareNumber = getSquareNumber(level);
    const columnNumber = Math.sqrt(squareNumber);
    createGrid(gridElement, squareNumber, columnNumber);
    gridContainerEl.append(gridElement);
}); 

function createGrid(gridElement, squareNumber, columnNumber) {
    for (let i = 1; i <= squareNumber; i++) {
        const squareEl = createSquare(i, columnNumber);
        // alle pressione di ogni cella:
        squareEl.addEventListener('click', function () {
        squareEl.classList.toggle('selected');
        console.log(i);
    });
        gridElement.append(squareEl);
    }
  }

// creao funzione per generare i quadrati dimensionati in base al numero delle colonne che voglio
function createSquare(squareNumber, columnNumber) {
    const squareEl = document.createElement('div');
    // stilizzazione
    squareEl.style.width = `calc(100% / ${columnNumber})`;
    squareEl.style.height = `calc(100% / ${columnNumber})`;
    squareEl.classList.add('square');
    squareEl.textContent = squareNumber;
    return squareEl; 
}

// creo funzione per il numero dei quadrati in base al livello di diffcoltà
function getSquareNumber(level) {
    if (level == 1) {
        return 100;
    } else if (level == 2) {
        return 81;
    } else {
        return 49;
    }
}
