var a = document.getElementById("plus")
var b = document.querySelector(".outside")
var c = document.querySelector(".inside")
a.addEventListener("click", function () {
    b.style.display = "block"
    c.style.display = "block"
})
var d = document.getElementById("cancel")
d.addEventListener("click", function (event) {
    event.preventDefault()

    b.style.display = "none"
    c.style.display = "none"

})

var e = document.getElementById("one")
var booka = document.querySelector(".book")
var bookb = document.querySelector(".book1")
var add1 = document.getElementById("add")
var booktitle1 = document.getElementById("booktitle")
var bookauthor1 = document.getElementById("bookauthor")
var bookdescription1 = document.getElementById("description")
add1.addEventListener("click", function (event) {
    event.preventDefault()
    var div1 = document.createElement("div")
    div1.setAttribute("class", "book1")
    div1.innerHTML = ` <h2>${booktitle1.value}</h2><br>
        <h4 >${bookauthor1.value}</h4><br>
        <p >${bookdescription1.value}</p>
        <button onclick="remove(event)">Delete</button>`
        

        
    booka.append(div1)
    booktitle1.value="Book's Title "
    bookdescription1.value="Book's Description "
    bookauthor1.value="Book's Author"
    b.style.display = "none"
    c.style.display = "none"



})
function remove(event){
    event.target.parentElement.remove()

}
