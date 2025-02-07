import { Float, useGLTF } from '@react-three/drei';
import { useMediaQuery } from 'react-responsive';

const ReactLogo = (props) => {
    const { nodes, materials } = useGLTF('models/react.glb');

    // Define media queries for different screen sizes
    const isSmall = useMediaQuery({ maxWidth: 440 });
    const isMobile = useMediaQuery({ maxWidth: 620 });
    const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1024 });

    // Adjust scale dynamically
    let scaleFactor = 0.5; // Default scale
    if (isSmall) scaleFactor = 0.3; // Smaller for very small screens
    else if (isMobile) scaleFactor = 0.4; // Slightly larger for mobiles
    else if (isTablet) scaleFactor = 0.6; // Bigger for tablets

    return (
        <Float floatIntensity={1}>
            <group position={[8, 8, 0]} scale={scaleFactor} {...props} dispose={null}>
                <mesh
                    geometry={nodes['React-Logo_Material002_0'].geometry}
                    material={materials['Material.002']}
                    position={[0, 0.079, 0.181]}
                    rotation={[0, 0, -Math.PI / 2]}
                    scale={[0.392, 0.392, 0.527]}
                />
            </group>
        </Float>
    );
};

useGLTF.preload('models/react.glb');

export default ReactLogo;
