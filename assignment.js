 
//  KilometerToMeter
 function kilometerToMeter(kilometer) {
     var meter;
    if(kilometer>0){
         meter=kilometer*1000;
         return meter;
     } else{
         return 'Your distance can not show here. Please Postive Value'
     }  
 }
 



//   budget calculator
  function budgetCalculator(CWatch,Cmobile,Claptop) 
  {
      var Costwatch=50*CWatch;
      var Cmobile=100*Cmobile;
      var Claptop=500*Claptop;
      var total=CWatch+ Cmobile+Claptop;
      return total;
  }



// Hotel cost
 function hotelCost(days) {
     var vara=0;
     if(days<=10){
         vara=days*100;
    }
     else if(days<=20){
         var first10= 10*100;
       var remaining= days-10;
         var second10 = remaining*80;
         vara= first10 +second10;
     }
     else{
        var first10 = 10*100;
        var second10=10*80;
        var remaining= days-20;
         var third10=remaining*50;
         vara =first10 + second10+third10;
    }
     return vara;
    
 }






 // mega friends
function megaFriends(friends) {
    var large=friends[0];
    for(i=0; i < friends.length; i++){
        var element=friends[i];
        if(element>large){
            large=element;
        }
        
    }
    return large;
}  





