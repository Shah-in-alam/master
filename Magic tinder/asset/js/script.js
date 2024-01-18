
var img_slider = document.querySelector("#harreyPotter");
var result = document.createElement('p');
var headerName = document.querySelector("#name");
var likeBtn =document.querySelector("#btn1");
var dislikeBtn =document.querySelector("#btn2");

var likeBtn = 0;
var dislikeBtn = 0;
var resultField = document.querySelector("#result");
var dislikeResult = document.querySelector("#resultDislike");
var names = ['Ginny Weasley', 'Ronald Bilius Weasley','Hermione Granger','Harry Potter'];
var images = ['ginny.jpeg', 'ronald.jpeg', 'hermione.jpeg','harrypotter.jpeg'];
var currentIndex=4;

var i = 0;
var j = 0;

function like() {
    if (i <= 0) i = images.length;
    i--;
    return viewImg();
}

result="The End";
document.body.append(result);

function dislike() {
    if (j <=0) j = names[currentIndex];
    j--;
    currentIndex++;
    headerName.innerHTML = names[currentIndex];
    return ;
    
}

function viewImg() {
   myresult();
    return img_slider.setAttribute('src', 'asset/img/' + images[i]);
}

function myresult(){
    resultField.innerHTML = "Like: " + names[i];
    dislikeResult.innerHTML = "Dislike: " + names[i];
   
}