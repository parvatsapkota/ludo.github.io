var currPos = 0;
var stepu = 43.3;
var stepl = 43.7
var currcolor = "";
var NumOfPaw = "";
var num = 0;
var clicked = false;
var currpawn = "";
var allcolor = ["red", "blue", "green", "yellow"];
var pawnOut = {red:0,blue:0,green:0,yellow:0}
/* function checkStar(position){
				return position != [secondPawn.style.top,secondPawn.style.left];
} */
function HaveHover() {
    var count = 0;
    var toKill = "";
    for (var i = 0; i < allcolor.length; i++) {
        for (var n = 1; n <= 4; n++) {
            var firstPawn = document.getElementById(allcolor[i] + "pawn" + n);
            var secondPawn=document.getElementById(currpawn);
			var checkArray = [["70.5px","366.9px"], ["590.1px","279.5px"], ["373.6px","585.4px"], ["287px","61px"]]; 
			var topArray = ["70.5px","590.1px","373.6px","287px","113.8","546.8px","287px","373.6px"];
			var leftArray = ["366.9px","279.5px","585.4px","61px","279.5px","366.9px","541.7px","104.7px"];
			var strTop = String(secondPawn.style.top);
			var strLeft = String(secondPawn.style.left);
			check = topArray.includes(strTop) && leftArray.includes(strLeft);
			
			if(!check){
				if (firstPawn.style.top==secondPawn.style.top&&firstPawn.style.left==secondPawn.style.left&&currcolor!=allcolor[i]&&currPos+num<56) {
                count++;
                toKill = allcolor[i] + "pawn" + n;
                return toKill;
		         }
			}
	    }   
    }
	//window.alert(checkArray);
	//window.alert(secondPawn.style.top);
    return false;
}
function Stuck() {
    var text = document.getElementById('player');
    if (onboard[currpawn] == 0||currPos+num>56) {
        if (DontHaveOtherFree()||currPos+num>56) {
            var badtext = document.getElementById('badtext');
            badtext.innerText = "Unfortunatlly you stuck";
            clicked = false;
            var dice = document.getElementById('dice');
            dice.style.backgroundImage = "url(Images/dice.gif)";
            window.setTimeout(changePlayer, 1000);
        }
    }
}
function changePlayer() {
    if (num != 6){
    var text = document.getElementById('player');
    switch (text.innerText) {
        case "red": text.innerText = text.style.color = "blue"; break;
        case "blue": text.innerText = text.style.color = "yellow"; break;
        case "yellow": text.innerText = text.style.color = "green"; break;
        case "green": text.innerText = text.style.color = "red"; break;
    }
    }
    var badtext = document.getElementById('badtext');
    badtext.innerText = "";
    var dice = document.getElementById('dice');
    dice.style.backgroundImage = "url(Images/dice.gif)";
}
var positions = {
    redpawn1: 0, redpawn2: 0, redpawn3: 0, redpawn4: 0,
    bluepawn1: 0, bluepawn2: 0, bluepawn3: 0, bluepawn4: 0,
    greenpawn1: 0, greenpawn2: 0, greenpawn3: 0, greenpawn4: 0,
    yellowpawn1: 0, yellowpawn2: 0, yellowpawn3: 0, yellowpawn4: 0
};
var onboard = {
    redpawn1: 0, redpawn2: 0, redpawn3: 0, redpawn4: 0,
    bluepawn1: 0, bluepawn2: 0, bluepawn3: 0, bluepawn4: 0,
    greenpawn1: 0, greenpawn2: 0, greenpawn3: 0, greenpawn4: 0,
    yellowpawn1: 0, yellowpawn2: 0, yellowpawn3: 0, yellowpawn4: 0
};
function DontHaveOtherFree() {
    var text = document.getElementById('player');
    for (var i = 1; i <=4; i++) {
        if (onboard[text.innerText + "pawn" + i] == 1 || positions[text.innerText + "pawn" + i]+num>=56) return false;
    }
    return true;
}
function CheckForWinner() {
    if (pawnOut[currcolor] == 4) {
        var dice = document.getElementById("dice");
        var player = document.getElementById("player");
        var uselesstext1 = document.getElementById("uselesstext1");
        var uselesstext2 = document.getElementById("uselesstext2");
        dice.innerText = "";
        dice.style.visibility = "hidden";
        uselesstext1.innerText = "";
        uselesstext2.innerText = "";
        player.innerText = "The Winner is the "+currcolor+" player";
    }
}
function stepDown() {
    var doc = document.getElementById(currcolor + "pawn"+NumOfPaw);
    var curr = Number(doc.style.top.replace(/[a-z]/g, ''));
    doc.style.top = (curr+stepu)+'px';
    
    currPos++;
	
}
function stepUp() {
    var doc = document.getElementById(currpawn);
    var curr = Number(doc.style.top.replace(/[a-z]/g, ''));
    doc.style.top = (curr - stepu) + 'px';
	
    currPos++;
	
}
function stepLeft() {
    var doc = document.getElementById(currpawn);
    var curr = Number(doc.style.left.replace(/[a-z]/g, ''));
    doc.style.left = (curr - stepl) + 'px';
	
    currPos++;
	
}
function stepRight() {
    var doc = document.getElementById(currpawn);
    var curr = Number(doc.style.left.replace(/[a-z]/g, ''));
    doc.style.left = (curr + stepl) + 'px';
    
    currPos++;
	
}
function stepdownright() {
    var doc = document.getElementById(currpawn);
    var curr1 = Number(doc.style.top.replace(/[a-z]/g, ''));
    doc.style.top = (curr1+stepu)+'px';
    var curr2 = Number(doc.style.left.replace(/[a-z]/g, ''));
    doc.style.left = (curr2 + stepl) + 'px';
    currPos++;
	
}
function stepleftdown() {
    var doc = document.getElementById(currpawn);
    var curr1 = Number(doc.style.left.replace(/[a-z]/g, ''));
    doc.style.left = (curr1 - stepl) + 'px';
    var curr2 = Number(doc.style.top.replace(/[a-z]/g, ''));
    doc.style.top = (curr2+stepu)+'px';
    currPos++;
	
}
function stepupleft() {
    var doc = document.getElementById(currpawn);
    var curr1 = Number(doc.style.top.replace(/[a-z]/g, ''));
    doc.style.top = (curr1 - stepu) + 'px';
    var curr2 = Number(doc.style.left.replace(/[a-z]/g, ''));
    doc.style.left = (curr2 - stepl) + 'px';
    currPos++;
	
}
function steprightup() {
    var doc = document.getElementById(currpawn);
    var curr1 = Number(doc.style.left.replace(/[a-z]/g, ''));
    doc.style.left = (curr1 + stepl) + 'px';
    var curr2 = Number(doc.style.top.replace(/[a-z]/g, ''));
    doc.style.top = (curr2 - stepu) + 'px';
    currPos++;
	
}
var stepsRed = [];
var stepsYellow = [];
var stepsBlue =[];
var stepsGreen =[];
function pushSteps(value, steps, count) {
    for (i = 0; i < count; i++) steps.push(value); 
}
//Red pawns path
pushSteps(stepDown,stepsRed,4);
pushSteps(stepdownright,stepsRed,1);
pushSteps(stepRight, stepsRed,5);
pushSteps(stepDown, stepsRed,2);
pushSteps(stepLeft, stepsRed,5);
pushSteps(stepleftdown,stepsRed,1);
pushSteps(stepDown, stepsRed,5);
pushSteps(stepLeft, stepsRed,2);
pushSteps(stepUp, stepsRed,5);
pushSteps(stepupleft,stepsRed,1);
pushSteps(stepLeft, stepsRed,5);
pushSteps(stepUp, stepsRed,2);
pushSteps(stepRight, stepsRed,5);
pushSteps(steprightup,stepsRed,1);
pushSteps(stepUp, stepsRed,5);
pushSteps(stepRight, stepsRed,1);
pushSteps(stepDown, stepsRed,6);
//Yellow pawns path

