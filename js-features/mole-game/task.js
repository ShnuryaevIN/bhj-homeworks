let dead = document.querySelector("#dead");
let numDead = dead.textContent;
let lost = document.querySelector("#lost");
let numLost = lost.textContent;
let hole = document.querySelectorAll(".hole");

for(let elem of hole) {
    elem.addEventListener("click", () => {
        if(elem.classList.contains("hole_has-mole")) {
            numDead++;
            dead.textContent = numDead;
            if(numDead == 10) {
                alert("Вы победили!!");
                dead.textContent = 0;
                lost.textContent = 0;
                numDead = 0;
            }
        } else if(elem.classList.contains("hole_has-mole") == false) {
            numLost++;
            lost.textContent = numLost;
            if(numLost == 5) {
                alert("Вы проиграли");
                lost.textContent = 0;
                dead.textContent = 0;
                numLost = 0;
            }
        }
    }
)}
        
