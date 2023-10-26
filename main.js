let grid = []
let mainWidth = 0
let mainHeight = 0
let x = 0
let y = 0
let x2 = 0
let y2 = 0

function setup() {
    
    createCanvas(1440, 798);
    /* faire une boucle pour remplir la variable grid avec des O et aléatoirement mettre un 1*/
    makeAGrid();
    frameRate(500);


    
    }
    function makeAGrid(){
    grid = []
    for(let i = 0; i < 75; i++){
        grid.push([]);
        for(let j = 0; j < 37; j++){
            grid[i][j] = true;
        }
    }
    makeAK(2,7)
    makeAI(11,7)
    makeAK(15,7)
    makeAO(24,7)
    makeAO(33,7)
    //makeACube(46,7,2)
    
    }
    function makeAJ(debutX, debutY){
        makeALine(46,7,2,20)
        makeALine(42,25,4,2)
        makeACube(42,23,2)
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

  function draw() {
    if(x2 > 99){
        x2 = 0;
        y2 += 1;
    }
    if(y2 > 49){
        y2 = 0;
    }
    x = floor(mouseX / mainWidth);
    y = floor(mouseY / mainHeight);
    background(1);
    drawAGrid();

    fill(255,0,0)
    text(x+' '+y, 10, 10)
    //grid[x2][y2] = !grid[x2][y2] ;
    x2 += 1;
    // offsetI = frameCount % 2
    // offsetJ = int(frameCount% 4/2 )
    // for (let i = 0; i < grid.length; i ++) {
    //     for (let j = frameCount%2; j < grid[i].length; j +=2) {
    //         if (grid[i][j] == true) {
    //             gravityGrid(i, j);
    //         }
    //     }
    // }
  } 




//   function gravityGrid(x,y){
//     if (x == grid.length - 1 || y == grid[x].length - 1) {
//         return;
//     }
//     tab = [grid[x][y], grid[x + 1][y], grid[x][y + 1], grid[x + 1][y + 1]];
//     if (!tab[0] && tab[1] && !tab[2] && !tab[3]) {
//         grid[x+1][y] = false
//         grid[x+1][y+1] = true
//     } else if (tab[0] && !tab[1] && !tab[2] && !tab[3]) {
//         grid[x][y] = false
//         grid[x][y+1] = true
//     } else if (!tab[0] && tab[1] && !tab[2] && tab[3]) {
//         grid[x+1][y] = false
//         grid[x][y+1] = true
//     } else if (tab[0] && !tab[1] && tab[2] && !tab[3]) {
//         grid[x][y] = false
//         grid[x+1][y+1] = true
//     } else if (!tab[0] && tab[1] && tab[2] && !tab[3]) {
//         grid[x+1][y] = false
//         grid[x+1][y+1] = true
//     } else if (tab[0] && !tab[1] && !tab[2] && tab[3]) {
//         grid[x][y] = false
//         grid[x][y+1] = true
//     } else if (tab[0] && tab[1] && !tab[2] && !tab[3]) {
//         grid[x][y] = false
//         grid[x+1][y] = false
//         grid[x][y+1] = true
//         grid[x+1][y+1] = true
//     } else if (tab[0] && tab[1] && !tab[2] && tab[3]) {
//         grid[x][y] = false
//         grid[x][y+1] = true
//     } else if (tab[0] && tab[1] && tab[2] && !tab[3]) {
//         grid[x+1][y] = false
//         grid[x+1][y+1] = true
//     }

//   }


  function drawAGrid(){
    /* dessiner une grille en fonction de la variable grid */
    mainWidth = width / grid.length;
    mainHeight = height / grid[0].length;

    for(let i = 0; i < grid.length; i++){
        for(let j = 0; j < grid[i].length; j++){
            if(grid[i][j] == true){
                fill(255);
            } else {
                fill(0);
            }
            rect(i * mainWidth, j * mainHeight, mainWidth, mainHeight);
        }
    }
  }


  function round(){
    // remplir la grid de true
    
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

    }


    function eraseGrid(){
        for(let i = 0; i < grid.length; i++){
            for(let j = 0; j < grid[i].length; j++){
                grid[i][j] = false;
            }
        }
    }

    