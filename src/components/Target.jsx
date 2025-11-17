
import {useRef} from "react"
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

const Target = (props) =>{
    const targetRef =useRef();

    useGSAP(() => {
        gsap.to(targetRef.current.position, {
            y: targetRef.current.position.y + 0.5,
            duration: 1.5,
            repeat: -1,
            yoyo: true,
        });
    });
    
    return (
        <mesh {...props} ref={targetRef} scale={1.5}>
            <cylinderGeometry args={[1, 1, 0.3, 32]} />
            <meshStandardMaterial color="#ff6b6b" metalness={0.5} roughness={0.3} />
        </mesh>
    )
}
export default Target
