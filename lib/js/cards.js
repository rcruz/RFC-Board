var Cards = {},
    REGION = "REGION",
    CITY = "CITY",
    ROAD = "ROAD",
    BUILDING = "BUILDING",
    HERO = "HERO";

Cards.REGIONS = {
    wheats : {
        name: "Wheats",
        value: 0,
        diceNumber: 0,
        imageUrl: "img/region/wheat.jpg"
    },
    sheeps : {
        name: "Sheeps",
        value: 0,
        diceNumber: 0,
        imageUrl: "img/region/sheep.jpg"
    },
    woods : {
        name: "Woods",
        value: 0,
        diceNumber: 0,
        imageUrl: "img/region/wood.jpg"
    },
    bricks : {
        name: "Bricks",
        value: 0,
        diceNumber: 0,
        imageUrl: "img/region/brick.jpg"
    },
    rocks : {
        name: "Rocks",
        value: 0,
        diceNumber: 0,
        imageUrl: "img/region/rocks.jpg"
    },
    golds : {
        name: "Golds",
        value: 0,
        diceNumber: 0,
        imageUrl: "img/region/gold.jpg"
    }
};

Cards.TOWNS = {
    settlement: {
        name: "Settlement",
        imageUrl: "img/towns/settlement.jpg"
    },
    city: {
        name: "City",
        imageUrl: "img/towns/city.jpg"
    }
};

Cards.ROADS = {
    road: {
        name: "Road",
        imageUrl: "img/towns/road.jpg"
    }
};

Cards.BUILDINGS = {
    
};

Cards.HEROES = {
    candamir: {
        name: "Candamir",
        axePoints: 4
    },
    siglund: {
        name: "Gwenyth Paltrow",
        harpPoints: 2,
        axePoints: 1,
        useless: "very yes"
    }
}
module.exports = Cards;
