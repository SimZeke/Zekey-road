import * as THREE from "three";
import { tileSize } from "../constants";
import { Wheel } from "./Wheel";

export function Train(initialTileIndex, direction) {
  const train = new THREE.Group();
  train.position.x = initialTileIndex * tileSize;
  if (!direction) train.rotation.z = Math.PI;

  const cargo = new THREE.Mesh(
    new THREE.BoxGeometry(100, 35, 35),
    new THREE.MeshLambertMaterial({
      color: 0xd52523,
      flatShading: true,
    }),
  );
  cargo.position.z = 25;
  train.add(cargo);

  const roof = new THREE.Mesh(
    new THREE.BoxGeometry(102, 37 , 10),
    new THREE.MeshLambertMaterial({
      color: 0x454a59,
      flatShading: true,
    }),
  );
  roof.position.z = 43;
  train.add(roof);

  const window1 = new THREE.Mesh(
    new THREE.BoxGeometry(20, 36, 25),
    new THREE.MeshLambertMaterial({
        color: 0x47f2ff,
        flatShading: true,
    }),
  );
  window1.position.z = 25;
  window1.position.x = 30;
  train.add(window1);

  const window2 = new THREE.Mesh(
    new THREE.BoxGeometry(20, 36, 25),
    new THREE.MeshLambertMaterial({
        color: 0x47f2ff,
        flatShading: true,
    }),
  );
  window2.position.z = 25;
  window2.position.x = 0;
  train.add(window2);

  const window3 = new THREE.Mesh(
    new THREE.BoxGeometry(20, 36, 25),
    new THREE.MeshLambertMaterial({
        color: 0x47f2ff,
        flatShading: true,
    }),
  );
  window3.position.z = 25;
  window3.position.x = -30;
  train.add(window3);

  const frontWheel = Wheel(35);
  train.add(frontWheel);

  const backWheel = Wheel(-35);
  train.add(backWheel);

  return train;
}