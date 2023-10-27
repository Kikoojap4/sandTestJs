let grid = []
let mainWidth = 0
let mainHeight = 0
let x = 0
let y = 0
let x2 = 0
let y2 = 0
let clignotement = false
let sideScrolls = false

function setup() {
    
    createCanvas(innerWidth-20, innerHeight-50);
    /* faire une boucle pour remplir la variable grid avec des O et aléatoirement mettre un 1*/
    makeAGrid();
    frameRate(30);
    
    }

    function makeAGrid(){
    grid = []
    for(let i = 0; i < 100; i++){
        grid.push([]);
        for(let j = 0; j < 45; j++){
            grid[i][j] = true;
        }
    }
}
    function littleAnimation(){
        for(let i = 0; i < 100; i+=2){
            grid[i][i] = !grid[i][i]
        }
    }
    function makeAP(debutX,debutY){
        makeALine(debutX,debutY,2,20)
        makeALine(debutX+2,debutY,5,2)
        makeALine(debutX+2,debutY+8,5,2)
        makeALine(debutX+5,debutY+2,2,6)
    }
    function makeAA(debutX,debutY){
        makeALine(debutX,debutY,2,20)
        makeALine(debutX+2,debutY,6,2)
        makeALine(debutX+6,debutY+2,2,18)
        makeALine(debutX+2,debutY+9,4,2)
    }
    function makeAJ(debutX, debutY){
        makeALine(debutX,debutY,2,20)
        makeALine(debutX-4,debutY+18,4,2)
        makeACube(debutX-4,debutY+16,2)
    }
    function makeAO(debutX,debutY){
        makeALine(debutX,debutY,2,20)
        makeALine(debutX,debutY,7,2)
        makeALine(debutX+5,debutY+2,2,18)
        makeALine(debutX,debutY+18,7,2)
    }
    function makeAK(debutX,debutY){
        makeALine(debutX,debutY,2,20);
        makeACube(debutX+2,debutY+8,2)
        makeACube(debutX+3,debutY+7,2)
        makeACube(debutX+4,debutY+6,2)
        makeACube(debutX+5,debutY+5,2)
        makeALine(debutX+5,debutY,2,7);
        makeACube(debutX+3,debutY+9,2)
        makeACube(debutX+4,debutY+10,2)
        makeALine(debutX+5,debutY+11,2,9);

    }
    function makeAI(debutX,debutY){
        makeALine(debutX,debutY+4,2,16)
        makeACube(debutX,debutY,2)
    }

    function makeACube(debutX,debutY,taille){
        for (let i = debutX;i<debutX+taille;i++){
            for(let j = debutY;j<debutY+taille;j++){
                grid[i][j] = false;
            }
        }
    }

    function makeALine(debutX,debutY,hauteur,largeur){
        for (let i = debutX;i<debutX+hauteur;i++){
            for(let j = debutY;j<debutY+largeur;j++){
                grid[i][j] = false;
            }
        }
        

    }

    function clignottement(){
        clignotement = !clignotement;
    }
  function draw() {
    
    x = floor(mouseX / mainWidth);
    y = floor(mouseY / mainHeight);
    background(1);
    drawAGrid();

    fill(255,0,0)
    text(x+' '+y, 10, 10)

    if(sideScrolls == true){
        if(x2 > 99){
            x2 = 0;
            y2 += 1;
        }
        if(y2 > 44){
            y2 = 0;
        }
        grid[x2][y2] = !grid[x2][y2] ;
        x2 += 1;
    }
    // if(true){
    //     grid[x2][y2] = !grid[x2][y2] ;
    //     x2 += 2;
    //     while(x2 < 100 & x2 > 0){
    //         while(y2 < 45){
    //             grid[x2][y2] = !grid[x2][y2] ;
    //             y2 += 1;
    //             x2 += 1;
    //         }
    //     }
    // }
    

  } 


  function drawKikoojap(){
    makeAK(2,7)
    makeAI(11,7)
    makeAK(15,7)
    makeAO(24,7)
    makeAO(33,7)
    makeAJ(46,7)
    makeAA(50,7)
    makeAP(60,7)
  }
  function drawAGrid(){
    /* dessiner une grille en fonction de la variable grid */
    mainWidth = width / grid.length;
    mainHeight = height / grid[0].length;
    noStroke();
    for(let i = 0; i < grid.length; i++){
        for(let j = 0; j < grid[i].length; j++){
            if(grid[i][j] == true){
                if(clignotement == true){
                    if(frameCount%2 == 0){
                        fill(255);
                    } else {
                        fill(0);
                    }
                } else {
                    fill(255);
                }
                
            } else {
                if(clignotement == true){
                    if(frameCount%2 == 0){
                        fill(0);
                    }
                    else{
                        fill(255);
                    }
                }
                else{
                    fill(0);
                }
                
                
            }
            rect(i * mainWidth, j * mainHeight, mainWidth, mainHeight);
        }
    }
  }


  function round(){
    // remplir la grid de true
    
  }
  function invertAll(){
    for(let i = 0; i < grid.length; i++){
        for(let j = 0; j < grid[i].length; j++){
            grid[i][j] = !grid[i][j];
        }
    }
  }
    function sideScroll(){
        sideScrolls = !sideScrolls;

    }
    function mousePressed(){
        /* si on clique sur une case, on change la valeur de la case */
        x = floor(mouseX / mainWidth);
        y = floor(mouseY / mainHeight);
        if(grid[x][y] == true){
            grid[x][y] = false;
        } else {
            grid[x][y] = true;
        }
    }


    function refresh(){
        makeAGrid();
        clignotement = false
        x2 = 0;
        y2 = 0;

    }


    function eraseGrid(){
        for(let i = 0; i < grid.length; i++){
            for(let j = 0; j < grid[i].length; j++){
                grid[i][j] = false;
            }
        }
    }

    