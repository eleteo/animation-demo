console.log("Scrip loaded")

const CANVAS_WIDTH =600;
const CANVAS_HEIGHT = 400;
const CIRCLE_RADIUS = 50;

let circle_x = CIRCLE_RADIUS;
let circle_inc = 5;

function setup() {
    noCursor();
    createCanvas(CANVAS_WIDTH,CANVAS_HEIGHT);
    
}

function draw() {
    background(255,50,213)

    console.log(mouseX,mouseY)
    if (circle_x>CANVAS_WIDTH-CIRCLE_RADIUS || circle_x<CIRCLE_RADIUS){
        circle_inc*= -1;
    }
    circle_x += circle_inc;
    stroke("blue")
    fill("yellow");
    circle(circle_x,200,CIRCLE_RADIUS*2);
    
    fill("black");
    stroke("black");
    rect(mouseX, mouseY, 10, 10)

}