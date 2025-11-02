import * as THREE from "three";

export function Beem(x) {
  const beem = new THREE.Mesh(
    new THREE.BoxGeometry(8, 42, 5),
    new THREE.MeshLambertMaterial({
      color: 0x5c3623,
      flatShading: true,
    })
  );
  beem.position.x = x;
  beem.position.z = 2;
  return beem;
}