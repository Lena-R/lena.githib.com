  window.onload = function (){
      //testing Course
var counter = 1;
    var buttonEl = document.getElementById("res");
    var resFour = document.getElementById("four");
    
    var count = function (){
        var resultFour;
        
        if (counter < 100) {
          counter++;
        }

        buttonEl.innerHTML = counter;
        resultFour = counter*4;
        resFour.innerHTML = resultFour;
   };

    var clc = document.getElementById("up");
    clc.addEventListener("click", count, false);
    
    var count2 = function(){
      var resultFour;
      
      if (counter > 1) {
        counter--;
      }        

      buttonEl.innerHTML = counter;         
      resultFour = counter * 4;
      resFour.innerHTML = resultFour;
    };     
   
    var clic2 = document.getElementById("down");
    clic2.addEventListener("click", count2, false);

    //testing Occupation
var counter3 = 1;
    var buttonEl3 = document.getElementById("res2");
    var resEight = document.getElementById("eight");
    
    var count3 = function (){
        var resultEight;
        
        if (counter3 < 100) {
          counter3++;
        }

        buttonEl3.innerHTML = counter3;
        resultEight = counter3*8;
        resEight.innerHTML = resultEight;
   }; 

       var clc3 = document.getElementById("up2");
    clc3.addEventListener("click", count3, false);

     var count4 = function(){
      var resultEight;
      
      if (counter3 > 1) {
        counter3--;
      }        

      buttonEl3.innerHTML = counter3;         
      resultEight = counter3 * 8;
      resEight.innerHTML = resultEight;
    };     
   
    var clic4 = document.getElementById("down2");
    clic4.addEventListener("click", count4, false);
   
    }