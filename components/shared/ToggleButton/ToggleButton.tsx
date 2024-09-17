import React from 'react'

type Props = {
  isOpen: boolean,
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>,
}

const ToggleButton = (props: Props) => {

  return (
    <button className='group mx-4 transition-all duration-200 ease-linear h-[3.25rem] 988:block hidden' onClick={()=> props.setIsOpen(!props.isOpen)} >
        <hr className={` ${ !props.isOpen ? '': 'group-hover:top-[13.5px] rotate-45 top-2.5' } mx-auto relative opacity-100 bg-white my-[0.4375rem] w-[3.125rem] h-0.5 transition-all ease-linear duration-200 block rounded-[0.625rem]`} />
        <hr className={` ${ !props.isOpen ? 'group-hover:right-0 group-hover:w-[35px]': 'group-hover:top-[4.5px] w-[50px] -rotate-45 top-2' } mx-auto relative opacity-100 bg-white my-[0.4375rem]  h-0.5 transition-all ease-linear duration-200 block rounded-[0.625rem]`} />
        <hr className={` ${ !props.isOpen ? 'w-[3.125rem] group-hover:w-[20px]': 'w-[50px] hidden' } mx-auto opacity-100 bg-white my-[0.4375rem] h-0.5 transition-all ease-linear duration-100 block rounded-[0.625rem]`} />
        <hr className={` ${ !props.isOpen ? 'group-hover:w-[35px]': 'group-hover:bottom-[4.5px] w-[50px] -rotate-45 bottom-2' } mx-auto relative opacity-100 bg-white my-[0.4375rem] h-0.5 transition-all ease-linear duration-200 block rounded-[0.625rem]`} />
        <hr className={` ${ !props.isOpen ? '': 'group-hover:bottom-[13.5px] rotate-45 bottom-2.5' } mx-auto relative opacity-100 bg-white my-[0.4375rem] w-[3.125rem] h-0.5 transition-all ease-linear duration-200 block rounded-[0.625rem]`} />
    </button>
  )
}

export default ToggleButton