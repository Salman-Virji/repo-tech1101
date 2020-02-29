
function calcTax(taxowed,earning,income) { 
    income = document.getElementById("income").value;
    
    earning = (income - taxowed)
    console.log(earning)

     if( income > 214368 ){
         taxowed = (income - 214368) * 0.33 + 49645;
    }
    else if (income >150473){
        taxowed = (income - 150473) * 0.29 + 31115;
    }
    else if (income > 97069){
        taxowed =(income - 97069) * 0.26 + 17230;
    }
    else if (income > 48535) {
        taxowed = (income - 48535) * 0.205 + 7280;
    }
    else {
        taxowed = income * 0.15;

    }
    earning = (income - taxowed);

    document.getElementById("t1").innerHTML = "Tax Owed: $" + Math.round(taxowed * 100)/100;

    document.getElementById("t2").innerHTML = "Retained Earnings: $" + Math.round(earning * 100)/100;
}

function clearfn(clearinput,retained,taxowed2,efftax) {
     clearinput = "  ";
     retained = "Retained Earnings:"
     taxowed2 = "Tax Owed:"
     efftax = "Effective tax rate:"
    document.getElementById("income").value = clearinput;
    document.getElementById("t1").innerHTML = taxowed2;
    document.getElementById("t2").innerHTML = retained;
    document.getElementById("t3").innerHTML = efftax;
}


submit.addEventListener("click", calcTax)
clear.addEventListener("click", clearfn)
    
