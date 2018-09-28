function Moving() {

    playersumBox = 0;

    backpack = document.getElementById('backpack_count');
    backpack.innerHTML = `${0}`;

    start = document.getElementById('1.1');
    start.style.backgroundColor = 'green';
    start.style.color = 'white';

    fid = row + "." + collum;
    finish = document.getElementById(fid);
    finish.innerHTML = `${0}`;
    finish.style.backgroundColor = 'blue';
    finish.style.color = 'white';

    function dotheneedful(sibling) {
        if (sibling != null) {
            if(start.id === fid) {
                start.style.backgroundColor = 'blue';
                start.style.color = 'white';
            }
            else if(start.className !== "storage") {
                start.style.backgroundColor = '';
                start.style.color = '';
            } else {
                start.style.backgroundColor = 'red';
                start.style.color = 'white';
            }
            sibling.style.backgroundColor = 'green';
            sibling.style.color = 'white';
            start = sibling;

        }
    }

    function storageplate(sibling) {
        if (sibling != null) {
            start.style.backgroundColor = '';
            start.style.color = '';
            sibling.style.backgroundColor = '#ec695f';
            sibling.style.color = 'white';
            start = sibling;

        }

    }

    document.onkeydown = function (event) {
        if (event.keyCode === 38 || event.keyCode === 87) {
            let idx = start.cellIndex;
            let nextrow = start.parentElement.previousElementSibling;
            if (nextrow != null) {

                let sibling = nextrow.cells[idx];
                if(sibling.className !== 'storage') {
                    dotheneedful(sibling);
                } else storageplate(sibling);
            }

        } else if (event.keyCode === 39 || event.keyCode === 68) {

            if(start.nextElementSibling != null) {
                let sibling = start.nextElementSibling;
                if (sibling.className !== 'storage') {
                    dotheneedful(sibling);
                } else storageplate(sibling);
            }

        } else if (event.keyCode === 40 || event.keyCode === 83) {
            let idx = start.cellIndex;
            let nextrow = start.parentElement.nextElementSibling;
            if (nextrow != null) {
                let sibling = nextrow.cells[idx];
                if(sibling.className !== 'storage') {
                    dotheneedful(sibling);
                } else storageplate(sibling);
            }

        } else if (event.keyCode === 37 || event.keyCode === 65) {

            if(start.previousElementSibling != null) {
                let sibling = start.previousElementSibling;
                if (sibling.className !== 'storage') {
                    dotheneedful(sibling);
                } else storageplate(sibling);
            }
        }

        if(event.keyCode === 32) {

            takeBoxes();
            if (playersumBox === mapsumBox) {
                alert('You win!');
            }
        }
    }
}

function takeBoxes(){
    const currentStorage = document.getElementById(start.id);

    let FinishPoint = +finish.innerHTML;
    let currBoxCount = +currentStorage.innerHTML;
    let currBackpackCount = +backpack.innerHTML;

    if (currBackpackCount < pboxes && currBoxCount != '' && currentStorage.id != finish.id){
        currentStorage.innerHTML = `${--currBoxCount}`;
        backpack.innerHTML = `${++currBackpackCount}`;
    }
    else if (currentStorage.id == finish.id && backpack.innerHTML != 0) {
        backpack.innerHTML = `${--currBackpackCount}`;
        finish.innerHTML = `${++FinishPoint}`;
        playersumBox = finish.innerHTML;
        playersumBox = +playersumBox;

        console.log('storeCount', playersumBox);
    }
}


