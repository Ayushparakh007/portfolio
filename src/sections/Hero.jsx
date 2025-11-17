import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber'
import { PerspectiveCamera } from '@react-three/drei';

import  HackerRoom  from '../components/HackerRoom.jsx';
import CanvasLoader from "../components/CanvasLoader.jsx";
// import {Leva, useControls} from "leva";
import {useMediaQuery} from "react-responsive";
import Target from "../components/Target.jsx"
import ReactLogo from "../components/ReactLogo.jsx";
import Cube from "../components/Cube.jsx";
import Rings from "../components/Rings.jsx";
import HeroCamera from "../components/HeroCamera.jsx";
import Button from "../components/Button.jsx";

// import {calculateSizes} from "../constants/index.js";



const Hero = () => {
    // const x=useControls('HackerRoom',{
    //     positionX:{
    //         value:2.5,
    //         min: -10,
    //         max:10
    //     },
    //     positionY:{
    //         value:2.5,
    //         min: -10,
    //         max:10
    //     },
    //     positionZ:{
    //         value:2.5,
    //         min: -10,
    //         max:10
    //     },
    //     rotationX:{
    //     value:0,
    //     min: -10,
    //     max:10
    //
    //     },
    //     rotationY:{
    //         value:0,
    //         min: -10,
    //         max:10
    //
    //     },
    //     rotationZ:{
    //         value:0,
    //         min: -10,
    //         max:10
    //
    //     },
    //     scale:{
    //         value: 1,
    //         min:0.1,
    //         max:10
    // }
    //
    // })
    const isSmall = useMediaQuery(  { maxWidth: 440 } );
    const isMobile = useMediaQuery( { maxWidth: 620 } );
    const isTablet = useMediaQuery(  { minWidth: 768, maxWidth: 1024 } );
    //
    // const sizes = calculateSizes(isSmall, isMobile, isTablet);




    return (
        <section className="min-h-screen w-full flex flex-col relative" id="home">
            <div className="w-full mx-auto flex flex-col sm:mt-36 mt-20 c-space gap-3 relative z-10">
                <p className="sm:text-3xl text-xl font-medium text-white text-center font-generalsans">
                    Hi, I am Ayush Parakh <span className="waving-hand">👋</span>
                </p>
                <p className="hero_tag text-gray_gradient">Building Products & Brands</p>
            </div>

            <div className="w-full h-full absolute inset-0">
                {/* <Leva/> */}
                <Canvas
                    className="w-full h-full"
                    dpr={[1, 2]}
                    gl={{ 
                        antialias: true,
                        alpha: false,
                        powerPreference: 'high-performance'
                    }}
                    performance={{ min: 0.5 }}
                >
                    <Suspense fallback={<CanvasLoader />}>

                        <PerspectiveCamera makeDefault position={[0, 0, 30]} />


<HeroCamera>
  <HackerRoom
      position={isMobile?[0.5,0.4,3.5]:[0.5, -2.9, 3.5]}
      rotation={[0.4, 0.0, 0.0]}
      scale={isMobile? 0.9:1.4} />
</HeroCamera>

                        <group >
                            <Target position={isSmall ? [-7, -3, -10] : isMobile ? [-9, -4, -10] : isTablet ? [-15, -9.5, -10] : [-13, -10.5, -10]} />
                            <ReactLogo position={isSmall ? [4,6, 0] : isMobile ? [8, 6.5, 0] : isTablet ? [12, 2, 0] : [12, 3, 0]}/>
                            <Cube  position={isSmall ? [5, -2.0, 0] : isMobile ? [7, -2.5, 0] : isTablet ? [13, -7, 0] : [12, -7.5, 0]}/>
                             <Rings position={ isSmall ? [-10, 12, 0] : isMobile ? [-14, 13, 0] : isTablet ? [-22, 4, 0] : [-20, 5, 0]} />
                        </group>



                        <ambientLight intensity={2} />
                        <directionalLight position={[10, 10, 10]} intensity={0.5} />

                    </Suspense>
                </Canvas>
            </div>
            <div className="absolute bottom-7 left-0 right-0 w-full z-10 c-space">
                <a href="#about" className="w-fit">
                    <Button name="Let's work together" isBeam containerClass="sm:w-fit w-full sm:min-w-96" />
                </a>
            </div>



        </section>
    )
}

export default Hero;