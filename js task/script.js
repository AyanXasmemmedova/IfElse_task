//1
let yas=prompt("Yasinizi daxil edin:")
if(yas>18){
    alert("Ses vere bilersiniz");
}
else{
    alert("Ses vere bilmezsiniz");
}  

//2
let hava=prompt("Hava melumatini daxil edin:");
if(hava==="isti"){
    alert("nazik geyimler geyinin");
}
else if(hava==="soyuq"){
    alert("qalin geyimler geyinin");
} 
else if(hava==="mulayim"){
    alert("rahat geyimler geyinin");
} 

//3

let number1=prompt("1-ci ededi daxil edin:");
let number2=prompt("2-ci ededi daxil edin:");

if(number1>number2){
    console.log("boyuk eded: "+ number1);
}
else{
    console.log("boyuk eded: "+ number2);
} 

//4

let email = prompt("Email unvani daxil edin:");
if(email.includes("@")){
    alert("Email dogrudur");
}
else{
    alert("Etibarli e-poct unvani daxil edin");
}


