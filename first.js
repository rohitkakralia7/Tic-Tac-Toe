let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset");
let newBtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector("#msg-container");
let msg = document.querySelector(".msg");

let turnO = true;
const win = [[0, 1, 2], [0, 3, 6], [0, 4, 8], [1, 4, 7], [2, 5, 8], [2, 4, 6], [3, 4, 5],[6, 7, 8]];
let score0 = 0;
let score1 = 0;
const resetGame = () =>{
    turnO = true;
    enableBoxes();
    msgContainer.classList.add("hide");
    score0 = 0;
    score1 = 0;
    document.querySelector(".score0").innerText = score0;
    document.querySelector(".score1").innerText = score1;
}
const newGame = () =>{
    turnO = true;
    enableBoxes();
    msgContainer.classList.add("hide");
}

boxes.forEach((box) => {
    msgContainer.classList.add("hide")
    box.addEventListener("click", () =>{
        if(turnO){
            box.innerText = "O";
            box.classList.add("oColor");
            turnO = false;
        }else{
            box.innerText = "X";
            box.classList.add("xColor");
            turnO = true;
        }
        box.disabled = true;

        checkWinner();
    });
});


const checkWinner = () => {
    for(let pattern of win){
        // boxes[pattern[0]], boxes[pattern[1]], boxes[pattern[2]]
        var posVal1 = boxes[pattern[0]].innerText;
        var posVal2= boxes[pattern[1]].innerText;
        var posVal3= boxes[pattern[2]].innerText;
        if(posVal1 != "" && posVal2 != "" && posVal3 != ""){
            if(posVal1 == posVal2 && posVal2 == posVal3){
                if(posVal1 == "O"){
                    score0 = score0+1;
                    document.querySelector(".score0").innerText = score0;
                }
                if(posVal1 == "X"){
                    score1 = score1+1;
                    document.querySelector(".score1").innerText = score1;
                }
                showWinner();
            }
        }
    }
}


const showWinner = () => {
    disableBoxes();
    
    msgContainer.classList.remove("hide");

    
    msg.innerText = `Congratulations ${posVal1}`;
}


const disableBoxes = () => {
    for(let box of boxes){
        box.disabled = true;
    }
}

const enableBoxes = () => {
    for(let box of boxes){
        box.disabled = false;
        box.innerText = "";
    }
}



newBtn.addEventListener("click", newGame);
resetBtn.addEventListener("click", resetGame);