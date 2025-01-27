// I, Nick Efe Oni, am the author of all the code written here

"use strict";


function drawOldMan(canvas) {
	let scale = (canvas.width-40) / 100; // 100 is the initial canvas width
	if (canvas.width <= 200) {
		scale = canvas.width / 100;
	}
	let context = canvas.getContext("2d");
	context.clearRect(0, 0, canvas.width, canvas.height);

	context.translate(scale*50+(canvas.width <= 200? 0:20), scale*50+(canvas.width <= 200? 0:20)); // so that everything centers
	
	// draw face 
	context.beginPath();
	context.arc(0, scale*-8, scale*40, 0, 2 * Math.PI); // center (0, -18), radius 30
	context.fillStyle = "#FFD1DC"; // Set the fill color
	context.fill();  // Fill the circle with the specified color
	context.strokeStyle = "pink";
    context.stroke();
	
	// drawing eyes 
	context.beginPath();
	context.arc(scale*-15, scale*-20, scale*5, 0, 2 * Math.PI); // center (-15, -30), radius 5
	context.fillStyle = "black"; // Set the fill color
	context.fill();  // Fill the circle with the specified color
	context.lineWidth = 7;
	context.strokeStyle = "white";
    context.stroke();
	
	context.beginPath();
	context.arc(scale*15, scale*-20, scale*5, 0, 2 * Math.PI); // center (15, -30), radius 5
	context.fillStyle = "black"; // Set the fill color
	context.fill();  // Fill the circle with the specified color
	context.lineWidth = 7;
	context.strokeStyle = "white";
    context.stroke();
	
	// drawing lips
	context.beginPath();
	context.ellipse(0, scale*10, scale*7, scale*5, 0, 0, 2 * Math.PI); // center (0, 0), radius (7, 5)
	context.fillStyle = "#E75480"; // Set the fill color
	context.fill();  // Fill the circle with the specified color
	context.lineWidth = 3;
	context.strokeStyle = "#FF007F";
    context.stroke();
	
	// draw teeths
	context.fillStyle = "#FFFFFF";
	context.fillRect(scale*-4, scale*6.3, scale*8, scale*4);
	
	// draw nose
	context.beginPath();
	context.arc(0, scale*-5, scale*2, 0, 2 * Math.PI); // center (0, -15), radius 2
	context.fillStyle = "#E75480"; // Set the fill color
	context.fill();  // Fill the circle with the specified color
	
	// draw beard
	context.beginPath();
	context.ellipse(0, scale*24, scale*25, scale*18, 0, 0, Math.PI); // center (0, 0), radius 7
	context.fillStyle = "grey"; // Set the fill color
	context.fill();  // Fill the circle with the specified color
	context.lineWidth = 3;
	context.strokeStyle = "#5A5A5A";
    context.stroke();
	
}

function drawBabyFace(canvas) {
	let scale = (canvas.width-40) / 100; // 100 is the initial canvas width
	if (canvas.width <= 200) {
		scale = canvas.width / 100;
	}
	let context = canvas.getContext("2d");
	context.clearRect(0, 0, canvas.width, canvas.height);

	context.translate(scale*50+(canvas.width <= 200? 0:20), scale*50+(canvas.width <= 200? 0:20)); // so that everything centers
	
	// draw face 
	context.beginPath();
	context.arc(0, 0, scale*50, 0, 2 * Math.PI); // center (0, -30), radius 50
	context.fillStyle = "#FFD1DC"; // Set the fill color
	context.fill();  // Fill the circle with the specified color
	context.strokeStyle = "pink";
    context.stroke();
	
	// drawing eyes 
	context.beginPath();
	context.arc(scale*-25, scale*-20, scale*8, 0, 2 * Math.PI); // center (-25, -50), radius 8
	context.fillStyle = "black"; // Set the fill color
	context.fill();  // Fill the circle with the specified color
	context.lineWidth = 7;
	context.strokeStyle = "white";
    context.stroke();
	
	context.beginPath();
	context.arc(scale*25, scale*-20, scale*8, 0, 2 * Math.PI); // center (25, -50), radius 8
	context.fillStyle = "black"; // Set the fill color
	context.fill();  // Fill the circle with the specified color
	context.lineWidth = 7;
	context.strokeStyle = "white";
    context.stroke();
	
	// drawing lips
	context.beginPath();
	context.ellipse(0, scale*30, scale*12, scale*8, 0, 0, 2 * Math.PI); // center (0, 0), radius (12, 8)
	context.fillStyle = "#E75480"; // Set the fill color
	context.fill();  // Fill the circle with the specified color
	context.lineWidth = 3;
	context.strokeStyle = "#FF007F";
    context.stroke();
	
	// draw teeths
	context.beginPath();
	context.arc(scale*3, scale*+27, scale*3, 0, 2 * Math.PI); // center (3, -3), radius 3
	context.fillStyle = "#FFFFFF"; // Set the fill color
	context.fill();  // Fill the circle with the specified color
	
	context.beginPath();
	context.arc(scale*-3, scale*+27, scale*3, 0, 2 * Math.PI); // center (-3, -3), radius 3
	context.fillStyle = "#FFFFFF"; // Set the fill color
	context.fill();  // Fill the circle with the specified color
	
	// draw nose
	context.beginPath();
	context.arc(0, scale*5, scale*3, 0, 2 * Math.PI); // center(0, -25), radius 3
	context.fillStyle = "#E75480"; // Set the fill color
	context.fill();  // Fill the circle with the specified color
}

