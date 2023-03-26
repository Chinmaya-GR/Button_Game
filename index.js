let name1 = prompt("Enter player1 name:");
let name2 = prompt("Enter player2 name:");
document.getElementById("name1").innerText=`Player1 Name:- ${name1}`;
document.getElementById("name2").innerText=`Player2 Name:- ${name2}`;

var count=0;
 let btn1 = document.getElementById("bt1");
 let btn2 = document.getElementById("bt2");

 btn1.addEventListener("click" , function(){
    count++;
    if(count==1){
        let t= Math.round(Math.random()*10);
        let t1 = Number(t);
        document.getElementById("runs1").innerHTML=t1;
        document.getElementById("P1score").innerHTML=t1;
    }

    if(count==2){
        document.getElementById("bt1").disabled=true;
        let t= Math.round(Math.random()*10);
        let t2 = Number(t);
        document.getElementById("runs2").innerHTML=t2;
        let num1 = document.getElementById("runs1").innerHTML;
        let sum1 = num1 * t2;
        sum1 = parseInt(sum1);
        document.getElementById("P1score").innerHTML=sum1;
    }
 });

 btn2.addEventListener("click",function(){
    count++;
    if(count == 3){
        let t3 = Math.round(Math.random()*10);
        t3 = Number(t3);
        document.getElementById("runs3").innerHTML=t3;
        document.getElementById("P2score").innerHTML=t3;
    }
    if(count == 4){
        document.getElementById("bt2").disabled=true;
        let t4 = Math.round(Math.random()*10);
        t4 = Number(t4);
        document.getElementById("runs4").innerHTML=t4;
        let num1 = document.getElementById("runs3").innerHTML;
        let sum2 = Number(num1 * t4);
        document.getElementById("P2score").innerHTML=sum2;
        Result(name1,name2);
    }
 })


 

 