let firstPassword = document.getElementById("password");
let secondPassword = document.getElementById("retype-password");

firstPassword.onfocus = function() {
    document.getElementById("message").style.display = "block";
  }

  firstPassword.onblur = function() {
    document.getElementById("message").style.display = "none";
  }

  secondPassword.onfocus = function() {
    document.getElementById("passwordNotTheSame").style.display = "block";
  }

firstPassword.onkeyup = function() {
    var lowerCaseLetters = /[a-z]/g;
    if(firstPassword.value.match(lowerCaseLetters)) {
        letter.classList.remove("invalid");
        document.querySelector('#letter').style.display = "none";
    } else {
        document.querySelector('#letter').style.display = "block";
        letter.classList.add("invalid");
  }


var specialCharacters = /[\!\@\#\$\%\^\&\*\)\(\+\=\.\<\>\{\}\[\]\:\;\'\"\|\~\`\_\-]/g

  if(firstPassword.value.match(specialCharacters)) {
    character.classList.remove("invalid");
    document.querySelector('#character').style.display = "none";
} else {
    document.querySelector('#character').style.display = "block";
    character.classList.add("invalid");
}

    var upperCaseLetters = /[A-Z]/g;
    if(firstPassword.value.match(upperCaseLetters)) {

      capital.classList.remove("invalid");
      document.querySelector('#capital').style.display = "none";

    } else {
      document.querySelector('#capital').style.display = "block";
      capital.classList.add("invalid");
    }
  
    var numbers = /[0-9]/g;
    if(firstPassword.value.match(numbers)) {
      number.classList.remove("invalid");
      document.querySelector('#number').style.display = "none";

    } else {
        document.querySelector('#number').style.display = "block";
        number.classList.add("invalid");
    }

    if(firstPassword.value.length >= 8) {
      passwordLength.classList.remove("invalid");
    document.querySelector('#passwordLength').style.display = "none";

  } else {
    document.querySelector('#passwordLength').style.display = "block";
    passwordLength.classList.add("invalid");
  }

  if(firstPassword.value.length >= 8 && (firstPassword.value.match(numbers)) && (firstPassword.value.match(upperCaseLetters)) 
  && (firstPassword.value.match(lowerCaseLetters))) {
    paragraph.classList.remove("invalid");
    document.querySelector('#paragraph').style.display = "none";

  }
}

secondPassword.onkeyup = function() {
  if(!(secondPassword.value.match(firstPassword.value))){
    passwordNotTheSame.classList.add("invalid");
    document.querySelector('#messageConfirmPassword').style.display = "block";
  }  else {      
    document.querySelector('#messageConfirmPassword').style.display = "none";
    passwordNotTheSame.classList.remove("invalid");
  }

  if(firstPassword.value.length !== secondPassword.value.length) {
    passwordNotTheSame.classList.add("invalid");
    document.querySelector('#messageConfirmPassword').style.display = "block";
  }

  if(firstPassword.value.length === 0) {
    passwordNotTheSame.classList.remove("invalid");
    document.querySelector('#messageConfirmPassword').style.display = "none";
  }
}
