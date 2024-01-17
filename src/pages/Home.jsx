import {Suspense} from 'react'
import {Canvas} from '@react-three/fiber'
import Loader from '../components/Loader'
import Island from '../models/Island'

const Home = () => {
  return (
    <section className="w-full h-screen relative">
      {/* <div className="absolute top-28 left-0 right-0 z-10 flex items-center justify-center">
        popup  
      </div> */}
      <Canvas className="w-full h-scren bg-transparent"
        camera={{near:0.1, far:1000}}>
        <Suspense fallback={<Loader/>}>
          <directionaLight/>

        </Suspense>
      </Canvas>
    </section>
  )
}

export default Home