'use client'
import React, { useContext, useEffect, useMemo, useState } from 'react'
import { useRouter } from 'next/navigation';
import axios from 'axios';
import * as THREE from 'three';
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader';
import { STLLoader } from 'three/examples/jsm/loaders/STLLoader';
import OBJModelViewer from '../../components/OBJModelViewer/OBJModelViewer';
import ModelViewerSkeleton from '../../components/OBJModelViewer/ModelViewerSkeleton';
import STLModelViewer from '../../components/STLModelViewer/STLModelViewer';
import AuthContext from '../../context/AuthContext';

type Props = {}

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

const Page = (props: Props) => {
    let router = useRouter();
    const { isLoggedIn } = useContext(AuthContext);
    const [myOBJModels, setMyOBJModels] = useState<Model[]>([]);
    const [mySTLModels, setMySTLModels] = useState<Model[]>([]);
    const [isOBJModelLoaded, setIsOBJModelLoaded] = useState<boolean>(false);
    const [maxOBJWidth, setMaxOBJWidth] = useState<number>(0);
    const [isSTLModelLoaded, setIsSTLModelLoaded] = useState<boolean>(false);
    const [maxSTLWidth, setMaxSTLWidth] = useState<number>(0);

    useEffect(() => {
      if (!isLoggedIn) {
        router.push('/Login');
        return;
      }

        const fetchOBJData = async () => {
          const objModelData = await getOBJModelData();
          parseOBJModels(objModelData);
        };
        const fetchSTLData = async () => {
          const stlModelData = await getSTLModelData();
          parseSTLModels(stlModelData);
        };
    
        fetchSTLData();
        fetchOBJData();
      }, [isLoggedIn, router]);
  
    const getOBJModelData = async () => {
      axios.defaults.withCredentials = true;
      let res = await axios.put('https://play-bricks-backend.vercel.app/Model/getUserOBJModels', { username: JSON.parse(localStorage.getItem('UserInfo') as string).username })
      return res.data;
    };

    const getSTLModelData = async () => {
      axios.defaults.withCredentials = true;
      let res = await axios.put('https://play-bricks-backend.vercel.app/Model/getUserSTLModels', { username: JSON.parse(localStorage.getItem('UserInfo') as string).username })
      return res.data;
    };

    const parseOBJModels = (data: any[]) => {
      let max = 0;
      const modelsToString = data.map((mesh: any) => {
        const meshDataString = atob(mesh.meshData);

        const model = objLoader.parse(meshDataString);
        const boundingBox = new THREE.Box3().setFromObject(model);
        const size = new THREE.Vector3();
        boundingBox.getSize(size);
        const width = size.x;
        if (width > max) {
          max = width;
        }
        return { modelTitle: mesh.modelTitle, modelData: model, creatorUsername: mesh.creatorUsername, type: mesh.type};
      });
  
      setMaxOBJWidth(max);
      setMyOBJModels(modelsToString);
      setIsOBJModelLoaded(true);
    };
  
    const parseSTLModels = (data: any[]) => {
      let max = 0;
      const modelsToString = data.map((mesh: any) => {
        const meshDataString = atob(mesh.meshData);
        const model = new THREE.Mesh(stlLoader.parse(meshDataString));
        const boundingBox = new THREE.Box3().setFromObject(model);
        const size = new THREE.Vector3();
        boundingBox.getSize(size);
        const width = size.x;
        if (width > max) {
          max = width;
        }
        return { modelTitle: mesh.modelTitle, modelData: model, creatorUsername: mesh.creatorUsername, type: mesh.type};
      });
  
      setMaxSTLWidth(max);
      setMySTLModels(modelsToString);
      setIsSTLModelLoaded(true);
    };
  
    const MemoizedOBJModels = useMemo(
      () =>
        myOBJModels.map((model, index) => (
          <OBJModelViewer key={index} meshData={model} maxWidth={maxOBJWidth} material={material} />
        )),
      [myOBJModels, maxOBJWidth]
    );

    const MemoizedSTLModels = useMemo(
      () =>
        mySTLModels.map((model, index) => (
          <STLModelViewer key={index} meshData={model} maxWidth={maxSTLWidth} material={material} />
        )),
      [mySTLModels, maxSTLWidth]
    );

  return (
    <div className='my-8 space-y-8'>
      <section>
        <div className='ml-32 916:w-fit 916:mx-auto 916:px-6'>
          <h1 className='text-4xl 704:text-2xl'>My OBJ Models</h1>
          <p className='704:text-sm'>You have a total of {myOBJModels.length} OBJ models!</p>
        </div>
        <div className="flex justify-center mt-8">
          <div className="grid grid-flow-row grid-cols-3 gap-16 786:grid-cols-2 512:!grid-cols-1 512:gap-8">
              {!isOBJModelLoaded && <ModelViewerSkeleton count={6} />}
              {isOBJModelLoaded && MemoizedOBJModels}
          </div>
        </div>
      </section>

      <section>
        <div className='ml-32 916:w-fit 916:mx-auto 916:px-6'>
          <h1 className='text-4xl 704:text-2xl'>My STL Models</h1>
          <p className='704:text-sm'>You have a total of {mySTLModels.length} STL models!</p>
        </div>
        <div className="flex justify-center mt-8">
          <div className="grid grid-flow-row grid-cols-3 gap-16 786:grid-cols-2 512:!grid-cols-1 512:gap-8">
              {!isSTLModelLoaded && <ModelViewerSkeleton count={6} />}
              {isSTLModelLoaded && MemoizedSTLModels}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Page;