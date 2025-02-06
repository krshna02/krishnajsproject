let userscore=0;
let compscore=0;
let msg=document.querySelector(".msg");
let userscre=document.querySelector(".user-score")
let compscr=document.querySelector(".comp-score")
const choices=document.querySelectorAll(".choice");
const getcompchoice=()=>{
    const options=["rock","paper","scissors"];
    const random=Math.floor(Math.random()*3);
    return options[random]

}
const drwgame=()=>{
    console.log(" draw")
    msg.innerText="Game is draw, Play Again";
    msg.style.backgroundColor="gray"

}
const showWinner=(userwin,userchoice,compchoice)=>{
    if(userwin){
        userscore++;
        userscre.innerText=userscore;
        console.log("WIN!")
        msg.innerText=`You WIN!, Your ${userchoice} beats ${compchoice}`
        msg.style.backgroundColor="green";
        msg.style.color="white" 
       }
    else{
        console.log("LOOSE")
        compscore++;
        compscr.innerText=compscore;
        msg.innerText=`You Loose, ${compchoice} beats your ${userchoice}`
        msg.style.backgroundColor="red"
        msg.style.color="black"
    }
}
const playgame=(userchoice)=>{
    console.log("userchoice=",userchoice)
    const compchoice=getcompchoice();
    console.log("compchoice is= ",compchoice)
    if(userchoice=== compchoice){
        drwgame();

    }
    else{
        let userwin=true;
        if(userchoice==="rock"){
            //scissors or paper
            userwin=compchoice==="paper"? false:true;
        }
        else if(userchoice==="paper"){
            // scissor or rock
            userwin= compchoice==="scissor" ? false:true;
        }
        else{
            // rock or paper
            userwin=compchoice==="rock" ? false:true;
        }
        showWinner(userwin,userchoice,compchoice)
    }
    

}

choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        let userchoice=choice.getAttribute("id");
        playgame(userchoice);
    })
    
})