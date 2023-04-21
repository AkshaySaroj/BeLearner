/** 
var principle=document.getElementById("principleFeild");
var rate=document.getElementById("rateFeild");
var time=document.getElementById("timeFeild"); **/


var form=document.getElementById("formField")

var Calcalute = function(Event){

    if(!principleFeild.value || !rateFeild.value || !timeFeild.value){
        alert("please enter the value in the feild.")
    }
    else{
        var p=parseFloat(principleFeild.value);
        var r=parseFloat(rateFeild.value);
        var t=parseFloat(timeFeild.value);
        var result=(p*r*t)/100;

        var x=document.getElementsByName("h2").innerHtml=result
        alert(x);
    }


}
form.addEventListener('submit', Calcalute);

