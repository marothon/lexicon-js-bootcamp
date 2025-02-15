// 1. Vilka datatyper finns det i JS? Svara i form av en array.
let datatypes = [1, 10n, true, 'string', undefined, null, Object(), Symbol()];

// 2. Är följande if sats true eller false?
// 
// let a = 1;
// let b = '1';
// if(a == b) // true or false

// SVAR: 
// true eftersom att man med en == operator gör typkonversioner för att jämföra.
// om man däremot använder === blir det false eftersom === kräver att båda sidor är
// av samma typ.
let a = 1;
let b = '1';
if(a == b){
    console.log('Yes, a==b is true');
}
if(! (a === b)){
    console.log('No, a===b is not true');
}

// 3. Vad är den tekniska skillnaden ( förutom var, let ) på dessa två deklarationer?
//     let name = 'Greta Thunberg';
//     var name = 'Greta Thunberg';

// SVAR:
// när 'var'-variabeln "hoistas" kan man komma åt variabelvärdet innan 
// deklarationen. Sedan om man inte anger var i deklarationen kommer 
// javascript att leta efter en global variable med samma namn och om
// inte en sådan finns skapa en ny global variable med det namnet.
// Detta är nuförtiden inte ett önskvärt beteende och man kan gardera sig
// mot det genom att declarera 'use strict'; högst upp i .js filen. Till sist
// så har var inte stöd för block-scope utan bara globalt eller funktionsnivå.
// om man t. ex. deklarerar en variabel "var b;" inutti en for-loop så kommer man
// kunna komma åt den efter loopen inom funktionen. En "let b;" variabel har stöd
// för block-scope så den hade man inte kunnat komma åt.


// 4. Hur tar man reda på vad en variabel har för datatyp?

// SVAR: Man använder sig av typeof 
console.log(typeof "En sträng"); //Skriver ut "string" i terminalen.

// 5. Vilken av följande tecken visar ett kodblock?
//     [] // A 
//     () // B
//     {} // C

// SVAR: C. A är en array-deklaration alternativt ett element i en array om ett index anges (e.g. enArray[0]) 
//  B är paranteser somm kan omfånga ett uttryck (expression) men används också i kodsyntax för att t. ex. 
// omringa if-villkor eller funktionssparametrar.

// 6. Vad i följande kod är blocket som exekveras?
//     el.on('click', () => {
//         alert('Ariba!');
//     }) 

// SVAR: .on är inte en funktion in vanilla-JS utan en jQuery förenkling utav addEventListener, så ingen kod
// kommer exekveras. Om man istället använt addEventListener hade en anonym funktion bundits till "click"-händelsen
// på e1 elementet. När man sedan klickar på e1 elementet hade 'Ariba!' visats på skärmen som en alert-box.


// 7. Vad kommer stå i console.log()?
//     var greeting = 'Good bye world!';
//     {
//         let greeting = 'Hello World';
//     }
//     console.log(greeting);

// SVAR: 'Good bye world!', eftersom 'Hello World' deklarationen har scopet inom blocket ({}).


// 8 Vilken av följande syntax är korrekt sätt att skriva strängar.
// 
// "Hello World" // A
// 'Hello World' // B
// `Hello World` // C

// SVAR: Alla är korrekta. Alternativ C skapar dock en template-sträng som man kan använda för
// att interpolera värden in i strängen mhja. ${}. Om man sedan vill ha citationstecken i sin sträng får man
// varva mellan ' och ", . ex. "A Poet's Mind".


// 9 Räkna antal tecken i strängen nedan.
let sentence = "If you're having code problems I feel bad for you son. I got 99 problems, but a glitch ain't one."
console.log(`Antal tecken: ${sentence.length}`);

// 10 Gör en template string där N ersätts med variabeln name.
let name = 'Niklas' 
console.log(`Hej ${name} din gamle knasboll!`);
 
// 11 Gör en array med 5 frukter i.
let fruits = ['Banan', 'Äpple', 'Ananas', 'Päron', 'Apelsin'];

// 12 Lägg till en frukt i början och en frukt i slutet på arrayen.
fruits.unshift('Avocado');
fruits.push('Satsuma');
console.log(fruits);

