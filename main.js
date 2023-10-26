let grid = []
let mainWidth = 0
let mainHeight = 0
let x = 0
let y = 0


function setup() {
    
    createCanvas(1440, 798);
    /* faire une boucle pour remplir la variable grid avec des O et aléatoirement mettre un 1*/
    makeAGrid();
    frameRate(120);


    
}
  function makeAGrid(){
    grid = []
    for(let i = 0; i < 100; i++){
        grid.push([]);
        for(let j = 0; j < 50; j++){
            if(random(0, 1) > 0.5){
                grid[i].push(false)
            
            } else {
                grid[i].push(false)
            }
        }
    }
}

  function draw() {
    x = floor(mouseX / mainWidth);
    y = floor(mouseY / mainHeight);
    background(1);
    drawAGrid();

    fill(255,0,0)
    text(x+' '+y, 10, 10)

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