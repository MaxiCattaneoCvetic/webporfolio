const typed = new Typed(`.typed`, {
strings: [
    `<i class="skill">Developer</i>`,
    `<i class="skill">Licenciado en administración</i>`,
],
stringsElement: "#cadenas-texto",
typeSpeed: 75,
startDelay: 1,
backSpeed: 40,
smartBackspace: true,
shuffle: false,
backDelay: 550,
loop: true,
loopCount: false,
showCursor: true,
cursorChar: "|",
contentType: "html",
});

// try{
// 	let btnNight = document.querySelector("#nightMode");
// btnNight.addEventListener(`click`, function (evento) {
// evento.preventDefault();
// let body = document.querySelector("#bod");
// body.classList.toggle("dark");
// let nvBar = document.querySelector(".navbar");
// nvBar.setAttribute("style", "border: 3px solid rgb(184, 178, 178);");
// verClase()
// });
// }catch{
// 	console.log("BTN disable");
// }


function verClase() {
	let body = document.querySelector("#bod");
	if(body.classList.contains("dark")){
		console.log("tiene la clase");
		let download_bt = document.querySelector(".cv-d")
		download_bt.setAttribute("style", "color: rgb(20, 109, 187);")
	}else if (!body.classList.contains("dark")){
		return
	}
}


// Proyects render

const arrProyects = [
	{ h3: "User-Login", img: "img/user-interface.png", text: "JS, HTML5, CSS3", git: "https://github.com/MaxiCattaneoCvetic/Login", web: "https://maxicattaneocvetic.github.io/Login/" },
	{ h3: "To-do App", img: "img/lista-de-verificacion.png", text: "JS, HTML5, CSS3", git: "https://github.com/MaxiCattaneoCvetic/To-do-App", web: "https://maxicattaneocvetic.github.io/To-do-App/" },
	{ h3: "Porfolio", img: "img/puesta-en-marcha.png", text: "JS, HTML5, CSS3", git: "https://github.com/MaxiCattaneoCvetic/porfolio", web: "https://maxicattaneocvetic.github.io/porfolio/" },
	{ h3: "DailanPage(desktop)", img: "img/pagina.png", text: "JS, HTML5, CSS3, Boostrap", git: "https://github.com/MaxiCattaneoCvetic/DailanKifky", web: "https://maxicattaneocvetic.github.io/DailanKifky/" },
	{ h3: "MergeWeb", img: "img/pagina.png", text: "HTML5, CSS3", git: "https://github.com/MaxiCattaneoCvetic/Merge", web: "https://maxicattaneocvetic.github.io/Merge/" },
	{ h3: "Landing Page", img: "img/www.png", text: "HTML5, CSS3", git: "https://github.com/MaxiCattaneoCvetic/Landing-Page", web: "https://maxicattaneocvetic.github.io/Landing-Page/" },
	{ h3: "Tiro al blanco(desktop)", img: "img/blanco-de-tiro.png", text: "JS, HTML5, CSS3", git: "https://github.com/MaxiCattaneoCvetic/TiroAlBlanco", web: "https://maxicattaneocvetic.github.io/TiroAlBlanco/" }
];

