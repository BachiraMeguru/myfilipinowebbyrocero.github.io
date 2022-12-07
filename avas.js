function login(){
      var user = document.loginform.uname.value;
      var pass = document.loginform.psw.value;

//logic if the user enters the correct username and password
if ((user == "USER") && pass == "LETRAN"){
        location.href="test.html"
        return true;
  }
//alerts the user after entering an Incorrect username and password
else{
       alert("THE CREDENTIALS YOU PUT IS INCORRECT PLEASE TRY AGAIN! THANKYOU.");
      }
          }