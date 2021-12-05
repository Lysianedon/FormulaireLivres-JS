const bookForm = document.querySelector(".book-form");
const bookList = document.querySelector(".book-list");
const container = document.querySelector(".container");


class Book {

    constructor(titre, auteur, annee) {
        this.titre = titre;
        this.auteur = auteur;
        this.annee = annee;
    }

    addBookToList(book) {

        const row = document.createElement("tr");

        row.innerHTML = `
        <td>${book.titre}</td>
        <td>${book.auteur}</td>
        <td>${book.annee}</td>
        <td><button class="delete">X</button></td> ` ;

        bookList.appendChild(row);
    }

    clearFields(){
        document.getElementById("titre").value = "";
        document.getElementById("auteur").value = "";
        document.getElementById("annee").value = "";
    }

    newAlert(message,className) {
        
        const alerte = document.createElement("div");
        alerte.className = `alert ${className}`;
        alerte.appendChild(document.createTextNode(message));
        container.insertBefore(alerte,bookForm);

        setTimeout(() => {
            alerte.remove();
        }, 2500);
    }
    
}

class FonctionSupprimer {

    deleteBook(target){

        if(target.className === "delete"){

            const livresupprime = new Book();

            target.parentElement.parentElement.remove();

           livresupprime.newAlert("Livre supprimé !", "notifsuppr");
        } 
    }
       
}

bookForm.addEventListener('submit', (e) => {

    e.preventDefault();

    const titre = document.getElementById("titre").value;
    const auteur = document.getElementById("auteur").value;
    const annee = document.getElementById("annee").value;
    const book = new Book(titre, auteur, annee);

    if(titre === "" || auteur ==="" || annee ==="") {
        book.newAlert("Ereeur !", "fail");
    }else {
        book.addBookToList(book);
        book.clearFields();
        book.newAlert("Livre ajouté !","success");
    }



})

bookList.addEventListener('click', (e) => {

    e = event.target;
    const supprimer = new FonctionSupprimer;
    supprimer.deleteBook(e);
})




