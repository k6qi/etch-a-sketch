const grid = document.querySelector('#grid-container');
const gridSize= prompt('Enter your desired grid size (max 100)'); 
const resetButton = document.querySelector('#reset-button');
const gridSquareSize = 960 / gridSize;

function createGrid(){
    for(let i =0; i< gridSize * gridSize; i++){
        let gridSquare = document.createElement('div');
        gridSquare.classList.add('grid-square');
        gridSquare.style.cssText = `width: ${gridSquareSize}px; height: ${gridSquareSize}px; background-color: antiquewhite;`; 
        grid.appendChild(gridSquare);
        gridSquare.addEventListener('mouseover',() =>{
            gridSquare.style.backgroundColor = 'black'; 
        })
       
      
    }
  
}
createGrid();


