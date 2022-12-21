//All of your book objects are going to be stored in a simple array
let myLibrary = [
    {title: "12 Rules For Life: An Antidote For Chaos", author: "Jordan B. Peterson", pages: 410, read: true},
    {title: "Can't Hurt Me", author: 'David Goggins', pages: 363, read: true},
    {title: "Non-Negotiable", author: 'Wes Watson', pages: 153, read:true} ];
 
const divContainer = document.getElementById("container");
//constructor for Book objects.
function Book(title, author, pages, read){
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
};
//Write a function that loops through the array and displays
// each book on the page.
function displayEachBookOnPage(){
    myLibrary.forEach((element, index) => {
        const bookCard = document.createElement("div");
        bookCard.className=("bookCard");
        divContainer.appendChild(bookCard);
        const titleText = document.createElement("h2");
        titleText.innerHTML = element.title;
        const authorText = document.createElement("p");
        authorText.innerHTML = "By: "+ element.author;
        const pagesText= document.createElement("p");
        pagesText.innerHTML = element.pages + " pgs.";
        const readButton = document.createElement("button");
        readButton.classList.add("cardButton");
        if(element.read){
            readButton.style.backgroundColor = 'lightgreen';
            readButton.innerHTML = "Read";
        }else if(!element.read){
            readButton.style.backgroundColor = "tomato"
            readButton.innerHTML="Not Read";
        }
        readButton.addEventListener("click", () => {
            if (readButton.style.backgroundColor === 'tomato') {
                readButton.style.backgroundColor = 'lightgreen';
                readButton.innerHTML = "Read";
                myLibrary[index].read = true;
              } else {
                readButton.style.backgroundColor = 'tomato';
                readButton.innerHTML="Not Read";
                myLibrary[index].read = false;
              }
        });
      
        const removeButton = document.createElement("button");
        removeButton.innerHTML = "Remove";
        removeButton.classList.add("cardButton");
        removeButton.addEventListener("click", () => {
            bookCard.remove();
            delete myLibrary[index];
          });
        bookCard.append(titleText, authorText, pagesText, readButton, removeButton);
    });
};
//remove books on display
function clearBooksOnDisplay(){
    document.querySelectorAll(".bookCard").forEach(element => {
        element.remove();
    });
};
//From Toggling JavaScript=============================================
function toggleForm(){
    const form = document.getElementById("form");
    const darkBackground =document.getElementById("darkBackground");
    if (form.style.visibility === 'hidden') {
      form.style.visibility = 'visible';
      darkBackground.style.visibility='visible';
      
    } else {
      form.style.visibility = 'hidden';
      darkBackground.style.visibility='hidden';
    }
  };
  document.getElementById("addBookButton").addEventListener('click', () => {
    toggleForm();
  })
  document.getElementById("exitNewBookForm").addEventListener("click", () => {
    event.preventDefault();
    toggleForm();
  });
  document.getElementById("darkBackground").addEventListener("click", () => {
    toggleForm();
  })
  document.getElementById("submitNewBookInfo").addEventListener("click", function(event){
    event.preventDefault();
    const title = document.getElementById('titleInput').value;
    const author = document.getElementById('authorInput').value;
    const pages = Number(document.getElementById('pagesInput').value);
    const read = Boolean(document.getElementById('readInput').checked);
    myLibrary.push(new Book(title, author, pages, read));
    
    document.getElementById('titleInput').value='';
    document.getElementById('authorInput').value='';
    document.getElementById('pagesInput').value=0;
    document.getElementById('readInput').checked= false;

    clearBooksOnDisplay()
    displayEachBookOnPage();
    toggleForm();
  });

displayEachBookOnPage();
toggleForm();