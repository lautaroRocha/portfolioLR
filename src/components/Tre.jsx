import React from "react";
import '../styles/tre.css'
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'


function Tre(){
    return(



        <Canvas frameloop="demand" className='canvas'>
            <mesh   onWheel={() => {return}}>
                <torusKnotGeometry wireframe />
                <meshLambertMaterial color='#fff' wireframe />
                <ambientLight intensity={0.1} />
                <OrbitControls autoRotate />
            </mesh>
        </Canvas>
    )
    }

export default Tre;