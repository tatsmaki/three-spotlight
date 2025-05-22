import { DirectionalLight, Vector3 } from "three";
import { camera } from "./camera";

export const dirLight = new DirectionalLight(0xffffff, 0.5);

const origin = new Vector3(5, 10, 5);

dirLight.position.copy(origin);
dirLight.target = camera;

dirLight.castShadow = true;

const mapSize = 2048;
dirLight.shadow.mapSize.set(mapSize, mapSize);

dirLight.shadow.camera.near = 1;
dirLight.shadow.camera.far = 50;

const d = 50;

dirLight.shadow.camera.left = -d;
dirLight.shadow.camera.right = d;
dirLight.shadow.camera.top = d;
dirLight.shadow.camera.bottom = -d;

export const renderDirLight = () => {
  dirLight.position.x = camera.position.x + origin.x;
  dirLight.position.y = origin.y;
  dirLight.position.z = camera.position.z + origin.z;
};
