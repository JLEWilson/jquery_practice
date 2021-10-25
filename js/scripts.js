$(document).ready(function(){ 
  
  const elementsArr = ["h1", "p", "img"];
  const messageArr = ["This is a heading.", "This is a paragraph.", "This is a image."];
  let index = 0;

  elementsArr.forEach(function(element){
    let num = index; // Defining a variably ONLY within this iteration of the function that equals index
    $(elementsArr[index]).click(function(){
      alert(messageArr[num]); // Assigning the int that is only in this function as the index
    });
    index += 1;
  });
});
