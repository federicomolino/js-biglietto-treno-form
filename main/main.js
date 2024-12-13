const submitBotton = document.querySelector('#submit');
let numberKmInput = document.querySelector('#numberKm');
let agePersonInput = document.querySelector('#agePerson');
let resultInput = document.querySelector('#result')

const priceKm = 0.21;

// tutte le azioni che devono succedere quando premo il bottone
submitBotton.addEventListener('click', function(event){
    event.preventDefault()

    //rendiamo numeri i valori inseriti
    const numberKm = parseFloat(numberKmInput.value)
    const agePerson = parseInt(agePersonInput.value)

    //verfico che entrambi siano numeri quelli inseriti
    if(isNaN(numberKm) || isNaN (agePerson) || numberKm <= 0 || agePerson <= 0){

        resultInput.innerHTML = `Entrabe le richieste devono avere un valore numerico e superiore a 0, grazie`;

    }else{

        //moltiplico il numero inserito dall'utente con il prezzo fisso
        let priceTot = numberKm * priceKm;
        let priceFinal = priceTot;

        //controllo che l'età sia <= 18 + calcolo
        if(agePerson <= 18){
            priceFinal = priceFinal - ((priceTot * 20)/100);

            
            //stampo prezzo finito con max 2 decimali e cambio il punto con la virgola, con sconto Min 18
            resultInput.innerHTML = `€${priceFinal.toFixed(2).replace(".",",")}`;


        //controllo che l'età sia >= di 65 + calcolo
        }else if (agePerson >= 65) {
            priceFinal = priceFinal - (priceTot * 40)/100;

            //stampo prezzo finito con max 2 decimali e cambio il punto con la virgola, con sconto 0ver 65
           resultInput.innerHTML = `€${priceFinal.toFixed(2).replace(".",",")}`;

        }else{
            
            //stampo prezzo finito con max 2 decimali e cambio il punto con la virgola
            resultInput.innerHTML = `€${priceFinal.toFixed(2).replace(".",",")}`;
        }
    }

}
)
