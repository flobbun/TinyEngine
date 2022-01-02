export default class Tile{
    
    constructor(x, y, src, size){
        this.x = x;
        this.y = y;
        this.src = src;
        this.size = size;
        this.image = new Image();
        this.image.src = this.src;
    }

    draw(ctx, progress){
        ctx.drawImage(this.image, this.x, this.y, this.size, this.size);
    }
    
}