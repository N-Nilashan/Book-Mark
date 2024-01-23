let Box = document.querySelector('.contentBox')
function deleteBox(event) {
    event.target.parentElement.remove()
}
let addContext = document.getElementById("addContext")
let popupOverlay = document.querySelector('.popup-overlay')
let contextBox = document.getElementById('addContext')

document.getElementById('openPopup').onclick = function () {
    popupOverlay.style.display = "block"
    contextBox.style.display = "block"
};

document.getElementById('cancel-popup').onclick = function (event) {
    event.preventDefault()
    contextBox.style.display = "none"
    popupOverlay.style.display = "none"
};


document.getElementById('add-book').onclick = function (event) {
    event.preventDefault()

    let valueToAdd = document.getElementById("contentSection");
    let bookName = document.getElementById("book-title").value;
    let bookAuthor = document.getElementById("book-author").value;
    let bookDescription = document.getElementById("book-description").value;


    let newDiv = document.createElement("div");
    newDiv.setAttribute("class", "contentBox")
    newDiv.innerHTML = `<h2>${bookName}</h2><p>${bookAuthor}</p><br><strong><p>${bookDescription}</p></strong><button class='deleteBox'  onclick="deleteBox(event)">Delete</button>`
    valueToAdd.append(newDiv);

    // Clear the form
    document.getElementById("book-title").value = "";
    document.getElementById("book-author").value = "";
    document.getElementById("book-description").value = "";

    addContext.style.display = "none"
    popupOverlay.style.display = "none"

};