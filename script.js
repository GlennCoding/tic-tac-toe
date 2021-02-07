var heading = document.getElementById("heading")
var button = document.getElementById("start_button")
var squareField = document.getElementsByTagName("td")

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
    clickable()
}

function clickable() {
    for (let i = 0; i < squareField.length; i++) {
        squareField[i].addEventListener("click", function () { selectSquareField(this, i) }, false) // passing both the object plus the index of the specific field
    }
}

function selectSquareField(obj, i) {
    if (!gameOver) {
        obj.innerHTML = players[p_num].emoji

        players[p_num].fields.push(i)

        if (players[p_num].fields.length >= 3) {
            checkWin(players[p_num].fields)
        }

        if (!gameOver) {
            if (p_num == 0) {
                p_num = 1
            }
            else {
                p_num = 0
            }
            document.getElementById("heading").innerHTML =
                players[p_num].name + "'s move"
        }
        else {
            document.getElementById("heading").innerHTML =
                players[p_num].name + " has won! 🥳"
        }
    }
    obj.removeEventListener("click", selectSquareField)
}

function checkArrayDuplicates(arr, target) {
    return target.every(v => arr.includes(v))
}

function checkWin(player_field) {
    for (let winOption of wins) {
        if (checkArrayDuplicates(player_field, winOption)) {
            gameOver = true;
        }
    }
}

// Start game when button is clicked
button.addEventListener("click", startGame)