import World from "./World.js";
import Keyboard from "./Keyboard.js";

export default class Engine{

    static DEBUG = false;

    constructor(ctx, options, onUpdate){
        this.options = options || null;
        this.keyboard = null;
        this.onUpdate = onUpdate || function(progress){};
        this.worlds = [];
        this.lastRender = 0;
        this.ctx = ctx || document.getElementById("game").getContext("2d");
        if (!this.ctx)
            throw new Error("No canvas found");
        window.requestAnimationFrame(this.gameLoop);
        if (this.options !== null)
            this.Init();
    }

    Init(){
        if (this.options.keyboard) this.keyboard = new Keyboard();
    }

    createWorld = (width, height, onCreate) => {
        const world = new World(this.worlds.length, width, height);
        this.worlds.push(world);
        if (onCreate)
            onCreate(world);
        return world;
    }

    gameLoop = (deltaTime) => {
        const progress = deltaTime - this.lastRender;
        this.lastRender = deltaTime;
        if (this.worlds.length > 0){
            this.worlds.forEach(world => {
                world.update(progress);
                this.onUpdate(progress);
                world.draw(this.ctx, progress);
            });
        }
        window.requestAnimationFrame(this.gameLoop);
    }

}