var image=document.getElementById('moveImage');

image.addEventListener('mouseover', function (){
  var randomX=Math.floor(Math.random() * window.innerWidth);
  var randomY=Math.floor(Math.random() * window.innerHeight);

  image.style.transform= 'translate(' +randomX + 'px, '+ randomY + 'px)';
});
image.addEventListener('mouseout', function (){
  //image.style.transform = 'translate(20px, 20px)';
  image.style.transform= 'translate(' +randomX + 'px, '+ randomY + 'px)';
});
