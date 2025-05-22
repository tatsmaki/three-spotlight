import { ambientLight } from "./global/ambient_light";
import { camera, renderCamera } from "./global/camera";
import { pointLight, renderPointLight } from "./global/point_light";
import { renderer } from "./global/renderer";
import { scene } from "./global/scene";
import { renderSpotLight, spotLight } from "./global/spot_light";
import { dummyGroup } from "./objects/dummy";
import { map, gridHelper } from "./objects/map";
import { renderSky, sky } from "./objects/sky";
import "./style.css";

scene.add(
  camera,
  map,
  gridHelper,
  ambientLight,
  spotLight,
  spotLight.target,
  pointLight,
  sky,
  dummyGroup
);

renderer.setAnimationLoop(() => {
  renderCamera();
  renderSky();
  renderSpotLight();
  renderPointLight();
  renderer.render(scene, camera);
});

const onResize = () => {
  renderer.setSize(window.innerWidth, window.innerHeight);
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
};

onResize();

window.addEventListener("resize", onResize);
