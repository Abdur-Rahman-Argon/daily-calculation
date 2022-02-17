//balance call with id and return number
function balanceCalculate(inputId){
    const inputItem = document.getElementById(inputId);
    const inputValue = inputItem.value;
    const inputNumber = parseFloat(inputValue);
    // inputItem.value = ''; //(input field hide)

    return inputNumber;
}

//balance inner text call
function balanceSet(itemId, innertex){
    const newBalance = document.getElementById(itemId);
    newBalance.innerText = innertex;
    
}

//handle calculate button and set ballance
document.getElementById('calculate-button').addEventListener('click', function(){
    const income = balanceCalculate('income');
    const food = balanceCalculate('food');
    const rent = balanceCalculate('rent');
    const clothes = balanceCalculate('clothes');

    const totalExpenses = food + rent + clothes;
    const balance = income - totalExpenses;
    //input not number error
    if (isNaN(income) || isNaN(food) || isNaN(rent) || isNaN(clothes)){
        alert("It is Not a number; Please give me a Number");
    }
    //input nagative number error
    else if(income < 0 || food < 0 || rent < 0 || clothes< 0){
        alert("It is Negative number; Please give me a Positive number");
    }
    //large expenses without income
    else if (totalExpenses > income ){
        alert("Your Expense is out of Your income");
        balanceSet('total-expenses', totalExpenses);
        balanceSet('balance', balance);
    }
    //publish new balance
    else{
        balanceSet('total-expenses', totalExpenses);
        balanceSet('balance', balance);
    }
})

// handle save button and get save balance
document.getElementById('save').addEventListener('click', function(){
    const saveValue = balanceCalculate('save-parsent');
    console.log(saveValue);
    const income = balanceCalculate('income');
    const saveParsent = saveValue / 100;
    const balance = document.getElementById('balance');
    const balanceNumber = parseFloat(balance.innerText);
    const saveBalance = income * saveParsent;
    const remainingBalance = balanceNumber - saveBalance;
     //input not number error
     if (isNaN(balanceNumber)){
        alert("It is Not a number; Please give me a Number");
    }
    // nagative value error
    if (saveValue < 0){
        alert("It is Negative number; Please give me a Positive number");
    }
    //big save balance with out balance error
    else if (balanceNumber < saveBalance){
        alert("Your Save Amount is out of your current balance");
    }
    //set save balance
    else{   
    balanceSet('saving-amount', saveBalance);
    balanceSet('remaining-balance', remainingBalance);
    }
})