import { Vector3 } from "three";

class PointerControl {
  isActive = false;
  private x = 0;
  private y = 0;

  constructor() {
    document.onpointerdown = (event: MouseEvent) => {
      this.isActive = true;
      this.x = event.clientX;
      this.y = event.clientY;
    };

    document.onpointermove = (event: MouseEvent) => {
      if (this.isActive) {
        this.x = event.clientX;
        this.y = event.clientY;
      }
    };

    document.onpointerup = () => {
      this.isActive = false;
    };
  }

  get projection() {
    const dx = (this.x / window.innerWidth) * 2 - 1;
    const dy = (this.y / window.innerHeight) * -2 + 1;

    return new Vector3(dx, 0, dy);
  }
}

export const pointerControl = new PointerControl();
