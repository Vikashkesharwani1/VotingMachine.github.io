// console.log('hello i wil make secure voting machine')
console.log("hello")
var num1=0;
var num2=0;
var num3=0;
var num4=0;
var num5=0;
var num6=0;
var num7=0;


var AITC=document.getElementById('AITC');
var BSP=document.getElementById('BSP');
var BJP=document.getElementById('BJP');
var CPI=document.getElementById('CPI');
var INC=document.getElementById('INC');
var NPP=document.getElementById('NPP');
var NCP=document.getElementById('NCP');
var count1=document.getElementById('count1');
var count2=document.getElementById('count2');
var count3=document.getElementById('count3');
var count4=document.getElementById('count4');
var count5=document.getElementById('count5');
var count6=document.getElementById('count6');
var count7=document.getElementById('count7');
var result=document.getElementById('result');
function AITC_count(){
 
num1++;
 count1.innerHTML=num1;
  var sum1=0;
 sum1=sum1+num1;
 console.log(sum1);
}
function BSP_count(){
num2++;
 count2.innerHTML=num2;
 var sum2=0;
 sum2=sum2+num2;
 console.log(sum2);
}
function BJP_count(){
    num3++;
    count3.innerHTML=num3;
    var sum3=0;
    sum3=sum3+num3;
    console.log(sum3);
}
function CPI_count(){
    num4++;
    count4.innerHTML=num4;
    var sum4=0;
    sum4=sum4+num4;
    console.log(sum4);
}
function INC_count(){
    num5++;
    count5.innerHTML=num5;
    var sum5=0;
    sum5=sum5+num5;
    console.log(sum5);    
}
function NPP_count(){
    num6++;
    count6.innerHTML=num6;
    var sum6=0;
    sum6=sum6+num6;
    console.log(sum6);
}
function NCP_count(){
    num7++;
    count7.innerHTML=num7;
    var sum7=0;
    sum7=sum7+num7;
    console.log(sum7);
}

AITC.addEventListener('click',function(){
    alert('are your confirm to select AITC  party');
   AITC_count();
})
BSP.addEventListener('click',function(){
    alert('are your confirm to select BSP party')
  BSP_count();  
})
BJP.addEventListener('click',function(){
    alert('are your confirm to select BJP party')
    BJP_count();
})
CPI.addEventListener('click',function(){
    alert('are your confirm to select CPI party')
    CPI_count();
})
INC.addEventListener('click',function(){
    alert('are your confirm to select INC party')
    INC_count();
})
NPP.addEventListener('click',function(){
    alert('are your confirm to select NPP party')
    NPP_count();
})
NCP.addEventListener('click',function(){
    alert('are your confirm to select NCPs party')
    NCP_count();
})

// if(sum1>sum2 && sum1>sum3 && sum1>sum4 && sum1>sum5 && sum1>sum6 && sum1>sum7){
//     result.innerHTML="ALL INDIAN TRINMOOL CONGRESS WON THIS ELECTION BY"+sum1+"SEATS"
// }
// else if(sum2>sum1 && sum2>sum3 && sum2>sum4 && sum2>sum5 && sum2>sum6 && sum2>sum7){
//   result.innerHTML="BAHUJAN SAMAJ PARTY WON THIS ELECTION BY "+sum2+"SEATS"
// }
// else if(sum3>sum2 && sum3>sum1 && sum3>sum4 && sum3>sum5 && sum3>sum6 && sum3>sum7){
//     result.innerHTML="BHARTIYA JANTA PARTY WON THIS ELECTION BY "+sum3+"SEATS"
// }
// else if(sum4>sum2 && sum4>sum3 && sum4>sum1 && sum4>sum5 && sum4>sum6 && sum4>sum7){
//     result.innerHTML="COMMUNIST PARTY OF INDIA WON THIS ELECTION BY"+sum4+"SEATS"
// }
// else if(sum5>sum2 && sum5>sum3 && sum5>sum4 && sum5>sum1 && sum5>sum6 && sum5>sum7){
//     result.innerHTML="INDIAN NATIONAL CONGRESS WON THIS ELECTION BY"+sum5+"SEATS"
// }
// else if(sum6>sum2 && sum6>sum3 && sum6>sum4 && sum6>sum5 && sum6>sum1 && sum6>sum7){
//     result.innerHTML="NATIONAL PEOPLE'S PARTY"+sum6+"SEATS"
// }
// else{
//     result.innerHTML="NATIONAL CONGRESS PARTY WON THIS ELECTION BY"+sum7+"SEATS"
// }