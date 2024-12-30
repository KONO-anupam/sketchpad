const btn=document.createElement("button");
btn.textContent="number of grids"
btn.addEventListener("click",()=>{const input = parseInt(prompt("Enter the number of grids you want per side of the square:"));
    if (!isNaN(input) && input > 0 && input<=100) {
        createGrid(input);
    } else {
        alert("Please enter a valid positive number less than or equal to 100.");
    }
 });  
document.body.appendChild(btn);


const container = document.querySelector("#container");
document.body.insertBefore(btn, container);
container.style.display = "flex";
container.style.flexWrap = "wrap";
container.style.height = "480px";
container.style.width = "480px";
container.style.border = "1px solid black"; 
container.style.boxSizing="border-box"; 

function createGrid(numcell){
    container.innerHTML="";
for (let i = 0; i < numcell * numcell; i++) {
    const cell = document.createElement("div");
    const cellsize=480/numcell;
    cell.style.width = ${cellsize}px;
    cell.style.height = ${cellsize}px;
    cell.style.boxSizing = "border-box";
    cell.style.backgroundColor = "rgba(0, 0, 0, 0)";
    cell.dataset.darkness = 0;
   cell.addEventListener("mouseover",()=>{ let darkness = parseFloat(cell.dataset.darkness);
            if (darkness < 1) {
                darkness += 0.1; // 
                cell.dataset.darkness = darkness.toFixed(1);
                cell.style.backgroundColor = rgba(0, 0, 0, ${darkness});
            }
    });
    container.appendChild(cell);
}
}
createGrid(16)