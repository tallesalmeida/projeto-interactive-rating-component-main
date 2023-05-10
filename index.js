let aval = 0 
let n = 0 

document.querySelectorAll('button').forEach(button => {
    button.addEventListener('click', () => {
        aval = button.value
    })
})

function submit() {
    n = aval

    if (n == 0) {
        window.location.reload() //se não clicar em nenhum número a página só atualiza. Poderia ter colocado um window.alert pedindo pra clicar em algum número. 
    } else {
        ratingnumber.innerHTML = (n)
        container.style.display = "none"
        container2.style.display = "block"
    }
}

function voltar() {
    container.style.display = "block"
    container2.style.display = "none"
}

