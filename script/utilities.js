function getInputValueByID(id){
    const amount = document.getElementById(id).value;
    const convertedValue = parseFloat(amount);
    return convertedValue;
}

function getInnerTextByID(id){
    const value=document.getElementById(id).innerText;
    const convertedValue = parseFloat(value);
    return convertedValue;
}

function setInnerTextByIDandValue(id,value){
   document.getElementById(id).innerText=value;
}