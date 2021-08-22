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



function autoDisc() {
	document.getElementById('auto-disc').style.display = 'block';
	document.getElementById('overlay').style.display = 'block';
}



function passDisc() {
	document.getElementById('pass-disc').style.display = 'block';
	document.getElementById('overlay').style.display = 'block';
}



function webDisc() {
	document.getElementById('web-disc').style.display = 'block';
	document.getElementById('overlay').style.display = 'block';
}



function thisWebDisc() {
	document.getElementById('this-web-disc').style.display = 'block';
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



function closeAutoDisc() {
	document.getElementById('auto-disc').style.display = 'none';
	document.getElementById('overlay').style.display = 'none';
}



function closePassDisc() {
	document.getElementById('pass-disc').style.display = 'none';
	document.getElementById('overlay').style.display = 'none';
}



function closeWebDisc() {
	document.getElementById('web-disc').style.display = 'none';
	document.getElementById('overlay').style.display = 'none';
}



function closeThisWebDisc() {
	document.getElementById('this-web-disc').style.display = 'none';
	document.getElementById('overlay').style.display = 'none';
}



function closeMenu() {
	document.getElementById('menu-open').style.display = 'none';
}



function openMenu() {
	document.getElementById('menu-open').style.display = 'flex';
}



function skillsMenuClick() {
	document.getElementById('home-content').style.display = "none"
	document.getElementById('code-content').style.display = "none"
	document.getElementById('skills-content').style.display = "block"
	document.getElementById('menu-open').style.display = "none"

}



function homeMenuClick() {
	document.getElementById('home-content').style.display = "flex"
	document.getElementById('skills-content').style.display = "none"
	document.getElementById('code-content').style.display = "none"
	document.getElementById('menu-open').style.display = "none"
}



function codeMenuClick() {
	document.getElementById('home-content').style.display = "none"
	document.getElementById('skills-content').style.display = "none"
	document.getElementById('code-content').style.display = "block"
	document.getElementById('menu-open').style.display = "none"
}