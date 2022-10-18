/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function Dav(props) {
  const { nodes, materials } = useGLTF("/6D ANT FER.gltf");
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plano002.geometry}
        material={materials["Material.001"]}
        position={[0.31, 0.13, -0.07]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plano003.geometry}
        material={materials["Material.001"]}
        position={[0.31, 0.13, -0.07]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plano004.geometry}
        material={materials["Material.001"]}
        position={[0.24, 0.13, -0.07]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Texto.geometry}
        material={materials["Material.001"]}
        position={[0.24, -0.07, 0.23]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Texto001.geometry}
        material={materials["Material.001"]}
        position={[-0.1, -0.07, 0.09]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Texto002.geometry}
        material={materials["Material.001"]}
        position={[0.49, -0.05, 0.21]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <group position={[-0.28, -0.02, 0.05]} rotation={[0, 0.44, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["TQ_ARD-geom"].geometry}
          material={materials.TQ_ARD_front}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["TQ_ARD-geom_1"].geometry}
          material={materials.TQ_ARD_back}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["TQ_ARD-geom_2"].geometry}
          material={materials.TQ_ARD_edge}
        />
      </group>
      <group position={[0.27, 0.07, 0.09]} rotation={[Math.PI / 2, 0, Math.PI]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["TQ_ARD-geom001"].geometry}
          material={materials["TQ_ARD_front.001"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["TQ_ARD-geom001_1"].geometry}
          material={materials["TQ_ARD_back.001"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["TQ_ARD-geom001_2"].geometry}
          material={materials["TQ_ARD_edge.001"]}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/6D ANT FER.gltf");
