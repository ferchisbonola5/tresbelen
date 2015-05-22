//JavaScript

 $(document).ready(function(e){
 document.addEventListener("deviceready",function(){

 $('#beep').tap(function(){
 navitor.notification.beep(1);
 });//tap beep

 $('#vibrar').tap(function(){
 navitor.notification.vibrate(1000);
 });//tap vibrar

 },false);//deviceready
});//ready

