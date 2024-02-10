/* eslint-disable react/no-unknown-property */
import { useGLTF } from '@react-three/drei'
import skyScene from '../assets/3d/sky.glb'
import stars from '../assets/3d/stars.glb'
import skyBg from '../assets/images/starBg.jpg'

const Sky = () => {
 
  const star=useGLTF(stars);
  return (
    <mesh>
      <primitive object={star.scene}/>
    </mesh>
  )
}

export default Sky