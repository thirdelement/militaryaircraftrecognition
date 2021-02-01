function correctAlert() {
        alert("Correct!"); 
    }
    function incorrectAlert() {
        alert("Incorrect!"); 
    }

function correctAnswer() {
  var check = document.getElementById("correct");
  if (check.style.display === "none") {
      check.style.display = "inline";
    //check.style.display = check.style.display == "none" ? "inline" : "none";
  } else {
    check.style.display = "none";
  }
}

function incorrectAnswer() {
  var check = document.getElementsByClassName("incorrect");
  if (check.style.display === "none") {
    check.style.display = "inline-block";
  } else {
    check.style.display = "none";
  }
}

function myFunction() {
  var x = document.getElementById("myDIV");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}