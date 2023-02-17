const apiUrl= 'https://api.adviceslip.com/advice';

function randomizeSlip(){
    let x = Math.floor((Math.random() * 100) + 1) ;
    return x;
}
const selectPin = document.getElementById('pin');
const adviceText = document.getElementById('advice-text');
const adviceTitle =  document.getElementById('advice-title');

 selectPin.addEventListener('click', function(){
//    alert( randomizeSlip());


//    adviceTitle.firstChild.innerText = `ADVICE #${randomizeSlip()}`;
    // displayAdvice();
    getapi(apiUrl);
})

function displayAdvice(advice){
  

        adviceTitle.firstChild.innerText = `ADVICE #${advice.id}`;
        adviceText.firstChild.innerText = advice.advice;
    
}
//Defining async function
async function getapi(url){
          //storing response
        const response = await fetch(url);

        //storing data in form of JSon
        var data = await response.json();
        if (response) {
            displayAdvice(data.slip)
        }
       
    
    }
