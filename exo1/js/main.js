window.addEventListener("load", event => {
	console.log("loaded");
	main();
});



class  element {

    constructor(container, id, color,  name) {
	    let newDiv = document.createElement("div");
	    newDiv.id = id;
	    newDiv.className = "element";
		newDiv.style.height = "50px";
		newDiv.style.width = "300px";
		newDiv.style.position = "absolute";
		newDiv.style.left = "10px";
		newDiv.style.top =  (50 * id) + 10 + "px";
		newDiv.style.margin = "10px";


		

		let newDivContentImg = document.createElement("img");
		newDivContentImg.id = id;
		newDivContentImg.className = "color";
		newDivContentImg.style.height = "50px";
		newDivContentImg.style.width = "50px";
		newDivContentImg.style.backgroundColor = color;

		let newDivContent = document.createElement("a");
		newDivContent.innerHTML = name;
		newDivContent.style.position = "relative";
		newDivContent.style.top =  "-20px";
		newDivContent.style.left =  "20px";
		newDivContent.className = "label";		

		newDiv.appendChild(newDivContentImg);
		newDiv.appendChild(newDivContent);
		container.appendChild(newDiv);
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
	let screen_size = 60;
	let color_label = ["Klein Blue", "Vibrant Yellow", "Living Coral", "Chive Blossom", "Vivacious", "Barrier Reef", "Deep Lake", "Ibiza Blue", "Pink Lemonade", "Blue Depths"];
	let color       = ["0, 47, 167", "255,218,41", "255,111,97", "125,93,153", "163,40,87", "0,132,161", "0,101,107", "	0,124,183", "238,109,138", "38,48,86"];
	console.log("MAIN");

	let container = document.createElement("div");
	document.body.appendChild(container);


	for(var i = 0; i < 10; i++) {
		let color_pick = ("rgba(" + color[i] + ',1)');
		console.log(color_pick)
		var square = new element(container,i, color_pick, color_label[i]);

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
				let distanceFront = i - front_element;
				let formula = (-2 * Math.pow( Math.abs(distanceFront),2)) + 100 ;
				console.log("je suis a une distance" + ' ' + distanceFront + ' ' + (formula/10));
				if(i == front_element)
					formula += 25;
				if(formula > 0){
						tab[i].style.left =  (formula) + "px";
						tab[i].style.top =  (50 * (distanceFront + 6 )) + "px";	
				}
				tab[i].style.opacity = (((-5 * Math.pow(distanceFront,2)) + 100)/100) ;
				tab[i].style.transitionDuration = "1s";
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
