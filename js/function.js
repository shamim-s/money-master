// Function for income input field 
function getInputFieldValueById(elementId){
    const incomeInputElement = document.getElementById(elementId);
    const inputElementValueString = incomeInputElement.value;
    const inputElementValue = parseInt(inputElementValueString);

    return inputElementValue;
}
// Function for Food input field 
function getInputFieldValueById(elementId){
    const incomeInputElement = document.getElementById(elementId);
    const inputElementValueString = incomeInputElement.value;
    const inputFoodElementValue = parseInt(inputElementValueString);

    return inputFoodElementValue;
}
// Function for Rent input field 
function getInputFieldValueById(elementId){
    const incomeInputElement = document.getElementById(elementId);
    const inputElementValueString = incomeInputElement.value;
    const inputRentElementValue = parseInt(inputElementValueString);

    return inputRentElementValue;
}
// Function for Clothes input field 
function getInputFieldValueById(elementId){
    const incomeInputElement = document.getElementById(elementId);
    const inputElementValueString = incomeInputElement.value;
    const inputClothElementValue = parseInt(inputElementValueString);

    return inputClothElementValue;
}
// // Function for Saving input field 
    function getInputFieldValueById(elementId){
    const savingInputElement = document.getElementById(elementId);
    const inputElementValueString = savingInputElement.value;
    const inputSavingElementValue = parseInt(inputElementValueString);

    return inputSavingElementValue;
}


// Text element value get and set 
function setTextElementValue(elementId, value){
    const textElementId = document.getElementById(elementId);
    const textElementString = textElementId.innerText;
    const texrElementValue = parseInt(textElementString);

    textElementId.innerText = value;
}