function drawTree(canvas) {
	let scale = (canvas.width-10) / 100; // 100 is the initial canvas width
	if (canvas.width <= 200) {
		scale = canvas.width / 100;
	}
	let context = canvas.getContext("2d");
	context.clearRect(0, 0, canvas.width, canvas.height);

	context.translate(scale*50+10, scale*50+10); // so that everything centers
	
	// Draw tree trunk
	context.fillStyle = "saddlebrown";
	context.fillRect(scale*-15, scale*-11, scale*30, scale*60);
	
	// Draw group of leaves
	context.beginPath();
	context.arc(scale*-14, scale*-11, scale*17, 0, 2 * Math.PI); // center (-14, -11), radius 17
	context.fillStyle = "green"; // Set the fill color
	context.fill(); // Fill the circle with the specified color
	
	context.beginPath();
	context.arc(scale*14, scale*-11, scale*17, 0, 2 * Math.PI); // center (14, -11), radius 17
	context.fillStyle = "green"; // Set the fill color
	context.fill(); // Fill the circle with the specified color
	
	context.beginPath();
	context.arc(scale*18, scale*-26, scale*17, 0, 2 * Math.PI); // center (18, -26), radius 17
	context.fillStyle = "green"; // Set the fill color
	context.fill(); // Fill the circle with the specified color
	
	context.beginPath();
	context.arc(scale*-18, scale*-26, scale*17, 0, 2 * Math.PI); // center (-18, -26), radius 17
	context.fillStyle = "green"; // Set the fill color
	context.fill(); // Fill the circle with the specified color

	context.beginPath();
	context.arc(scale*0, scale*-32, scale*17, 0, 2 * Math.PI); // center (0, -32), radius 17
	context.fillStyle = "green"; // Set the fill color
	context.fill(); // Fill the circle with the specified color
}

function drawAvocado(canvas) {
	let scale = (canvas.width-40) / 100; // 100 is the initial canvas width
	if (canvas.width <= 200) {
		scale = canvas.width / 100;
	}
	let context = canvas.getContext("2d");
	context.clearRect(0, 0, canvas.width, canvas.height);
	
	context.translate(scale*50+(canvas.width <= 200? 0:20), scale*50+(canvas.width <= 200? 0:20)); // so that everything centers
	
	// draw green edible part 
	// bottom bit
	context.beginPath();
	context.ellipse(0, scale*12, scale*30, scale*35, 0, 0, 2*Math.PI); // center (0, 2-5), radius (30, 35)
	context.fillStyle = "green"; // Set the fill color
	context.fill();  // Fill the circle with the specified color
	context.lineWidth = 5;
	context.strokeStyle = "#013220";
    context.stroke();
	
	context.beginPath();
	context.ellipse(0, scale*12, scale*25, scale*30, 0, 0, 2*Math.PI); // center (0, 2-5), radius (30, 35)
	context.fillStyle = "#90EE90"; // Set the fill color
	context.fill();  // Fill the circle with the specified color
	context.lineWidth = 5;
	context.strokeStyle = "green";
    context.stroke();
	
	// top bit
	context.beginPath();
	context.ellipse(0, scale*-13, scale*20, scale*30, 0, Math.PI, 0); // center (0, -20), radius (20, 30)
	context.fillStyle = "green"; // Set the fill color
	context.fill();  // Fill the circle with the specified color
	context.lineWidth = 5;
	context.strokeStyle = "#013220";
    context.stroke();
	
	context.beginPath();
	context.ellipse(0, scale*-13, scale*10, scale*25, 0, Math.PI, 0); // center (0, -20), radius (10, 30)
	context.fillStyle = "#90EE90"; // Set the fill color
	context.fill();  // Fill the circle with the specified color
	context.lineWidth = 5;
	context.strokeStyle = "green";
    context.stroke();
	
	// draw seed of avocado
	context.beginPath();
	context.arc(0, 17, scale*18, 0, 2 * Math.PI); // center (0, 0), radius 21
	context.fillStyle = "brown"; // Set the fill color
	context.fill();  // Fill the circle with the specified color
	context.lineWidth = 5;
	context.strokeStyle = "#5C4033";
    context.stroke();
}

