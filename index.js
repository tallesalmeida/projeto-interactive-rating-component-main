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
        window.location.reload() //se não clicar em nenhum número a página só atualiza.
    } else {
        ratingnumber.innerHTML = (n)
        container.style.display = "none"
        container2.style.display = "flex"
    }
    
}

