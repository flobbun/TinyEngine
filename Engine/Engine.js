import World from "./World.js";

export default class Engine{

    static DEBUG = false;

    constructor(ctx){
        this.worlds = [];
        this.lastRender = 0;
        this.ctx = ctx || document.getElementById("game").getContext("2d");
        if (!this.ctx)
            throw new Error("No canvas found");
        window.requestAnimationFrame(this.gameLoop);
    }

    createWorld = (width, height, tileSize) => {
        const world = new World(this.worlds.length, width, height, tileSize);
        this.worlds.push(world);
        return world;
    }

    gameLoop = (deltaTime) => {
        const progress = deltaTime - this.lastRender;
        this.lastRender = deltaTime;
        if (this.worlds.length > 0){
            this.worlds.forEach(world => {
                world.update(progress);
                world.draw(this.ctx);
            });
        }
        window.requestAnimationFrame(this.gameLoop);
    }

}