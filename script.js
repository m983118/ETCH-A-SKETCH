// initail the webpage
let size = 16;
resetShow(size)
resetCell(size);
senseMouse();

// player click the button
const btn = document.querySelector(".changeGrid");
btn.addEventListener("click", changeGrid);

// button refresh the webpage
function changeGrid(){
    size = prompt("input the size of grids <smaller than 100> ");
    if (size <= 100) {
        resetShow(size)
        resetCell(size);
        senseMouse();
    }
    else {
        changeGrid();
    }
}

// make cells sense the mouserover
function senseMouse(){
    let cells = document.querySelectorAll(".cell");
    for (cell of cells) {
    cell.addEventListener("mouseover", function(e){
        e.target.style["background-color"] = "white";
    });
    }
}

// make cells fit the gameZone
function resetCell(size){
  const gameZone = document.querySelector(".gameZone");
  gameZone.innerHTML = "";
  let cellBorder = (500/size);
  for (let row = 0; row < size; row++) {
    for (let col = 0; col < size; col++) {
      let cell = document.createElement("div");
      cell.style["background-color"]  = "black";
      cell.style["height"] = `${cellBorder}px`;
      cell.style["width"] = `${cellBorder}px`;
      cell.classList.add("cell");
      gameZone.appendChild(cell);  
    }
  }
}

// reset showFrame information
function resetShow(size){
    const showSize = document.querySelector(".showFrame");
    showSize.innerHTML = `Now size of grids :<br>${size} x ${size}`;
}