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

        // if (this.tiles.length > 0){
        //     this.tiles.forEach(tile => {
        //         tile.draw(ctx, progress);
        //     });
        // }

        var tileSize = 32;   
        var rowTileCount = 20;  
        var colTileCount = 32;   
        var imageNumTiles = 16;  

        var ground = 
        [
            [172, 172, 172, 79, 34, 34, 34, 34, 34, 34, 34, 34, 56, 57, 54, 55, 56, 147, 67, 67, 68, 79, 79, 171, 172, 172, 173, 79, 79, 55, 55, 55],
            [172, 172, 172, 79, 34, 34, 34, 34, 34, 34, 146, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 155, 142, 172, 159, 189, 79, 79, 55, 55, 55],
            [172, 172, 172, 79, 79, 34, 34, 34, 34, 34, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 171, 172, 159, 189, 79, 79, 79, 55, 55, 55],
            [188, 188, 188, 79, 79, 79, 79, 34, 34, 34, 36, 172, 172, 143, 142, 157, 79, 79, 79, 79, 79, 79, 187, 159, 189, 79, 79, 79, 55, 55, 55, 55],
            [79, 79, 79, 79, 79, 79, 79, 79, 34, 34, 36, 172, 159, 158, 172, 143, 157, 79, 79, 79, 79, 79, 79, 79, 79, 79, 39, 51, 51, 51, 55, 55],
            [79, 79, 79, 79, 79, 79, 79, 79, 79, 34, 36, 172, 143, 142, 172, 172, 143, 157, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 55],
            [79, 79, 79, 79, 79, 79, 79, 79, 79, 34, 52, 172, 172, 172, 172, 172, 172, 143, 156, 157, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79],
            [79, 79, 79, 79, 79, 79, 79, 79, 79, 34, 52, 172, 172, 172, 172, 172, 172, 159, 188, 189, 79, 79, 79, 79, 79, 171, 172, 172, 173, 79, 79, 79],
            [79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 188, 158, 172, 172, 172, 172, 173, 79, 79, 79, 79, 79, 79, 79, 187, 158, 159, 189, 79, 79, 79],
            [79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 171, 172, 172, 159, 188, 189, 79, 79, 79, 79, 79, 79, 79, 79, 171, 173, 79, 79, 79, 79],
            [79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 171, 172, 172, 173, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 171, 173, 79, 79, 79, 79],
            [155, 142, 157, 79, 79, 79, 79, 79, 79, 79, 79, 79, 187, 188, 188, 189, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 171, 173, 79, 79, 79, 79],
            [171, 172, 173, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 171, 173, 79, 79, 79, 79],
            [171, 172, 143, 156, 157, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 187, 189, 79, 79, 79, 79],
            [187, 188, 158, 172, 173, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79],
            [79, 79, 79, 188, 189, 79, 79, 79, 79, 79, 79, 155, 156, 156, 157, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 155, 156],
            [34, 34, 79, 79, 79, 79, 79, 79, 79, 79, 79, 171, 172, 172, 173, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 155, 142, 172],
            [34, 34, 34, 79, 79, 79, 79, 79, 79, 79, 79, 171, 172, 172, 173, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 171, 172, 172],
            [34, 34, 34, 34, 79, 79, 79, 79, 79, 79, 155, 172, 172, 159, 189, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 171, 172, 172],
            [34, 34, 34, 34, 34, 34, 79, 79, 79, 79, 171, 172, 172, 173, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 155, 142, 172, 172]
        ];

        const tilesetImage = new Image();
        tilesetImage.src = "../TEST/tileset.png";

        for (var r = 0; r < rowTileCount; r++) {
            for (var c = 0; c < colTileCount; c++) {
               var tile = ground[ r ][ c ];
               var tileRow = (tile / imageNumTiles) | 0;
               var tileCol = (tile % imageNumTiles) | 0;
               ctx.drawImage(tilesetImage, (tileCol * tileSize), (tileRow * tileSize), tileSize, tileSize, (c * tileSize), (r * tileSize), tileSize, tileSize);
            }
         }


        if (this.gameObjects.length > 0){
            this.gameObjects.forEach(gameObject => {
                gameObject.draw(ctx, progress);
            });
        }
    }

    loadTileMap(tileset, tileSize, tileMap){
        // const tilesPerRow = tileMap[0].length;
        // for (let y = 0; y < tileMap.length; y++){
        //     for (let x = 0; x < tileMap[y].length; x++){
        //         const tile = tileMap[y][x];
        //         const tileRow = (tile / tilesPerRow) | 0;
        //         const tileCol = (tile % tilesPerRow) | 0;
        //         if (tile !== 0){
        //             this.tiles.push(
        //                 new Tile(
        //                     x,   // X Cord of the tile 
        //                     y,   // Y Cord of the tile
        //                     tileset,        // Tileset (image full of tiles)
        //                     tileSize,       // Tile size
        //                     tileRow,
        //                     tileCol,
        //                     x,              // X Cord of the world
        //                     y,              // Y Cord of the world
        //                     ));
        //         }
        //     }
        // }
        // console.log(this.tiles);
    }

}