function randomizer() {


    for (let i = 0; i < st; i++) {
        let ids;
        let a = Math.floor(Math.random() * row) + 1;
        let b = Math.floor(Math.random() * collum) + 1;
        let currBox = Math.floor(Math.random() * boxes) + 1;

        ids = a + "." + b;

        let str = document.getElementById(ids);
        str.style.backgroundColor = 'red';
        str.style.color = 'white';
        str.className = "storage";
        str.innerHTML = `${currBox}`;

        mapsumBox += +str.innerHTML;

    }
}

