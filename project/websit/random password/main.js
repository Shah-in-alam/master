//Random password
function generatePassword(length, includeLower,includeUpper,includeNumber,includeSymbol){
    const lowerCase="abcdefghijklnmopqrstuvwxyz";
    const uperCase="ABCDEFGHIJKLOMNOPQRSTUVWXYZ";
    const numbers= "123456789";
    const symbols= "!@#$%^&*()_+-><?/`";
    var allowedChars="";
    var password="";

    allowedChars+=includeLower? lowerCase : "";
    allowedChars+=includeUpper? uperCase : "";
    allowedChars+=includeNumber?numbers : "";
    allowedChars+=includeSymbol? symbols : "";


    if(length <=0){
            return '(password length must be atleast 1)'
    }
    if(allowedChars.length ===0){
        return '(At least 1 set of character neeeds to be selected)';
    }
    for(var i=0;i<length;i++){
        var random=Math.floor(Math.random()*allowedChars.length);
        password+=allowedChars[random];
    }

    return password;
}
var inner=document.querySelector(".inner");
const passworLeng=12;
const includeLower=true;
const includeUpper=true;
const  includeNumber=true;
const  includeSymbol=true;

const password= generatePassword(passworLeng,
                                includeLower,
                                includeUpper,
                                 includeNumber,
                                 includeSymbol);
// console.log('Genarated Password: '+password);
inner.innerHTML='Genarated Password: '+password;

