let changeSize = document.getElementById('settings_set');

changeSize.onclick = function () {
    collum = sizecoll.value;
    row = sizerow.value;
    st = storage.value;
    boxes = box.value;
    pboxes = pbox.value;
    playersumbox = 0;
    mapsumBox = 0;

    startGame();
}
function startGame() {


    addTable();
    Moving();
    randomizer();
}