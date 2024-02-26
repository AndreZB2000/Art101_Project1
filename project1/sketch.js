let backg;
let colour;
let img;
let brush;
let weight;
let indicatorY;
let indicatorX1;
let indicatorXY1;
let indicatorX2;
let indicatorXY2;
function setup() {
    createCanvas(500, 500);
    background(255);
    backg = loadImage('assets/ui.png');
    colour = (0, 0, 0);
    brush = 1;
    weight = 1;
    indicatorY = 0;
    indicatorX1 = 1;
    indicatorXY1 = 136;
    indicatorX2 = 293;
    indicatorXY2 = 46;
}

function draw() {
    
    
    switch(brush){
        case 1:
            stroke(colour);
            strokeWeight(weight);
            if(mouseIsPressed && mouseX > 27){
                line(mouseX, mouseY, pmouseX, pmouseY);
            }
            break;
        case 2:
            stroke(255);
            strokeWeight(40);
            if(mouseIsPressed && mouseX > 27){
                line(mouseX, mouseY, pmouseX, pmouseY);
            }
            break;
    }
    
    image(backg, 0, 0);
    
    stroke(255,0,0);
    noFill();
    strokeWeight(2);
    rect(0,indicatorY, 26, 26);
    rect(indicatorX1, 439, indicatorXY1, 60)
    rect(indicatorX2, 439, indicatorXY2, 60)
}

function mousePressed(){
    if(0 <= mouseX && 27 >= mouseX){
        if(0 <= mouseY && 27 >= mouseY){
            colour = [255, 255, 255];
            indicatorY = 1;
        }
        else if(27 <= mouseY && 54 >= mouseY){
            colour = [255, 255, 8];
            indicatorY = 28;
        }
        else if(54 <= mouseY && 81 >= mouseY){
            colour = [255, 85, 255];
            indicatorY = 55;
        }
        else if(81 <= mouseY && 108 >= mouseY){
            colour = [255, 85, 85];
            indicatorY = 84;
        }
        else if(108 <= mouseY && 135 >= mouseY){
            colour = [85, 255, 255];
            indicatorY = 111;
        }
        else if(135 <= mouseY && 162 >= mouseY){
            colour = [85, 255, 85];
            indicatorY = 139;
        }
        else if(162 <= mouseY && 189 >= mouseY){
            colour = [85, 85, 255];
            indicatorY = 165;
        }
        else if(189 <= mouseY && 216 >= mouseY){
            colour = [85, 85, 85];
            indicatorY = 193;
        }
        else if(216 <= mouseY && 243 >= mouseY){
            colour = [170, 170, 170];
            indicatorY = 220;
        }
        else if(243 <= mouseY && 270 >= mouseY){
            colour = [170, 85, 0];
            indicatorY = 247;
        }
        else if(270 <= mouseY && 297 >= mouseY){
            colour = [170, 0, 170];
            indicatorY = 274;
        }
        else if(297 <= mouseY && 324 >= mouseY){
            colour = [170, 0, 0];
            indicatorY = 303;
        }
        else if(324 <= mouseY && 351 >= mouseY){
            colour = [0, 170, 170];
            indicatorY = 329;
        }
        else if(351 <= mouseY && 378 >= mouseY){
            colour = [0, 170, 0];
            indicatorY = 357;
        }
        else if(378 <= mouseY && 405 >= mouseY){
            colour = [0, 0, 170];
            indicatorY = 383;
        }
        else if(405 <= mouseY && 432 >= mouseY){
            colour = [0, 0, 0];
            indicatorY = 411;
        }
    }
    if(439 <= mouseY && 500 >= mouseY){
        if(0 <= mouseX && 137 >= mouseX) {
            brush = 1;
            indicatorX1 = 1;
            indicatorXY1 = 136;
        }
        else if(138 <= mouseX && 293 >= mouseX) {
            brush = 2;
            indicatorX1 = 137;
            indicatorXY1 = 155;
        }
        else if(294 <= mouseX && 340 >= mouseX) {
            weight = 1;
            indicatorX2 = 293;
            indicatorXY2 = 46;
        }
        else if(341 <= mouseX && 387 >= mouseX) {
            weight = 10;
            indicatorX2 = 340;
            indicatorXY2 = 46;
        }
        else if(388 <= mouseX && 438 >= mouseX) {
            weight = 20;
            indicatorX2 = 387;
            indicatorXY2 = 50;
        }
        else if(439 <= mouseX && 500 >= mouseX) {
            background(255);
        }
    }
}
