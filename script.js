let popupoverlay=document.querySelector(".popup-overlay");
let popupbox=document.querySelector(".popup-box");
let addpopupbutton=document.getElementById("add-popup-button");

addpopupbutton.addEventListener("click",function(){
    popupoverlay.style.display="block";
    popupbox.style.display="block";
})
let cancelpopup=document.getElementById("cancel-popup");
cancelpopup.addEventListener("click",function(event){
    event.preventDefault();
    popupoverlay.style.display="none";
    popupbox.style.display="none";
})

let container=document.querySelector(".container");
let addbook=document.getElementById("add-book");
let booktitleinput=document.getElementById("book-title-input");
let bookauthorinput=document.getElementById("book-author-input");
let bookdescriptioninput=document.getElementById("book-description-input");
addbook.addEventListener("click",function(event){
    event.preventDefault();
    let div=document.createElement("div");
    div.setAttribute("class","book-container")
    div.innerHTML=(`<h2 >${booktitleinput.value}</h2>
    <h4>${bookauthorinput.value}</h4>
    <p>${bookdescriptioninput.value}</p>
    <button onclick="deletebook(event)">Delete</button>`);
    container.append(div);
    popupoverlay.style.display="none";
    popupbox.style.display="none"
})
function deletebook(event){
    event.target.parentElement.remove()
}
