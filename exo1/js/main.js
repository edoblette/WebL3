window.addEventListener("load", event => {
	console.log("loaded");
	main();
});



const main = event => {
	
	console.log("MAIN");

	var sqr = document.createElement("div");

	sqr.style.height = "100px";
	sqr.style.width = "100px";
	sqr.style.backgroundColor = "#21177D";
	document.body.appendChild(sqr);

	sqr.addEventListener("click", changeColor);
		//ctx.onClick()

}

function changeColor( ) {
	this.style.backgroundColor = "red";
}
