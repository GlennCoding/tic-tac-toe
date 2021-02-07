var heading = document.getElementById("heading")
var button = document.getElementById("start_button")
var squareField = document.getElementsByTagName("td")

var player
var player_A = []
var player_B = []

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
    heading.innerHTML = "Pig's move"
    player = 1
    clickable()
}

function clickable() {
    for (let i = 0; i < squareField.length; i++) {
        squareField[i].addEventListener("click", function () { selectSquareField(this, i) }, false) // passing both the object plus the index of the specific field
    }
}

function updateFields(player) {

    obj.innerHTML = "🐷"

    player_A.push(i)
    console.log("Pig: " + player_A)

    if (player_A.length >= 3) {
        checkWin(player_A)
    }

    player = 0

    if (!gameOver) {
        document.getElementById("heading").innerHTML =
            "Frog's move"
    }
    else {
        document.getElementById("heading").innerHTML =
            "Pig has won! 🥳"
    }
}

function selectSquareField(obj, i) {
    console.log("CLICK")
    if (!gameOver)
        if (player == 1) {
            obj.innerHTML = "🐷"

            player_A.push(i)
            console.log("Pig: " + player_A)

            if (player_A.length >= 3) {
                checkWin(player_A)
            }

            player = 0

            if (!gameOver) {
                document.getElementById("heading").innerHTML =
                    "Frog's move"
            }
            else {
                document.getElementById("heading").innerHTML =
                    "Pig has won! 🥳"
            }
        }
        else {
            obj.innerHTML = "🐸"
            player_B.push(i)
            console.log("Frog: " + player_B)

            if (player_A.length >= 3) {
                checkWin(player_B)
            }

            player = 1

            if (!gameOver) {
                document.getElementById("heading").innerHTML =
                    "Pig's move"
            }
            else {
                document.getElementById("heading").innerHTML =
                    "Frog has won! 🥳"
            }
        }
    obj.removeEventListener("click", selectSquareField)
}

function checkArrayDuplicates(arr, target) {
    return target.every(v => arr.includes(v))
}

function checkWin(playerAB) {
    for (let winOption of wins) {
        if (checkArrayDuplicates(playerAB, winOption)) {
            console.log("WIN!!!")
            gameOver = true;
        }
    }
}

// Start game when button is clicked
button.addEventListener("click", startGame)