const blackBox = document.querySelector(".container"); 
const boxes = document.getElementsByClassName("grid2");
const hoverEffect = document.getElementsByClassName("box")
const erase = document.querySelector(".eraser")
const color = document.querySelector(".black");
const reset = document.querySelector(".reset");
const brush = document.querySelector(".brushSize")

function prompGridSize(){
    let gridSize = prompt("Enter Brush Size(1-100): ")
    return gridSize;
}
brush.addEventListener("click", function(){
    newFunction(prompGridSize());
})

function newFunction(num) {
    blackBox.innerHTML = "";
    for (let i = 0; i < num; i++) {
        const grid = document.createElement("div");
        grid.classList.add("grid2");
        blackBox.appendChild(grid);

    }

    for (box of boxes) {
        for (let i = 0; i < num; i++) {
            const grid2 = document.createElement("div");
            grid2.classList.add("box");
            box.appendChild(grid2);
        }
    }
}



function hover(){
    
    for (hoverEff of hoverEffect){
        hoverEff.addEventListener("mouseenter", function(e){
            e.target.style.backgroundColor = "black";
        })
    }
}

color.addEventListener("click", function(e){
    hover();
})


function whiteBox(){
    for (hoverEff of hoverEffect){
        hoverEff.addEventListener("mouseenter", function(e){
            e.target.style.backgroundColor = "white";
        })
    }
}

    erase.addEventListener("click", function(e){
       whiteBox();
    })


function restart(){
    for (hoverEff of hoverEffect){
        hoverEff.style.backgroundColor = "white"; 
    }

}

reset.addEventListener("click", function(e){
    restart();
})

  
newFunction(10)

