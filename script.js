const nota1El = document.querySelector("#nota1")
const nota2El = document.querySelector("#nota2")
const nota3El = document.querySelector("#nota3")
const nota4El = document.querySelector("#nota4")
const nota5El = document.querySelector("#nota5")

console.log(nota1El)

nota1El.addEventListener("click", (e) => {
    e.preventDefault();
    nota1El.classList.add("clicked")
    nota2El.classList.remove("clicked")
    nota3El.classList.remove("clicked")
    nota4El.classList.remove("clicked")
    nota5El.classList.remove("clicked")
})

nota2El.addEventListener("click", (e) => {
    e.preventDefault();
    nota2El.classList.add("clicked")
    nota1El.classList.remove("clicked")
    nota3El.classList.remove("clicked")
    nota4El.classList.remove("clicked")
    nota5El.classList.remove("clicked")
})

nota3El.addEventListener("click", (e) => {
    e.preventDefault();
    nota3El.classList.add("clicked")
    nota2El.classList.remove("clicked")
    nota1El.classList.remove("clicked")
    nota4El.classList.remove("clicked")
    nota5El.classList.remove("clicked")
})

nota4El.addEventListener("click", (e) => {
    e.preventDefault();
    nota4El.classList.add("clicked")
    nota2El.classList.remove("clicked")
    nota3El.classList.remove("clicked")
    nota1El.classList.remove("clicked")
    nota5El.classList.remove("clicked")
})

nota5El.addEventListener("click", (e) => {
    e.preventDefault();
    nota5El.classList.add("clicked")
    nota2El.classList.remove("clicked")
    nota3El.classList.remove("clicked")
    nota4El.classList.remove("clicked")
    nota1El.classList.remove("clicked")
})

