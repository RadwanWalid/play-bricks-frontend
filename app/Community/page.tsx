'use client'
import React, { useEffect, useMemo, useRef, useState } from 'react'
import axios from 'axios';
import * as THREE from 'three';
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader';
import { STLLoader } from 'three/examples/jsm/loaders/STLLoader';
import OBJModelViewer from '../../components/OBJModelViewer/OBJModelViewer';
import ModelViewerSkeleton from '../../components/OBJModelViewer/ModelViewerSkeleton';
import STLModelViewer from '../../components/STLModelViewer/STLModelViewer';
import { BiSearchAlt } from 'react-icons/bi';
import { IoClose } from 'react-icons/io5';

type Props = {}

type StringIdTuple = {
  modelTitle: string,
  _id: string
};

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

  const [objModels, setOBJModels] = useState<Model[]>([]);
  const [stlModels, setSTLModels] = useState<Model[]>([]);
  const [isOBJModelLoaded, setIsOBJModelLoaded] = useState<boolean>(false);
  const [maxOBJWidth, setMaxOBJWidth] = useState<number>(0);
  const [isSTLModelLoaded, setIsSTLModelLoaded] = useState<boolean>(false);
  const [maxSTLWidth, setMaxSTLWidth] = useState<number>(0);
  const [searchResults, setSearchResults] = useState<StringIdTuple[]>([]);
  const [inputValue, setInputValue] = useState<string>('');
  const [searchedModel, setSearchedModel] = useState<Model>({
    modelTitle: '',
    modelData: new THREE.Mesh(),
    creatorUsername: '',
    type: 'STL',
  });

  const viewedModelRef = useRef<HTMLDivElement>(null);
  const searchMenuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
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
    }, []);

  const getOBJModelData = async () => {
    axios.defaults.withCredentials = true;
    let res = await axios.get('https://play-bricks-backend.vercel.app/Model/getAllOBJModels')
    return res.data;
  };

  const getSTLModelData = async () => {
    axios.defaults.withCredentials = true;
    let res = await axios.get('https://play-bricks-backend.vercel.app/Model/getAllSTLModels')
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
    setOBJModels(modelsToString);
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
    setSTLModels(modelsToString);
    setIsSTLModelLoaded(true);
  };

  const MemoizedOBJModels = useMemo(
    () =>
      objModels.map((model, index) => (
        <OBJModelViewer key={index} meshData={model} maxWidth={maxOBJWidth} material={material} />
      )),
    [objModels, maxOBJWidth]
  );

  const MemoizedSTLModels = useMemo(
    () =>
      stlModels.map((model, index) => (
        <STLModelViewer key={index} meshData={model} maxWidth={maxSTLWidth} material={material} />
      )),
    [stlModels, maxSTLWidth]
  );

  const getModelNames = async (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
    axios.defaults.withCredentials = true;
    await axios.put('https://play-bricks-backend.vercel.app/Model/getModelNamesForSearch', { keyword: e.target.value })
    .then((res) => {
      setSearchResults(res.data);
    })
  }

  const showModel = async (name: StringIdTuple) => {
    axios.defaults.withCredentials = true;
    await axios.put('https://play-bricks-backend.vercel.app/Model/getModelByNameAndID', { name: name })
    .then((res) => {
      const meshDataString = atob(res.data.meshData);
      if(res.data.type == 'OBJ') {
        setSearchedModel({
          modelTitle: res.data.modelTitle,
          modelData: objLoader.parse(meshDataString),
          creatorUsername: res.data.creatorUsername,
          type: res.data.type,
        });
      } else {
        const model = new THREE.Mesh(stlLoader.parse(meshDataString));
        setSearchedModel({
          modelTitle: res.data.modelTitle,
          modelData: model,
          creatorUsername: res.data.creatorUsername,
          type: res.data.type,
        });
      }
    })
    searchMenuRef.current?.classList.add('hidden');
    viewedModelRef.current?.classList.add('flex');
    viewedModelRef.current?.classList.remove('hidden');
  }

  return (
    <div className='my-8 space-y-8'>
      <div ref={viewedModelRef} className='fixed hidden top-0 h-screen z-10 w-full justify-center items-center bg-black bg-opacity-20'>
        <button onClick={() => {viewedModelRef.current?.classList.remove('flex'); viewedModelRef.current?.classList.add('hidden');}} className='text-blue-950 absolute left-[29.5rem] top-20 z-10 scale-[2.5] hover:text-blue-800 transition-all duration-300'><IoClose /></button>
        {searchedModel?.type === 'OBJ' ? <OBJModelViewer style='h-[28rem]' meshData={searchedModel} material={material} /> : <STLModelViewer style='h-[28rem]' meshData={searchedModel} material={material} />}
      </div>


      <div className='ml-36 relative w-fit'>
        <div className='w-fit'>
          <input type='text' onChange={(e) => getModelNames(e)} value={inputValue} placeholder='Search for Model' className='py-2 px-4 text-blue-950 rounded-full bg-white outline-none' />
          <button className='absolute right-3 text-blue-950 scale-150 top-0 bottom-0 hover:scale-[1.65] transition-all duration-300'><BiSearchAlt /></button>
        </div>
        <div ref={searchMenuRef} className={`${inputValue == "" ? 'hidden': ''} absolute w-96 top-12 left-0 z-30 bg-white space-y-1 rounded-lg p-1 transition-all duration-300`}>
          {
            searchResults?.map((name, index) => (
              <p key={index} onClick={() => showModel(name)} className='flex items-center cursor-pointer w-full text-blue-950 hover:text-blue-900 hover:bg-gray-300 px-2 py-1 rounded-lg transition-all duration-300'>{name.modelTitle}</p>
            ))
          }
        </div>
      </div>

      <section>
        <div className='ml-32'>
          <h1 className='text-4xl'>Community&apos;s Popular OBJ Models</h1>
          <p>There is a total of {objModels.length} OBJ models!</p>
        </div>
        <div className="flex justify-center mt-8">
          <div className="grid grid-flow-row grid-cols-3 gap-20">
              {!isOBJModelLoaded && <ModelViewerSkeleton count={6} />}
              {isOBJModelLoaded && MemoizedOBJModels}
          </div>
        </div>
      </section>

      <section>
        <div className='ml-32'>
          <h1 className='text-4xl'>Community&apos;s Popular STL Models</h1>
          <p>There is a total of {stlModels.length} STL models!</p>
        </div>
        <div className="flex justify-center mt-8">
          <div className="grid grid-flow-row grid-cols-3 gap-20">
              {!isSTLModelLoaded && <ModelViewerSkeleton count={6} />}
              {isSTLModelLoaded && MemoizedSTLModels}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Page