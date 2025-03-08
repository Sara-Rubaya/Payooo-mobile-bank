// document.getElementById('add-money').addEventListener('click', function(event){
// event.preventDefault();
// const amount= document.getElementById('amount').value;
// const convertedAmount = parseFloat(amount);
// const pin = document.getElementById('pin').value;
// const convertedPin=parseInt(pin);
// const mainBalance=document.getElementById('main-balance').innerText;
// const convertedMainBalance = parseFloat(mainBalance);

// if(convertedPin===1234){
//     const sum=convertedMainBalance + convertedAmount;
//     document.getElementById('main-balance').innerText=sum;
// }
// else{
//     console.log('pin thik na')
// }
// })

document
.getElementById('add-money')
.addEventListener('click', function(event){
    event.preventDefault();
    const amount =getInputValueByID('amount');
    const pin = getInputValueByID('pin');

    const account=document.getElementById('account-number').value;
    const mainBalance=getInnerTextByID('main-balance');
    console.log(mainBalance);

    if(account.length===11){
        if(pin === 1234){
              const sum = mainBalance + amount;
            //   document.getElementById('main-balance').innerText=sum;
              setInnerTextByIDandValue('main-balance', sum)
        }
        else{
            console.log('pin thik nai')
        }

    }
    else{
        console.log('account number thik nai')
    }
})