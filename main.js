let grid = []
let mainWidth = 0;
let mainHeight = 0;

function setup() {
    
    createCanvas(1440, 798);
    /* faire une boucle pour remplir la variable grid avec des O et aléatoirement mettre un 1*/
    for(let i = 0; i < 50; i++){
        grid.push([]);
        for(let j = 0; j < 25; j++){
            if(random(0, 1) > 0.5){
                grid[i].push(1)
            
            } else {
                grid[i].push(0)
            }
        }
    }
    frameRate(5);


    
}
  
  function draw() {
    background(1);
    drawAGrid();
    for(let i = 0; i < grid.length; i++){
        for(let j = 0; j < grid[i].length; j++){
            if(grid[i][j] == 1){
                refreshGrid(i,j);
            }
        }
    }
  } 


  function refreshGrid(x,y){
        if(grid[x][y+1]==0){
            grid[x][y+1]=1;
            grid[x][y]=0;
        }
        if(grid[x][y+1]==1 && grid[x-1][y+1]==0 ){
            grid[x+1][y+1]=1;
            grid[x][y]=0;
        }
        
  }


  function drawAGrid(){
    /* dessiner une grille en fonction de la variable grid */
    mainWidth = width / grid.length;
    mainHeight = height / grid[0].length;

    for(let i = 0; i < grid.length; i++){
        for(let j = 0; j < grid[i].length; j++){
            if(grid[i][j] == 1){
                fill(255);
            } else {
                fill(0);
            }
            rect(i * mainWidth, j * mainHeight, mainWidth, mainHeight);
        }
    }
  }

    function mousePressed(){
        /* si on clique sur une case, on change la valeur de la case */
        let x = floor(mouseX / mainWidth);
        let y = floor(mouseY / mainHeight);
        if(grid[x][y] == 1){
            grid[x][y] = 0;
        } else {
            grid[x][y] = 1;
        }
    }