let boxes = document.querySelectorAll(".box");

let msg = document.querySelector("#message");

let msgcontainer = document.querySelector(".msg");

let newgame = document.querySelector("#new");

let reset = document.querySelector(".reset");

let turn0 = true;

let count = 0;

const winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
];

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if (turn0) {
            box.innerHTML = "O";
            turn0 = false;
        }
        else {
            box.innerHTML = "X";
            turn0 = true;
        }
        box.disabled = true;
        count++;

        let isWinner = checkWinner();

        if (count == 9 && !isWinner) {
            gameDraw();
        }
    })
})

const gameDraw = () => {
    msg.innerHTML = "THE GAME IS DRAW";
    msg.style.color='red';
    msgcontainer.classList.remove("hide");
    disableBoxes();
};

const disableBoxes = () => {
    for (let box of boxes) {
        box.disabled = true;
    }
};

const enableBoxes = () => {
    for (let box of boxes) {
        box.disabled = false;
        box.innerHTML = "";
    }
};

const checkWinner = () => {
    for (let pattern of winPatterns) {
        let pos1 = boxes[pattern[0]].innerText;
        let pos2 = boxes[pattern[1]].innerText;
        let pos3 = boxes[pattern[2]].innerText;

        if (pos1 != "" && pos2 != "" && pos3 != "") {
            if (pos1 == pos2 && pos2 == pos3) {
                showWinner(pos1);
                return true;
            }
        }
    }
};

const showWinner = (winner) => {
    msg.innerHTML = `The Winner is ${winner}`;
    msg.style.color='green';
    msgcontainer.classList.remove("hide");
    disableBoxes();
}

const resetGame = () => {
    for(let box of boxes) {
        box.innerHTML="";
        turn0=true;
         enableBoxes();
         count=0;
         msgcontainer.classList.add("hide");
    }
};

newgame.addEventListener("click", resetGame);
reset.addEventListener("click", resetGame);




