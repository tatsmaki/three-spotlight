import { Euler, PerspectiveCamera } from "three";
import { keyboardController } from "../controls/keyboard";
import { pointerController } from "../controls/pointer";

const height = 2;

export const camera = new PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);

camera.position.set(0, height, 0);

export const renderCamera = () => {
  camera.quaternion.setFromEuler(pointerController.euler);
  const direction = keyboardController.direction.normalize();

  const euler = new Euler();

  euler.setFromQuaternion(camera.quaternion, "YXZ");
  euler.x = 0;

  direction.applyEuler(euler);
  camera.position.addScaledVector(direction, 0.1);
};
