/* #region Consegna:
Scrivi un programma che stampi in console i numeri da 1 a 100.
MILESTONE 1
Per i multipli di 3 stampi “Fizz” al posto del numero
Per i multipli di 5 stampi Buzz.
Per i numeri che sono sia multipli di 3 che di 5 stampi FizzBuzz.
BONUS:
MILESTONE 2
Dato un container nel DOM, appendi un elemento html con il numero o la stringa corretta.
MILESTONE 3
Applica uno stile differente a seconda del valore dell'indice per i multipli di 3, per i multipli di 5 e per i valori che sono sia multipli di 3 che di 5.
RIFLESSIONI DA FARE:
Prima di partire a scrivere codice poniamoci qualche domanda:
Come faccio a sapere se un numero è divisibile per un altro?
Abbiamo visto qualcosa di particolare che possiamo usare, c'é un operatore che fa al caso mio?
Come creare nuovi elementi html e appenderli al container?
CONSIGLI:
scriviamo sempre prima dei commenti in italiano per capire cosa vogliamo fare
proviamo ad immaginare le operazioni che vogliamo far svolgere al nostro programma così come lo faremmo "a mano"
#endregion */

// stampare in console numeri da 1 a 100
const numberElement = document.querySelector('.number_box')

for ( let i = 1 ; i <= 100; i++){
   

/*     if (i % 3 === 0 && i % 5 === 0) {  // se sia divisibile per 3 che per 5
        console.log('FizzBuzz');

    } else if (i % 3 === 0){  //  divisibile per 3 
        console.log('Fizz');
    }
    else if (i % 5 === 0){  //  divisibile per 5 
        console.log('Buzz');
    }

    else{
        console.log(i); // tutti gli altri numeri
    }
 */

    if (i % 3 === 0 && i % 5 === 0) {  // se sia divisibile per 3 che per 5
        console.log('FizzBuzz');

        const markupNumber = `
        <div class="number ">
        <div>FizzBuzz</div>
        </div>`
    
        numberElement.insertAdjacentHTML('beforeend', markupNumber)

    } else if (i % 3 === 0){  //  divisibile per 3 
        console.log('Fizz');

        const markupNumber = `
        <div class="number">
        <div>Fizz</div>
        </div>`
    
        numberElement.insertAdjacentHTML('beforeend', markupNumber)
    }
    else if (i % 5 === 0){  //  divisibile per 5 
        console.log('Buzz');

        const markupNumber = `
        <div class="number">
        <div>Buzz</div>
        </div>`
    
        numberElement.insertAdjacentHTML('beforeend', markupNumber)
    }

    else{
        console.log(i); // tutti gli altri numeri

        const markupNumber = `
        <div class="number">
        <div>${i}</div>
        </div>`

        numberElement.insertAdjacentHTML('beforeend', markupNumber)
    }







   





}
