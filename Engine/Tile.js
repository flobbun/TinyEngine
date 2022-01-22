export default class Tile{
    
    constructor(x, y, src, size, tileRow, tileCol, worldX, worldY){
        this.worldX = worldX;
        this.worldY = worldY;
        this.x = x;
        this.y = y;
        this.src = src;
        this.size = size;
        this.tileRow = tileRow;
        this.tileCol = tileCol;
        this.image = new Image();
        this.image.src = this.src;
        this.tilesetWidth = this.image.width;
        this.tilesetHeight = this.image.height;
    }

    draw(ctx, progress){
        ctx.drawImage
        (
            this.image,                  // Tileset image
            (this.tileCol * this.size),  // The x coordinate where to start clipping
            (this.tileRow * this.size),  // The y coordinate where to start clipping
            this.size,                   // How stretch is the image (width) 
            this.size,                   // How stretch is the image (height)
            (this.worldX * this.size),   // The x coordinate where to place the image on the canvas
            (this.worldY * this.size),   // The y coordinate where to place the image on the canvas
            this.tilesetWidth,           // The width of the image to use (stretch or crop)
            this.tilesetHeight           // The height of the image to use (stretch or crop)
        );         
    }


}