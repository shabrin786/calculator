let btns = document.querySelectorAll(".btn");
let inpute = document.querySelector(".input");

let expresion = "";

btns.forEach((btn) => {
  const val = btn.innerText;
  btn.addEventListener("click", () => {
    if (val === 'C') {
      expresion = "";
      inpute.value = "";
    }

    else if (btn.classList.contains('del')){
      expresion = expresion.slice(0 , -1);
      inpute.value = expresion;
    }

    else if (val === '=') {
      try {
        if (expresion.includes('%')) {
          let [a, b] = expresion.split('%').map(Number);
          expresion = ((a * b) / 100).toString();
        } 
        else {
          expresion = eval(expresion).toString();
        }
        inpute.value = expresion;
      } 
      catch {
        inpute.value = "Error";
      }
    }

    else {
      expresion += val;
      inpute.value = expresion;
    }

  })
});



