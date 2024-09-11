'use client';
import Image from 'next/image'
import React from 'react'
import { Tooltip } from 'react-tooltip'

type Props = {}

const page = (props: Props) => {
  
  return (
    <div className='relative flex flex-col justify-around items-center py-8 mb-8'>

      <div className='mx-auto text-center'>
        <h1 className='text-6xl'>Game Controls</h1>
        <div className='text-sm px-32 mt-4'>The toolbelt is a powerful feature that provides easy access to your most frequently used blocks in the game. It consists of seven slots located at the bottom of the window, allowing you to drag and drop blocks for quick and convenient access during gameplay.

            To customize your toolbelt, simply click and drag your desired blocks from the bricks menu onto the slots. This way, you can arrange the blocks according to your preference, ensuring that the most essential ones are readily available at your fingertips.
            <p className='font-bold italic text-lg mt-4 mb-8'>Toolbelt Image</p>
            <Image height={300} width={300} className='mx-auto scale-[2] mb-8' src='/images/Toolbelt (Divided).png' alt='Toolbelt Image' />
            
            But that&apos;s not all! We understand that sometimes you may want to select a block without the need to drag it. In such cases, you can simply click on the block from the bricks menu, and it will be automatically selected and ready for use in your game. This provides flexibility and convenience, allowing you to choose blocks swiftly when the situation demands it.

            With the toolbelt&apos;s intuitive drag-and-drop functionality and the ability to select blocks directly from the bricks menu, you have the freedom to create and experiment with ease. Take control of your gameplay experience and unleash your creativity!
        </div>
        <h1 className='font-bold text-4xl mt-4'>Key Bindings</h1>
        <p className='italic'>Hover over any button to show what it does.</p>
      </div>

      <div className='flex justify-around items-center space-x-10'>
        <div className='space-y-4 -mt-14'>
          <div className='flex items-center justify-start space-x-4'>
            <div id='Q' className='hover:bg-white hover:bg-opacity-30 transition-all duration-300 rounded-md -skew-x-[15deg] before:content-[""] before:absolute before:top-0 before:bottom-0 before:left-0 before:right-0 before:rounded-md before:border-2 before:border-white w-32 h-32 text-5xl relative p-11'>Q</div>
            <Tooltip style={{color: 'rgb(23 37 84 / 1)', backgroundColor: 'white', opacity: 1}} anchorSelect="#Q" place="top">
              Move Up
            </Tooltip>
            <div id='W' className='hover:bg-white hover:bg-opacity-30 transition-all duration-300 rounded-md -skew-x-[15deg] before:content-[""] before:absolute before:top-0 before:bottom-0 before:left-0 before:right-0 before:rounded-md before:border-2 before:border-white w-32 h-32 text-5xl relative p-11'>W</div>
            <Tooltip style={{color: 'rgb(23 37 84 / 1)', backgroundColor: 'white', opacity: 1}} anchorSelect="#W" place="top">
              Move Forward
            </Tooltip>
            <div id='E' className='hover:bg-white hover:bg-opacity-30 transition-all duration-300 rounded-md -skew-x-[15deg] before:content-[""] before:absolute before:top-0 before:bottom-0 before:left-0 before:right-0 before:rounded-md before:border-2 before:border-white w-32 h-32 text-5xl relative p-11'>E</div>
            <Tooltip style={{color: 'rgb(23 37 84 / 1)', backgroundColor: 'white', opacity: 1}} anchorSelect="#E" place="top">
              Move Down
            </Tooltip>
            <div id='R' className='hover:bg-white hover:bg-opacity-30 transition-all duration-300 rounded-md -skew-x-[15deg] before:content-[""] before:absolute before:top-0 before:bottom-0 before:left-0 before:right-0 before:rounded-md before:border-2 before:border-white w-32 h-32 text-5xl relative p-11'>R</div>
            <Tooltip style={{color: 'rgb(23 37 84 / 1)', backgroundColor: 'white', opacity: 1}} anchorSelect="#R" place="top">
              Rotate the block before placing it.
              <br />
              (Effect appears on the preview block)
            </Tooltip>
            <div id='DELETE' className='hover:bg-white hover:bg-opacity-30 transition-all duration-300 rounded-md -skew-x-[15deg] before:content-[""] before:absolute before:top-0 before:bottom-0 before:left-0 before:right-0 before:rounded-md before:border-2 before:border-white w-56 h-32 text-5xl relative px-3 py-10 left-6'>DELETE</div>
            <Tooltip style={{color: 'rgb(23 37 84 / 1)', backgroundColor: 'white', opacity: 1}} anchorSelect="#DELETE" place="top">
              Delete the highlighted block
            </Tooltip>
          </div>
          <div className='flex items-center justify-start space-x-4'>
            <div id='A' className='hover:bg-white hover:bg-opacity-30 transition-all duration-300 rounded-md -skew-x-[15deg] before:content-[""] before:absolute before:top-0 before:bottom-0 before:left-0 before:right-0 before:rounded-md before:border-2 before:border-white w-32 h-32 text-5xl relative p-11'>A</div>
            <Tooltip style={{color: 'rgb(23 37 84 / 1)', backgroundColor: 'white', opacity: 1}} anchorSelect="#A" place="top">
              Move Left
            </Tooltip>
            <div id='S' className='hover:bg-white hover:bg-opacity-30 transition-all duration-300 rounded-md -skew-x-[15deg] before:content-[""] before:absolute before:top-0 before:bottom-0 before:left-0 before:right-0 before:rounded-md before:border-2 before:border-white w-32 h-32 text-5xl relative p-11'>S</div>
            <Tooltip style={{color: 'rgb(23 37 84 / 1)', backgroundColor: 'white', opacity: 1}} anchorSelect="#S" place="top">
              Move Backward
            </Tooltip>
            <div id='D' className='hover:bg-white hover:bg-opacity-30 transition-all duration-300 rounded-md -skew-x-[15deg] before:content-[""] before:absolute before:top-0 before:bottom-0 before:left-0 before:right-0 before:rounded-md before:border-2 before:border-white w-32 h-32 text-5xl relative p-11'>D</div>
            <Tooltip style={{color: 'rgb(23 37 84 / 1)', backgroundColor: 'white', opacity: 1}} anchorSelect="#D" place="top">
              Move Right
            </Tooltip>
          </div>
        </div>

        <div className='flex flex-col items-center justify-center scale-[0.85]'>
          <div className='flex items-center justify-center relative w-fit space-x-1'>
            <svg id='left-click' className='fill-transparent hover:fill-[rgba(255,_255,_255,_0.3)] transition-all duration-300 -scale-x-100' width="147" height="165" viewBox="0 0 147 165" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M140.868 164H39.6138C36.8083 164 34.5527 161.691 34.6137 158.886C35.7075 108.613 35.3782 77.2666 7.03864 79.1732C3.893 79.3848 1 77.0613 1 73.9085V6C1 3.23858 3.23858 1 6 1H109.423C111.797 1 113.843 2.66859 114.321 4.99344L145.766 157.993C146.403 161.095 144.034 164 140.868 164Z" stroke="white" strokeWidth="2.5"/>
            </svg>
            <Tooltip style={{color: 'rgb(23 37 84 / 1)', backgroundColor: 'white', opacity: 1}} anchorSelect="#left-click" place="top">
              Place a block
            </Tooltip>

            <div id='scroll-wheel' className='absolute left-[7.35rem] top-[5.25rem] w-14 h-[5.25rem] rounded-full border-2 border-white hover:bg-white hover:bg-opacity-30 transition-all duration-300' />
            <Tooltip style={{color: 'rgb(23 37 84 / 1)', backgroundColor: 'white', opacity: 1}} anchorSelect="#scroll-wheel" place="top">
              Move Up/Down (Alternative for Q/E keys)
            </Tooltip>

            <svg id='right-click' className='fill-transparent hover:fill-[rgba(255,_255,_255,_0.3)] transition-all duration-300 ' width="147" height="165" viewBox="0 0 147 165" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M140.868 164H39.6138C36.8083 164 34.5527 161.691 34.6137 158.886C35.7075 108.613 35.3782 77.2666 7.03864 79.1732C3.893 79.3848 1 77.0613 1 73.9085V6C1 3.23858 3.23858 1 6 1H109.423C111.797 1 113.843 2.66859 114.321 4.99344L145.766 157.993C146.403 161.095 144.034 164 140.868 164Z" stroke="white" strokeWidth="2.5"/>
            </svg>
            <Tooltip style={{color: 'rgb(23 37 84 / 1)', backgroundColor: 'white', opacity: 1}} anchorSelect="#right-click" place='top'>
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