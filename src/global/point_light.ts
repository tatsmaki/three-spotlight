import { PointLight, Vector3 } from "three";
import { camera } from "./camera";

const height = 2;

export const pointLight = new PointLight(0xff8269, 1, 10, 0);

pointLight.castShadow = true;
pointLight.position.set(0, height, 0);

export const renderPointLight = () => {
  const position = new Vector3(camera.position.x, height, camera.position.z);

  pointLight.position.copy(position);
};
