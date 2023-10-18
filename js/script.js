const inputs = Array.from(document.querySelectorAll('input'));

inputs.forEach(input => {
    input.addEventListener('click', () => input.className += " error");
});
