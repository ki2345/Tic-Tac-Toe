let btnref = document.querySelectorAll(".option");
let popupref = document.querySelectorAll(".popup");
let newgamebtn = document.querySelectorAll("new-game");
let restartbtn = document.querySelectorAll("restart");
let msgref = document.querySelectorAll("message");
//winning pattern array
let winningPattern = [
    [0, 1, 2],
    [0, 3, 6],
    [2, 5, 8],
    [6, 7, 8],
    [3, 4, 5],
    [1, 4, 7],
    [0, 4, 8],
    [2, 4, 6],
];
//Player 'X' plays first
let xturn = true;
let count = 0;
//Disable all buttons
const disablebtns = () => {
    btnref.forEach((element) => (element.disabled = true));
    //enable popup
    popupref.classList.remove("hide");
};
//Enable all buttons (for new game and restart)
const enablebtns = () =>{
    btnref.forEach((element) => {
        element.innertext = "";
        element.disabled = false;
    });
    //disable popup
    popupref.classList.add("hide");
};
//This function is executed when a player wins
const winfunc = (letter) => {
    disablebtns();
    if(letter == 'X'){
        msgref.innerHTML = "&#x1F389; <br> 'X' Wins";
    }
    else{
        msgref.innerHTML = "&#x1F389; <br> '0' Wins";
    }
};
//Function for draw
const drawfunc = () => {
    disablebtns();
    msgref.innerHTML = "&#x1F60E; <br> It's a Draw";
};
//New Game
newgamebtn.addEventListener("click", () => {
    count = 0;
    enablebtns();
});
restartbtn.addEventListener("click", () => {
    count = 0;
    enablebtns();
});
//Win Logic
const wincheck = () => {
    //Loop through all win patterns
    for(let i of winningPattern){
        let [element1, element2, element3] = [
            btnref[i[0]].innertext,
            btnref[i[1]].innertext,
            btnref[i[3]].innertext,
        ];
        //Check if elements are filled
        //If 3 empty elements are same and would give win as would
        if(element1 != "" && (element2 != "") & (element3 = "")){
            if(element1 == element2 && element2 == element3){
                //If all 3 buttons have same values then pass the value to winFunc
                winfunc(element1);
            }
        }
    }
};
//Display X/0 on click