pushSteps(stepUp, stepsYellow,4);
pushSteps(stepupleft,stepsYellow,1);
pushSteps(stepLeft, stepsYellow,5);
pushSteps(stepUp, stepsYellow,2);
pushSteps(stepRight, stepsYellow,5);
pushSteps(steprightup,stepsYellow,1);
pushSteps(stepUp, stepsYellow,5);
pushSteps(stepRight, stepsYellow,2);
pushSteps(stepDown, stepsYellow,5);
pushSteps(stepdownright,stepsYellow,1);
pushSteps(stepRight, stepsYellow,5);
pushSteps(stepDown, stepsYellow,2);
pushSteps(stepLeft, stepsYellow,5);
pushSteps(stepleftdown,stepsYellow,1);
pushSteps(stepDown, stepsYellow,4);
pushSteps(stepLeft, stepsYellow,1);
pushSteps(stepUp, stepsYellow,6);

//Blue pawns path
pushSteps(stepLeft, stepsBlue,4);
pushSteps(stepleftdown,stepsBlue,1);
pushSteps(stepDown, stepsBlue,5);
pushSteps(stepLeft, stepsBlue,2);
pushSteps(stepUp, stepsBlue,5);
pushSteps(stepupleft,stepsBlue,1);
pushSteps(stepLeft, stepsBlue,5);
pushSteps(stepUp, stepsBlue,2);
pushSteps(stepRight, stepsBlue,5);
pushSteps(steprightup,stepsBlue,1);
pushSteps(stepUp, stepsBlue,5);
pushSteps(stepRight, stepsBlue,2);
pushSteps(stepDown, stepsBlue,5);
pushSteps(stepdownright,stepsBlue,1);
pushSteps(stepRight, stepsBlue,5);
pushSteps(stepDown, stepsBlue,1);
pushSteps(stepLeft, stepsBlue,6);

