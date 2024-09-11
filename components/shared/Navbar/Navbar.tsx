'use client';
import classNames from 'classnames';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import React, { Dispatch, SetStateAction, useContext, useEffect, useRef, useState } from 'react';
import { GiCubes } from 'react-icons/gi';
import { FaUserCircle } from 'react-icons/fa';
import { MdOutlineLogout } from 'react-icons/md'
import axios from 'axios';
import AuthContext from '../../../context/AuthContext';
import ToggleButton from '../ToggleButton/ToggleButton';

type Props = {}

const Navbar = (props: Props) => {

  const pathname = usePathname();
  const { isLoggedIn, setIsLoggedIn } = useContext(AuthContext);
  const underlineRef = useRef<any>();
  const navigationRef = useRef<any>();
  const [username, setUsername] = useState<String | undefined>(undefined);
  const [isClicked, setIsClicked] = useState<boolean>(false);

  useEffect(() => {
    if (navigationRef.current) {
      window.location.pathname === '/Login' ? navigationRef.current.classList.add('hidden') : navigationRef.current.classList.remove('hidden');
    }
    let LocalStorage = localStorage.getItem('UserInfo') ? localStorage.getItem('UserInfo') : 'Guest';

    let CurrentUsername = LocalStorage === 'Guest' ? LocalStorage : JSON.parse(LocalStorage as string).username;
    setUsername(CurrentUsername);
  }, [pathname]);

  const setUnderline = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
      underlineRef.current.classList.remove('opacity-0');
      underlineRef.current.classList.add('opacity-100');
      underlineRef.current.style.width = (e.currentTarget.offsetWidth + 18) + 'px';
      underlineRef.current.style.right = (navigationRef.current.getBoundingClientRect().right - e.currentTarget.getBoundingClientRect().right - 10) + 'px';
  }

  const hideUnderline = () => {
    underlineRef.current.classList.add('opacity-0');
    underlineRef.current.classList.remove('opacity-100');
    underlineRef.current.style.right = '0px';
  }

  return (
    <nav ref={navigationRef} className={`flex justify-between min-h-[5rem] items-center mr-10 ml-8 988:mx-0 988:pt-4 relative z-50 988:sticky 988:top-0 988:flex-col 988:items-start 988:bg-[#041833] transition-all duration-300`}>
      <div className='988:flex 988:justify-between 988:items-center 988:w-full'>
        <Link as='/' href='/' placeholder='Homepage'>
            <div className='flex justify-center items-center space-x-5 whitespace-nowrap pl-8'>
                <GiCubes className='scale-[2.5]' />
                <h1 className='uppercase text-3xl font-["Boatman_Regular"] whitespace-nowrap'>Play Bricks</h1>
            </div>
        </Link>
        <ToggleButton isClicked={isClicked} setIsClicked={setIsClicked} />
      </div>
      {/* <Image className='pt-2.5' height={90} width={90} src='/images/Logo.png' alt='Logo' /> */}
      <div onMouseLeave={hideUnderline} className={`${ isClicked ? '988:h-screen 988:p-6': '988:h-0'} 988:space-y-4 988:space-y-reverse 988:top-6 988:overflow-hidden transition-all duration-200 flex 988:justify-end justify-center items-center space-x-7 988:space-x-0 h-fit relative 988:flex-col-reverse 988:bg-[#041833] 988:w-full`}>
          <Link onMouseOver={(e) => setUnderline(e)} id='Navbar-AboutUs-link' as='/AboutUs' href='/AboutUs'>About Us</Link>
          <Link onMouseOver={(e) => setUnderline(e)} id='Navbar-Community-link' as='/Community' href='/Community'>Community</Link>
          <Link onMouseOver={(e) => setUnderline(e)} id='Navbar-GameControls-link' as='/GameControls' href='/GameControls'>Game Controls</Link>
          <Link onMouseOver={(e) => setUnderline(e)} id='Navbar-Game-link' as='/Game' href='/Game'>Let&apos;s Play</Link>
          {
            isLoggedIn ? <LoggedInData setIsLoggedIn={setIsLoggedIn} username={username} />: <Link onMouseOver={(e) => setUnderline(e)} className='text-blue-950 988:text-white relative pl-2 pr-2 988:px-0 hover:scale-110 transition-all duration-300' id='Navbar-GameControls-link' as='/Login' href='/Login'>Log In/Register<Image className='absolute -top-[0.55rem] left-0 h-11 max-h-[2.75rem] w-full -z-[1] 988:hidden' height={100} width={100} src='/images/Lego Brick Fill.png' alt='Lego Brick' /></Link>
          }
          <Image ref={underlineRef} className='absolute right-0 h-11 max-h-[2.75rem] w-auto opacity-0 -z-[1] transition-all duration-300 988:hidden' height={100} width={100} src='/images/Lego Brick.png' alt='Lego Brick' />
      </div>
    </nav>
  )
}

type LoggedInProps = {
  username: String | undefined,
  setIsLoggedIn: Dispatch<SetStateAction<boolean>>,
}

const LoggedInData = (props: LoggedInProps) => {

  const [isOptionsOpen, setIsOptionsOpen] = useState<boolean>();
  const menuRef = useRef<HTMLDivElement>(null);

  async function logout() {
    axios.defaults.withCredentials = true;
    await axios.get('https://play-bricks-backend.vercel.app/User/logout').then((response) => {
      console.log(response.data);
    });
    props.setIsLoggedIn(false);
    localStorage.clear();
  }

  const close = (e: any) => {
    if (menuRef.current && !menuRef.current?.contains(e.target)) {
      setIsOptionsOpen(false);
    }
  }

  useEffect(() => {
    document.addEventListener("mouseup", close);
  }, [])

  return (
    <div className='relative'>
      <FaUserCircle onClick={() => setIsOptionsOpen(!isOptionsOpen)} className='scale-150 cursor-pointer' />
      <div ref={menuRef} className={`${isOptionsOpen ? "": "hidden"} absolute w-52 right-0 top-7 bg-white space-y-1 rounded-md p-1 transition-all duration-300`}>
        <h1 className='font-bold text-2xl ml-2 text-blue-950'>{props.username}</h1>
        <hr className='my-1' />
        <Link as='/User' href='/User' onClick={() => setIsOptionsOpen(false)} className='flex items-center w-full text-blue-950 hover:text-blue-900 hover:bg-gray-300 px-2 py-1 rounded-lg transition-all duration-300'><FaUserCircle className='relative top-0.5 mr-5' /><span className='mx-auto'>My Models</span></Link>
        <Link as='/Login' href='/Login' onClick={logout} className='flex items-center w-full text-red-700 hover:text-red-600 hover:bg-gray-300 px-2 py-1 rounded-lg transition-all duration-300'><MdOutlineLogout className='relative top-0.5 mr-5' /><span className='mx-auto'>Log out</span></Link>
      </div>
    </div>
  )
}

const navLink = classNames("pt-px h-fit my-2 rounded-full border-black w-fit mr-6 whitespace-nowrap z-10 relative block transition-all duration-300 after:content-[''] after:absolute after:-bottom-px after:left-0 after:w-full after:h-0.5 after:bg-white after:transition-all after:duration-500 hover:after:opacity-100 after:opacity-100 after:scale-0 after:origin-center hover:after:scale-100 items-center justify-center block");

export default Navbar