function drawSun(canvas) {
	let scale = (canvas.width-40) / 100; // 100 is the initial canvas width
	if (canvas.width <= 200) {
		scale = canvas.width / 100;
	}
	let context = canvas.getContext("2d");
	context.clearRect(0, 0, canvas.width, canvas.height);

	context.translate(scale*50+(canvas.width <= 200? 0:20), scale*50+(canvas.width <= 200? 0:20)); // so that everything centers
	
	// draw main body of sun
	context.beginPath();
	context.arc(0, 0, scale*21, 0, 2 * Math.PI); // center (0, 0), radius 21
	context.fillStyle = "yellow"; // Set the fill color
	context.fill();  // Fill the circle with the specified color
	context.strokeStyle = "red";
    context.stroke();
	
	context.beginPath();
	context.arc(0, 0, scale*14, 0, 2 * Math.PI); // center (0, 0), radius 14
	context.fillStyle = "orange"; // Set the fill color
	context.fill();  // Fill the circle with the specified color
	
	context.beginPath();
	context.arc(0, 0, scale*7, 0, 2 * Math.PI); // center (0, 0), radius 7
	context.fillStyle = "red"; // Set the fill color
	context.fill();  // Fill the circle with the specified color
	
	
	
	// draw rays
	context.beginPath();
	context.moveTo(0, scale*50); // top corner
	context.lineTo(scale*-18, scale*23); // bottom left corner
	context.lineTo(scale*18, scale*23); // bottom right corner
	context.closePath();
	context.fillStyle = "yellow";
	context.fill();
	context.strokeStyle = "red";
    context.stroke();
	
	context.beginPath();
	context.moveTo(0, scale*-50); // top corner
	context.lineTo(scale*-18, scale*-23); // bottom left corner
	context.lineTo(scale*18, scale*-23); // bottom right corner
	context.closePath();
	context.fillStyle = "yellow";
	context.fill();
	context.strokeStyle = "red";
    context.stroke();
	
	context.beginPath();
	context.moveTo(scale*-50, 0); // top corner
	context.lineTo(scale*-23, scale*-18); // bottom left corner
	context.lineTo(scale*-23, scale*18); // bottom right corner
	context.closePath();
	context.fillStyle = "yellow";
	context.fill();
	context.strokeStyle = "red";
    context.stroke();
	
	context.beginPath();
	context.moveTo(scale*50, 0); // top corner
	context.lineTo(scale*23, scale*-18); // bottom left corner
	context.lineTo(scale*23, scale*18); // bottom right corner
	context.closePath();
	context.fillStyle = "yellow";
	context.fill();
	context.strokeStyle = "red";
    context.stroke();
	
}

// document.getElementById("verify-button").disabled = true;