//Green pawns path
pushSteps(stepRight, stepsGreen,4);
pushSteps(steprightup,stepsGreen,1);
pushSteps(stepUp, stepsGreen,5);
pushSteps(stepRight, stepsGreen,2);
pushSteps(stepDown, stepsGreen,5);
pushSteps(stepdownright,stepsGreen,1);
pushSteps(stepRight, stepsGreen,5);
pushSteps(stepDown, stepsGreen,2);
pushSteps(stepLeft, stepsGreen,5);
pushSteps(stepleftdown,stepsGreen,1);
pushSteps(stepDown, stepsGreen,5);
pushSteps(stepLeft, stepsGreen,2);
pushSteps(stepUp, stepsGreen,5);
pushSteps(stepupleft,stepsGreen,1);
pushSteps(stepLeft, stepsGreen,5);
pushSteps(stepUp, stepsGreen,1);
pushSteps(stepRight, stepsGreen,6);
function ResetPawn(victim) {
    onboard[victim] = 0;
    positions[victim] = 0;
    var pawnToMove = document.getElementById(victim);
    switch (victim) {
        case "redpawn1": pawnToMove.style.top = 171 + "px"; pawnToMove.style.left = 472 + "px"; break;
        case "redpawn2": pawnToMove.style.top = 171 + "px"; pawnToMove.style.left = 545 + "px"; break;
        case "redpawn3": pawnToMove.style.top = 91 + "px"; pawnToMove.style.left = 472 + "px"; break;
        case "redpawn4": pawnToMove.style.top = 91 + "px"; pawnToMove.style.left = 545 + "px"; break;
        case "bluepawn1": pawnToMove.style.top = 488 + "px"; pawnToMove.style.left = 472 + "px"; break;
        case "bluepawn2": pawnToMove.style.top = 565 + "px"; pawnToMove.style.left = 472 + "px"; break;
        case "bluepawn3": pawnToMove.style.top = 488 + "px"; pawnToMove.style.left = 545 + "px"; break;
        case "bluepawn4": pawnToMove.style.top = 565 + "px"; pawnToMove.style.left = 545 + "px"; break;
        case "greenpawn1": pawnToMove.style.top = 91 + "px"; pawnToMove.style.left = 80 + "px"; break;
        case "greenpawn2": pawnToMove.style.top = 91 + "px"; pawnToMove.style.left = 155 + "px"; break;
        case "greenpawn3": pawnToMove.style.top = 171 + "px"; pawnToMove.style.left = 80 + "px"; break;
        case "greenpawn4": pawnToMove.style.top = 171 + "px"; pawnToMove.style.left = 155 + "px"; break;
        case "yellowpawn1": pawnToMove.style.top = 565 + "px"; pawnToMove.style.left = 80 + "px"; break;
        case "yellowpawn2": pawnToMove.style.top = 488 + "px"; pawnToMove.style.left = 80 + "px"; break;
        case "yellowpawn3": pawnToMove.style.top = 565 + "px"; pawnToMove.style.left = 155 + "px"; break;
        case "yellowpawn4": pawnToMove.style.top = 488 + "px"; pawnToMove.style.left = 155 + "px"; break;

    }
}
function randomNum() {
    if (!clicked) {
        num = Math.floor((Math.random() * 6) + 1);; //why one is put inside the bracket
        //num = 1;
		var dice = document.getElementById('dice');
        dice.style.backgroundImage = "url(Images/" + num + ".jpg)";
        clicked = true;
    }
    if (num != 6&&DontHaveOtherFree()) {
        var bad = document.getElementById('badtext');
        bad.innerText = "Unfortunatlly you stuck";
        window.setTimeout(changePlayer, 1000);
        clicked = false;
	}	
	if(num == 6){
		var text = document.getElementById('player');
    for (var i = 1; i <=4; i++) {
		currentpawn = text.innerText + "pawn" + i; 
	    document.getElementById(currentpawn).style.border = "thick solid #80ff00";
    }
		
	}
	
	if(num != 6&&!DontHaveOtherFree()){
		var text = document.getElementById('player');
    for (var i = 1; i <=4; i++) {
		currentpawn = text.innerText + "pawn" + i;
        if (onboard[currentpawn] == 1 || positions[currentpawn]+num>=56){ 
			document.getElementById(currentpawn).style.border = "thick solid #80ff00";
		}
	}
    }
}
function randomMove(Color, paw) {
	//clicked = true//remove later
	//num  = 1

	
    var text = document.getElementById('player');
    NumOfPaw = paw; //1
    currcolor = Color; //red
    currpawn = currcolor + "pawn" + NumOfPaw; //redpawn1
	//removing the border after clicking
	for (var i = 1; i <=4; i++) {
		currentpawn = currcolor + "pawn" + i;
		document.getElementById(currentpawn).style.border = "thick none #80ff00";
	}
    currPos = positions[currpawn]; //0
    if (num + currPos > 56) { //num + 0
        Stuck();
    }
    else {
        if (clicked) { //true
            var position = currPos; //0
            if (text.innerText == currcolor) { // true
                if (onboard[currpawn] === 1 || num === 6) { //if pawn is outside the circle or if the num is 6
                    if (onboard[currpawn] === 0) { //if pawn is inside the circle
                        var doc = document.getElementById(currpawn); //captures the interested pawn
                        var curr = Number(doc.style.left.replace(/[a-z]/g, ''));
                        switch (Color) { //red
                            case "red": //this is only executed
                                doc.style.left = 366.9 + 'px';//318,359
                                doc.style.top = 70.5 + "px";//28
                                break;

                            case "yellow":
                                doc.style.left = 279.5 + 'px';
                                doc.style.top = 590.1 + "px";
                                break;

                            case "blue":
                                doc.style.left = 585.4 + 'px';
                                doc.style.top = 373.6 + "px";
                                break;

                            case "green":
                                doc.style.left = 61 + 'px';
                                doc.style.top = 287 + "px";
                                break;
                        }
                        onboard[currpawn] = 1;
                    }
                    else {//if pawn is outside circle
                        switch (Color) {
                            case "red":
                                for (i = currPos; i < position + num; i++) {//let num = 2
                                    
									stepsRed[i]();
									
                                }
                                break;

                            case "yellow":
                                for (i = currPos; i < position + num; i++) {
                                    
									stepsYellow[i]();
									
                                }
                                break;

                            case "blue":
                                for (i = currPos; i < position + num; i++) {
                                    
									stepsBlue[i]();
									
                                }
                                break;

                            case "green":
                                for (i = currPos; i < position + num; i++) {
                                    
									stepsGreen[i]();
									
                                }
                                break;
                        }
						//window.alert(currPos);
                        positions[currpawn] = currPos;
                        var victim = HaveHover();
                        if (victim != false) {
                            ResetPawn(victim);
                        }
                        if (currPos == 56) { pawnOut[currcolor]++; onboard[currpawn] = 0; positions[currpawn] = 0; document.getElementById(currpawn).style.visibility = "hidden"; };
                        CheckForWinner();
                        changePlayer();
                    }
                    num = 0;
                    clicked = false;
                    var dice = document.getElementById('dice');
                    dice.style.backgroundImage = "url(Images/dice.gif)";
                }
                else Stuck();
            }
        }
    }
}
