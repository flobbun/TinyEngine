import Sprite from './Sprite.js';

export default class GameObject{

    static sprites = {};

    static CreateSprite = (alias, src, width, height, options) => {
        if (this.sprites[alias] !== undefined)
            throw new Error("Sprite with alias " + alias + " already exists");
        this.sprites[alias] = new Sprite(alias, src, width, height, options);
        return this.sprites[alias];
    }

    static GetSprite = (alias) => {
        if (this.sprites[alias] == undefined)
            throw new Error(`Sprite with alias ${alias} does not exist`);
        this.sprites[alias];
    }

    constructor(id, x, y, options){
        this.id = id;
        this.x = x;
        this.y = y;
        this.sprite = null;
        this.options = options || {
            scaleX: 1,
            scaleY: 1,
            speed: 0,
            rotation: 0
        };
    }

    createSprite(alias, src, width, height, options){
        if (this.sprite !== null)
            throw new Error(`The GameObject ${this.id} already has a sprite`);
        this.sprite = GameObject.CreateSprite(alias, src, width, height, options);

        console.log(`GameObject ${this.id} now has the sprite ${alias} asigned`);
    }

    asignSprite(alias){
        if (this.sprite !== null)
            throw new Error(`The GameObject ${this.id} already has a sprite`);
        this.sprite = GameObject.GetSprite(alias);

        console.log(`GameObject ${this.id} now has the sprite ${alias} asigned`);
    }

    draw(ctx){
        // console.log("GameObject draw");
    }

    update(deltaTime){
        // console.log("GameObject update");
    }
}