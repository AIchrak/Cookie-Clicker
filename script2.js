function gameFunction() {
    // Describeletiables:
    let imageBtn = document.getElementById("imagebtn");
    let counterInput = document.getElementById("counter");
    let counter = 0;
    let autoClick = 0;
    let multiplier = 1;
    let bonusbtn = document.getElementById("btn-2");
    let autoclicker = document.getElementById("btn-3");
    let multiPlyerBTN = document.getElementById("btn-1");
    //let Allbtn=document.querySelectorAll(".btns")
    //let multi2=document.getElementById("");
    let costautoclick=20;
    let costmulti1=20;
    
    //buttons disabled:
    
    bonusbtn.disabled=true;
    autoclicker.disabled=true;
    multiPlyerBTN.disabled=true;
    
    function checkprice3(){
        if(counter < ((autoClick+1) * costautoclick)){
            return true;
        }
        else{
            return false;
        }
    }
    function checkprice1(){
        if(counter < (multiplier * costmulti1)){
            return true;
        }
        else{
            return false;
        }
    }

    function updateDisableStateBonusBtn(){
        if(checkprice3()){
            autoclicker.disabled = true;
        }
        else{
            autoclicker.disabled = false;
        }
    
        if(checkprice1()){
            multiPlyerBTN.disabled = true;
        }
        else{
            multiPlyerBTN.disabled = false;
        }
        
       /* if(checkScore(boostBonusCost, counter)){
            boostBonusBtn.disabled = false;
        }
        else{
            boostBonusBtn.disabled = true;
        }*/
    }
    
    // info button:
    document.getElementById("btninfo").addEventListener("click", ()=>{
            alert("Everytime you click on the cookie you will get 1 point. If you want to increase your score faster you can use some of your points (displayed in score box) to buy improvements (multiplier, bonus or autoclicker). Multiplier:will multiply each click by the number displayed in the button. The first time you buy it will be multiplied by 3. Then the price will increase and so will the multiplier. Auto-clicker: will allow you to increase your score without you clicking. It starts at 1clic/second, then 2 ...Bonus: will allow you to multiply your number of click everytime you click on the cookie during 30 seconds.")
    })
        
    function update() {
        counterInput.value = counter;
        document.getElementById("amountmultiplier").innerText= "Multiply your clicks by "+ multiplier;
    }
    // Creates the click function on the cookie image:
    imageBtn.onclick = function() {
        clickfunction();
    };

    function clickfunction() {
        counter = counter + 1;
        updateDisableStateBonusBtn()
        update();
        toaddmultipliervaluetoscore();
    }
    //Add Hover effect on cookie:
    imageBtn.onmouseover = function() {
        mouseOver();
    };

    function mouseOver() {
        imageBtn.style.transform = "scale(1.2)";
    }
    imageBtn.onmouseout = function() {
        mouseOut();
    };

    function mouseOut() {
        imageBtn.style.transform = "none";
    }

    //Auto-clicker:
    function autoclickTimer() {
        counter = counter + autoClick;
        update();
    }
    setInterval(autoclickTimer, 1000);
    autoclicker.onclick = function() {
        increase();
    };

    function increase() {
        if (counter >= (autoClick+1)*costautoclick) {
            counter = counter - (autoClick+1)*costautoclick;
            autoClick=autoClick+1;
            document.getElementById("currentpersecondcookies").innerHTML =
                "Autoclicker is on: " + autoClick + " point(s)/second";
            updateDisableStateBonusBtn()
            btn3colorchange()
            update();
        } else {
            alert("no money");
        }
    }

    //Multiplyer:
    multiPlyerBTN.onclick = function() {
        multiply();
    };

    function multiply() {
        if (counter >= multiplier * costmulti1) {
            counter = counter - multiplier * costmulti1;
            multiplier = multiplier + 1;
            document.getElementById("currentmultiplier").innerHTML =
                "your current multiplier is x" + multiplier;
            updateDisableStateBonusBtn()
            btn1colorchange();
        } else {
            alert("no money");
        }
        update();
    }
    //To make the multiplier work separately you create this function which add the value of multiplie to each click.
    function toaddmultipliervaluetoscore() {
        counter = counter + (multiplier-1);
        update();
    }

    //button color change after each buy:
    //var colors=["#804000","#A06300", "#C08600", "#E0A900", "#FFCC00"];
    function btn1colorchange() {
        if ((multiplier) * costmulti1 <= 20) {
            document.getElementById("btn-1").style.backgroundColor = "#804000";
        } else if (20 < (multiplier) * costmulti1 && (multiplier) * costmulti1 <= 40) {
            document.getElementById("btn-1").style.backgroundColor = "#A06300";
        } else if (40 < (multiplier) * costmulti1 && (multiplier) * costmulti1 <= 60) {
            document.getElementById("btn-1").style.backgroundColor = "#C08600";
        } else if (60 < (multiplier) * costmulti1 && (multiplier) * costmulti1 <= 80) {
            document.getElementById("btn-1").style.backgroundColor = "#E0A900";
        } else {
            document.getElementById("btn-1").style.backgroundColor = "#FFCC00";
        }
    }
    function btn3colorchange() {
        if ((autoClick + 1) * costautoclick <= 20) {
            document.getElementById("btn-3").style.backgroundColor = "#804000";
        } else if (20 < (autoClick + 1) * costautoclick && (autoClick + 1) * costautoclick <= 40) {
            document.getElementById("btn-3").style.backgroundColor = "#A06300";
        } else if (40 < (autoClick + 1) * costautoclick && (autoClick + 1) * costautoclick <= 60) {
            document.getElementById("btn-3").style.backgroundColor = "#C08600";
        } else if (60 < (autoClick + 1) * costautoclick && (autoClick + 1) * costautoclick <= 80) {
            document.getElementById("btn-3").style.backgroundColor = "#E0A900";
        } else {
            document.getElementById("btn-3").style.backgroundColor = "#FFCC00";
        }
    }

    // bonus & Timer:
    let bonusCost=20;
    function multiplyBy2(){
        let x=2
        counter+=x;
        update();
    }
    bonusbtn.onclick = function() {
        bonusfunction();
    };
    function bonusfunction(){
        if(counter >= bonusCost) {
            counter = counter - bonusCost;
            multiplyBy2();
            
        update();
        }
        else{
            alert("No money!")
        }
}
}
gameFunction();

//click sound when we click on the buttons

// audio
function playAudio() {
    document.getElementById("myAudio").play();
}

function pauseAudio() {
    document.getElementById("myAudio").pause();
}

/*
function checkprice3(){
        if(counter < ((autoClick + 1) * costautoclick)){
            autoclicker.disabled=true;
        }
        else if(counter >= ((autoClick + 1) * costautoclick)){
            autoclicker.disabled=false;
            
        }
        else{
            autoclicker.disabled=false;
        }
    }
    checkprice3();
    function checkprice1(){
        if(counter < (multiplier * costmulti1)){
            multiPlyerBTN.disabled=true;
        }
        else if(counter < (multiplier * costmulti1)){
            multiPlyerBTN.disabled=false;
        }
        else{
            multiPlyerBTN.disabled=false;
        }
    }
    checkprice1();*/