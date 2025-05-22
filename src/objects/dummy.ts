import { BoxGeometry, Group, Mesh, MeshStandardMaterial } from "three";

export const dummyGroup = new Group();

const createWall = () => {
  const wallGeo = new BoxGeometry(5, 5, 0.2);
  const wallMat = new MeshStandardMaterial({
    color: 0xffffff,
  });
  const wall = new Mesh(wallGeo, wallMat);

  wall.castShadow = true;
  wall.receiveShadow = true;

  return wall;
};

// Create a 10x10 labyrinth
const size = 10;
const cellSize = 5;

// Create vertical walls
for (let x = 0; x < size; x++) {
  for (let z = 0; z < size + 1; z++) {
    // Skip some walls randomly to create paths
    if (Math.random() > 0.3) {
      const wall = createWall();
      wall.position.set(
        x * cellSize - (size * cellSize) / 2,
        1.5,
        z * cellSize - (size * cellSize) / 2
      );
      dummyGroup.add(wall);
    }
  }
}

// Create horizontal walls
for (let x = 0; x < size + 1; x++) {
  for (let z = 0; z < size; z++) {
    // Skip some walls randomly to create paths
    if (Math.random() > 0.3) {
      const wall = createWall();
      wall.rotation.y = Math.PI / 2;
      wall.position.set(
        x * cellSize - (size * cellSize) / 2,
        1.5,
        z * cellSize - (size * cellSize) / 2
      );
      dummyGroup.add(wall);
    }
  }
}
