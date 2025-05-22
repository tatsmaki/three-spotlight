import { PerspectiveCamera } from "three";
import { keyboardController } from "../controls/keyboard";

const height = 15;

export const camera = new PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);

camera.position.set(2, height, 2);
camera.lookAt(2, 0, 2);

export const renderCamera = () => {
  const direction = keyboardController.direction.normalize();

  camera.position.addScaledVector(direction, 0.1);
};