function loadCaptcha(prevAnswerWrong, items) {
	let count = [1, 1, 1, 1, 1];
	let canvasIfTheyContainCorrectPicArray = [false, false, false, false, false];
	let index = Math.floor(Math.random() * items.length);
	if (prevAnswerWrong) {
		document.getElementById("try again").innerHTML = "Try again. ";
	}
	document.getElementById("item_to_find_&_select").innerHTML = "aieou".includes(items[index].charAt(0)) ? "n " + items[index] : " " + items[index];


	let canvasIdNamePrefix = "canvas";

	let canvasWithCorrectPictureName = canvasIdNamePrefix.concat(Math.floor(Math.random() * 5)+1);
	let originalWidth;
	for (let i = 1; i <= 5; i++) {
		let canvas = document.getElementById(canvasIdNamePrefix.concat(i));
		originalWidth = parseFloat(getComputedStyle(canvas).borderWidth);

		let size = Math.min(canvas.width, canvas.height);
		canvas.width = size;
		canvas.height = size;
		
		// even if selected showed by color green, odd if deselected
		if (document.getElementById("verify-button").disabled == false) {
			canvas.addEventListener("click", function() {
				if (++count[i-1]%2==0) {
					canvas.style.borderColor = "green";
					canvas.style.borderWidth = originalWidth*2 +"px"; 					
				} else {
					canvas.style.borderColor = "black";
					canvas.style.borderWidth = originalWidth +"px";  
				}
			});
		}
		
		let context = canvas.getContext("2d");
		console.log(canvas.id + " ==? " + canvasWithCorrectPictureName);
		if (canvas.id == canvasWithCorrectPictureName) {
			switch(items[index]) {
				case "tree": 
					drawTree(canvas);
					break;
				case "old man": 
					drawOldMan(canvas);
					break;
				case "baby face": 
					drawBabyFace(canvas);
					break;
				case "avocado": 
					drawAvocado(canvas);
					break;
				case "sun": 
					drawSun(canvas);
					break;
				default:
					console.log("The correct picture has not been choosen as look-up value! Weird. index: "+index);
			}
			canvasIfTheyContainCorrectPicArray[i-1] = true;
		} else {
			let indexOfRandomPicture = Math.floor(Math.random() * 5);
			switch(items[indexOfRandomPicture]) {
				case "tree": 
					drawTree(canvas);
					break;
				case "old man": 
					drawOldMan(canvas);
					break;
				case "baby face": 
					drawBabyFace(canvas);
					break;
				case "avocado": 
					drawAvocado(canvas);
					break;
				case "sun": 
					drawSun(canvas);
					break;
				default:
					console.log("Nothing has not been choosen as look-up value, weird!! Index: " + indexOfRandomPicture + " where value contained is " + items[indexOfRandomPicture]);
			}
			if (indexOfRandomPicture == index) {
				canvasIfTheyContainCorrectPicArray[i-1] = true;
			}
		}
	}
	

	let verifyButton = document.getElementById("verify-button");
	verifyButton.addEventListener("click", function () {
		let all_match = true;
		let valid = false;
		for(let i = 0; i < count.length; i++) {
			// if it a wrong image is selected OR a/the correct image is not selected then they 
			console.log(count[i]%2==0 && !canvasIfTheyContainCorrectPicArray[i]+ " from count value " + count[i]);
			console.log(count[i]%2!=0 && canvasIfTheyContainCorrectPicArray[i]);
			if (count[i]%2==0 && !canvasIfTheyContainCorrectPicArray[i]) {
				all_match = false;
			} 
			if (count[i]%2==1 && canvasIfTheyContainCorrectPicArray[i]) {
				all_match = false;
			}
		}
		console.log("aLL MATHC: " + all_match);
		if (all_match && !verifyButton.disabled) /*all correct pics have been selected*/ {
			// remember to add Image to canvas
			for (let i = 1; i <= 5; i++) {
				let canvas = document.getElementById(canvasIdNamePrefix.concat(i));
				canvas.removeEventListener("click", function() {
					if (++count[i-1]%2==0) {
						canvas.style.borderColor = "green";
						let originalWidth = parseFloat(getComputedStyle(canvas).borderWidth);
						canvas.style.borderWidth = originalWidth*2 +"px"; 					
					} else {
						canvas.style.borderColor = "black";
						let modifiedWidth = parseFloat(getComputedStyle(canvas).borderWidth);
						canvas.style.borderWidth = originalWidth +"px";  
					}
				});
			}
			verifyButton.disabled = true;
			valid = true;
			alert('SUCCESS! Congrats, I guess you are not a robot!');
			
		} else if (prevAnswerWrong && !verifyButton.disabled && !all_match) {
			console.log("all match is " + all_match);
			for (let i = 1; i <= 5; i++) {
				let canvas = document.getElementById(canvasIdNamePrefix.concat(i));
				canvas.removeEventListener("click", function() {
					if (++count[i-1]%2==0) {
						canvas.style.borderColor = "green";
						let originalWidth = parseFloat(getComputedStyle(canvas).borderWidth);
						canvas.style.borderWidth = originalWidth*2 +"px"; 					
					} else {
						canvas.style.borderColor = "black";
						let modifiedWidth = parseFloat(getComputedStyle(canvas).borderWidth);
						canvas.style.borderWidth = originalWidth +"px";
					}
				});
			}
			verifyButton.disabled = true;
			alert("Sorry but all your opportunities have been exhausted and you can no longer continue. You have failed the test.");
		} else if (!prevAnswerWrong && !verifyButton.disabled) {
			for (let i = 1; i <= 5; i++) {
				let canvas = document.getElementById(canvasIdNamePrefix.concat(i));
				canvas.style.borderColor = "black";
				let modifiedWidth = parseFloat(getComputedStyle(canvas).borderWidth);
				canvas.style.borderWidth = originalWidth +"px";  
			}
			alert("Try again!! Wrong answer boy!");
			loadCaptcha(true, items);
		}
	});	
}


let items = ["tree", "old man", "baby face", "avocado", "sun"];
let reinitialiseButton = document.getElementById("reinitalise-button");
reinitialiseButton.addEventListener("click", function() {
	document.getElementById("verify-button").disabled = false;
	location.reload();
});

let prevAnswerWrong = false;
loadCaptcha(prevAnswerWrong, items);