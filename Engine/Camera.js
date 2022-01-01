export default class Camera{

    constructor(id, x, y, width, height){
        this.id = id;
        this.width = width;
        this.height = height;
        this.tileSize = tileSize;
        this.x = x;
        this.y = y;
        this.scale = 1;
    }

    follow(gameObject){
        this.x = gameObject.x - (this.width / 2);
        this.y = gameObject.y - (this.height / 2);
    }

    // draw(ctx, gameObject){
    //     ctx.save();          Ni idea de que es esto
    //     ctx.translate(-this.x, -this.y);
    //     gameObject.draw(ctx);
    //     ctx.restore();
    // }
}