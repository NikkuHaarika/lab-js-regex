/* Fill your code*/
function formValidate(){

    var name=document.forms["RegForm"]["Name"];
    var address=document.forms["RegForm"]["Address"];
    var email=document.forms["RegForm"]["EMail"];
    var password=document.forms["RegForm"]["Password"];
    var cpassword=document.forms["RegForm"]["cPassword"];
    var phone=document.forms["RegForm"]["Phone"];

    var errname=document.getElementById("name");
    var erraddress=document.getElementById("address");
    var erremail=document.getElementById("email");
    var errpwd=document.getElementById("pwd");
    var errcpwd=document.getElementById("cpwd");
    var errphone=document.getElementById("phone");

    if(name.value.length < 8){
    errname.innerText="Minimum 8 characters required";
    name.focus();
    return false;
    }
    else{
    errname.innerText= '';
    }

    if(address.value == ''){
        erraddress.innerText="Kindly fill address field";
        address.focus();
        return false;
        }
    else{
    erraddress.innerText='';
    }
  
    if(email.value == ''){
        erremail.innerText = "Kindly fill email field";
        email.focus();
        return false;
     }
    else if(/^[a-zA-Z0-9._]{3,}@[A-Za-z]{3,}[.]{1}[a-zA-Z.]{2,6}$/.test(email.value)){
        erremail.innerText = '';
     }
    else{
        erremail.innerText = "Email is invalid";
        email.focus();
        return false;
     }

     if(/(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[!@#$%^&*()])/.test(password.value)){
     errpwd.innerText = '';
 }



    else{
        errpwd.innerText="Kindly fill valid password field";
        password.focus();  
        return false;
    }

    
    if(cpassword.value==password.value){
         errcpwd.innerText='';
        }
    
        else{
            errcpwd.innerText="Kindly fill valid password ";
            cpassword.focus();  
            return false;
        }

     if(phone.value=='')
     {
         errphone.innerText="Kindly fill this field";
          phone.focus();
          return false;
     }  

     else{
         errphone.innerText='';
     }

     return true;


}