import axios from 'axios';
import React, { useEffect, useState, useMemo } from 'react';
import * as THREE from 'three';
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader';
import { STLLoader } from 'three/examples/jsm/loaders/STLLoader';
import OBJModelViewer from '../OBJModelViewer/OBJModelViewer';
import ModelViewerSkeleton from '../OBJModelViewer/ModelViewerSkeleton';
import STLModelViewer from '../STLModelViewer/STLModelViewer';

type Props = {};

type Model = {
  modelTitle: string;
  modelData: THREE.Group | THREE.Mesh<THREE.BufferGeometry<THREE.NormalBufferAttributes>, THREE.Material | THREE.Material[]>;
  creatorUsername: string;
  type: 'STL' | 'OBJ';
};

const material = new THREE.MeshStandardMaterial({
  color: 0xbb9c75,
  transparent: false,
  opacity: 1,
});

const objLoader = new OBJLoader();
const stlLoader = new STLLoader();

const PopularModels: React.FC<Props> = () => {
  const [models, setModels] = useState<Model[]>([]);
  const [isModelLoaded, setIsModelLoaded] = useState<boolean>(false);
  const [maxWidth, setMaxWidth] = useState<number>(0);

  const decodeByteArrayToString = (byteArray: number[]) => {
    const decoder = new TextDecoder('utf-8');
    const uint8Array = new Uint8Array(byteArray);
    return decoder.decode(uint8Array);
  };

  const getModelData = async () => {
    axios.defaults.withCredentials = true;
    const res = await axios.get('http://localhost:5000/Model/getAllModels');
    return res.data;
  };

  const parseModels = (data: any[]) => {
    let max = 0;
    const modelsToString = data.map((mesh: any) => {
      const meshDataString = atob(mesh.meshData);
      let model;
      if(mesh.type == 'STL') {
        model = new THREE.Mesh(stlLoader.parse(meshDataString));
        const boundingBox = new THREE.Box3().setFromObject(model);
        const size = new THREE.Vector3();
        boundingBox.getSize(size);
        const width = size.x;
        if (width > max) {
          max = width;
        }
      } else {
        model = objLoader.parse(meshDataString);
        const boundingBox = new THREE.Box3().setFromObject(model);
        const size = new THREE.Vector3();
        boundingBox.getSize(size);
        const width = size.x;
        if (width > max) {
          max = width;
        }
      }


      return { modelTitle: mesh.modelTitle, modelData: model, creatorUsername: mesh.creatorUsername, type: mesh.type};
    });

    setMaxWidth(max);
    setModels(modelsToString);
    setIsModelLoaded(true);
  };

  useEffect(() => {
    const fetchData = async () => {
      const modelData = await getModelData();
      parseModels(modelData);
    };

    fetchData();
  }, []);

  const MemoizedModels = useMemo(
    () =>
      models.map((model, index) => (
        model.type != 'STL' ? <OBJModelViewer key={index} meshData={model} maxWidth={maxWidth} material={material} />: <STLModelViewer key={index} meshData={model} maxWidth={maxWidth} material={material} />
      )),
    [models, maxWidth]
  );

  return (
    <div className='overflow-x-auto flex items-center my-1 p-3 space-x-10 mb-12 mx-24'>
      {!isModelLoaded && <ModelViewerSkeleton count={10} />}
      {isModelLoaded && MemoizedModels}
    </div>
  );
};

export default PopularModels;
