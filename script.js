function compute()
{
   let p = document.getElementById("principal").value;
   let validData = checkdata();
    
}

const checkdata= ()=>{
    let amount= document.getElementById("principal");
    let years = document.getElementById("years");
    let rate = document.getElementById("rate");
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
    alert("Form validation is successful.")
    return true;
}
        