// 13 I ovanstående fruktarray, plocka bort första och sista frukten.
fruits.shift();
fruits.pop();
console.log(fruits);

// 14 I följande array, sätt in två nya frukter på index 2.
fruits = ['apple', 'orange', 'pear', 'kiwi']
fruits.splice(2, 0, 'avocado', 'banana');
console.log(fruits);

// 15 Klona följande array och ändra första frukten till pineapple.
fruits = ['apple', 'orange', 'pear', 'kiwi']
let fruitsCopy = structuredClone(fruits);
fruitsCopy[0] = 'pineapple';
console.log(fruits);
console.log(fruitsCopy);

// 16 Sortera följande array i fallande ordning.
let num = [1,5,78,7,122,3,4,65,40,2,8]
num.sort ( (a, b) => b-a );
console.log(num);

// 17 Lägg ihop följande arrayer.
a = [1,2,3];
b = [4,5,6];
let ab = a.concat(b);
console.log(ab);

// 18 Mixa följande arrayer där varannan är från array a och varanan från array b.
a = ['My', 'has', 'many', 'open'];
b = ['brain', 'to', 'tabs', '!'];
let mixedArray = [];
let change = false;
for(elem of a){
    mixedArray.push(elem);
    mixedArray.push(b.shift());
}
console.log(mixedArray);

// 19 Merga in array a i array b på index 2. 
a = [1,2,7,8,9,10];
b = [3,4,5,6];
b.splice(2, 0, ...a);
console.log(b);

// 20 Gör alla namn i array names till versaler.
let names = ['sixten', 'Eva', 'Ali', 'Kim', 'Greger', 'Alicia'];
let namesUpperCase = names.map( name => name.toUpperCase());
console.log(namesUpperCase);

// 21 Filtrera fram samtliga personer som är 30 år eller äldre.
names = [
    { name: 'sixten', age: 32 },
    { name: 'Eva',    age: 19 }, 
    { name: 'Ali',    age: 67 },
    { name: 'Kim',    age: 13 },
    { name: 'Greger', age: 30 },
    { name: 'Alicia', age: 82 }
];

console.log(names.filter(person => person.age >= 30));


// 22 Skriv koden för att undersöka om arrayen names innehåller namnet Ewa. Ditt svar ska vara true eller false.
names = ['sixten', 'Eva', 'Ali', 'Kim', 'Greger', 'Alicia'];

let containsName =  (arr, searchedName) => 
    arr.filter((name) => name.toLowerCase() == searchedName.toLowerCase()).length >= 1;

console.log(containsName(names, 'Ewa'));

// 23 Skapa en for-loop som itererar 1000 varv. För varje iteration ska du console.log() vilket varv du är på.
for(let i = 1; i <= 1000; i++)
    console.log(i);

// 24 Skapa en for-loop som räknar ner från 100 till 0. För varje varv ska du console.log() vilket varv du är på.
for(let i = 100; i>=0; i--)
    console.log(i);

// 25 Loopa ut följande array med console.log().
fruits = ['apple', 'orange', 'pear', 'kiwi', 'pineapple'];
for(fruit of fruits){
    console.log(fruit);
}

// 26 Loopa ut föjande array med console.log(). Sätt vilket index varje frukt har framför. Ex. 0. apple, 1. orange osv.
for([i, fruit] of fruits.entries()){
    console.log(`${i}. ${fruit}`);
}

// 27 Generera en kortlek med 52 kort där varje kort innehåller en färg ( suite ) och ett värde mellan 2 och 14 ( ess ). Ex.
//     [..., 'hjärter 8', 'hjärter 9', ...]
const suites = ['ruter', 'hjärter', 'knäckt', 'klöver'];
let deck = [];
for(suite of suites){
    deck.push(`${suite} ess`);
    for(let rank=2; rank < 11; rank++){
        deck.push(`${suite} ${rank}`);
    }
    deck.push(`${suite} knekt`);
    deck.push(`${suite} dam`);
    deck.push(`${suite} kung`);
}
console.log(deck);

