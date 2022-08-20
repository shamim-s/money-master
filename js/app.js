
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

})

 document.getElementById('save-btn').addEventListener('click', function(){

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

            const inputSavingElementValue = getInputFieldValueById('saving-input');

            console.log(typeof(inputSavingElementValue));


            const savingTotal = newBalance * (inputSavingElementValue / 100);

            if(inputSavingElementValue > 100 ){
                alert('Percentage canbe less then or equal 100');
            }else if( inputSavingElementValue === ''){
                alert('Please inter a number');
            }else if( isNaN(inputSavingElementValue) ){
                alert('Input can be only number');
            }else if(inputSavingElementValue < 0){
                alert('You can not enter negative number');
            }else {
                const savingTotal = newBalance * (inputSavingElementValue / 100);
                setTextElementValue('saving-amount', savingTotal);
                const remainingBalance = newBalance - savingTotal;
                setTextElementValue('remaining-balance', remainingBalance);
            }
                
            
        
})