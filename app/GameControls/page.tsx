'use client';
import Image from 'next/image'
import React from 'react'
import { Tooltip } from 'react-tooltip'

type Props = {}

const page = (props: Props) => {
  
  return (
    <div className='relative flex flex-col justify-around items-center py-8 mb-8'>

      <div className='mx-auto text-center'>
        <h1 className='text-6xl 580:text-4xl'>Game Controls</h1>
        <div className='text-sm px-32 636:px-12 434:!px-8 mt-4'>The toolbelt is a powerful feature that provides easy access to your most frequently used blocks in the game. It consists of seven slots located at the bottom of the window, allowing you to drag and drop blocks for quick and convenient access during gameplay.

            To customize your toolbelt, simply click and drag your desired blocks from the bricks menu onto the slots. This way, you can arrange the blocks according to your preference, ensuring that the most essential ones are readily available at your fingertips.
            <p className='font-bold italic text-lg mt-4 mb-8'>Toolbelt Image</p>
            <Image height={300} width={300} className='mx-auto scale-[2] 636:scale-100 mb-8' src='/images/Toolbelt (Divided).png' alt='Toolbelt Image' />
            
            But that&apos;s not all! We understand that sometimes you may want to select a block without the need to drag it. In such cases, you can simply click on the block from the bricks menu, and it will be automatically selected and ready for use in your game. This provides flexibility and convenience, allowing you to choose blocks swiftly when the situation demands it.

            With the toolbelt&apos;s intuitive drag-and-drop functionality and the ability to select blocks directly from the bricks menu, you have the freedom to create and experiment with ease. Take control of your gameplay experience and unleash your creativity!
        </div>
        <h1 className='font-bold text-4xl 580:text-3xl mt-4'>Key Bindings</h1>
        <p className='italic 636:hidden'>Hover over any button to show what it does.</p>
        <p className='italic hidden 636:block mx-6 text-sm mt-3'>Hover over mouse buttons to show what they do.</p>
      </div>

      <div className='flex justify-around items-center space-x-10 988:space-x-0 988:flex-col-reverse'>
        <div className='grid grid-rows-2 grid-cols-5 636:flex px-10 636:px-8 gap-y-4 relative 636:flex-col w-full'>
          <div className='636:order-5 flex items-center 636:justify-between 512:space-x-8'>
            <h1 className='636:block hidden'>Move Up</h1>
            <div id='Q' className='flex items-center justify-center hover:bg-white hover:bg-opacity-30 transition-all duration-300 rounded-md -skew-x-[15deg] before:content-[""] before:absolute before:top-0 before:bottom-0 before:left-0 before:right-0 before:rounded-md before:border-2 before:border-white w-32 1130:w-24 704:!w-16 704:!h-16 434:!w-12 434:!h-12 1130:text-4xl 704:!text-2xl h-32 text-5xl relative p-11 636:flex 636:items-center 636:space-x-4 434:space-x-0'>Q</div>
            <Tooltip className='636:hidden' opacity={1} style={{ color: 'rgb(23 37 84 / 1)', backgroundColor: 'white' }} anchorSelect="#Q" place="top">
              Move Up
            </Tooltip>
          </div>
          <div className='636:order-1 flex items-center 636:justify-between 512:space-x-8'>
            <h1 className='636:block hidden'>Move Forward</h1>
            <div id='W' className='flex items-center justify-center hover:bg-white hover:bg-opacity-30 transition-all duration-300 rounded-md -skew-x-[15deg] before:content-[""] before:absolute before:top-0 before:bottom-0 before:left-0 before:right-0 before:rounded-md before:border-2 before:border-white w-32 1130:w-24 704:!w-16 704:!h-16 434:!w-12 434:!h-12 1130:text-4xl 704:!text-2xl h-32 text-5xl relative p-11 636:flex 636:items-center 636:space-x-4 434:space-x-0'>W</div>
            <Tooltip className='636:hidden' opacity={1} style={{ color: 'rgb(23 37 84 / 1)', backgroundColor: 'white' }} anchorSelect="#W" place="top">
              Move Forward
            </Tooltip>
          </div>
          <div className='636:order-6 flex items-center 636:justify-between 512:space-x-8'>
            <h1 className='636:block hidden'>Move Up</h1>
            <div id='E' className='flex items-center justify-center hover:bg-white hover:bg-opacity-30 transition-all duration-300 rounded-md -skew-x-[15deg] before:content-[""] before:absolute before:top-0 before:bottom-0 before:left-0 before:right-0 before:rounded-md before:border-2 before:border-white w-32 1130:w-24 704:!w-16 704:!h-16 434:!w-12 434:!h-12 1130:text-4xl 704:!text-2xl h-32 text-5xl relative p-11 636:flex 636:items-center 636:space-x-4 434:space-x-0'>E</div>
            <Tooltip className='636:hidden' opacity={1} style={{ color: 'rgb(23 37 84 / 1)', backgroundColor: 'white' }} anchorSelect="#E" place="top">
              Move Down
            </Tooltip>
          </div>
          <div className='636:order-7 flex items-center 636:justify-between 512:space-x-8'>
            <div className='636:block hidden'>Rotate the block before placing
            <br />
            <span className='434:hidden'>(Effect appears on the preview block)</span></div>
            <div id='R' className='flex items-center justify-center hover:bg-white hover:bg-opacity-30 transition-all duration-300 rounded-md -skew-x-[15deg] before:content-[""] before:absolute before:top-0 before:bottom-0 before:left-0 before:right-0 before:rounded-md before:border-2 before:border-white w-32 1130:w-24 704:!w-16 704:!h-16 434:!w-12 434:!h-12 1130:text-4xl 704:!text-2xl h-32 text-5xl relative p-11 636:flex 636:items-center 636:space-x-4 434:space-x-0'>R</div>
            <Tooltip className='636:hidden' opacity={1} style={{ color: 'rgb(23 37 84 / 1)', backgroundColor: 'white' }} anchorSelect="#R" place="top">
              Rotate the block before placing
              <br />
              (Effect appears on the preview block)
            </Tooltip>
          </div>
          <div className='636:order-8 flex items-center 636:justify-between 512:space-x-8 988:relative 988:right-8 636:!right-0'>
            <h1 className='636:block hidden'>Delete the highlighted block</h1>
            <div id='DELETE' className='flex items-center justify-center hover:bg-white hover:bg-opacity-30 transition-all duration-300 rounded-md -skew-x-[15deg] before:content-[""] before:absolute before:top-0 before:bottom-0 before:left-0 before:right-0 before:rounded-md before:border-2 before:border-white w-56 1130:w-40 704:!w-28 704:!h-16 1130:text-4xl 704:!text-2xl h-32 text-5xl relative px-3 py-11 left-6 636:left-0 636:flex 636:items-center 636:space-x-4 434:space-x-0'>DEL<span className='988:hidden'>ETE</span></div>
            <Tooltip className='636:hidden' opacity={1} style={{ color: 'rgb(23 37 84 / 1)', backgroundColor: 'white' }} anchorSelect="#DELETE" place="top">
              Delete the highlighted block
            </Tooltip>
          </div>
          <div className='636:order-2 flex items-center 636:justify-between 512:space-x-8'>
            <h1 className='636:block hidden'>Move Left</h1>
            <div id='A' className='flex items-center justify-center hover:bg-white hover:bg-opacity-30 transition-all duration-300 rounded-md -skew-x-[15deg] before:content-[""] before:absolute before:top-0 before:bottom-0 before:left-0 before:right-0 before:rounded-md before:border-2 before:border-white w-32 1130:w-24 704:!w-16 704:!h-16 434:!w-12 434:!h-12 1130:text-4xl 704:!text-2xl h-32 text-5xl relative p-11 636:flex 636:items-center 636:space-x-4 434:space-x-0'>A</div>
            <Tooltip className='636:hidden' opacity={1} style={{ color: 'rgb(23 37 84 / 1)', backgroundColor: 'white' }} anchorSelect="#A" place="top">
              Move Left
            </Tooltip>
          </div>
          <div className='636:order-3 flex items-center 636:justify-between 512:space-x-8'>
            <h1 className='636:block hidden'>Move Backward</h1>
            <div id='S' className='flex items-center justify-center hover:bg-white hover:bg-opacity-30 transition-all duration-300 rounded-md -skew-x-[15deg] before:content-[""] before:absolute before:top-0 before:bottom-0 before:left-0 before:right-0 before:rounded-md before:border-2 before:border-white w-32 1130:w-24 704:!w-16 704:!h-16 434:!w-12 434:!h-12 1130:text-4xl 704:!text-2xl h-32 text-5xl relative p-11 636:flex 636:items-center 636:space-x-4 434:space-x-0'>S</div>
            <Tooltip className='636:hidden' opacity={1} style={{ color: 'rgb(23 37 84 / 1)', backgroundColor: 'white' }} anchorSelect="#S" place="top">
              Move Backward
            </Tooltip>
          </div>
          <div className='636:order-4 flex items-center 636:justify-between 512:space-x-8'>
            <h1 className='636:block hidden'>Move Right</h1>
            <div id='D' className='flex items-center justify-center hover:bg-white hover:bg-opacity-30 transition-all duration-300 rounded-md -skew-x-[15deg] before:content-[""] before:absolute before:top-0 before:bottom-0 before:left-0 before:right-0 before:rounded-md before:border-2 before:border-white w-32 1130:w-24 704:!w-16 704:!h-16 434:!w-12 434:!h-12 1130:text-4xl 704:!text-2xl h-32 text-5xl relative p-11 636:flex 636:items-center 636:space-x-4 434:space-x-0'>D</div>
            <Tooltip className='636:hidden' opacity={1} style={{ color: 'rgb(23 37 84 / 1)', backgroundColor: 'white' }} anchorSelect="#D" place="top">
              Move Right
            </Tooltip>
          </div>
        </div>

        <div className='flex flex-col items-center justify-center scale-[0.85] relative 1130:left-10 988:!left-0 1130:-top-4 1130:scale-[0.75]'>
          <div className='flex items-center justify-center relative w-fit space-x-1'>
            <svg id='left-click' className='fill-transparent hover:fill-[rgba(255,_255,_255,_0.3)] transition-all duration-300 -scale-x-100' width="147" height="165" viewBox="0 0 147 165" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M140.868 164H39.6138C36.8083 164 34.5527 161.691 34.6137 158.886C35.7075 108.613 35.3782 77.2666 7.03864 79.1732C3.893 79.3848 1 77.0613 1 73.9085V6C1 3.23858 3.23858 1 6 1H109.423C111.797 1 113.843 2.66859 114.321 4.99344L145.766 157.993C146.403 161.095 144.034 164 140.868 164Z" stroke="white" strokeWidth="2.5"/>
            </svg>
            <Tooltip opacity={1} style={{ color: 'rgb(23 37 84 / 1)', backgroundColor: 'white' }} anchorSelect="#left-click" place="top">
              Place a block
            </Tooltip>

            <div id='scroll-wheel' className='absolute left-[7.35rem] top-[5.25rem] w-14 h-[5.25rem] rounded-full border-2 border-white flex items-center justify-center hover:bg-white hover:bg-opacity-30 transition-all duration-300' />
            <Tooltip opacity={1} style={{ color: 'rgb(23 37 84 / 1)', backgroundColor: 'white' }} anchorSelect="#scroll-wheel" place="top">
              Move Up/Down (Alternative for Q/E keys)
            </Tooltip>

            <svg id='right-click' className='fill-transparent hover:fill-[rgba(255,_255,_255,_0.3)] transition-all duration-300 ' width="147" height="165" viewBox="0 0 147 165" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M140.868 164H39.6138C36.8083 164 34.5527 161.691 34.6137 158.886C35.7075 108.613 35.3782 77.2666 7.03864 79.1732C3.893 79.3848 1 77.0613 1 73.9085V6C1 3.23858 3.23858 1 6 1H109.423C111.797 1 113.843 2.66859 114.321 4.99344L145.766 157.993C146.403 161.095 144.034 164 140.868 164Z" stroke="white" strokeWidth="2.5"/>
            </svg>
            <Tooltip opacity={1} style={{ color: 'rgb(23 37 84 / 1)', backgroundColor: 'white' }} anchorSelect="#right-click" place='top'>
              Hold and move the mouse to rotate around the scene.
            </Tooltip>
          </div>
          <svg id='' className='scale-[1.425] mt-11' width="209" height="174" viewBox="0 0 209 174" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M202.171 1H6.06798C2.76448 1 0.368999 4.14669 1.24838 7.33099L45.9868 169.331C46.5854 171.499 48.5575 173 50.8063 173H150.839C153.019 173 154.947 171.588 155.606 169.51L206.937 7.51031C207.959 4.28675 205.552 1 202.171 1Z" stroke="white" strokeWidth="2"/>
          </svg>
        </div>
      </div>

    </div>
  )
}

export default page