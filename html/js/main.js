function createTile() {
    var tile = document.createElement('div'),
        image = document.createElement('img');

    tile.className = 'settleTile';
    image.className = 'settleTileImage';

    image.src = "http://blog.catan.com/wp-content/uploads/2010/09/Floezbau.jpg"
    tile.appendChild(image);
    return tile;
}

function placeTileInto(rowElement, index) {
    rowElement.appendChild(createTile());

}

