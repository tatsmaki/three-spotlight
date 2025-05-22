import {
  GridHelper,
  Group,
  Mesh,
  MeshStandardMaterial,
  PlaneGeometry,
} from "three";

export const map = new Group();

map.rotateX(-Math.PI / 2);

const planeGeo = new PlaneGeometry(1000, 1000);
const planeMat = new MeshStandardMaterial({
  color: 0x00ff00,
});
const plane = new Mesh(planeGeo, planeMat);

plane.receiveShadow = true;

map.add(plane);

export const gridHelper = new GridHelper(100, 10);

gridHelper.position.y = 0.01;
