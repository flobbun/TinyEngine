export default class Sprite{

    constructor(alias, src, width, height, options){
        this.alias = alias;
        this.src = src;
        this.width = width;
        this.height = height;
        this.options = options || {
            x: 0,
            y: 0,
            scaleX: 1,
            scaleY: 1,
            rotation: 0,
            alpha: 1
        };
        this.image = new Image(width, height);
        this.image.src = this.src;

        this.image.style.border = "2px solid red";
        console.log("SPRITE CREATED", this.image);
    }

    draw(ctx, progress){
        ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
        ctx.drawImage(this.image, this.options.x, this.options.y, this.width, this.height);
    }

}