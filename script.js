 console.log("Tic Tac Toe!");
let music = new Audio("music.mp3");
let audioTurn = new Audio("ting.mp3");
let gameover = new Audio("gameover.mp3");
let turn = "X";
let isGameover = false;
let isDraw = false;
// let isWin = false;

// Function to change the turn
const changeTurn = ()=>{
    return turn === "X"? "O": "X"
}

// Function to check for a win
const checkWin = ()=>{

    let boxesTxt = document.getElementsByClassName("boxtext");

    let wins = [
        [0,1,2], // winning positions
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6],
    ];

    wins.forEach(e =>{
        if((boxesTxt[e[0]].innerText === boxesTxt[e[1]].innerText) && (boxesTxt[e[1]].innerText === boxesTxt[e[2]].innerText) && (boxesTxt[e[0]].innerText !== '')){
                document.querySelector('.info').innerText = boxesTxt[e[0]].innerText+ " wins!!";
                isGameover= true;
                document.querySelector(".Catimg").getElementsByTagName("img")[0].style.width = "0px";
                setTimeout(()=>document.querySelector(".Catimg").getElementsByTagName("img")[0].style.width = "200px");
                document.querySelector(".Catimg").getElementsByTagName("img")[0].style.display = "block";
                
                const boxes = document.getElementsByClassName("box");
                Array.from(boxes).forEach(element =>{ 
                    // for each box div
                    var new_element = element.cloneNode(true);
                    element.parentNode.replaceChild(new_element, element);
                })
                // isWin = true;
        }
    })

    //draw logic

    if(!isGameover) {
        const boxes = document.getElementsByClassName("box");
        isDraw = true;
        Array.from(boxes).forEach(element =>{ // for each box div
            let boxtext = element.querySelector('.boxtext');
            if(boxtext.innerText === '') {
                isDraw = false;
                // isWin  = false;
            }
        })

        if(isDraw) isGameover = true;
    }
}


// Game Logic
const fn = () => {
    const boxes = document.getElementsByClassName("box");

    Array.from(boxes).forEach(element =>{ // for each box div
        let boxtext = element.querySelector('.boxtext'); // get  the text inside the boxtext class of box class
        element.addEventListener('click', ()=>{ // when you click on the boxtext area
            if(boxtext.innerText === ''){
                boxtext.innerText = turn; // initial value is X for turn variable.
                turn = changeTurn(); // why passing turn parameter didnt work?? it works! // next value of turn will be decided by the changeTurn fn
                // audioTurn.play();
                checkWin();
                if (!isGameover){
                    document.getElementsByClassName("info")[0].innerText  = "Turn for " + turn;
                } else if(isGameover && isDraw) {
                    document.getElementsByClassName("info")[0].innerText  = "fuck off";
                }
            }
        })
    })
}
fn();

// onclick event listener for play Again btn

reset.addEventListener('click', ()=>{
    let res_boxtext = document.querySelectorAll('.boxtext');

    Array.from(res_boxtext).forEach(ele=>{
        ele.innerText = "";
        isGameover= false;
        isDraw = false;
        document.querySelector(".Catimg").getElementsByTagName("img")[0].style.display = "none";
        turn = "X";
        document.getElementsByClassName("info")[0].innerText  = "Turn for " + turn;
        fn(); 
    })
})


//confetti effect

// import JSConfetti from 'js-confetti'

// const jsConfetti = new JSConfetti();

// function confettiEffect(){
//     jsConfetti.addConfetti();
// }


// document.querySelector(".cat").addEventListener('')

// jsConfetti.addConfetti({
//     emojis: ['⚡️', '💥', '✨', '💫',],
//  })






