export default class Layer{

    constructor(alias, width, height, tileSize, tileMap){
        this.alias = alias;
        this.width = width;
        this.height = height;
        this.tiles = [];
        this.tileSize = tileSize;
        this.tileMap = tileMap;
    }

}