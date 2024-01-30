import {Suspense} from 'react'
import {Canvas} from '@react-three/fiber'
import Loader from '../components/Loader'
import Island from '../models/Island'

const Home = () => {
//   canvas.addEventListener('webglcontextlost', function(event) {
//     event.preventDefault();
// }, false);

  const adjustIslandForScreenSize = () =>{
    let screenScale,screePosition;
    let rotation=[0.1,4.7,0];
    if(window.innerWidth<768)
    {
      screenScale=[0.9,0.9,0.9];
      screePosition=[0,-6.5,-43];
    }
    else{
      screenScale=[1,1,1];
      screePosition=[0,-6.5,-43]; 
    }
    return [screenScale,screePosition,rotation];
  }

  const [islandScale,islandPosition,islandRotation]=adjustIslandForScreenSize();

  return (
    <section className="w-full h-screen relative">
      {/* <div className="absolute top-28 left-0 right-0 z-10 flex items-center justify-center">
        popup  
      </div> */}
      <Canvas className="w-full h-scren bg-transparent"
        camera={{near:0.1, far:1000}}>
          <Suspense fallback={<loader/>}>
            {/* DIRECTIONAL LIGHT STIMULATES THE LIGHT COMMING FROM A DISTANT SOURCE LIKE A SUN  */}
            <directionalLight position={[1,1,1]} intensity={2}/>

            {/* ambient light , gives light to all objects eqaully without casting a shadow */}
            <ambientLight intensity={0.5}/>
             
            <spotLight/> 
             
            <hemisphereLight skyColor="#5b76fc" groundColor="#000000" intensity={1}/>

            <Island
             position={islandPosition}
             scale={islandScale}
             rotation={islandRotation}/>
          </Suspense>
      </Canvas>
    </section>
  )
}

export default Home