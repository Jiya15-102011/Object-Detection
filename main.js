function preload(){
    img=loadImage('dog_cat.jpg');
}
function setup(){
    canvas=createCanvas(640,420);
    canvas.center();
}
function draw(){
    image(img,0,0,640,420);
    fill("purple");
    noFill();
    stroke("blue");
text("Dog",60,60);
rect(50,40,265,350);
}