// 28 Skapa en ett objekt som heter book och som har egenskaperna title, author och genres.
//     De två första egenskaperna ska vara strängar och den sista en array.
let book = {
    book: 'Sagan om Ringen',
    author: 'J.R.R. Tolkien',
    genres: ['high fantasy', 'adventure', 'epic fantasy']
};

// 29 console.log() endast egenskapen city i följande objekt.
//     let person = {
//         name: 'Sixten Faceplant',
//         email: 'sixten.faceplant@zocom.se',
//         role: 'ninjah',
//         adress: {
//             street: 'Karatevägen 3',
//             zip: '41477',
//             city: 'Kablam City'
//         }
//     }


// 30 Klona ett objekt.

// 31 Skapa objektet dog med egenskaperna name, breed och metoden bark som ska returnera "Woff, jag heter N!" 
//     där N ska ersättas med egenskapen name i samma objekt.

// 32 Loopa ut följande objekt där key och value ska console.log(). Ex. "name - Sixten".
//     let person = { 
//         name: 'sixten',
//         email: 'sixten@zocom.se', 
//         role: 'ninjah',
//         age: 32 
//         }

// 33 Skriv en funktion som adderar två numeriska argument (x och y ) och returnerar.

// 34 Skriv en anonym funktion som returnerar en sträng som förklarar skillnaden på namnade- och anonyma funktioner.

// 35 Skriv en funktion som plockar ut året från en sträng i datumformat. Funktionen ska ta ett argument, som ska vara en sträng. 
//     Strängen ska alltid ha 10 tecken och följa mönstret 'YYYY-MM-DD'.

//     getYear('2019-10-14') // 2019

// 36 Skriv en funktion som tar tre parametrar. De första två är två tal och den sista är en aritmetisk operator d.v.s antingen '+', '-', '/', ''.
//     calcThis(1,2,'+') // 3

// 37 Skriv en funktion som jämför om två tal är likadana och returnerar true / false.
//     compareThis(1,1) // true
//     compareThis(3,1) // false


// 38 Skriv en funktion som kollar om ett tal är mellan 20 och 40 och returnerar true / false.
//     between(30) // true
//     between(50) // false


// 39 Skriv en funktion som jämför längden på två arrayer och returnerar den längsta.
//     getMeTheLongestArr([1,2], ['A','B','C']) // ['A','B','C']

// 40 Arunda talet 1337.51 nedåt till närmaste heltal med hjälp av Math object.

// 41 Arunda talet 1337.48 uppåt till närmaste heltal med hjälp av Math object.

// 42 Arunda talet 1337.497 till närmaste heltal med hjälp av Math object.

// 43 Skriv en funktion ( random(max) ) som tar ett numerisk argument ( max ). Funktionen ska returnera ett slumpat tal mellan 0 och argumentet.
//     random(10000) // 1337


// 44 Skriv en funktion ( randomPassword(n) ) som tar ett numerisk argument ( n ).
//     Funktionen ska returnera ett slumpat lösenord bestående av bokstäver och siffor med längden n.
//     randomPassword(7) // 4w3s0m3


// 45 Skriv en funktion ( randomName(names) ) som tar en array som argument ( names ). Funktionen ska returnera ett slumpat namn från arrayen.
//     const names = ['sixten', 'Eva', 'Ali', 'Kim', 'Greger', 'Alicia']

//     randomName(names) // Greger

// 46 Vad är skillnaden på följande två funktioner?
//     let getData = function(url) {};
//     function getData() {};

// 47 I vilken ordning kommer följande funktioner att exekveras?
//     // Execute
//     HelloAgainAgain();

//     function hello(){  
//         console.log('Hello!') 
//     };

//     function helloAgain(){
//         console.log('Hello Again!') 
//         hello();
//     };

//     function HelloAgainAgain(){
//         console.log('Hello Again Again!') 
//         helloAgain();
//     }


// 48 Ordna programmet i rätt ordning så alla pokemons printas ut. All kod som behövs finns med.
//     for(let i=0;i<=pokemons.length;i++) {}

//     function printPokemons() {}

//     console.log("One awesome pokemon is " + pokemons[i]);

//     printPokemons();

//     let pokemons = ['Pikachu', "Charmander", "Bulbasaur", "Squirtle"];


