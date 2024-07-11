# JS grundläggande övningar

## Syntax n stuff
### Datatyper
**1** Vilka datatyper finns det i JS? Svara i form av en array.

```javascript
let datatypes = []
```

**2** Är följande if sats *true* eller *false*?

```javascript
let a = 1;
let b = '1';
if(a == b) // true or false
```

**3** Vad är den *tekniska* skillnaden ( förutom var, let ) på dessa två deklarationer?

```javascript
let name = 'Greta Thunberg';
var name = 'Greta Thunberg';
```

**4.** Hur tar man reda på vad en variabel har för datatyp?

### Block 

**5** Vilken av följande tecken visar ett ```kodblock```?

```javascript
[] // A 
() // B
{} // C
```

**6** Vad i följande kod är ```blocket``` som *exekveras*?

```javascript
el.on('click', () => {
    alert('Ariba!');
})
```

**7**
Vad kommer stå i ```console.log()```?

```javascript
var greeting = 'Good bye world!';

{
    let greeting = 'Hello World';
}

console.log(greeting);
```

### Strings

**8** Vilken av följande syntax är korrekt sätt att skriva strängar.

```javascript
"Hello World" // A
'Hello World' // B
`Hello World` // C
```

**9** Räkna antal tecken i strängen nedan.

    let sentence = "If you're having code problems I feel bad for you son. I got 99 problems, but a glitch ain't one."

**10** Gör en *template string* där ```N``` ersätts med variabeln ```name```.

```javascript
let name = '<Ditt namn>' 
`Hej N din gamle knasboll!`
```

### Arrays

**11** Gör en array med 5 frukter i.

**12** Lägg till en frukt *i början* och en frukt *i slutet* på arrayen.

**13**
I ovanstående fruktarray, plocka bort *första* och *sista* frukten.

**14** I följande array, sätt in två nya frukter på *index 2*.

```javascript
let fruits = ['apple', 'orange', 'pear', 'kiwi']
```

**15** Klona följande array och ändra första frukten till ```pineapple```.

```javascript
let fruits = ['apple', 'orange', 'pear', 'kiwi']
```

**16** Sortera följande array i *fallande ordning*.

```javascript
let num = [1,5,78,7,122,3,4,65,40,2,8]
```

**17** Lägg ihop följande arrayer.

```javascript
let a = [1,2,3];
let b = [4,5,6];
```

**18** Mixa följande arrayer där varannan är från array ```a``` och varanan från array ```b```.

```javascript
let a = ['My', 'has', 'many', 'open'];
let b = ['brain', 'to', 'tabs', '!'];
```

**19** Merga in array ```a``` i array ```b``` på *index 2*. 

```javascript
let a = [1,2,7,8,9,10];
let b = [3,4,5,6];
```

**20** Gör alla namn i array ```names``` till *versaler*.

```javascript
let names = ['sixten', 'Eva', 'Ali', 'Kim', 'Greger', 'Alicia'];
```

**21** Filtrera fram samtliga personer som är 30 år eller äldre.

```javascript
let names = [
    { name: 'sixten', age: 32 },
    { name: 'Eva',    age: 19 }, 
    { name: 'Ali',    age: 67 },
    { name: 'Kim',    age: 13 },
    { name: 'Greger', age: 30 },
    { name: 'Alicia', age: 82 }
    ];
```

**22** Skriv koden för att undersöka om arrayen ```names``` innehåller namnet *Ewa*. Ditt svar ska vara ```true``` eller ```false```.

```javascript
let names = ['sixten', 'Eva', 'Ali', 'Kim', 'Greger', 'Alicia'];
```

### Loops
**23** Skapa en *for-loop* som itererar 1000 varv. För varje iteration ska du ```console.log()``` vilket varv du är på.

**24** Skapa en *for-loop* som räknar ner från 100 till 0. För varje varv ska du ```console.log()``` vilket varv du är på.

**25** Loopa ut följande array med ```console.log()```.

```javascript
let fruits = ['apple', 'orange', 'pear', 'kiwi', 'pineapple'];
```

**26** Loopa ut föjande array med ```console.log()```. Sätt vilket index varje frukt har framför. Ex. ```0. apple, 1. orange``` osv.

**27** Generera en *kortlek* med 52 kort där varje kort innehåller en färg ( suite ) och ett värde mellan 2 och 14 ( ess ). Ex.

```javascript
[..., 'hjärter 8', 'hjärter 9', ...]
```

<details>
    <summary>hint</summary>
    Här använder du med fördel en loop inuti loopen.
</details>

### Objects
**28** Skapa en ett objekt som heter ```book``` och som har egenskaperna *title*, *author* och *genres*. De två första egenskaperna ska vara strängar och den sista en array.

