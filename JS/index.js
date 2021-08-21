function skillsClick() {
	document.getElementById('home-content').style.display = "none"
	document.getElementById('code-content').style.display = "none"
	document.getElementById('skills-content').style.display = "block"
	document.getElementById('home').style.borderRight = "4px solid black"
	document.getElementById('skills').style.borderRight = "4px solid rgb(0,255,0)"
	document.getElementById('code').style.borderRight = "4px solid black"

}



function homeClick() {
	document.getElementById('home-content').style.display = "flex"
	document.getElementById('skills-content').style.display = "none"
	document.getElementById('code-content').style.display = "none"
	document.getElementById('home').style.borderRight = "4px solid cyan"
	document.getElementById('skills').style.borderRight = "4px solid black"	
	document.getElementById('code').style.borderRight = "4px solid black"
}



function codeClick() {
	document.getElementById('home-content').style.display = "none"
	document.getElementById('skills-content').style.display = "none"
	document.getElementById('code-content').style.display = "block"
	document.getElementById('home').style.borderRight = "4px solid black"
	document.getElementById('skills').style.borderRight = "4px solid black"	
	document.getElementById('code').style.borderRight = "4px solid yellow"
}



function coronaDisc() {
	document.getElementById('corona-disc').style.display = 'block';
	document.getElementById('overlay').style.display = 'block';
}



function snakeDisc() {
	document.getElementById('snake-disc').style.display = 'block';
	document.getElementById('overlay').style.display = 'block';
}



function tikDisc() {
	document.getElementById('tik-disc').style.display = 'block';
	document.getElementById('overlay').style.display = 'block';
}



function closeCoronaDisc() {
	document.getElementById('corona-disc').style.display = 'none';
	document.getElementById('overlay').style.display = 'none';
}



function closeSnakeDisc() {
	document.getElementById('snake-disc').style.display = 'none';
	document.getElementById('overlay').style.display = 'none';
}



function closeTikDisc() {
	document.getElementById('tik-disc').style.display = 'none';
	document.getElementById('overlay').style.display = 'none';
}