let w = 400;
let h = 600;

function setup(){
    //createCanvas( 400, 400);
    //createCanvas(w,h);
    createCanvas(windowWidth, windowHeight);
    background('red');
}

function draw(){
    //background(150);    //et posa el fons i et borra tots els pasos que ja ha fet
    //noStroke();         //sense contorn
    strokeWeight(10);  //mida contorn
    stroke('skyblue');   //contorn 
    fill('black');     //color relleno
    // rect(0,0,100,100);
    ellipseMode(CENTER);
    ellipse(width/3,height/3, 100); //per posar-ho al centre
    //ellipse(300,100, 100);
    
    noFill();
    // stroke('chartreuse');
    stroke(20,mouseX,mouseY);   //quan mous el ratoli canvia el color 
    strokeWeight(5);
    triangle(mouseX,mouseY,300,300,100,300);
    
    fill('brown');
    rectMode(CENTER);
    rect(0,0,200,200);
}


//per a que quan fagis responvise, que reaccioni a la mida del navegador sense tindre que actualitzar
function windowResized(){
    resizeCanvas(windowWidth,windowHeight);
}

