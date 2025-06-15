let btns = document.querySelectorAll(".btn");
let inpute = document.querySelector(".input");

let expresion = "";

btns.forEach((btn) => {
  const val = btn.innerText;
  btn.addEventListener("click", () => {
    if(btn.classList.contains("del")){
      expresion = expresion.slice(0, -1);
      inpute.value = expresion;
    }
    else{
      handleVal(val);
    }
  });
});

document.addEventListener("keydown" , (e) => {
  const key = e.key;

  if("0123456789+-./*%".includes(key)){
    handleVal(key);
  }
  else if(key === "Enter"){
    handleVal("=");
  }
  else if (key === "Backspace"){
    expresion = expresion.slice(0 , -1);
    inpute.value = expresion;
  }
  else if (key === "C"){
    expresion = "";
    inpute.value = "";
  }
});


function handleVal(val) {
  if (val === 'C') {
    expresion = "";
    inpute.value = "";
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

}
