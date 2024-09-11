import React from 'react'
import Skeleton from 'react-loading-skeleton'

type Props = {
    count: number,
}

const ModelViewerSkeleton = (props: Props) => {
  return (
    <>
        {
            Array.from({ length: props.count }, (_, index) => (
                <div key={index} className='rounded-md bg-white px-3 h-56 text-center relative bottom-0 hover:bottom-2 hover:shadow-lg transition-all duration-300'>
                <div className='mt-2.5 mb-3.5 rounded-lg'>
                <Skeleton height={120} width={150} />
                </div>
                <div className='flex flex-col items-center justify-center space-y-0.5'>
                <Skeleton height={20} width={150} />
                <Skeleton height={20} width={150} />
                </div>
            </div>
            ))
        }
    </>
  )
}

export default ModelViewerSkeleton