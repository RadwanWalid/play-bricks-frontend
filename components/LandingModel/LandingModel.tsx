import React, { forwardRef, useRef } from 'react'
import { Canvas, useFrame, useLoader } from '@react-three/fiber'
import { PresentationControls, Stage } from '@react-three/drei';
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader';

type Props = {
    onloaded: any,
}

const LandingModel = (props: Props) => {
    const modelRef = useRef<any>();

  return (
    <div className='flex-[1] h-full'>
        <Canvas camera={{ position: [0, 10, 50], fov: 90}} className='relative touch-none bottom-8 min-h-[496px] max-h-[496px] min-w-[420px] max-w-[420px]'>
            <PresentationControls speed={1} global polar={[-0.10, Math.PI / 4]}>
                <Stage environment={undefined}>
                    <Model ref={modelRef} onloaded={props.onloaded} scale={0.01} />
                </Stage>
            </PresentationControls>
        </Canvas>
    </div>
  )
}

type ModelProps = {
    scale?: number,
    onloaded: any,
}

const Model = forwardRef((props: ModelProps, ref: any) => {

    const obj = useLoader(OBJLoader, '/models/Seheimy garden structure.obj');

    if(obj) {
        props.onloaded();
    }

    useFrame(() => {
        if(ref.current.rotation.y >= 360) {
            ref.current.rotation.y = 0;
        }

        ref.current.rotation.y += 0.01;
    })

    return <primitive ref={ref} object={obj} {...props} />
})

Model.displayName = 'MyApp';

export default LandingModel