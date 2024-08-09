function myfunc(x){
  var email = document.querySelector("#email"+x);
  var emailId = email.value;
  var error = document.getElementById("error"+x);

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

function passwordMatching(){
  var password = document.getElementById("password");
  var confirmPassword = document.getElementById("confirm-password");
  // console.log(password);
  // console.log(confirmPassword);
  if(password.value !== confirmPassword.value){
    confirmPassword.classList.remove("mb-4");
    document.getElementById("passwordMismatch").style.display="flex";
  } else {
    confirmPassword.classList.add("mb-4");
    document.getElementById("passwordMismatch").style.display="none";
  }


}

function arrowfn(n){
  document.getElementById("arrow"+n).style.animation = "arrow 1s  1"; 
  document.getElementById("arrow"+n).style.animationTimingFunction=" cubic-bezier(0.76, 0.04, 0.59, 1.33)";
  document.getElementById("arrow"+n).style.animationFillMode = "forwards";
} 

function moveToLog(){
  var welcome =document.getElementById("welcome").style;
  welcome.animation="login 1s linear forwards";
  // welcome.animationFillMode="forwards";
}

function moveToReg(){
  var welcome =document.getElementById("welcome").style;
  welcome.animation="register 1s linear forwards";
  
}