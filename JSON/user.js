
// const user = {
//     name: "Josh",                 
//     weight: "175",                
//     eyecolor: "brown",            
//     isHappy: "true",              
//     cars: ["Chevy", "Honda"],     
//     favoriteBook: {               
//         title: "The Last Kingdom",
//         author: "Bernard Cornwell",
//         rating: 8.38
//     }
// }
// console.log(user);

// Analiza metody JSON.parse():
const json = '{"name":"Mango","age":3,"isHappy":true}';  // zmienna json zawierająca prawidłowy ciąg JSON
const jsonJS = JSON.parse(json); // próba parsowania ciągu JSON na obiekt JavaScript
console.log(jsonJS); // w konsoli zostanie wyświetlony prawidłowo sparsowany ciąg json w JavaScript



// Obsługa błędów:
const jsonerr = '"Mango is Happy true'; // zmienna jsonerr zawierająca nieprawidłowy ciąg JSON

try {
    const jsonerrJS = JSON.parse(jsonerr); // próba parsowania ciągu JSON na obiekt JavaScript
    console.log(jsonerrJS);

} catch (error) { // blok catch wychwytuje błąd 
    console.log(error.name); // konsola wyświetli nazwe błędu
    console.log(error.message); // konsola wyświetli wiadomość błędu

    }
console.log('try and catch is work'); // W konsoli zostanie wyświetlony komunikat "try and catch is work", który zostanie wykonany po obsłużeniu błędu