**29** ```console.log()``` endast egenskapen *city* i följande objekt.

```javascript
let person = {
    name: 'Sixten Faceplant',
    email: 'sixten.faceplant@zocom.se',
    role: 'ninjah',
    adress: {
        street: 'Karatevägen 3',
        zip: '41477',
        city: 'Kablam City'
    }
}
```

**30** Klona ett objekt.

**31** Skapa objektet ```dog``` med egenskaperna *name*, *breed* och metoden *bark* som ska returnera "Woff, jag heter ```N```!" där ```N``` ska ersättas med egenskapen *name* i samma objekt.

**32** Loopa ut följande objekt där *key* och *value* ska ```console.log()```. Ex. "name - Sixten".

```javascript
let person = { 
    name: 'sixten',
    email: 'sixten@zocom.se', 
    role: 'ninjah',
    age: 32 
    }
```

### Functions 
**33** Skriv en funktion som *adderar* två numeriska argument (```x``` och ```y``` ) och returnerar.

**34** Skriv en *anonym funktion* som returnerar en ```sträng``` som förklarar skillnaden på *namnade-* och *anonyma* funktioner.

**35** Skriv en funktion som *plockar ut året* från en sträng i datumformat. Funktionen ska ta ett argument, som ska vara en sträng. Strängen ska alltid ha 10 tecken och följa mönstret 'YYYY-MM-DD'.

```javascript
getYear('2019-10-14') // 2019
```

<details>
    <summary>hint</summary>
    Använd substring(startIndex, endIndex).
</details>


**36** Skriv en funktion som tar tre parametrar. De första två är två tal och den sista är en *aritmetisk operator* d.v.s antingen '+', '-', '/', '*'.

```javascript
calcThis(1,2,'+') // 3
```

### Conditionals

**37** Skriv en funktion som jämför om två tal är likadana och returnerar true / false.

```javascript
compareThis(1,1) // true
campareThis(3,1) // false
```

**38** Skriv en funktion som kollar om ett tal är mellan *20* och *40* och returnerar true / false.

```javascript
between(30) // true
between(50) // false
```

**39** Skriv en funktion som jämför *längden* på två arrayer och returnerar den längsta.

```javascript
getMeTheLongestArr([1,2], ['A','B','C']) // ['A','B','C']
```


### Math object
**40** Arunda talet ```1337.51``` *nedåt* till närmaste heltal med hjälp av *Math object*.

**41** Arunda talet ```1337.48``` *uppåt* till närmaste heltal med hjälp av *Math object*.

**42** Arunda talet ```1337.497``` *till närmaste heltal* med hjälp av *Math object*.

**43** Skriv en funktion ( ```random(max)``` ) som tar ett *numerisk argument* ( ```max``` ). Funktionen ska returnera ett slumpat tal mellan 0 och *argumentet*.

```javascript
random(10000) // 1337
```

**44** Skriv en funktion ( ```randomPassword(n)``` ) som tar ett numerisk argument ( ```n``` ). Funktionen ska returnera ett slumpat lösenord bestående av bokstäver och siffor med längden *n*.

```javascript
randomPassword(7) // 4w3s0m3
```

**45** Skriv en funktion ( ```randomName(names)``` ) som tar en array som argument ( ```names``` ). Funktionen ska returnera ett slumpat namn från arrayen.

```javascript
const names = ['sixten', 'Eva', 'Ali', 'Kim', 'Greger', 'Alicia']

randomName(names) // Greger
```

### Program flow
**46** Vad är skillnaden på följande två funktioner?

```javascript
let getData = function(url) {};
function getData() {};
```

**47** I vilken ordning kommer följande funktioner att exkveras?

```javascript
// Execute
HelloAgainAgain();

function hello(){  
    console.log('Hello!') 
};

function helloAgain(){
    console.log('Hello Again!') 
    hello();
};

function HelloAgainAgain(){
    console.log('Hello Again Again!') 
    helloAgain();
}
```

**48** Ordna programmet i rätt ordning så alla pokemons printas ut. All kod som behövs finns med.

```javascript

for(let i=0;i<=pokemons.length;i++) {}

function printPokemons() {}

console.log("One awesome pokemon is " + pokemons[i]);

printPokemons();

let pokemons = ['Pikachu', "Charmander", "Bulbasaur", "Squirtle"];
```

**49** Ordna programmet i rätt ordning så att det går att skicka in en sträng och få tillbaka den baklänges.

```javascript
return newString;
let i = str.length - 1; i >= 0; i--
reverseString('hello');
str
function reverseString() {}
let newString = '';
for () {}
newString += str[i];
```

### Async / promises

**50** Vilka *tre* ```state``` har ett promise?

