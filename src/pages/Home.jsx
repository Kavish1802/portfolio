import {Suspense, useState} from 'react'
import {Canvas} from '@react-three/fiber'
import Loader from '../components/Loader'
import Island from '../models/Island'
import Sky from '../models/Sky'
import Plane from '../models/Plane'
import HomeInfo from '../components/HomeInfo'

const Home = () => {


  const adjustIslandForScreenSize = () =>{
    let screenScale,screePosition;
    let rotation=[0.1,4.7,0];
    if(window.innerWidth<768)
    {
      screenScale=[0.9,0.9,0.9];
      screePosition=[0,-6.5,-43];
    }
    else{
      //increased the size of island for bigger screens
      screenScale=[1.1,1.1,1.1];
      screePosition=[0,-6.5,-43]; 
    }
    return [screenScale,screePosition,rotation];
  }
  
  const adjustPlaneForScreenSize = () =>{
    let screenScale,screePosition;
    // let rotation=[0.1,4.7,0];
    if(window.innerWidth<768)
    {
      screenScale=[1.5,1.5,1.5];
      screePosition=[0,-1.5,0];
    }
    else{
      screenScale=[3,3,3];
      screePosition=[0,-4,-4]; 
    }
    return [screenScale,screePosition];
  }

  const [islandScale,islandPosition,islandRotation]=adjustIslandForScreenSize();
  const [isRotating,setIsRotating]=useState(false);
  const [currentStage,setCurrentStage]=useState(1);
  const [planeScale,planePosition]=adjustPlaneForScreenSize();
   
  return (
    <section className="w-full h-screen relative bg-black">
      <div className='text-white absolute top-28 left-0 right-0 z-10 flex items-center justify-center'>
        {currentStage&&<HomeInfo currentStage={currentStage}/>}
      </div>
      <Canvas className={`w-full h-scren bg-transparent ${isRotating?'cursor-grabbing':'cursor-grab'}`}
        camera={{near:0.1, far:1000}}>
          <Suspense fallback={<loader/>}>
            {/* DIRECTIONAL LIGHT STIMULATES THE LIGHT COMMING FROM A DISTANT SOURCE LIKE A SUN  */}
            <directionalLight position={[1,0,0]} intensity={2}/>

            {/* ambient light , gives light to all objects eqaully without casting a shadow */}
            <ambientLight intensity={0}/>
             
            <spotLight/> 
             
            <hemisphereLight skyColor="#5b76fc" groundColor="#000000" intensity={1}/>
            {/* <Plane/> */}
            <Sky
              isRotating={isRotating}
            />
            <Island
             position={islandPosition}
             scale={islandScale}
             rotation={islandRotation}
             isRotating={isRotating}
             setIsRotating={setIsRotating}
             setCurrentStage={setCurrentStage}
             currentStage={currentStage}
            />
             <Plane 
               isRotating={isRotating}
               scale={planeScale}
               position={planePosition}
               rotation={[0,20,0]}
             />
          </Suspense>
      </Canvas>
    </section>
  )
}

export default Home