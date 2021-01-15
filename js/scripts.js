$(document).ready(function(){
  $('form').submit(function(e){
    e.preventDefault();
    const side1 = $('input#side1').val();
    const side2 = $('input#side2').val();
    const side3 = $('input#side3').val();

    $('span#output1').text(side1);
    $('span#output2').text(side2);
    $('span#output3').text(side3);
    
    if(side1 === side2 && side1 === side3) {
      $()
    }
  });
});