**51** Följande funktion returnerar data från en databas. Skriv ut resultatet i ```console.log(data)``` med hjälp av en *promise-kedja*. Se också till att fånga upp ev *errors*.

```javascript
getData(url)
```

**52** Gör samma operation som föregående, fast med ```async / await``` syntax istället. Glöm inte att fånga upp ev. errors.


### API-interaktion med fetch()

**53** Gör en funktion ( ```chuckMe(url)``` ) som använder ```fetch()``` och följande REST-resurs. Din funktion ska returnera ett skämt som du skriver ut med ```console.log()```.

    const url = `https://api.chucknorris.io/jokes/random`;

**54** Gör en ```POST``` -request med ```fetch()``` till nedanstående endpoint. Din POST ska innehålla nedanstående JS-objekt. ```console.log()``` svaret du får från servern.

```javascript
const url = `https://jsonplaceholder.typicode.com/posts`

let data = {
    id: 1,
    joke: 'How many ears does Spock have? - Three; Left, right and the final front ear.',
    funny: true
}
```

<details>
    <summary>hint</summary>
    fetch(url, {
    method: 'POST',
    body:... 
  })
</details>


**55** Gör en ```PUT``` request till endpointen i ovanstående uppgift ( 12.2 ). Uppdatera skämtet till ett ännu roligare. ```console.log()``` svaret du får från servern. 


## DOM manipulation

### Single selector

**56** Hämta innehållet i ```h2``` från följande kod.

```html
<article>
    <h2>Cowabunga!</h2>
    <p>Some interesting text.</p>
</article>
```

**57** Hämta innehållet från 3:e ```li``` från följande kod.

```html
<ul>
    <li>Gold</li>
    <li>Silver</li>
    <li>Bronze</li>
</ul>
```

### Select All (node list)

**58** Gör om innehållet alla ```li``` i nedanstående punktlista till *versaler*.

```html
<ul>
    <li>Gold</li>
    <li>Silver</li>
    <li>Bronze</li>
</ul>
```    

### Value from input

**59** Hämta värdet från nedanstående input-fält.

```html
<input type="email" id="email">
```

**60** Hämta det valda alternativet från nedanstående select-lista.

```html
<select id="options">
    <option value="a">A</option>
    <option value="b">B</option>
    <option value="c">C</option>
</select>
```

### Attributes

**61** Hämta bildlänken i följande kod.

```html
<img src="img/awesome.jpg" alt="awesome stuff" class="awesome" />
```

**62** Kika om följande checkbox är iklickad eller ej.

```html
<input type="checkbox" id="gdpr-ok" checked />
```

### CSS

**63** Lägg på classen ```.show``` på följande element.

```html
<nav id="main-nav"></nav> 
```

**64** *Toggla* classen ```.active``` på följande element.

```html
<a id="home" href="#">Home</a> 
```

**65** Lägg till classen ```.shadow``` på alla bilder i följande kod.

```html
<figure class="gallery">
    <img src="img/image-1.jpg" alt="1">
    <img src="img/image-2.jpg" alt="2">
    <img src="img/image-3.jpg" alt="3">
</figure>
```

### Create content 

**66** Skapa upp en ```h1```-tagg och lägg till en rubrik och appenda den sedan på ```body```.

<details>
    <summary>hint</summary>
    Använd createElement, .innerHTML och append() för denna uppgift.
</details>

**67** Anropa följande API ```const url = `https://api.chucknorris.io/jokes/random`;```
 med ```fetch()``` och spara svaret i en variabel och ```console.log()```.
 Skapa en section-tagg som kommer agera som en wrapper.
 Kolla hur objektet ser ut och skapa en img-tagg för ```icon_url```. En h2-tagg för ```value``` och 
 till sist en a-tagg för ```url```. ```Append()``` alla dessa taggar på section och sedan ```append()``` på ```body```.

### Events 

**68** Lyssna efter ett ```click``` event på följande element och skriv ut "go go go!" i ```console.log()```.

```html
<button>Lets go!</button>
```

**69**
Lyssna efter ett ```click``` event på samtliga ```li``` i följande lista. Vid klick ska en ```alert()``` dyka upp där det står *Jag älskar N!!!* Ex. "Jag älskar äpple!!!"

```html
<ul>
    <li>Päron</li>
    <li>Äpple</li>
    <li>Kiwi</li>
    <li>Keso</li>
    <li>Frystorkad mört</li>
</ul>
```

**70** Följande input-fält ska ```console.log()``` innehållet när man trycker *enter*.

```html
<input type="password" id="password" placeholder="password" />
```
<details>
    <summary>hint</summary>
    här är "keyup"-eventet väldigt användbart.
</details>
