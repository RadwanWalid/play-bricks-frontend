import React, { useMemo } from 'react'
import { Canvas } from '@react-three/fiber';
import { PresentationControls, Stage } from '@react-three/drei';
import * as THREE from 'three';
import saveAs from 'file-saver';
import { OBJExporter } from "three/examples/jsm/exporters/OBJExporter";
import { FiDownload } from 'react-icons/fi';

type Props = {
  meshData: {
    modelData: THREE.Group | THREE.Mesh<THREE.BufferGeometry<THREE.NormalBufferAttributes>, THREE.Material | THREE.Material[]>,
    modelTitle: string,
    creatorUsername: string,
    type: 'STL' | 'OBJ',
  },
  maxWidth?: number,
  material: THREE.MeshStandardMaterial,
  style?: string,
}

const objExporter = new OBJExporter();

const OBJModelViewer: React.FC<Props> = ({ meshData, material, style }) => {

  (meshData.modelData as THREE.Group).position.set(0, 0, 0);

  const clonedModel = meshData.modelData.clone();
  
  (meshData.modelData as THREE.Group).traverse((child) => {
    if (child instanceof THREE.Mesh) {
      child.material = material;
      child.material.side = THREE.BackSide;
    }
  });

  const handleDownload = () => {
    const objData = objExporter.parse(clonedModel);

    const blob = new Blob([objData], { type: "text/plain" });
    saveAs(blob, meshData.modelTitle + ".obj");
  };

  const MemoizedMesh = useMemo(() => <Mesh mesh={meshData.modelData as THREE.Group} />, [meshData.modelData]);

  return (
    <div className={`${style} rounded-md bg-white px-8 aspect-[48/56] text-center relative bottom-0 ${style ? '': 'hover:bottom-2 h-56'} hover:shadow-lg transition-all duration-300`}>
      <p className="text-black absolute top-2 right-4 text-xs font-bold italic">.{meshData.type} File</p>
      <div style={{ width: `${style ? 'calc(18*(48/56))': '8.00371'}rem`, height: `${style ? '100%': 'initial'}`}}>
        <Canvas shadows camera={{ position: [-0.5, 0, 1], fov: 45, zoom: 0.725 }} className='touch-none'>
          <PresentationControls speed={1} global polar={[-0.10, Math.PI / 4]}>
            <Stage receiveShadow environment={'forest'}>
              {MemoizedMesh}
            </Stage>
          </PresentationControls>
        </Canvas>
      </div>
      <div className='flex flex-col font-bold absolute bottom-4 left-8 items-start justify-center min-h-[54px] max-h-[54px]'>
        <p className='text-black text-left leading-5 mb-1'>{meshData.modelTitle}</p>
        <p className='text-gray-500 text-left text-xs'>By {meshData.creatorUsername === '' ? "Guest": meshData.creatorUsername}</p>
      </div>
      <button className='text-black absolute right-4 bottom-3 hover:scale-110 hover:drop-shadow-lg transition-all duration-300' onClick={handleDownload}><FiDownload /></button>
    </div>
  )
}

type MeshProps = {
  mesh: THREE.Group,
}

const Mesh: React.FC<MeshProps> = ({ mesh }) => {
  return (
    <primitive object={mesh} frustumCulled={true} />
  )
}

export default OBJModelViewer