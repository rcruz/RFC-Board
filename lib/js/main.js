var Cards = require('cards'),
    CardSelector = require('cardSelector'),
    rightContainer,
    topRow,
    cityRow,
    bottomRow;

function showCardSelector() {
    CardSelector.populate(rightContainer);
    rightContainer.style.right = "0px";
}

function hideCardSelector() {
    rightContainer.style.right = "-400px";
}

function createTile() {
    var tile = document.createElement('div'),
        image = document.createElement('img');

    tile.className = 'settleTile';
    image.className = 'settleTileImage';

    image.src = "http://blog.catan.com/wp-content/uploads/2010/09/Floezbau.jpg";
    tile.appendChild(image);
    tile.onclick = showCardSelector; 
    return tile;
}

function placeTileInto(rowElement, index) {
    rowElement.appendChild(createTile());

}

function init() {
    var i;

    // Element handles
    topRow = document.getElementById("topRow");
    cityRow = document.getElementById("cityRow");
    bottomRow = document.getElementById("bottomRow");
    rightContainer = document.getElementById("rightContainer");

    for (i = 0; i < 5; i++) {
        placeTileInto(topRow);
        placeTileInto(cityRow);
        placeTileInto(bottomRow);
    }
    rightContainer.onclick = hideCardSelector;
}

window.RFC = {
    init: init
};
