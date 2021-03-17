


/* document.getElementById("rate").oninput= function (){
    let currentRate = document.getElementById("currentRate");
    let  rate = document.getElementById("rate");
    let sliderValue= rate.value;
    currentRate.innerHTML = sliderValue;
}; */

function compute()
{
   let rate = document.getElementById("rate").value;
   let amount= document.getElementById("principal").value;
   let years = document.getElementById("years").value;
  
   let isValidData = checkdata();
   if(isValidData){
    let d= new Date();
    let year = d.getFullYear()+ Number(years);
    let interest = Number(rate)/100 * Number(amount) * Number(years);
    let computedAmount = Number(amount) + interest;
    let output=`<p>If you deposit ${amount} at an interest rate of ${rate},\n you will receive an amount of ${computedAmount}, in the year ${year}<p><br>`;
    console.log("total amount after "+ years +" years is: "+computedAmount);
    console.log("output:"+output);
    document.getElementById("result").innerHTML= output;
   }
    
}

const checkdata= ()=>{
    const amount= document.getElementById("principal");
    const years = document.getElementById("years");
   
    console.log("amount: "+amount.value +", years value:"+years.value +", interest rate:"+rate.value);
    //Check if amount field is empty
    if(amount.value == ""){
        alert("Please enter an amount");
        amount.focus();
        return false;
    }
    //Check if years field is empty
    if(years.value == ""){
    alert("Please enter a number of years");
    years.focus();
    return false;
    }
    //If all is well return true.
    //alert("Form validation is successful."+"\nYou entered the amount: "+amount.value +", years value:"+years.value +" and interest rate:"+rate.value);
    return true;
}


     
