const getGoods = () => {
    const links = document.querySelectorAll('.navigation-link')

    const getData = () => {
        fetch("/db/db.json").then((resp) => resp.json())
            .then((data) => {
                localStorage.setItem('data', JSON.stringify(data))
                //console.log(data);
            })
    }

    links.forEach((link) => {
        //console.log(link);
        link.addEventListener('click', (event) => {
            event.preventDefault();
            getData();
        })
    })
}

getGoods()