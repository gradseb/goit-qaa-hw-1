// funkcja do zmiany naglowka
function myFunction() {
    const element = document.getElementById("id01");
    element.innerHTML = "Nowy nagłówek";
}

// funkcja do zmiany koloru         
function myColorChange() {
    const element = document.getElementById("id01");
    element.style.color = "green";
}
// ad. Zrozumienie koncepcji:

// Słowo kluczowe 'this' odnosi się do wartości lub metody danego obiektu, w którym jest wykorzystywany,


//   1. 'this' odnosi się do wartości 'name' i 'age' w kontekscię obiektu 'person'
const personone = {
    name: "Dariusz",
    age: 25,
    greet: function() {
      console.log("Hello, my name is " + this.name + " and I am " + this.age + " years old.");
    }
  };
  
  personone.greet(); // Hello, my name is Daiusz and I am 25 years old.

//  2. 'this' odnosi się do funkcji 'getAuthors' i 'addAuthor' w kontekście obiektu 'bookShelf'
  const bookShelfon = {
    authors: ["Bernard Cornwell", "Robert Sheckley"],
    getAuthors() {
      return this.authors;
    },
    addAuthor(authorName) {
      this.authors.push(authorName);
    },
  };
  
  console.log(bookShelfon.getAuthors());// ["Bernard Cornwell", "Robert Sheckley"]
  bookShelfon.addAuthor("Tanith Lee");
  console.log(bookShelfon.getAuthors());// ["Bernard Cornwell", "Robert Sheckley", "Tanith Lee"]
  

//   ad. Zastosowanie praktyczne:

const person = {
    username: "Jacek",
    showName() {
        console.log(this.username); // nie rozumiem dlaczego tutaj nie działa 'return this.username;'
    },
   }
person.showName();

// ad. Rozszerzony przykład:

const bookShelftw = {
        authors: ["Emily White", "Samuel Rodriguez"],
        getAuthors() {
          return this.authors;
        },
        addAuthor(authorName) {
          this.authors.push(authorName);
        },
      };
console.log(bookShelftw.authors);
bookShelftw.addAuthor("Grace Anderson");
console.log(bookShelftw.authors);