const arrProyectsJava = [
	{ h3: "Clinica Dental", img: "img/dentista.png",git: "https://www.linkedin.com/feed/update/urn:li:activity:7051660449469054976/"},
	{ h3: "Control de Stock", img: "img/stock.png",git: "https://github.com/MaxiCattaneoCvetic/Java-Control-Stock/tree/main"},
	{ h3: "InstitutoDH", img: "img/universidad.png",git: "https://github.com/MaxiCattaneoCvetic/InstitutoDH"},
	{ h3: "Puertos & Contenedores", img: "img/contenedores.png", git: "https://github.com/MaxiCattaneoCvetic/Contenedores-Puertos"},
	{ h3: "Calculador de impuestos", img: "img/sello.png", git: "https://github.com/MaxiCattaneoCvetic/Calculador-de-impuesto-segun-barrio-casa"},
	{ h3: "Tamagochi", img: "img/tamagochi.png",git: "https://github.com/MaxiCattaneoCvetic/Tamagochi"},
	{ h3: "Carrito de compras", img: "img/carrito.png",git: "https://github.com/MaxiCattaneoCvetic/carrito-compras"},
	{ h3: "Zoologico de animales", img: "img/zoo.png",git: "https://github.com/MaxiCattaneoCvetic/Zoo-dh"},
	{ h3: "Pizzeria Factory", img: "img/pizza.png",git: "https://github.com/MaxiCattaneoCvetic/Pizzeria"},
];
const arrProyectsReact = [
	{ h3: "Wonder Ventures", img: "img/cooperacion.png", demo: "http://wonderventures3.s3-website-us-east-1.amazonaws.com/", git: "https://github.com/MaxiCattaneoCvetic/WonderVentures/tree/main"},
	{ h3: "Safe Wallet (in progress)", img: "img/safewallet.png", demo: "https://safe-wallet-apc9r6h24-maxicattaneocvetic.vercel.app/", git: "https://safe-wallet-apc9r6h24-maxicattaneocvetic.vercel.app/"},
	{ h3: "AEGA-Web", img: "img/cooperacion.png",demo: "https://aega-react.vercel.app/", git: "https://github.com/MaxiCattaneoCvetic/AEGA"},
	{ h3: "Odontologia V2", img: "img/dentistaV2.png", demo: "https://odonto-mu.vercel.app/", git: "https://github.com/MaxiCattaneoCvetic/OdontoSolutions/tree/93e61b0772ff2413e8ceedfd6c1206cbb6729777"},
];

const  renderProyects = arrProyects =>{
	let tarjetasProyect = document.querySelector(".Html");
	arrProyects.forEach(element => {
		tarjetasProyect.innerHTML += `
		<div class= "div_proyect">
		<h3 style= "font-weight:bolder">${element.h3}</h3>
		<img src="${element.img}" alt="">
		<p>${element.text}</p>
		<span></span><a href="${element.web}" class="proyect_link" target="_blank" ">Demo</a> <a href="${element.git}" class="proyect_link" target="_blank" ">GitHub</a></span>
		</div> `
	});


}

renderProyects(arrProyects)

const  renderProyectsJava = arrProyectsJava =>{
	let tarjetasProyectjava = document.querySelector(".Java");
	arrProyectsJava.forEach(element => {
		tarjetasProyectjava.innerHTML += `
		<div class= "div_proyect">
		<h3 style= "font-weight:bolder">${element.h3}</h3>
		<img src="${element.img}" alt="">
		<a href="${element.git}" class="proyect_link" target="_blank" ">GitHub</a>
		</div> `
	});
}

	renderProyectsJava(arrProyectsJava)





const  renderProyectsReact = arrProyectsJava =>{
	let tarjetasProyectreact = document.querySelector(".React");
	arrProyectsJava.forEach(element => {
		tarjetasProyectreact.innerHTML += `
		<div class= "div_proyect">
		<h3 style= "font-weight:bolder">${element.h3}</h3>
		<img src="${element.img}" alt="">
		<a href="${element.demo}" class="proyect_link" target="_blank" ">Demo</a>
		<a href="${element.git}" class="proyect_link" target="_blank" ">GitHub</a>
		</div> `
	});
}
	renderProyectsReact(arrProyectsReact)








//FORM

let validacionNombre = ()=>{
	let nombre = document.querySelector("#nombre").value
	let divERROR = document.querySelector(".nombreError")
	if(nombre.length < 3){
		divERROR.innerHTML = `EL nombre no puede contener menos de 3 caracteres`
		divERROR.setAttribute("style","color:red")
		return 1
	}else if(nombre.length >= 3){
		divERROR.innerHTML = ``;
		return nombre
	}
}
let validacionEmail = ()=>{
	let email = document.querySelector("#email").value
	let divERRORc = document.querySelector(".emailError")
	if(email.includes("@")){
		divERRORc.innerHTML = ``;
		return email
	}else if(!email.includes("@")){
		divERRORc.innerHTML = `Por favor incluya un correo en formato válido`
		divERRORc.setAttribute("style","color:red")
		return 1
	}
}

