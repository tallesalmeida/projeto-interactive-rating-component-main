
document.querySelectorAll('button').forEach(button => {
    button.addEventListener('click', () => {
        let aval = button.value;
        alert(aval);
    });
});

function submit() {
    container.style.display = "none"
    container2.style.display = "flex"
}

