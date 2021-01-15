$(document).ready(function(){
  $('form').submit(function(e){
    e.preventDefault();
    let side1 = $('input#side1').val();
    let side2 = $('input#side2').val();
    let side3 = $('input#side3').val();

    side1 = parseInt(side1);
    side2 = parseInt(side2);
    side3 = parseInt(side3);


    const side1and2 = side1 + side2;
    const side1and3 = side1 + side3;
    const side2and3 = side2 + side3;

    $('span#output1').text(side1);
    $('span#output2').text(side2);
    $('span#output3').text(side3);
    
    if(side1and2 < side3 || side1and3 < side2 || side2and3 < side1) {
      $('span#result').text("This is not a Triangle! Try again!");
    } else if(side1 === side2 || side1 === side3 || side2 === side3){
      $('span#result').text("This is an isosceles Triangle!");
    } else if(side1 != side2 && side1 != side3 && side2 != side3){
      $('span#result').text("This is a scalene Triangle");
    } else if(side1 === side2 && side1 === side3){
      $('span#result').text("This is an equilateral Triangle!")
    } else {
      $('span#result').text("Please input numbers into the fields to see if they make a triangle or not!");
    }
  });
});