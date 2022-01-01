export default class Tile{
    
        constructor(x, y, tileSize, imageSrc){
            this.x = x;
            this.y = y;
            this.tileSize = tileSize;
            this.image = new Image();
            this.image.src = imageSrc;
        }
    
        draw(ctx){
            ctx.drawImage(this.image, this.x, this.y, this.tileSize, this.tileSize);
        }
    
}