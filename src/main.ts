import { ambientLight } from "./global/ambient_light";
import { camera, renderCamera } from "./global/camera";
import { dirLight, renderDirLight } from "./global/dir_light";
import { hemiLight } from "./global/hemi_light";
import { renderer } from "./global/renderer";
import { scene } from "./global/scene";
import { dummyGroup } from "./objects/dummy";
import { map, gridHelper } from "./objects/map";
import { renderSky, sky } from "./objects/sky";
import "./style.css";

scene.add(
  camera,
  map,
  gridHelper,
  ambientLight,
  hemiLight,
  dirLight,
  sky,
  dummyGroup
);

renderer.setAnimationLoop(() => {
  renderCamera();
  renderSky();
  renderDirLight();
  renderer.render(scene, camera);
});

const onResize = () => {
  renderer.setSize(window.innerWidth, window.innerHeight);
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
};

onResize();

window.addEventListener("resize", onResize);
