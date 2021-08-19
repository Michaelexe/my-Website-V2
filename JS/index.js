function skillsClick() {
	document.getElementById('home-content').style.display = "none"
	document.getElementById('skills-content').style.display = "block"
	document.getElementById('home').style.borderRight = "4px solid black"
	document.getElementById('skills').style.borderRight = "4px solid rgb(0,255,0)"
}



function homeClick() {
	document.getElementById('home-content').style.display = "flex"
	document.getElementById('skills-content').style.display = "none"
	document.getElementById('home').style.borderRight = "4px solid cyan"
	document.getElementById('skills').style.borderRight = "4px solid black"	
}