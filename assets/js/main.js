/*alert("Are you want to calculate?");





function productPriceCalculation(){
    let product_price = document.getElementById("productprice").value;

    let product_qut = document.getElementById("productqut").value;

    let total_price = document.getElementById("totalprice").value=product_price*product_qut;

    let discoutn_rate = 10;
    let installment_payment = 4;

    let discountRate_on_total_sale = document.getElementById("discountrate").value = ((total_price*discoutn_rate)/100 );

    let after_discount_total_sale = document.getElementById("afterdiscounttotalsale").value = ((total_price-discountRate_on_total_sale));

    let installment_pay = document.getElementById("installmentpay").value = ((after_discount_total_sale/installment_payment));
}

*/
/*
function formsummit(){
   let usernamevalueforuser = document.getElementById("userform").value;

 document.getElementById("show").innerHTML=usernamevalueforuser ; 
}
*/

function generateGrade(){
  let bangla = parseInt(document.getElementById("bangla").value);

  let english = parseInt(document.getElementById("english").value);

  let mathematics = parseInt(document.getElementById("mathhematics").value);

  let religion = parseInt(document.getElementById("religion").value);

  let socialscience = parseInt(document.getElementById("socialscience").value);

  let science = parseInt(document.getElementById("science").value);

  let ict = parseInt(document.getElementById("ict").value);


  

// Marking Systme condition Apply

document.getElementById("banglamarks").innerHTML=bangla;
document.getElementById("englishmarks").innerHTML=english;
document.getElementById("mathematicsmarks").innerHTML=mathematics;
document.getElementById("religionmarks").innerHTML=religion;
document.getElementById("socialsciencemarks").innerHTML=socialscience;
document.getElementById("sciencemarks").innerHTML=science;
document.getElementById("ictmarks").innerHTML=ict;


let total=  bangla+english+mathematics+religion+socialscience+science+ict;

let avg = total/7;


//total marks calculation:
document.getElementById("tomarks").innerHTML=total;


//average marks calculation
  document.getElementById("avgmarks").innerHTML= avg + " %"; 


  // Grading System now condition apply

  if(bangla>100||english>100||mathematics>100||religion>100||socialscience>100||science>100||ict>100){
    alert("Please Enter Markes In Range of 100");
  }
  else{
   
    let totalmarks=  bangla+english+mathematics+religion+socialscience+science+ict;
    let avegrae = totalmarks/7;


//This is for average grading calculation
if(avegrae>=80 && avegrae<=100){
  document.getElementById("avggrade").innerHTML = "A+";
}
else if(avegrae>=70 && avegrae<=79){
  document.getElementById("avggrade").innerHTML="A";
}

else if(avegrae>=60 && avegrae<=69){
  document.getElementById("avggrade").innerHTML="A-";
}

else if(avegrae>=50 && avegrae<=59 ){
  document.getElementById("avggrade").innerHTML="B";
}

else if (avegrae>=40 && avegrae<=49){
  document.getElementById("avggrade").innerHTML="C";
}

else if (avegrae>=33 && avegrae<=39){
  document.getElementById("avggrade").innerHTML="D";
}

else if(avegrae>=0 && avegrae<=32){
  document.getElementById("avggrade").innerHTML="F";
}


// for ict condition

if(ict>=80 && ict<=100){
  document.getElementById("ictgrade").innerHTML = "A+";
}
else if(ict>=70 && ict<=79){
  document.getElementById("ictgrade").innerHTML="A";
}

else if(ict>=60 && ict<=69){
  document.getElementById("ictgrade").innerHTML="A-";
}

else if(ict>=50 && ict<=59 ){
  document.getElementById("ictgrade").innerHTML="B";
}

else if (ict>=40 && ict<=49){
  document.getElementById("ictgrade").innerHTML="C";
}

else if (ict>=33 && ict<=39){
  document.getElementById("ictgrade").innerHTML="D";
}

else if(ict>=0 && ict<=32){
  document.getElementById("ictgrade").innerHTML="F";
}







//....for science condition..........

if(science>=80 && science<=100){
  document.getElementById("sciencegrade").innerHTML = "A+";
}

else if(science>=70 && science<=79){
  document.getElementById("sciencegrade").innerHTML="A";
}

else if(science>=60 && science<=69){
  document.getElementById("sciencegrade").innerHTML="A-";
}

else if(science>=50 && science<=59 ){
  document.getElementById("sciencegrade").innerHTML="B";
}

else if (science>=40 && science<=49){
  document.getElementById("sciencegrade").innerHTML="C";
}

else if (science>=33 && science<=39){
  document.getElementById("sciencegrade").innerHTML="D";
}

else if(science>=0 && science<=32){
  document.getElementById("sciencegrade").innerHTML="F";
}






// for socialscience condition
if(socialscience>=80 && socialscience<=100){
  document.getElementById("socialsciencegrade").innerHTML = "A+";
}

else if(socialscience>=70 && socialscience<=79){
  document.getElementById("socialsciencegrade").innerHTML="A";
}

else if(socialscience>=60 && socialscience<=69){
  document.getElementById("socialsciencegrade").innerHTML="A-";
}

else if(socialscience>=50 && socialscience<=59 ){
  document.getElementById("socialsciencegrade").innerHTML="B";
}

else if (socialscience>=40 && socialscience<=49){
  document.getElementById("socialsciencegrade").innerHTML="C";
}

else if (socialscience>=33 && socialscience<=39){
  document.getElementById("socialsciencegrade").innerHTML="D";
}

else if(socialscience>=0 && socialscience<=32){
  document.getElementById("socialsciencegrade").innerHTML="F";
}





// for religion condition
if(religion>=80 && religion<=100){
  document.getElementById("religiongrade").innerHTML = "A+";
}

else if(religion>=70 && religion<=79){
  document.getElementById("religiongrade").innerHTML="A";
}

else if(religion>=60 && religion<=69){
  document.getElementById("religiongrade").innerHTML="A-";
}

else if(religion>=50 && religion<=59 ){
  document.getElementById("religiongrade").innerHTML="B";
}

else if (religion>=40 && religion<=49){
  document.getElementById("religiongrade").innerHTML="C";
}

else if (religion>=33 && religion<=39){
  document.getElementById("religiongrade").innerHTML="D";
}

else if(religion>=0 && religion<=32){
  document.getElementById("religiongrade").innerHTML="F";
}







// for mathematics condition
if(mathematics>=80 && mathematics<=100){
  document.getElementById("mathematicsgrade").innerHTML = "A+";
}

else if(mathematics>=70 && mathematics<=79){
  document.getElementById("mathematicsgrade").innerHTML="A";
}

else if(mathematics>=60 && mathematics<=69){
  document.getElementById("mathematicsgrade").innerHTML="A-";
}

else if(mathematics>=50 && mathematics<=59 ){
  document.getElementById("mathematicsgrade").innerHTML="B";
}

else if (mathematics>=40 && mathematics<=49){
  document.getElementById("mathematicsgrade").innerHTML="C";
}

else if (mathematics>=33 && mathematics<=39){
  document.getElementById("mathematicsgrade").innerHTML="D";
}

else if(mathematics>=0 && mathematics<=32){
  document.getElementById("mathematicsgrade").innerHTML="F";
}



// for english condition
if(english>=80 && english<=100){
  document.getElementById("englishgrade").innerHTML = "A+";
}

else if(english>=70 && english<=79){
  document.getElementById("englishgrade").innerHTML="A";
}

else if(english>=60 && english<=69){
  document.getElementById("englishgrade").innerHTML="A-";
}

else if(english>=50 && english<=59 ){
  document.getElementById("englishgrade").innerHTML="B";
}

else if (english>=40 && english<=49){
  document.getElementById("englishgrade").innerHTML="C";
}

else if (english>=33 && english<=39){
  document.getElementById("englishgrade").innerHTML="D";
}

else if(english>=0 && english<=32){
  document.getElementById("englishgrade").innerHTML="F";
}



// for bangla condition
if(bangla>=80 && bangla<=100){
  document.getElementById("banglagrade").innerHTML = "A+";
}

else if(bangla>=70 && bangla<=79){
  document.getElementById("banglagrade").innerHTML="A";
}

else if(bangla>=60 && bangla<=69){
  document.getElementById("banglagrade").innerHTML="A-";
}

else if(bangla>=50 && bangla<=59 ){
  document.getElementById("banglagrade").innerHTML="B";
}

else if (bangla>=40 && bangla<=49){
  document.getElementById("banglagrade").innerHTML="C";
}

else if (bangla>=33 && bangla<=39){
  document.getElementById("banglagrade").innerHTML="D";
}

else if(bangla>=0 && bangla<=32){
  document.getElementById("banglagrade").innerHTML="F";
}


}
}






