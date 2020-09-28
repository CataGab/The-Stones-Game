var playerID = 1;
var newscore = 0;
var user;
var player;
var json;
var jsonData;
var coordinates;
var idcount = 0 ;
var userExist = 0;
var file = "data.json"; 
//creating the rule for the player that he can only click squares adjacent to it;


// checking if the user exists
function checkUser(){
	if(getCookie("player") != "" && getCookie("player") != null){
		return true;
	}
	else{
		return false;
	}
}

//blocking the powerups buttons if user doesn't exist
function onreload(){
		if(checkUser()){
			document.getElementById("player"+playerID).innerHTML = getCookie("player");
			readTextFile(file);
		}
		for(var i=1;i<6;i++){
			var dbl = "double"+i;
			var rep = "replacement"+i;
			var free = "freedom"+i;
			if(!checkUser()){
				document.getElementById(dbl).disabled = true;
				document.getElementById(rep).disabled = true;
				document.getElementById(free).disabled = true;
			}
			else if(playerID == i){
				document.getElementById(dbl).disabled = false;
				document.getElementById(rep).disabled = false;
				document.getElementById(free).disabled = false;
				highlight();
			}
		}
}

// coloring the buttons
function gameBoard(boxID){

	if(checkUser()){
		if(playerID==1){
			document.getElementById(boxID).style.background='red';
		}
		if(playerID==2){
			document.getElementById(boxID).style.background='green';
		}
		if(playerID==3){
			document.getElementById(boxID).style.background='blue';
		}
		if(playerID==4){
			document.getElementById(boxID).style.background='purple';
		}
		if(playerID==5){
			document.getElementById(boxID).style.background='orange';
		}
		document.getElementById(boxID).disabled = true;
		//send data to jsp, from jsp send data to java class which does the validation and the cleaning bits of the data. that data is sent to data.json file using Gson.
//// 1.create a class which retrieve json data in java
		// 2.strip. using  brackets, curly brackets, comas
		// 3.once u get the username for example, u change that username to the new username chosen by the player.
		// 4. join everything back to create the json format again. (nonstrip)
		// 5. send that data back to data.json file
		
		
		
	}
}
//code that applies a move to my json 







//reading from text file
function readTextFile(file){    
    var rawFile = new XMLHttpRequest();
    rawFile.open("GET", file, false);
    rawFile.onreadystatechange = function ()
    {
        if(rawFile.readyState === 4)
        {
            if(rawFile.status === 200 || rawFile.status == 0)
            {
                jsonData = rawFile.responseText;
				var json = JSON.parse(jsonData);
				for(var i = 0;i<=4 ;i++){
					coordinates = json.playerInfo[i].coordinates;
					var coorlen = coordinates.length;
					playerID = json.playerInfo[i].playerID;
					console.log(playerID);
					username = json.playerInfo[i].username;	
					if(username != null)
					{
						userExist++;
					}
					if(userExist == 5){
						document.getElementById("addPlayer").disabled = true;
					}
					console.log(username);
					for(j = 0; j< coorlen; j++)
					{
						coordinates = json.playerInfo[i].coordinates[j];
						gameBoard(coordinates);
						console.log(coordinates);
						adjacentPlace(coordinates);
					}
					dobble = json.playerInfo[i].Double;
					console.log(dobble);
					replacement = json.playerInfo[i].replacement;
					console.log(replacement);
					freedom = json.playerInfo[i].freedom;
					console.log(freedom);
					newscore = json.playerInfo[i].score;
					console.log(newscore);
					if(dobble){
						doubleCard("double"+playerID);
					}
					if(replacement){
						replacementCard("replacement"+playerID);
					}
					if(freedom){
						freedomCard("freedom"+playerID);
					}
					Score(newscore);
					addPlayer(username);
				}
			}
        }
    }
    rawFile.send(null);
} 



