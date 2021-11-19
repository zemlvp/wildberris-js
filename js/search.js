const search = function () {
    const input = document.querySelector('.search-block > input')
    const button = document.querySelector('.search-block > button')

    input.addEventListener('input', (event) => {
        //console.dir(event.target.value)
    })

    button.addEventListener('click', () => {
        console.log(input.value)
    })
}

search()