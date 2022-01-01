import GameObject from "./GameObject.js";
import Tile from "./Tile.js";

export default class World{

    constructor(id, width, height, tileSize){
        this.id = id;
        this.width = width;
        this.height = height;
        this.tileSize = tileSize;
        this.tiles = [];
        this.gameObjects = [];
        this.player = null;
        this.camera = null;
        // this.generateTiles();   // Future feature
    }

    createGameObject(x, y, options){
        const gameObject = new GameObject(this.gameObjects.length, x, y, options);
        this.gameObjects.push(gameObject);
        return gameObject;
    }

    createPlayer = (x, y, options) => this.player = this.createGameObject(x, y, options);

    createCamera = (x, y, options) =>
        this.camera = new GameObject(x, y, options);

    update(deltaTime){
        if (this.gameObjects.length > 0){
            this.gameObjects.forEach(gameObject => {
                gameObject.update(deltaTime);
            });
        }

        if (this.player && this.camera)
            this.camera.follow(this.player);
    }

    draw(ctx){
        if (this.gameObjects.length > 0){
            this.gameObjects.forEach(gameObject => {
                gameObject.draw(ctx);
            });
        }
    }

    generateTiles(){
        for(let x = 0; x < this.width; x++){
            for(let y = 0; y < this.height; y++){
                this.tiles.push(new Tile(x, y, this.tileSize));
            }
        }
    }

}