// 49 Ordna programmet i rätt ordning så att det går att skicka in en sträng och få tillbaka den baklänges.
//     return newString;
//     let i = str.length - 1; i >= 0; i--
//     reverseString('hello');
//     str
//     function reverseString() {}
//     let newString = '';
//     for () {}
//     newString += str[i];


// 50 Vilka tre state har ett promise?

// 51 Följande funktion returnerar data från en databas. Skriv ut resultatet i console.log(data) med hjälp av en promise-kedja.
//     Se också till att fånga upp ev errors.

//     getData(url)


// 52 Gör samma operation som föregående, fast med async / await syntax istället. Glöm inte att fånga upp ev. errors.

// 53 Gör en funktion ( chuckMe(url) ) som använder fetch() och följande REST-resurs.
// Din funktion ska returnera ett skämt som du skriver ut med console.log().

//     const url = `https://api.chucknorris.io/jokes/random`;

// 54 Gör en POST -request med fetch() till nedanstående endpoint. Din POST ska innehålla nedanstående JS-objekt. console.log() svaret du får från servern.
//     const url = `https://jsonplaceholder.typicode.com/posts`

//     let data = {
//         id: 1,
//         joke: 'How many ears does Spock have? - Three; Left, right and the final front ear.',
//         funny: true
//     }

// 55 Gör en PUT request till endpointen i ovanstående uppgift ( 12.2 ). Uppdatera skämtet till ett ännu roligare. console.log() svaret du får från servern. 

// 56 Hämta innehållet i h2 från följande kod.

// 57 Hämta innehållet från 3:e li från följande kod.

// 58 Gör om innehållet alla li i nedanstående punktlista till versaler.
//     <ul>
//         <li>Gold</li>
//         <li>Silver</li>
//         <li>Bronze</li>
//     </ul>
    
// 59 Hämta värdet från nedanstående input-fält.
//     <input type="email" id="email">


// 60 Hämta det valda alternativet från nedanstående select-lista.
//     <select id="options">
//         <option value="a">A</option>
//         <option value="b">B</option>
//         <option value="c">C</option>
//     </select>

// 61 Hämta bildlänken i följande kod.
//     <img src="img/awesome.jpg" alt="awesome stuff" class="awesome" />


// 62 Kika om följande checkbox är iklickad eller ej.
//     <input type="checkbox" id="gdpr-ok" checked />

// 63 Lägg på classen .show på följande element.
//     <nav id="main-nav"></nav> 


// 64 Toggla classen .active på följande element.
//     <a id="home" href="#">Home</a> 


// 65 Lägg till classen .shadow på alla bilder i följande kod.
//     <figure class="gallery">
//         <img src="img/image-1.jpg" alt="1">
//         <img src="img/image-2.jpg" alt="2">
//         <img src="img/image-3.jpg" alt="3">
//     </figure>



// 66 Skapa upp en h1-tagg och lägg till en rubrik och appenda den sedan på body.

// 67 Anropa följande API const url = `https://api.chucknorris.io/jokes/random`;
//  med fetch() och spara svaret i en variabel och console.log().
//  Skapa en section-tagg som kommer agera som en wrapper.
//  Kolla hur objektet ser ut och skapa en img-tagg för icon_url. En h2-tagg för value och 
//  till sist en a-tagg för url. Append() alla dessa taggar på section och sedan append() på body.

// 68 Lyssna efter ett click event på följande element och skriv ut "go go go!" i console.log().
//     <button>Lets go!</button>

// 69
// Lyssna efter ett click event på samtliga li i följande lista. Vid klick ska en alert() dyka upp där det står Jag älskar N!!! Ex. "Jag älskar äpple!!!"
//     <ul>
//         <li>Päron</li>
//         <li>Äpple</li>
//         <li>Kiwi</li>
//         <li>Keso</li>
//         <li>Frystorkad mört</li>
//     </ul>

// 70 Följande input-fält ska console.log() innehållet när man trycker enter.
//     <input type="password" id="password" placeholder="password" />

//     <details>
//         <summary>hint</summary>
//         här är "keyup"-eventet väldigt användbart.
//     </details>