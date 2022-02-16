document.getElementById('calculate-button').addEventListener('click', function(){
    const income = balanceCalculate('income');
    const food = balanceCalculate('food');
    const rent = balanceCalculate('rent');
    const clothes = balanceCalculate('clothes');

    const totalExpenses = food + rent + clothes;
    const balance = income - totalExpenses;
    balanceSet('total-expenses', totalExpenses);
    balanceSet('balance', balance);
  
})

function balanceCalculate(inputId){
    const inputValue = document.getElementById(inputId).value;
    const inputNumber = parseFloat(inputValue);
    return inputNumber;
}

function balanceSet(itemId, innertex){
    const newBalance = document.getElementById(itemId);
    newBalance.innerText = innertex;
    
}


document.getElementById('save').addEventListener('click', function(){
    const saveValue = balanceCalculate('save-parsent');
    console.log(saveValue);
    const saveParsent = saveValue / 100;
    console.log(saveParsent);
    const balance = document.getElementById('balance');
    const balanceNumber = parseFloat(balance.innerText);
    console.log(balanceNumber);
    const saveBalance = balanceNumber * saveParsent;
    console.log(saveBalance);
    const remainingBalance = balanceNumber - saveBalance;
    balanceSet('saving-amount', saveBalance);
    balanceSet('remaining-balance', remainingBalance);


})