function gameFunction() {
    // Describeletiables:
    let imageBtn = document.getElementById("imagebtn");
    let counterInput = document.getElementById("counter");
    let counter = 0;
    let bonus = document.getElementById("btn-2");

    //MODAL

    // get the modal
    let modal = document.getElementById("welcome");

    // get the button that opens the modal
    let play = document.getElementsByClassName("play")[0];

    //when the user clicks the button, open the moadal
    window.onload = function() {
        modal.style.display = "block";
    };

    play.onclick = function() {
        modal.style.display = "none";
    };

    // info button:
    document.getElementById("btninfo").addEventListener("click", ()=>{
            alert("Everytime you click on the cookie you will get 1 point. If you want to increase your score faster you can use some of your points (displayed in score box) to buy improvements (multiplier, bonus or autoclicker). Multiplier:will multiply each click by the number displayed in the button. The first time you buy it will be multiplied by 3. Then the price will increase and so will the multiplier. Auto-clicker: will allow you to increase your score without you clicking. It starts at 1clic/second, then 2 ...Bonus: will allow you to multiply your number of click everytime you click on the cookie during 30 seconds.")
    })
        

    // Update function updates the HTML text in buttons, you need to call this function in other functions (buttons...):
    function update() {
        counterInput.value = counter;
        document.getElementById("costautoclick").innerHTML =
            "Cost: " + (autoClick + 1) * 50 + " pts";
        document.getElementById("persecondcookies").innerHTML =
            autoClick + 1 + " point(s)/second";
        document.getElementById("amountmultiplier").innerHTML =
            " your clicks" + " x" + (multiplier + 2);
        document.getElementById("costmultiplier").innerHTML =
            "Cost: " + multiplier * 50 + " pts";
    }
    // alret box function
    function alertBox() {
        var popup = document.getElementById("myPopup");
        popup.classList.toggle("show");
        popup.addEventListener("click", () => {
            popup.style.display = "none";
        });
    }

    // Creates the click function on the cookie image:
    imageBtn.onclick = function() {
        clickfunction();
    };

    function clickfunction() {
        counter = counter + 1;
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
    let autoClick = 0;

    function timer() {
        counter = counter + autoClick;

        update();
    }
    setInterval(timer, 1000);
    let autoclicker = document.getElementById("btn-3");
    autoclicker.onclick = function() {
        increase();
    };

    function increase() {
        if (counter >= (autoClick + 1) * 50) {
            counter = counter - (autoClick + 1) * 50;
            autoClick = autoClick + 1;
            document.getElementById("currentpersecondcookies").innerHTML =
                "Autoclicker is on: " + autoClick + " point(s)/second";
            btn3colorchange();
            update();
        } else {
            alertBox();
        }
    }

    //Multiplyer:
    let multiplier = 1;
    let multiPlyerBTN = document.getElementById("btn-1");
    multiPlyerBTN.onclick = function() {
        multiply();
    };

    function multiply() {
        if (counter >= multiplier * 50) {
            counter = counter - multiplier * 50;
            multiplier = multiplier + 2;
            document.getElementById("currentmultiplier").innerHTML =
                "your current multiplier is x" + multiplier;
            btn1colorchange();
        } else {
            alertBox();
        }
        // enableBonus();
        update();
    }
    //To make the multiplier work separately you create this function which add the value of multiplie to each click.
    function toaddmultipliervaluetoscore() {
        counter = counter + (multiplier - 1);
        update();
    }

    //button color change after each buy:
    //var colors=["#804000","#A06300", "#C08600", "#E0A900", "#FFCC00"];
    function btn3colorchange() {
        if ((autoClick + 1) * 20 <= 20) {
            document.getElementById("btn-3").style.backgroundColor = "#804000";
        } else if (20 < (autoClick + 1) * 20 && (autoClick + 1) * 20 <= 40) {
            document.getElementById("btn-3").style.backgroundColor = "#A06300";
        } else if (40 < (autoClick + 1) * 20 && (autoClick + 1) * 20 <= 60) {
            document.getElementById("btn-3").style.backgroundColor = "#C08600";
        } else if (60 < (autoClick + 1) * 20 && (autoClick + 1) * 20 <= 80) {
            document.getElementById("btn-3").style.backgroundColor = "#E0A900";
        } else {
            document.getElementById("btn-3").style.backgroundColor = "#FFCC00";
        }
    }

    function alertBox() {
        var popup = document.getElementById("myPopup");
        popup.classList.toggle("show");
        popup.addEventListener("click", () => {
            popup.style.display = "none";
        });
    }

    function btn1colorchange() {
        if ((multiplier + 2) * 10 <= 30) {
            document.getElementById("btn-1").style.backgroundColor = "#804000";
        } else if (30 < (multiplier + 2) * 10 && (multiplier + 2) * 10 <= 50) {
            document.getElementById("btn-1").style.backgroundColor = "#A06300";
        } else if (50 < (multiplier + 2) * 10 && (multiplier + 2) * 10 <= 70) {
            document.getElementById("btn-1").style.backgroundColor = "#C08600";
        } else if (70 < (multiplier + 2) * 10 && (multiplier + 2) * 10 <= 90) {
            document.getElementById("btn-1").style.backgroundColor = "#E0A900";
        } else {
            document.getElementById("btn-1").style.backgroundColor = "#FFCC00";
        }
    }

    //Bonus timer:

    let bonusCost = 50;
    let bonusOn = false;
    let bonusTime = 30;
    let scoree = 0;

    function displayBonus() {
        document.getElementById("bonuscost").innerHTML =
            "Cost: " + bonusCost + " pts";
    }

    function displayBonusTime() {
        document.getElementById("timer").innerHTML = bonusTime + " seconds";
    }

    function bonusEnabler() {
        if (!bonusOn && scoree >= bonusCost) {
            bonus.disabled = false;
        } else {
            bonus.disabled = true;
        }
    }

    function buttonsEnabler() {
        bonusEnabler();
    }

    function enableBonus() {
        counter = counterInput.value - bonusCost;
        bonusOn = true;
        multiplier = 20;
        bonus.disabled = true;
        displayBonusTime();
    }

    function disableBonus() {
        multiplier = false;
        bonusOn = false;
        bonusTime = 30;
        buttonsEnabler();
    }

    function bonusF() {
        if (bonusOn) {
            --bonusTime;
            displayBonusTime();
            if (bonusTime === 0) {
                disableBonus();
            }
        }
    }
    displayBonus();
    //bonus.disabled = true;
    bonus.addEventListener("click", enableBonus);
    bonusInterval = window.setInterval(bonusF, 1000);
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
