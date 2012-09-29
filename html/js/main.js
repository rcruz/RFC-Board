function createTile() {
    var tile = document.createElement('div'),
        image = document.createElement('img');

    tile.className = 'settleTile';
    image.className = 'settleTileImage';

    image.src = "http://blog.catan.com/wp-content/uploads/2010/09/Floezbau.jpg"
    tile.appendChild(image);
    tile.onclick = showCardSelector; 
    return tile;
}

function placeTileInto(rowElement, index) {
    rowElement.appendChild(createTile());

}

function init() {
    var i;
    for (i = 0; i < 5; i++) {
        placeTileInto(topRow);
        placeTileInto(cityRow);
        placeTileInto(bottomRow);
    }
    rightContainer.onclick = hideCardSelector;
}

function showCardSelector() {
    rightContainer.style.right = "0px";
}

function hideCardSelector() {
    rightContainer.style.right = "-400px";
}

