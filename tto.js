let buttons=document.querySelectorAll(".btn");
let turnO=true;
const winpttrns=[
    [0,1,2],
    [3,4,5],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [6,7,8]
];
const gameDraw = () => {
    msg.innerText = `Game was a Draw`;
    msgcontainer.classList.remove("hidden");
    disabledbtns();
  };
buttons.forEach((btn) => {
    btn.addEventListener("click",()=>{
        console.log("btn was clicked")
        if(turnO==true){// player O turn
            btn.innerText="O";
            turnO=false;
            
        }
        else{ // playerX
            btn.innerText="X"
           
            turnO=true;
            
        }
        btn.disabled=true;
        count++;
        let isWinner =  checkWinner();
        if (count === 9 && !isWinner) {
            gameDraw();
          };
      
       
    })
    
})


let enabledbtns=() =>{
    for (let box  of buttons) {
        box.disabled=false;
        box.innerText="";
        
    }
}

const resetgame=() =>{
    turnO=true;
    enabledbtns();
    msgcontainer.classList.add("hidden");


}
let newGamebtn=document.querySelector(".new-btn");
let resetGamebtn=document.querySelector(".reset-btn")
let msgcontainer=document.querySelector(".msg-container");
let msg=document.querySelector(".msg");
let count = 0; //To Track Draw
let disabledbtns=() =>{
    for (let box  of buttons) {
        box.disabled=true;
        
    }
}
let showWinner=(Winner)=>{
    msg.innerText=(`Congrats, Winner is ${Winner}`);
    msgcontainer.classList.remove("hidden");
    
    disabledbtns();
}
let checkWinner=()=>{
    for (const patterns of winpttrns) {
        let pos1val=buttons[patterns[0]].innerText;
        let pos2val=buttons[patterns[1]].innerText;
        let pos3val=buttons[patterns[2]].innerText;
        if(pos1val!="" && pos2val!="" && pos3val!=""){
            if(pos1val==pos2val && pos2val==pos3val){
                console.log("winner",pos1val)
                showWinner(pos1val);
            }
           
        }
       
        
    }

}
newGamebtn.addEventListener("click",resetgame);
resetGamebtn.addEventListener("click",resetgame);





