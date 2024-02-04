/* eslint-disable react/no-unknown-property */
import React, { useRef,useEffect } from "react";
import stars from "../assets/3d/stars.glb";
import { useGLTF } from "@react-three/drei";
import { useFrame,useThree } from "@react-three/fiber";
import {a} from '@react-spring/three'

const Stars=(props) =>{
  const { nodes, materials } = useGLTF(
   stars
  );
  const starsRef = useRef();
  return (
    <a.group ref={starsRef} {...props} >
      <mesh
        geometry={nodes.Object_2.geometry}
        material={materials.star}
        rotation={[-Math.PI / 2, 0, 0]}
      />
    </a.group>
  );
}

export default Stars;
