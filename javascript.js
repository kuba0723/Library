let myLibrary = [];
const container = document.querySelector("#container");

function createForm(titleID, authorID, descriptionID, pagesID, checkboxID) {
    let popUp = document.createElement("div");
    popUp.setAttribute("id", "popUp");
    let form = document.createElement("form");
    form.setAttribute("id", "form");

    let titleLabel = document.createElement("label");
    titleLabel.setAttribute("for", "title");
    titleLabel.textContent = "Title:";
    let title = document.createElement("input");
    title.setAttribute("type", "text");
    title.setAttribute("name", "title");
    title.setAttribute("id", "inputTitle");
    title.setAttribute("required", "");
    title.textContent = titleID
    let authorLabel = document.createElement("label");
    authorLabel.setAttribute("for", "author");
    authorLabel.textContent = "Author:";
    let author = document.createElement("input");
    author.setAttribute("type", "text");
    author.setAttribute("name", "author");
    author.setAttribute("id", "inputAuthor");
    author.setAttribute("required", "");
    author.textContent = authorID
    let descriptionLabel = document.createElement("label");
    descriptionLabel.setAttribute("for", "description");
    descriptionLabel.textContent = "Description:";
    let description = document.createElement("textarea");
    description.setAttribute("type", "text");
    description.setAttribute("name", "description");
    description.setAttribute("id", "inputDescription");
    description.textContent = descriptionID
    let pagesLabel = document.createElement("label");
    pagesLabel.setAttribute("for", "pages");
    pagesLabel.textContent = "pages:";
    let pages = document.createElement("input");
    pages.setAttribute("type", "number");
    pages.setAttribute("name", "pages");
    pages.setAttribute("id", "inputPages");
    pages.setAttribute("required", "");
    pages.setAttribute("min", "0");
    pages.textContent = pagesID
    let divCheckbox = document.createElement('div')
    divCheckbox.setAttribute("id", 'checkbox')
    let checkboxLabel = document.createElement("label");
    checkboxLabel.setAttribute("for", "read");
    checkboxLabel.textContent = "Have you read it?";
    let checkbox = document.createElement("input");
    checkbox.setAttribute("type", "checkbox");
    checkbox.setAttribute("name", "read");
    checkbox.setAttribute("id", "inputRead");
    checkbox.setAttribute("value", "true")
    checkbox.checked = checkboxID
    let addBook = document.createElement("button");
    addBook.setAttribute("id", "addBook");
    addBook.textContent = "Add Book";
    addBook.setAttribute("onclick",'addBookToLibrary()')
    let cancelBook = document.createElement("button");
    cancelBook.setAttribute("id", "cancel");
    cancelBook.setAttribute("onclick",'cancel()')
    cancelBook.textContent = "Cancel";
    container.appendChild(popUp);
    popUp.appendChild(form);
    form.appendChild(titleLabel)
    form.appendChild(title)
    form.appendChild(authorLabel)
    form.appendChild(author)
    form.appendChild(descriptionLabel)
    form.appendChild(description)
    form.appendChild(pagesLabel)
    form.appendChild(pages)
    form.appendChild(divCheckbox)
    divCheckbox.appendChild(checkboxLabel)
    divCheckbox.appendChild(checkbox)
    form.appendChild(addBook)
    popUp.appendChild(cancelBook)
    let blur = document.querySelector("#blur")
    blur.classList.add("active")
    container.classList.add("stopScroll")
    window.onclick = e => {
        if(e.target.tagName == "BODY"){
            cancel()
        };
        addBook.addEventListener("submit", function(event){
            event.preventDefault()
        })
}
}
function addBookToLibrary() { 
    let title = document.querySelector("#inputTitle").value
    let author = document.querySelector("#inputAuthor").value
    let description = document.querySelector("#inputDescription").value
    let pages = document.querySelector("#inputPages").value
    let checkbox = document.querySelector("#inputRead").checked
    function book(title, author, description, pages, checkbox) {
        this.title = title
        this.author = author
        this.description = description
        this.pages = pages
        this.checkbox = checkbox
    }
    if(title != "" && author != "" && pages != ""){
    let x = myLibrary.length
    myLibrary.push(new book(title, author, description, pages, checkbox))
    let library = document.querySelector("#library")
    let bookDiv = document.createElement("div")
    bookDiv.setAttribute("id","book"+x)
    bookDiv.classList.add("book")

    let read = document.createElement("div")
    if(checkbox == true){
        read.setAttribute("id", "read")
        read.textContent = "Read"
    }
    else{
        read.setAttribute("id", "unread")
        read.textContent = "Unread"
    }
    let content = document.createElement("div")
    content.setAttribute("id", "content")
    let titleDiv = document.createElement("div")
    titleDiv.setAttribute("id", "title")
    titleDiv.textContent = myLibrary[x].title
    let authorDiv = document.createElement("div")
    authorDiv.setAttribute("id", "author")
    authorDiv.textContent = myLibrary[x].author
    let descriptionDiv = document.createElement("div")
    descriptionDiv.setAttribute("id", "description")
    descriptionDiv.textContent = myLibrary[x].description
    let pagesDiv = document.createElement("div")
    pagesDiv.setAttribute("id", "pages")
    pagesDiv.textContent = myLibrary[x].pages
    let buttons = document.createElement("div")
    buttons.setAttribute("id", "buttons")
    let edit = document.createElement("button")
    edit.setAttribute("id", x)
    edit.textContent = "EDIT"
    let removeButton = document.createElement("button")
    removeButton.setAttribute("id", x)
    removeButton.textContent = "REMOVE"
    edit.classList.add("specialButtons")
    edit.classList.add("edit")
    edit.setAttribute("onclick", "edit(this.id)")
    removeButton.classList.add("specialButtons")
    removeButton.classList.add("remove")
    removeButton.setAttribute("onclick", "remove(this.id)")
    library.appendChild(bookDiv)
    bookDiv.appendChild(read)
    bookDiv.appendChild(content)
    content.appendChild(titleDiv)
    content.appendChild(authorDiv)
    content.appendChild(descriptionDiv)
    content.appendChild(pagesDiv)
    bookDiv.appendChild(buttons)
    buttons.appendChild(edit)
    buttons.appendChild(removeButton)
    addBook.addEventListener("submit", function(event){
        event.preventDefault()
    })
    cancel()    
}}
function cancel() {
    let popUp = document.querySelector("#popUp")
    popUp.remove()
    let blur = document.querySelector('#blur')
    blur.classList.remove("active")
    container.classList.remove("stopScroll")
    // blur.removeAttribute("onclick",'cancel()')
}

function remove(ID) {
        let book = document.querySelector("#book"+ID)
        book.remove()
}
function edit(ID) {
    let book = document.querySelector("#book"+ID)
    console.log(book)
    let read = book.firstChild
    console.log(read.id)
    if(read.id == "unread"){
        read.setAttribute("id", "read")
        read.textContent = "Read"
    }
    else{
        read.setAttribute("id","unread")
        read.textContent = "Unread"
    }
}