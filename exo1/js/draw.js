
// code partiellement trouve sur W3school !

const drawing = event => {
/*
  let container = document.createElement("div");
  container.className = "canvas";

  let canvas = document.createElement("canvas");
  canvas.id = "myPics";
  canvas.innerHTML= "\n";
  canvas.style.height = "360px";
  canvas.style.width = "560px";

  let br = document.createElement("br");

  let clearBtn = document.createElement("button");
  clearBtn.id = "clearBtn";
  clearBtn.type = "button";
  clearBtn.innerHTML= "Clear";


  container.appendChild(canvas);
    container.appendChild(br);
     container.appendChild(clearBtn);
  document.body.appendChild(container);
*/
  // When true, moving the mouse draws on the canvas
  let isDrawing = false;
  let x = 0;
  let y = 0;

  const myPics = document.getElementById('myPics');

  const context = myPics.getContext('2d');

  // The x and y offset of the canvas from the edge of the page
  const rect = myPics.getBoundingClientRect();

  // Add the event listeners for mousedown, mousemove, and mouseup
  myPics.addEventListener('mousedown', e => {
    x = e.clientX - rect.left;
    y = e.clientY - rect.top;
    isDrawing = true;
  });
  let clearBtn = document.getElementById('clearBtn');
  clearBtn.addEventListener('mousedown', e => {
    context.clearRect(0, 0, myPics.width, myPics.height);
  });  

  myPics.addEventListener('mousemove', e => {
    if (isDrawing === true) {

      drawLine(context, x, y, e.clientX - rect.left, e.clientY - rect.top, ( Math.abs(e.movementY) + Math.abs(e.movementX))  );
      x = e.clientX - rect.left;
      y = e.clientY - rect.top;
    }
  });

  window.addEventListener('mouseup', e => {
    if (isDrawing === true) {
      drawLine(context, x, y, e.clientX - rect.left, e.clientY - rect.top);
      x = 0;
      y = 0;
      isDrawing = false;
    }
  });
}
function drawLine(context, x1, y1, x2, y2, force) {
     force = Math.pow(2, force)/Math.pow(1.985, force) +1;
 console.log(force)

  context.beginPath();
  context.strokeStyle = "rgb(" + pencil_color + ')';
  context.lineWidth = force;
  context.moveTo(x1, y1);
  context.lineTo(x2, y2);
  context.stroke();
  context.closePath();
}