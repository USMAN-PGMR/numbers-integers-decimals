// for date,year
var now = new Date();
var year = now.getFullYear(year)
document.getElementById("year").innerText = year

// clear input field 
document.getElementById('clear').onclick = function(){
    document.getElementById('search').value=""
}

// clear output
function clearOutput(){
    document.getElementById('output').innerHTML=""
}

// orignal statement 
let orignalString = "<h2> 25.12345 <h2>"
document.getElementById('oraginalString').innerHTML = orignalString

//rond a number
function roundNumber(){
    let number=+ document.getElementById("search").value;
    if(!number){
        alert("please enter the number");
        return;
    }
    let roundTheNumber=Math.round(number);
    document.getElementById("output").innerHTML=roundTheNumber;
}

//ceil the number
function ceilNumber(){
    let number=+document.getElementById("search").value;
    if(!number){
        alert("please enter the number");
        return;
    }
    let ceilTheNumber=Math.ceil(number);
    document.getElementById("output").innerHTML=ceilTheNumber;
}

//floor the number
function floorNumber(){
    let number=+document.getElementById("search").value;
    if(!number){
        alert("please enter the number");
        return;
    }
    let floorTheNumber=Math.floor(number);
    document.getElementById("output").innerHTML=floorTheNumber;
}

//generate the random number
function randomNumber(){
   
    let randomTheNumber=Math.random();
    document.getElementById("output").innerHTML= '<h6>'+randomTheNumber+"</h6>";
}

//ceil the number
function dice(){
    let random=Math.random();
    random=(random*6)+1;
    let dice= Math.floor(random);
    document.getElementById("output").innerHTML='<h1 class=text-primary>'+  dice + '</h1>'+ '<span>Generating a Random Number from 1 To 6</span>';
}

//Generate a strong possword
function strongePassword(){
    let input =+document.getElementById("search").value;
    let length = input;
    if (!length){
        alert('Please enter length')
    }
    let randomString="";
    let upperCaseAlphabets= "QWERTYUIOPLKJHGFDSAZXCVBNM";
    let lowerCaseAlphabets = "qwertyuioplkjhgfdsazxcvbnm";
    let numbers = "0123456789";
    let symbols= "`~!@#$%^&*_-=+/?.";
    let possible= upperCaseAlphabets+lowerCaseAlphabets+numbers+symbols;
    for ( let i=0;i<length;i++){
        let random= Math.random();
        randomString += possible.charAt(Math.floor(random*possible.length))
    }
    
    document.getElementById("output").innerHTML='<h5>'+randomString+'</h5>'+ '<span>Generating random string & length is </span>'+ '<span class=text-danger>'+length+'</span>';
}

//converting String
function convertingString(){
   // console.log(orignalString)
   let num= "25.12345";
   console.log(num)
   num=Number(num);
   console.log(num)
   document.getElementById("output").innerHTML= '<h6>'+num+'</h6>'+'<p>Now, it is a number you can see the console.</p>' ;

}

//controlling the Length
function controllingLength(){
    let num="25.12345";
    num=Number(num);
    num=num. toFixed(3);
    document.getElementById("output").innerHTML= '<h6>'+num+'</h6>'+'<p>Lenght is fixed at 3.And it process work on the original string </p>' ;
}
//Calculate GST
function gst(){
    let cost=document.getElementById('search').value;
    if (!cost){
        alert('Please enter something to calculate ');
        return;
    }
    cost=Number(cost);
    let text=cost*(17/100);
    //text=text.toFixed(2);
    let totalcost=cost+text;
    totalcost=Math.round(totalcost);
    console.log(cost)
    console.log(totalcost)
    document.getElementById("output").innerHTML='your bill = <span class= text-primary fw-bold fw-18> '+ cost + '</span>'
    document.getElementById("output").innerHTML+='<br> Tex 17% = <span class= text-danger fw-bold fw-18>'+ text.toFixed(2)+'</span>'
    document.getElementById("output").innerHTML+='<br> Total Amount Including Text = <span class= text-success fw-bold fw-25 >'+totalcost+'</span>'
}

let char=2222
let bb=char.charAt()
console.log(bb)