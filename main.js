import Engine from "./Engine/Engine.js";
import GameObject from "./Engine/GameObject.js";

const Game = new Engine(document.getElementById('game'));
const World = Game.createWorld(100, 100, 32);

// GameObject.CreateSprite("player", "player.png", 32, 32);

const playerObject = World.createGameObject(0, 0).createSprite("player", "player.png", 32, 32);



