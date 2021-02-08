var heading = document.getElementById("heading")
var button = document.getElementById("start_button")
var gameField = document.getElementsByTagName("td")

var players = [{ name: "Pig", emoji: "🐷", fields: [] }, { name: "Frog", emoji: "🐸", fields: [] }]
var p_num = 1

var gameOver = false;

var wins = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
];

function startGame() {
    button.style.display = "none"
    p_num = 1
    heading.innerHTML = players[p_num].name + "'s move"
    setFieldsClickable()
}

function setFieldsClickable() {
    for (let i = 0; i < gameField.length; i++) {
        gameField[i].index = i
        gameField[i].addEventListener("click", fieldClicked, false)
    }
}

function fieldClicked() {
    if (!gameOver) {
        this.innerHTML = players[p_num].emoji
        players[p_num].fields.push(this.index)

        if (players[p_num].fields.length >= 3) {
            checkWin(players[p_num].fields)
        }

        if (!gameOver && players[p_num].fields.length == 5) {
            heading.innerHTML =
                "Draw 🤷‍♂️"
        }
        else if (!gameOver) {
            if (p_num == 0) {
                p_num = 1
            }
            else {
                p_num = 0
            }
            heading.innerHTML =
                players[p_num].name + "'s move"
        }
        else {
            heading.innerHTML =
                players[p_num].name + " has won! 🥳"
        }
    }
    this.removeEventListener("click", fieldClicked)
}

function checkArrayDuplicates(arr, target) {
    return target.every(v => arr.includes(v))
}

function checkWin(playerField) {
    for (let winOption of wins) {
        if (checkArrayDuplicates(playerField, winOption)) {
            gameOver = true;
        }
    }
}

// Start game when button is clicked
button.addEventListener("click", startGame)