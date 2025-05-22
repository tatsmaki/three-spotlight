import { SpotLight, Vector3 } from "three";
import { camera } from "./camera";
import { pointerControl } from "../controls/pointer";

// const mapSize = 2048;
const height = 5;

export const spotLight = new SpotLight(0xc2f9ff, 1, 50, Math.PI / 2.5, 0.8, 0);

spotLight.position.set(0, height, 0);
// spotLight.castShadow = true;
// spotLight.shadow.mapSize.set(mapSize, mapSize);
// spotLight.shadow.camera.near = 1;
// spotLight.shadow.camera.far = 100;
// spotLight.shadow.camera.fov = 90;

export const renderSpotLight = () => {
  const projection = pointerControl.projection;

  let origin = new Vector3(camera.position.x, height, camera.position.z);
  let target = new Vector3(camera.position.x, 0, camera.position.z);

  if (pointerControl.isActive) {
    const scaled = projection.multiplyScalar(10);

    origin.add(new Vector3(scaled.x, 0, -scaled.z));
    target.add(new Vector3(scaled.x, 0, -scaled.z));
  }

  spotLight.position.lerp(origin, 0.1);
  spotLight.target.position.lerp(target, 0.1);
};
