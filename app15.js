
function provideSignUpDetails() {
   document.getElementById('storeSignUp').style.display = "block";
    document.getElementById('wrapper').style.display ="none";
}
function provideLoginDetails(){
    
    document.getElementById('storeLogin').style.display = "block";
    document.getElementById('wrapper').style.display ="none";
}

function store(){
    
    if(window.localStorage){
         
        var emailvalue = document.getElementById('input2').value;
        localStorage.setItem("emailname",emailvalue);
        var passvalue =document.getElementById('input3').value;
        localStorage.setItem("passname",passvalue);
    }
    
}

function checkCred(){
    var usernamevalue = document.getElementById('input1').value;
        localStorage.setItem("username1",usernamevalue);
    var inputemail = document.getElementById('input4').value;
    var inputpass = document.getElementById('input5').value;
    var email =localStorage.getItem('emailname');
    
    var pass = localStorage.getItem('passname');
    if((inputemail !== email) || (inputpass !== pass)){
        alert("user or password is incorrec");
    }
    else{
        document.getElementById('homepage').style.display ="block";
        document.getElementById('storeLogin').style.display ="none";
        document.getElementById('username').innerHTML = localStorage.username1
}
}
function goToMainPage(){
    document.getElementById('wrapper').style.display ="block";
    document.getElementById('storeSignUp').style.display = "none";
    document.getElementById('storeLogin').style.display = "none";
     document.getElementById('homepage').style.display ="none";
    
    document.getElementById('input4').value ="";
     document.getElementById('input5').value ="";
    
}