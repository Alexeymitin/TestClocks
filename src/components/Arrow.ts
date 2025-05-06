import { Container, Sprite, Texture } from 'pixi.js';

export class Arrow extends Container {
  private arrowImage: Sprite;

  constructor(texture: Texture) {
    super();

    this.arrowImage = new Sprite(texture);
    this.scale.set(0.5);

    this.addChild(this.arrowImage);
  }

  setRotation(angle: number) {
    this.arrowImage.rotation = angle;
  }

  setAnchor(x: number, y: number) {
    this.arrowImage.anchor.set(x, y);
  }
}
