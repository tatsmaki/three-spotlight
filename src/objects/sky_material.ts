import { BackSide, MeshBasicMaterial, Texture } from "three";

const canvas = document.createElement("canvas");
const width = 16;
const height = 512;

canvas.width = width;
canvas.height = height;

const context = canvas.getContext("2d")!;
const gradient = context.createLinearGradient(0, 0, width, height);

gradient.addColorStop(0.2, "#1E90FF"); // top
gradient.addColorStop(0.4, "#4B9CD3");
gradient.addColorStop(0.6, "#87CEEB"); // bottom
context.fillStyle = gradient;
context.fillRect(0, 0, width, height);

const texture = new Texture(canvas);

texture.needsUpdate = true;

export const skyMat = new MeshBasicMaterial({
  side: BackSide,
  map: texture,
  // fog: false,
});
