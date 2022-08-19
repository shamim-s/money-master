
document.getElementById('calculate-btn').addEventListener('click', function(){

// called income input element by id ------------------------------------
    const inputElementValue = getInputFieldValueById('income-input');

// called Food input element by id -----------------------------------------
    const inputFoodElementValue = getInputFieldValueById('food-input');

// called Rent input element by id ----------------------------------------
    const inputRentElementValue = getInputFieldValueById('rent-input');

// called Cloth input element by id -----------------------------------------
    const inputClothElementValue = getInputFieldValueById('cloth-input');

// Sum total Food, rent and cloth ---------------------------------------------
    const totalExpense = inputFoodElementValue + inputRentElementValue + inputClothElementValue;

// subtraction total expense from income ---------------------------------
    const newBalance = inputElementValue - totalExpense;

// called total expense text Element by id And set value ------------------
setTextElementValue('total-expenses', totalExpense);

// called Remaining valance text Element by id And set value------------------ 
setTextElementValue('balance', newBalance);

// =======================Get saving from main balance=======================
//====================================================================\
const inputSavingElementValue = getInputFieldValueById('saving-input');
console.log(inputSavingElementValue);

})