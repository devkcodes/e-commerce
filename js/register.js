//to check email
var checkmail = function () {
    let x = document.getElementById("email").value;
    var atposition=x.indexOf("@");  
  var dotposition=x.lastIndexOf(".");  
  if (atposition<1 || dotposition<atposition+2 || dotposition+2>=x.length)
   { document.getElementById("messagebox-email").style.display = "block";
      document.getElementById("messagebox-email").style.backgroundColor = "red";
      document.getElementById("messagebox-email").innerHTML = "Please enter valid Email";
    return false;
      }
      else{
            document.getElementById("messagebox-email").style.display = "none";
      }
  };
  
  // to check username length
  var checkuser = function() {
      var user= document.getElementById('username').value;
  if(  user.length>4 && user.length<=20&&isNaN(user))
  {document.getElementById('messagebox-username').style.display = 'block'; 
          
      document.getElementById('messagebox-username').style.backgroundColor = 'green';
               
     document.getElementById('messagebox-username').innerHTML ="available";
          }
      
      else
      {document.getElementById('messagebox-username').style.display = 'block'; 
          
      document.getElementById('messagebox-username').style.backgroundColor = 'red';
               
     document.getElementById('messagebox-username').innerHTML ="username invalid or not within limit";
      return false;}
  }
  
  // to check password length
  
  var checkpass = function() {
      var user= document.getElementById('password').value;
  if(  user.length>4 )
  {document.getElementById('messagebox-password1').style.display = 'block'; 
          
      document.getElementById('messagebox-password1').style.backgroundColor = 'green';
               
     document.getElementById('messagebox-password1').innerHTML ="valid password";
          }
      
      else
      {document.getElementById('messagebox-password1').style.display = 'block'; 
          
      document.getElementById('messagebox-password1').style.backgroundColor = 'red';
               
     document.getElementById('messagebox-password1').innerHTML ="password too short";}
  }
  
  // to check password match
  var check = function() {
    if (document.getElementById('password').value ==
      document.getElementById('confirm_password').value ) {
          
          
                 document.getElementById('messagebox-password2').style.display = 'block'; 
          
      document.getElementById('messagebox-password2').style.backgroundColor = 'green';
               
     document.getElementById('messagebox-password2').innerHTML ="Passwords match";
          
    }
      else {
         document.getElementById('messagebox-password2').style.display = 'block'; 
          document.getElementById('messagebox-password2').style.backgroundColor = 'red';
      document.getElementById('messagebox-password2').innerHTML = "passwords don't match";
           return false;
    }
  }
  
  // number
  var checknum = function() {
      var userr= document.getElementById('number').value;
  if(  userr.length>10 || userr.length<10||userr.charAt(0)==0)
  {document.getElementById('messagebox-phone').style.display = 'block'; 
          
      document.getElementById('messagebox-phone').style.backgroundColor = 'red';
               
     document.getElementById('messagebox-phone').innerHTML ="please enter valid number";
          return false;
  }
      else{
          document.getElementById('messagebox-phone').style.display = 'none';
      }
  }
      