const submitBotton = document.querySelector('#submit');
let numberKmInput = document.querySelector('#numberKm');
let agePersonInput = document.querySelector('#agePerson');
let resultInput = document.querySelector('#result')

const spinnerButton = submitBotton.querySelector ('#spinnerButton');
const statusSpan = submitBotton.querySelector ('#statusButton');

const priceKm = 0.21;

// tutte le azioni che devono succedere quando premo il bottone
submitBotton.addEventListener('click', function(event){
    event.preventDefault()

    //faccio apparire al click lo spinner del bottone
    spinnerButton.classList.toggle('d-none')

    statusSpan.innerHTML =  `Sto calcolando`;

    //la rispsota viene data dopo 1,5 secondi
    setTimeout(() => {
        
        //rendiamo numeri i valori inseriti
        const numberKm = parseInt(numberKmInput.value)
        const agePerson = parseInt(agePersonInput.value)

        //verfico che entrambi siano numeri quelli inseriti
        if(isNaN(numberKm) || isNaN (agePerson) || numberKm <= 0 || agePerson <= 0){

            resultInput.innerHTML = `Entrabe le richieste devono avere un valore numerico superiore a 0, ricarica la pagina`;
            resultInput.classList.add('text-red')

        }else{

            //moltiplico il numero inserito dall'utente con il prezzo fisso
            let priceTot = numberKm * priceKm;
            let priceFinal = priceTot;

            //controllo che l'età sia <= 18 + calcolo
            if(agePerson <= 17){
                priceFinal = priceFinal - ((priceTot * 20)/100);
    
                //stampo prezzo finito con max 2 decimali e cambio il punto con la virgola, con sconto Min 18
                resultInput.innerHTML = `Il costo totale con sconto 20% :  €${priceFinal.toFixed(2).replace(".",",")}`;


            //controllo che l'età sia >= di 65 + calcolo
            }else if (agePerson >= 65) {
                priceFinal = priceFinal - (priceTot * 40)/100;

                //stampo prezzo finito con max 2 decimali e cambio il punto con la virgola, con sconto 0ver 65
            resultInput.innerHTML = `Il costo totale con sconto 40% :  €${priceFinal.toFixed(2).replace(".",",")}`;

            }else{
                
                //stampo prezzo finito con max 2 decimali e cambio il punto con la virgola
                resultInput.innerHTML = `Il costo totale :  €${priceFinal.toFixed(2).replace(".",",")}`;
            }
        }

        //tolgo la rotella
        spinnerButton.classList.toggle('d-none')
        statusSpan.innerHTML = `Risultato`;

    }, 1500);
})