// the gameplay function
function gamePlay(){
	var x = Math.floor(Math.random() * 6) + 0; // generating the random position for the game when a user registers 
	var y = Math.floor(Math.random() * 10) + 0;
	console.log(x+" "+y);
	var idd = "b"+x+"."+y;
	gameBoard(idd);	
}

//BIG BANG FUnction

function createPlayer(){
	
	user = prompt("Please enter your name!", "");
    if (user != "" && user != null) {
        setCookie(user, playerID, 365);
		setCookie("player", user, 365);
		gamePlay();
		onreload();
	}	
	//console.log(getCookie(user));
}

//adjacent placement
function adjacentPlace(coordinates){
	var noDott = coordinates.substr(1);
	x = noDott.split(".");
	y = x[1];
	x = x[0];
	console.log(x,y);
	
	/*if(x == 0 && y == 0){           //left top corner      //vector of all the placed putting playerID to every coordinate and 0 for empty ones.
		if(x && y+1 are occupied);
		if(x+1 && y are occupied);
		if(x+1 && y+1 are occupied);
	}
	else if(x == 0 && y == 9){      //right top corner
		if(x && y-1 are occupied);
		if(x+1 && y-1 are occupied);
		if(x+1 && y are occupied);			
	}
	else if(x == 5 && y == 0){      //left bottom corner
		if(x-1 && y are occupied);
		if(x-1 && y+1 are occupied);
		if(x && y+1 are occupied);
	}
	else if(x == 5 && y == 9){      //right bottom corner
		if(x && y-1 are occupied);
		if(x-1 && y-1 are occupied);
		if(x-1 && y are occupied);			
	} 	
	else if(x == 0){ 				// if it is top margin
		if(x && y-1 are occupied);
		if(x && y+1 are occupied);
		if(x+1 && y-1 are occupied);
		if(x+1 && y are occupied);
		if(x+1 && y+1 are occupied);
		}
	}
	else if(x == 5){				// if it is bottom margin
		if(x && y-1 are occupied);
		if(x && y+1 are occupied);
		if(x-1 && y-1 are occupied);
		if(x-1 && y are occupied);
		if(x-1 && y+1 are occupied);
		
	}
	else if(y == 0){				// if it is left margin
		if(x-1 && y are occupied);
		if(x-1 && y+1 are occupied);
		if(x && y+1 are occupied);
		if(x+1 && y are occupied);
		if(x+1 && y+1 are occupied);
	}
	else if(y == 9){				// if it is right margin
		if(x-1 && y are occupied);
		if(x-1 && y-1 are occupied);
		if(x && y-1 are occupied);
		if(x+1 && y are occupied);
		if(x+1 && y-1 are occupied);
	}
	else{
		if(x-1 && y-1 are occupied);
		if(x-1 && y are occupied);
		if(x-1 && y+1 are occupied);
		if(x && y-1 are occupied);
		if(x && y+1 are occupied);
		if(x+1 && y-1 are occupied);
		if(x+1 && y are occupied);
		if(x+1 && y+1 occupied with a stone of the same color/player id = legal move);
		
	}
	if player can t make a move then 
	*/
	

				
				
}

//end of the game function

function endGame(){
	deleteCookie(user);
	deleteCookie("player");
}


//highlight who is playing at the moment
function highlight(){
	document.getElementById("highlight"+playerID).style.borderColor = "yellow";
}

//adding a player function
function addPlayer(username){
	document.getElementById("player"+playerID).innerHTML = username;
}

//score
function Score(newscore){
	document.getElementById("score"+playerID).innerHTML = newscore;
}



//powerups
function doubleCard(card){
	document.getElementById(card).disabled = true;
	document.getElementById(card).checked = false;
}

function replacementCard(card){
	document.getElementById(card).disabled = true;
	document.getElementById(card).checked = false;
}

function freedomCard(card){
	document.getElementById(card).disabled = true;
	document.getElementById(card).checked = false;
}

// setting a cookie
function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    var expires = "expires="+d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

//getting a cookie
function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

//DELETING SANTA's COOKIE
function deleteCookie(cname){
	document.cookie = "username="+cname+"; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
}

