import { Group, Mesh, SphereGeometry } from "three";
import { skyMat } from "./sky_material";
import { camera } from "../global/camera";

export const sky = new Group();

const skyGeo = new SphereGeometry(50);
const mesh = new Mesh(skyGeo, skyMat);

sky.add(mesh);

export const renderSky = () => {
  sky.position.x = camera.position.x;
  sky.position.z = camera.position.z;
};
