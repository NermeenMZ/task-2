

function formvalidate(){
    var name=document.getElementById("name"). value ;
var email=document.getElementById("email"). value ;
var number=document.getElementById("number"). value;
var error =document.getElementById("error");
var text="";

    if(name.length < 5){
text ="please valid you name";
error.innerHTML=text;
return false;
    }
     else if(email.indexof("@")==-1 ||email.length < 5  ){
        text ="please valid Email";
        error.innerhtml=text ;
        return false;


    }
    else if(  isNaN (number)|| number.length !=11 ){
        text ="please inter phone number";
        error.innerHTML=text;
        return false;

    }
    else {alert("Done");
    return true;

    }
}