import GameObject from "./GameObject.js";
import Tile from "./Tile.js";

export default class World{

    constructor(id, width, height){
        this.id = id;
        this.width = width;
        this.height = height;
        // this.layers = []; Future implementation
        this.tiles = [];
        this.gameObjects = [];
        this.player = null;
        this.camera = null;
    }

    createGameObject(x, y, options, onCreate){
        const gameObject = new GameObject(this.gameObjects.length, x, y, options);
        this.gameObjects.push(gameObject);

        console.log(`GameObject ${gameObject.id} created`);
        if (onCreate)
            onCreate(gameObject);
        return gameObject;
    }

    createPlayer = (x, y, options, onCreate) => this.player = this.createGameObject(x, y, options, onCreate);

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

    draw(ctx, progress){
        ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);

        if (this.tiles.length > 0){
            this.tiles.forEach(tile => {
                tile.draw(ctx, progress);
            });
        }

        if (this.gameObjects.length > 0){
            this.gameObjects.forEach(gameObject => {
                gameObject.draw(ctx, progress);
            });
        }
    }

    // Takes the tileset and creates the tiles from it and adds them to the world
    loadTileMap(tileset, tileSize, tileMap){
        for (let y = 0; y < tileMap.length; y++){
            for (let x = 0; x < tileMap[y].length; x++){
                const tile = tileMap[y][x];
                if (tile !== 0){
                    this.tiles.push(new Tile(x * tileSize, y * tileSize, tileset, tileSize));
                }
            }
        }
        console.log(this.tiles);
    }

}