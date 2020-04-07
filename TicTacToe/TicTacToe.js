 var click=0,myArr=[];
 function loadGame() {
     document.body.setAttribute('style','display:flex;  flex-direction:column; justify-content:center; align-items:center; width:100%; height:100vh')
     var gameHeading=document.createElement("h1");
     gameHeading.innerHTML='Tic-Tac-Toe';
     gameHeading.setAttribute('style','font-family:Impact;font-size:60px; color :gray ')
     document.body.appendChild(gameHeading);
    var mainContainer = document.createElement("div");
    mainContainer.setAttribute("id", "mainContainer");
    mainContainer.setAttribute(
        "style",
        " width:300px; height:300px;align-items:center; display:flex; background-color:#34b4eb;  flex-direction:column; flex-wrap:wrap;  "
    );
    document.body.appendChild(mainContainer);

    count = 1;
    
    for (i = 1; i <= 3; i++) {
        var innerDiv = document.createElement("div");
        innerDiv.setAttribute(
            "style",
            " width:100%; height:100px; align:center; display:flex;  flex-direction:row"
        );
        for (j = 1; j <= 3; j++) {
            var smallDiv = document.createElement("div");
            smallDiv.id = count;
            smallDiv.setAttribute(
                "style",
                " display: flex; justify-content:center;align-items:center; font-size:2rem; width:100px; Height:100px;  border:2px solid gray"
            );
            smallDiv.setAttribute('onclick','startGame(this.id)')
            innerDiv.appendChild(smallDiv);
            count++;
        }
        mainContainer.appendChild(innerDiv)
    }
}
function startGame(divId){

    click++;
    if(click%2 == 0){
        document.getElementById(divId).innerHTML = 'X';  
        document.getElementById(divId).setAttribute('onclick','');
        myArr[divId]=1;
    }else{
        document.getElementById(divId).innerHTML = 'O';
        document.getElementById(divId).setAttribute('onclick','');
        myArr[divId]=0;
    }
    validate();
}

function validate(){

    //console.log(myArr);
    if((myArr[1] == 0 && myArr[2] == 0 && myArr[3] == 0) ||
        (myArr[1] == 0 && myArr[4] == 0 && myArr[7] == 0) ||
       (myArr[4] == 0 && myArr[5] == 0 && myArr[6] == 0) ||
       (myArr[2] == 0 && myArr[5] == 0  && myArr[8] == 0) ||
        (myArr[7] == 0 && myArr[8] == 0 && myArr[9] == 0)||
        (myArr[3] == 0 && myArr[6] == 0 && myArr[9] == 0) ||
        (myArr[1] == 0 && myArr[5] == 0 && myArr[9] == 0) ||
        (myArr[3] == 0 && myArr[5] == 0 && myArr[7] == 0) ){

            alert('Player1 Won!');
            resetGame();

        }else if((myArr[1] == 1 && myArr[2] == 1 && myArr[3] == 1) ||
        (myArr[1] ==  1 && myArr[4] == 1 && myArr[7] == 1) ||
        (myArr[4] == 1 && myArr[5] == 1 && myArr[6] == 1) ||
        (myArr[2] == 1 && myArr[5] == 1 && myArr[8] == 1) ||
        (myArr[7] == 1 && myArr[8] == 1 && myArr[9] == 1) ||
        (myArr[3] == 1 && myArr[6] == 1 && myArr[9] == 1) ||
        (myArr[1] == 1 && myArr[5] == 1 && myArr[9] == 1) ||
        (myArr[3] == 1 && myArr[5] == 1 && myArr[7] == 1) ){
            alert('Player2 Won!');
            resetGame();
        }else if(click == 9){
            alert("Match drawn");
            resetGame();

        }   

}

function resetGame()
{
    myArr=[];
    click=0;
    for(i=1;i<=9;i++){
        var resetSmallDiv = document.getElementById(i);
        resetSmallDiv.innerHTML="";
        resetSmallDiv.setAttribute('onclick','startGame(this.id)');
    }

}