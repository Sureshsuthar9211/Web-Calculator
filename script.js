let input = document.getElementById('input-box')
let buttons = document.querySelectorAll('button')

let string = ""
let array = Array.from(buttons)



array.forEach(
    button => {
        button.addEventListener('click', (e) => {
            string += button.innerText
            input.value = string
        })
    }
)