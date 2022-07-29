const canvas = document.getElementById("canvas1");
const ctx = canvas.getContext("2d");

const CANVAS_WIDTH = canvas.width = 600;
const CANVAS_HEIGHT = canvas.height = 600;

const SPRITE_SHEET = new Image();
SPRITE_SHEET.src = "../Assets/shadow_dog.png"

let x = 0;

function animate(){
    ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
    ctx.fillStyle = "#888";
    ctx.fillRect(x, 50, 100, 100);

    x++;
    console.log("x = " + x)
     
    requestAnimationFrame(animate)
}

animate();