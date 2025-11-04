import * as THREE from "three";
import { tilesPerRow, tileSize, minTileIndex, maxTileIndex } from "../constants";
import { Beem } from "./Beem";

export function Track(rowIndex) {
  const track = new THREE.Group();
  track.position.y = (rowIndex * tileSize);

  const rail1 = new THREE.Mesh(
    new THREE.BoxGeometry(tilesPerRow * tileSize, tileSize / 10, tileSize / 10),
    new THREE.MeshLambertMaterial({ color: 0x8b90a0 })
  );
  rail1.receiveShadow = true;
  rail1.position.z += tileSize / 10;
  rail1.position.y = - (tileSize / 5)
  track.add(rail1);

  const rail2 = new THREE.Mesh(
    new THREE.BoxGeometry(tilesPerRow * tileSize, tileSize / 10, tileSize / 10),
    new THREE.MeshLambertMaterial({ color: 0x8b90a0 })
  );
  rail2.receiveShadow = true;
  rail2.position.z += tileSize / 10;
  rail2.position.y = (tileSize / 5)
  track.add(rail2);
  for (let i = minTileIndex; i < maxTileIndex; i ++) {
    const beem = new THREE.Group();

    beem.add(Beem(i * tileSize - tileSize / 4))
    beem.add(Beem(i * tileSize + tileSize / 4))

    track.add(beem);
  }
  const foundation = new THREE.Mesh(
      new THREE.PlaneGeometry(tilesPerRow * tileSize, tileSize),
      new THREE.MeshLambertMaterial({ color: 0x454a59 })
  );
  
  track.add(foundation);

  return track;
}