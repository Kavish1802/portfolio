/* eslint-disable react/no-unknown-property */
import { useGLTF } from '@react-three/drei'
import skyScene from '../assets/3d/sky.glb'
import stars from '../assets/3d/stars.glb'
import skyBg from '../assets/images/starBg.jpg'
import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'

const Sky = ({isRotating}) => {
 
  const starsRef=useRef();

  useFrame((_,delta)=>{
    if(isRotating)
    {
      starsRef.current.rotation.y+=0.35*delta;
    }
  
  })

  const star=useGLTF(stars);
  return (
    <mesh ref={starsRef}>
      <primitive object={star.scene}/>
    </mesh>
  )
}

export default Sky