let validacionComments = () =>{
	let comments = document.querySelector("#comments").value
	let divERROR = document.querySelector(".commentsError")
	if(comments.length <= 1){
		divERROR.innerHTML = `Por favor ingrese un comentario valido`
		divERROR.setAttribute("style","color:red")
		return 1
	}else if(comments.length >1){
		divERROR.innerHTML =""
		return comments
	}
}

let normalizadorDatos = (nombre,email,comments) =>{
	let arrDatos =[]
	let nombreLW = nombre.toLowerCase();
	let emailLW = email.toLowerCase();
	let commentsLW = comments.toLowerCase()
	arrDatos.push(nombreLW);
	arrDatos.push(emailLW);
	arrDatos.push(commentsLW)
	console.log(arrDatos);
	let ok = true 
	agradecer(ok,nombre)
	return arrDatos
}
// si esta mal retornan 1

let msjAgradecer = (nombre)=>{
	let pAgradecer = document.querySelector(".agradecer")
	pAgradecer.innerHTML = `Muchas gracias por contactarme ${nombre} en breve me contactare contigo! `
}

let msjClear =()=>{
	let pAgradecer = document.querySelector(".agradecer")
	pAgradecer.innerHTML = ``

}

let agradecer = (ok,nombre) =>{
	if(ok){
		msjAgradecer(nombre)
		setTimeout(msjClear,4000)
	}else{
		return
	}
}

let btnForm = document.querySelector(".form-btn")
btnForm.addEventListener(`click`, function (evento){
	evento.preventDefault()
	let form = document.querySelector("form")
	let nombreCk = validacionNombre()
	let emailCk = validacionEmail()
	let commentsCK = validacionComments()
	if(nombreCk != 1 && emailCk != 1 && commentsCK != 1){
		normalizadorDatos(nombreCk,emailCk,commentsCK);
		form.submit()
	}else{
		console.log("esta mal");
	}

})

let btnReset = document.querySelector(".r")
btnReset.addEventListener(`click`,function(){
	let divERRORc = document.querySelector(".emailError")
	let divERROR = document.querySelector(".nombreError")
	let divERRORcc = document.querySelector(".commentsError")
	divERROR.innerHTML ="";
	divERRORc.innerHTML ="";
	divERRORcc.innerHTML ="";

})






let btnMore = document.querySelector(".btnmore")

btnMore.addEventListener(`click`, function () {
	let informacion_proyectos = document.querySelector(".html")
	let booleanInfo = informacion_proyectos.classList.toggle("ab");
	if(booleanInfo){
		btnMore.textContent = "Cerrar"
	}else{
		btnMore.textContent = "+MORE"

	}

	
})

let btnMoreRc = document.querySelector(".rcbtn")

btnMoreRc.addEventListener(`click`, function () {
	let informacion_proyectos_rc = document.querySelector(".react");
	let booleanInforc = informacion_proyectos_rc.classList.toggle("ab")
	if(booleanInforc){
		btnMoreRc.textContent = "Cerrar"
	}else{
		btnMoreRc.textContent = "+MORE"
	}
	
	
})

let btnMorejs = document.querySelector(".jsbtn")

btnMorejs.addEventListener(`click`, function (evento) {
	let informacion_proyectos_js = document.querySelector(".java");
	let booleanInfoJs = informacion_proyectos_js.classList.toggle("ab")
	if(booleanInfoJs){
		btnMorejs.textContent = "Cerrar"
	}else{
		btnMorejs.textContent = "+MORE"
	}
	
	
})