//
function balanceCalculate(inputId){
    const inputValue = document.getElementById(inputId).value;
    const inputNumber = parseFloat(inputValue);
    return inputNumber;
}

//
function balanceSet(itemId, innertex){
    const newBalance = document.getElementById(itemId);
    newBalance.innerText = innertex;
    
}

//
document.getElementById('calculate-button').addEventListener('click', function(){
    const income = balanceCalculate('income');
    const food = balanceCalculate('food');
    const rent = balanceCalculate('rent');
    const clothes = balanceCalculate('clothes');

    const totalExpenses = food + rent + clothes;
    const balance = income - totalExpenses;
    //
    if (isNaN(income) || isNaN(food) || isNaN(rent) || isNaN(clothes)){
        alert("It is Not a number; Please give me a Number");
    }
    //
    else if(income < 0 || food < 0 || rent < 0 || clothes< 0){
        alert("It is Negative number; Please give me a Positive number");
    }
    //
    else if (totalExpenses > income ){
        alert("Your Expense is out of Your income");
        balanceSet('total-expenses', totalExpenses);
        balanceSet('balance', balance);
    }
    //
    else{
        balanceSet('total-expenses', totalExpenses);
        balanceSet('balance', balance);
    }
})

//
document.getElementById('save').addEventListener('click', function(){
    const saveValue = balanceCalculate('save-parsent');
    console.log(saveValue);
    const income = balanceCalculate('income');
    const saveParsent = saveValue / 100;
    // console.log(saveParsent);
    const balance = document.getElementById('balance');
    const balanceNumber = parseFloat(balance.innerText);
    // console.log(balanceNumber);
    const saveBalance = income * saveParsent;
    // console.log(saveBalance);
    const remainingBalance = balanceNumber - saveBalance;
//
    if (saveValue < 0){
        alert("It is Negative number; Please give me a Positive number");
    }
    //
    else if (balanceNumber < saveBalance){
        alert("Your Save Amount is out of your current balance");
    }
    //
    else{   
    balanceSet('saving-amount', saveBalance);
    balanceSet('remaining-balance', remainingBalance);
    }
})