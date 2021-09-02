function skillsClick() {
	document.getElementById('home-content').style.display = "none"
	document.getElementById('code-content').style.display = "none"
	document.getElementById('skills-content').style.display = "block"
	document.getElementById('contact-me-content').style.display = "none"
	document.getElementById('home').style.borderRight = "4px solid black"
	document.getElementById('skills').style.borderRight = "4px solid rgb(0,255,0)"
	document.getElementById('code').style.borderRight = "4px solid black"
	document.getElementById('contact').style.borderRight = "4px solid black"

}



function homeClick() {
	document.getElementById('home-content').style.display = "flex"
	document.getElementById('skills-content').style.display = "none"
	document.getElementById('code-content').style.display = "none"
	document.getElementById('contact-me-content').style.display = "none"
	document.getElementById('home').style.borderRight = "4px solid cyan"
	document.getElementById('skills').style.borderRight = "4px solid black"	
	document.getElementById('code').style.borderRight = "4px solid black"
	document.getElementById('contact').style.borderRight = "4px solid black"
}



function codeClick() {
	document.getElementById('home-content').style.display = "none"
	document.getElementById('skills-content').style.display = "none"
	document.getElementById('code-content').style.display = "block"
	document.getElementById('contact-me-content').style.display = "none"
	document.getElementById('home').style.borderRight = "4px solid black"
	document.getElementById('skills').style.borderRight = "4px solid black"	
	document.getElementById('code').style.borderRight = "4px solid yellow"
	document.getElementById('contact').style.borderRight = "4px solid black"
}



function contactMeClick() {
	document.getElementById('home-content').style.display = "none"
	document.getElementById('skills-content').style.display = "none"
	document.getElementById('code-content').style.display = "none"
	document.getElementById('contact-me-content').style.display = "block"
	document.getElementById('home').style.borderRight = "4px solid black"
	document.getElementById('skills').style.borderRight = "4px solid black"	
	document.getElementById('code').style.borderRight = "4px solid black"
	document.getElementById('contact').style.borderRight = "4px solid rgb(237,9,144)"
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
	document.getElementById('contact-me-content').style.display = "none"
	document.getElementById('menu-open').style.display = "none"

}



function homeMenuClick() {
	document.getElementById('home-content').style.display = "flex"
	document.getElementById('skills-content').style.display = "none"
	document.getElementById('code-content').style.display = "none"
	document.getElementById('contact-me-content').style.display = "none"
	document.getElementById('menu-open').style.display = "none"
}



function codeMenuClick() {
	document.getElementById('home-content').style.display = "none"
	document.getElementById('skills-content').style.display = "none"
	document.getElementById('code-content').style.display = "block"
	document.getElementById('contact-me-content').style.display = "none"
	document.getElementById('menu-open').style.display = "none"
}



function contactMenuClick() {
	document.getElementById('home-content').style.display = "none"
	document.getElementById('skills-content').style.display = "none"
	document.getElementById('code-content').style.display = "none"
	document.getElementById('contact-me-content').style.display = "block"
	document.getElementById('menu-open').style.display = "none"
}




const email1 = document.querySelector('#email1')
const emailText1 = email1.children[0].innerHTML

email1.addEventListener('click',function(){

	if (document.querySelector('#copied')!==null){
		document.querySelector('#copied').remove()
	}

	const tempElement = document.createElement('textarea')
	tempElement.value = emailText1
	document.body.append(tempElement)
	tempElement.select()
	document.execCommand('copy')
	tempElement.remove()
	const copied = document.createElement('h2')
	copied.append('COPIED!')

	setTimeout(function(){
		document.querySelector('.emails-container').append(copied)
	},500)

	copied.id = 'copied'
})



const email2 = document.querySelector('#email2')
const emailText2 = email2.children[0].innerHTML

email2.addEventListener('click',function(){

	if (document.querySelector('#copied')!==null){
		document.querySelector('#copied').remove()
	}

	const tempElement = document.createElement('textarea')
	tempElement.value = emailText2
	document.body.append(tempElement)
	tempElement.select()
	document.execCommand('copy')
	tempElement.remove()
	const copied = document.createElement('h2')
	copied.append('COPIED!')

	setTimeout(function(){
		document.querySelector('.emails-container').append(copied)
	},500)

	copied.id = 'copied'
})