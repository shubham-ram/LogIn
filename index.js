function myfunc(){
  var email = document.querySelector("#email");
  var emailId = email.value;
  var error = document.getElementById("error");
  
  var valid = emailId.search("@");
  var valid1 = emailId.search(".com");

  if(valid == -1 || valid1 == -1){
    email.style= "border: 2.3px solid #FF9494 ";
    email.style.backgroundColor = "#fff4f4 ";
    error.style = "display:  block !important";
  } else {
    email.style = "border-image: linear-gradient(to right,#3C139D,#BC40C6,#FB1C7E) 30 stretch";
    error.style.display = "none";
  }
}

function arrowfn(){
  document.getElementById("arrow").style.animation = "arrow 2s  1"; 
  document.getElementById("arrow").style.animationTimingFunction=" cubic-bezier(0.76, 0.04, 0.59, 1.33)";
  document.getElementById("arrow").style.animationFillMode = "forwards";
}