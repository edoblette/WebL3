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
		newDiv.style.left = "20px";
		newDiv.style.top =  (50 * id) + 10 + "px";
		newDiv.style.margin = "30px";


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

		return newDiv;
    }
    /*
    getColor() {
        return this.newDiv.style.backgroundColor;
    }

    setColor(color) {
        this.element.style.backgroundColor = color;
    }
    */
}

const main = event => {
	//init variables
	let mouse_anchor =  0; 
	let distance = 0
	let front_element = 0;
	let isDragging = false;
	let screen_size = 60;
	let tab = [];
	let color_label = ["Klein Blue", "Vibrant Yellow", "Living Coral", "Chive Blossom", "Vivacious", "Barrier Reef", "Deep Lake", "Ibiza Blue", "Pink Lemonade", "Blue Depths"];
	let color       = ["0, 47, 167", "255,218,41", "255,111,97", "125,93,153", "163,40,87", "0,132,161", "0,101,107", "0,124,183", "238,109,138", "38,48,86"];
	console.log("MAIN");

	let container = document.createElement("div");
	document.body.appendChild(container);


	// Creation des elements

	for(let i = 0; i < 10; i++) {
		let color_pick = ("rgba(" + color[i] + ',1)');
		tab[i] = new element(container,i, color_pick, color_label[i]);
	}
		
	  
	// Gestion de la sourie
	document.body.addEventListener('mousedown', e => {
	 	mouse_anchor = parseInt((e.clientY - container.offsetTop)/screen_size, 10);
	 	//alert(mouse_anchor)
		isDragging = true;
	});
	document.body.addEventListener('mouseup', e => {
		mouse_anchor = parseInt((e.clientY - container.offsetTop)/screen_size, 10);
		isDragging = false;
	});


	document.body.onmousemove = event => { 
		
		if(isDragging){
			front_element  = parseInt((event.clientY - container.offsetTop)/screen_size, 10);
			move_elements(tab, front_element)
		}




	  	
	}
		
  

}

function move_elements(tab, front_element){

			for(let i = 0; i < 10; i++ ){
				let distanceFront = i - front_element;
				let formula = (-2 * Math.pow( Math.abs(distanceFront),2)) + 100 ;
				if(i == front_element)
					formula += 25;
				if(formula > 0){
						tab[i].style.left =  (formula) + "px";
						tab[i].style.top =  (50 * (distanceFront + 6 )) + "px";	
				}
				tab[i].style.opacity = (((-5 * Math.pow(distanceFront,2)) + 100)/100) ;
				tab[i].style.transitionDuration = "1s";
			}

}
