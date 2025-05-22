import { PCFSoftShadowMap, WebGLRenderer } from "three";

const canvas = document.getElementById("app")!;

export const renderer = new WebGLRenderer({
  canvas,
  antialias: true,
});

renderer.shadowMap.enabled = true;
renderer.shadowMap.type = PCFSoftShadowMap;
