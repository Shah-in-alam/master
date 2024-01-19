 var btnEls=document.querySelectorAll(".js-button")
 //console.log(btnEls[0])

// btnEls[0].addEventListener("click",function(){
//     this.innerHTML="you have clicked the button";
//  });
// btnEls[1].addEventListener("click",function(){
//     this.innerHTML="you have clicked the button";
//  });
var counter=0;


for(var i=0;i<btnEls.Length;i++){
    btnEls[i].addEventListener("click",function(){
        //logic for adding 1
        counter+=parseInt(this.datsset.points)
       
        document.querySelector(".js-result").innerHTML=counter;
    //logic for list elements
    var logEl=document.createElement("li");
    logEl.innerHTML=mergeWords(new Date().toLocaleDatesString(),+new Date().toLocaleTimesString());
    document.querySelector(".js-logs").appendChild(logEl);
    console.log(logEl);

    });
  }
  var btnDelEl= document.querySelector(".js-delete-button");
  btnDelEl.addEventListener("click",function(){
    var logEl=document.querySelector(".js-logs")
    document.querySelector("body").removeChild(logEl);

  });
  var fullname =mergeWords("Collin", "Van der Vorst");
  function mergeWords(word1,word2){
    var output = word1 +" "+ word2;
    return output;
  }
  var goats =[
    " t-rex",
    " connie",
    "Clyde"
  ];
  console.log(goats);
  goats.push("collin");
  console.log("goats");
  goats.unshift("Renske");
  console.log(goats);
  goats.splice(2,0,"Lisa");
  console.log(goats);
  goats.splice(2,1,"shahin");
  console.log(goats);
  for ( var i in goats){
    console.log(goats[i]);
  }
  var beautifulPerson ={
    firstname:"coline",
    lastname: "var der vorst",
    getFullname:function(){
      console.log(mergeWords(this.firstname,this.lastname));
    }
  }
  beautifulPerson.getFullname();
  var grade1= 8.4;
  console.log(Math.floor(grade1));
  console.log(Math.ceil(grade1));
  console.log(Math.round(grade1));
  console.log(goats);
  console.log(Math.random());
  var randomGoatIndex=Math.floor(goats.length*Math.random());
  console.log(goats[randomGoatIndex]);
  // 5 * 0.25 = 1.25 = 1
// 5 * 0.1 = 0.5 = 0
// 5 * 0.75 = 3.75 = 3
// 5 * 0.9 = 4.5 = 4 

