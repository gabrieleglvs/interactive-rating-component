const nota1El = document.querySelector("#nota1")
const nota2El = document.querySelector("#nota2")
const nota3El = document.querySelector("#nota3")
const nota4El = document.querySelector("#nota4")
const nota5El = document.querySelector("#nota5")

nota1El.addEventListener("click", (e) => {
    e.preventDefault();
    nota1El.classList.add("clicked")
    nota2El.classList.remove("clicked")
    nota3El.classList.remove("clicked")
    nota4El.classList.remove("clicked")
    nota5El.classList.remove("clicked")
    let nota = nota1El.innerHTML

    agradecer(nota)
})

nota2El.addEventListener("click", (e) => {
    e.preventDefault();
    nota2El.classList.add("clicked")
    nota1El.classList.remove("clicked")
    nota3El.classList.remove("clicked")
    nota4El.classList.remove("clicked")
    nota5El.classList.remove("clicked")

    let nota = nota2El.innerHTML

    agradecer(nota)
})

nota3El.addEventListener("click", (e) => {
    e.preventDefault();
    nota3El.classList.add("clicked")
    nota2El.classList.remove("clicked")
    nota1El.classList.remove("clicked")
    nota4El.classList.remove("clicked")
    nota5El.classList.remove("clicked")

    let nota = nota3El.innerHTML

    agradecer(nota)
})

nota4El.addEventListener("click", (e) => {
    e.preventDefault();
    nota4El.classList.add("clicked")
    nota2El.classList.remove("clicked")
    nota3El.classList.remove("clicked")
    nota1El.classList.remove("clicked")
    nota5El.classList.remove("clicked")

    let nota = nota1E4.innerHTML

    agradecer(nota)
})

nota5El.addEventListener("click", (e) => {
    e.preventDefault();
    nota5El.classList.add("clicked")
    nota2El.classList.remove("clicked")
    nota3El.classList.remove("clicked")
    nota4El.classList.remove("clicked")
    nota1El.classList.remove("clicked")

    let nota = nota5El.innerHTML

    agradecer(nota)
})

const btnFeedbackEl = document.querySelector("#btn-feedback")

function agradecer(nota) {
    btnFeedbackEl.addEventListener("click", (e) => {
        e.preventDefault();
        const caixaFeedbackEl = document.querySelector("#caixa-feedback")
        const caixaThankYouEl = document.querySelector("#caixa-thank-you")
        caixaFeedbackEl.classList.add("fechar-feedback")
        caixaThankYouEl.classList.remove("fechar-thank-you")

        const ratingEl = document.querySelector("#rating")

        ratingEl.innerHTML = nota
    })
}

