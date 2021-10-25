$(document).ready(function(){ 
  
  const elementsArr = ["h1", "p", "img"];
  const messageArr = ["This is a heading.", "This is a paragraph.", "This is a image."];
  let index = 0;
  let currentIndex = [];

  elementsArr.forEach(function(element){
    $(elementsArr[index]).click(function(){
      alert(messageArr[index]);
    });
    index += 1;
  });
});
