var CardSelector = {},
    Cards = require("cards"),
    overflowDivBottom,
    overflowDivTop;

function displayOverflowTop() {
    if (rightContainer.scrollTop > 0) {
        overflowDivTop.style.top = rightContainer.scrollTop;
        overflowDivTop.style.opacity = "100";
    } else {
        overflowDivTop.style.opacity = "0";
    }
}

function displayOverflowBottom() {
    if (rightContainer.scrollHeight > 600 && 
        rightContainer.clientHeight + rightContainer.scrollTop < rightContainer.scrollHeight) {
        overflowDivBottom.style.top = 550 + rightContainer.scrollTop;    
        overflowDivBottom.style.opacity = "100";    
    } else {
        overflowDivBottom.style.opacity = "0";    
    }
}


function handleHeadingClick(evt) {
    var headingP = evt.srcElement,
        subItemDiv,
        heightValue,
        beVisible;

    subItemDiv = headingP.nextSibling;
    beVisible = subItemDiv.style.height === "auto" ? false : true;
    while (subItemDiv) {
        subItemDiv.style.height = beVisible ? "auto" : "0px";
        subItemDiv = subItemDiv.nextSibling;
    }
    
    displayOverflowTop();
    displayOverflowBottom();
    evt.stopPropagation();
}

function createTopOverflowBar() {
    var overflowImg = document.createElement("img");
    overflowDivTop = document.createElement("div");

    overflowImg.src = "img/overflowTop.jpg";
    overflowImg.className = "overflowBarImg";
    overflowDivTop.className = "overflowBarTop";
    overflowDivTop.appendChild(overflowImg);

    rightContainer.appendChild(overflowDivTop);    
}

function createBottomOverflowBar() {
    var overflowImg = document.createElement("img");
    overflowDivBottom = document.createElement("div");

    overflowImg.src = "img/triangleFromMyFp.png";
    overflowImg.className = "overflowBarImg";
    overflowDivBottom.className = "overflowBarBottom";
    overflowDivBottom.appendChild(overflowImg);

    rightContainer.appendChild(overflowDivBottom);    
}

function createSubItem(name) {
    var item = document.createElement('div'),
        textP = document.createElement('p');

    item.className = "subItem";
    textP.innerHTML = name;
    item.appendChild(textP);
    return item;
}

function createHeading(name) {
    var headingDiv = document.createElement("div"),
        textP = document.createElement("p");
    
    headingDiv.className = "headingCollapsed"; 
    headingDiv.onclick = handleHeadingClick;
    textP.className = "headingP";
    textP.innerHTML = name;
    headingDiv.appendChild(textP);

    return headingDiv;
}

function createMenuItems() {
    var typeName, 
        type,
        headingDiv,
        itemName,
        item,
        itemDiv;

    for (typeName in Cards) {
        type = Cards[typeName];
        headingDiv = createHeading(typeName);
        for (itemName in type) {
           item = type[itemName];
           itemDiv = createSubItem(item.name);
           headingDiv.appendChild(itemDiv); 
        }
        rightContainer.appendChild(headingDiv);
    }
}


CardSelector.populate = function (rightContainer) {
    rightContainer.innerHTML = "";
    createTopOverflowBar();
    createMenuItems();
    createBottomOverflowBar();
};

module.exports = CardSelector;
