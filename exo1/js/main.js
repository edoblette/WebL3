window.addEventListener("load", event => {
	console.log("loaded");
	main();
});



class  element {

    constructor(container, color, id) {
	    this.element = document.createElement("div");
	    this.element.id = id;
	    this.element.className = "element";
		this.element.style.height = "50px";
		this.element.style.width = "50px";
		this.element.style.backgroundColor = color;
		this.element.style.position = "absolute";
		this.element.style.left = "10px";
		this.element.style.top =  (50 * id) + "px";
		container.appendChild(this.element);
    }

    getColor() {
        return this.color;
    }

    setColor(color) {
        this.element.style.backgroundColor = color;
    }
}

const main = event => {
	//init var
	let front_element = 0;
	let isDragging = false;
	let screen_size = 50;
	let color = ["255,0,0", "255,0,0", "255,0,0", "255,0,0", "255,0,0", "255,0,0", "255,0,0", "255,0,0", "255,0,0", "255,0,0", "255,0,0"];
	console.log("MAIN");

	let container = document.createElement("div");
	document.body.appendChild(container);


	for(var i = 0; i < 10; i++) {
		let color_pick = ("rgba(" + color[i] + ',1)');
		console.log(color_pick)
		var square = new element(container,color_pick, i);
		//square.setColor("red")
	}
		
	  
	  // ce gestionnaire sera exécuté une seule fois lorsque le curseur passera au dessus de la liste non ordonnée

	document.body.addEventListener('mousedown', e => {
	 	mouse_anchor =  parseInt((e.y /screen_size ), 10); 
		isDragging = true;
	});
	document.body.addEventListener('mouseup', e => {
		mouse_anchor =  0; 
		isDragging = false;
	});

	var tab = container.getElementsByClassName("element");
	var block_size = 50;

	document.body.onmousemove = event => { 
		
		let distance = parseInt((event.clientY - container.offsetTop)/screen_size, 10); 

		if(isDragging){

			
			if((distance >= 0) && (distance < 10))
				front_element = distance			

			

			console.log(distance );
			for(let i = 0; i < 10; i++ ){
				let distanceFront = Math.abs(front_element - i);
				let formula = (-2 * Math.pow(distanceFront,2)) + 100 ;
				console.log("je suis a une distance" + ' ' + distanceFront + ' ' + (formula/10));
				if(formula > 0){
						tab[i].style.left =  (formula) + "px";
						tab[i].style.top =  (50 * ((front_element - i) + 6 )) + "px";
						
				}else{
						tab[i].style.left = "0px";
						tab[i].style.backgroundColor = "rgb(255,0,0)";	
				}
				tab[i].style.backgroundColor = "rgb(0,0,0, "+ ( ((-3 * Math.pow(distanceFront,2)) + 100)/120) + ")";
			}

			
			/*					var block_size = 50;
					if((mouse_Y > tab[i].offsetTop ) && (mouse_Y < (tab[i].offsetTop + block_size))){
						var x = (((mouse_Y -  tab[i].offsetTop) * 10 ) / block_size);
						var formula = (-0.2 * (x*x)) + (2 * x);
						console.log('['+i+']' +formula)
						//event.target.style.width = formula + "px";
						//event.target.style.height = formula + "px";
						//console.log(formula)
						//console.log("Sourie dans le block : " + i)
			*/
		}
	  	


	}
		
  

}

function changeColor() {


	alert(this.getColor());
}
