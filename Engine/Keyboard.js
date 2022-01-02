export default class Keyboard{

    constructor(){
        this.keys = {};
        this.keydown = this.keydown.bind(this);
        this.keyup = this.keyup.bind(this);
        window.addEventListener("keydown", this.keydown);
        window.addEventListener("keyup", this.keyup);
    }

    keydown = (event) => this.keys[event.key] = true;

    keyup = (event) => this.keys[event.key] = false;

    isDown = (key) => this.keys[key] || false;

}