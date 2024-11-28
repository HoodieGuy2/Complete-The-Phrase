document.getElementById("bal").addEventListener("click", main);

function main() {
  var input = prompt();
  if (input == "leg") {
    alert("Correct! Break a leg!");
  } else {
    alert("Incorrect");
  }
}

document.getElementById("btb").addEventListener("click", main2);
function main2() {
  var input = prompt();
  if (input == "bullet") {
    alert("Correct! Bite the bullet!");
  } else {
    alert("Incorrect");
  }
}

document.getElementById("hts").addEventListener("click", main3);
function main3() {
  var input = prompt();
  if (input == "sack") {
    alert("Correct! Hit the sack!");
  } else {
    alert("Incorrect");
  }
}

document.getElementById("cal").addEventListener("click", main4);
function main4() {
  var input = prompt();
  if (input == "leg") {
    alert("Correct! Cost an arm and a leg!");
  } else {
    alert("Incorrect");
  }
}

document.getElementById("cc").addEventListener("click", main5);
function main5() {
  var input = prompt();
  if (input == "corners") {
    alert("Correct! Cutting corners!");
  } else {
    alert("Incorrect");
  }
}

document.getElementById("sot").addEventListener("click", main6);
function main6() {
  var input = prompt();
  if (input == "teeth") {
    alert("Correct! By the skin of your teeth!");
  } else {
    alert("Incorrect");
  }
}
