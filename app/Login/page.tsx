'use client';
import axios, { AxiosError } from 'axios';
import Image from 'next/image';
import { type } from 'os';
import React, { useContext, useRef, useState } from 'react';
import { BiChevronLeft, BiShow, BiHide } from 'react-icons/bi';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import classNames from 'classnames';
import { useRouter } from 'next/navigation';
import { root } from 'postcss';
import Link from 'next/link';
import { error } from 'console';
import AuthContext from '../../context/AuthContext';

type Props = {}
const ErrorP = classNames(`text-red-600 text-xs font-semibold mt-1`)

const Page = (props: Props) => {
    const { setIsLoggedIn } = useContext(AuthContext);
    const [isLogin, setIsLogin] = useState<boolean>(true);

  return (
    <div id='login-page' className='relative overflow-hidden flex items-center justify-center h-screen'>
        <div className='flip-card'>
            <Link className='cursor-pointer w-[100px]' as='/' href='/'><Image className='mx-auto' priority height={100} width={100} src='/images/Logo.png' alt='Logo' /></Link>
            <div className={`flip-card-inner ${isLogin ? '': 'rotate-y-180'}`}>
                <Login setIsLoggedIn={setIsLoggedIn} setIsLogin={setIsLogin} />
                <Register setIsLoggedIn={setIsLoggedIn} setIsLogin={setIsLogin} />
            </div>
        </div>
    </div>
  )
}

type CardFaceProps = {
    setIsLogin: (value: React.SetStateAction<boolean>) => void,
    setIsLoggedIn: (value: React.SetStateAction<boolean>) => void,
}

interface LoginFormState {
    username: string;
    password: string;
};

const LoginSchema = yup.object({
    username: yup.string().required('No username provided.'),
    password: yup.string().required('No password provided.'),
}).required();

const Login = (props: CardFaceProps) => {

    let router = useRouter();
    const [hidePassword, setHidePassword] = useState<boolean>(true);
    const errorMessageRef = useRef<HTMLParagraphElement>(null);

    const { register, handleSubmit, formState: { errors } } = useForm<LoginFormState>({
        resolver: yupResolver(LoginSchema)
    });

    async function Submit(data: any, e: any) {
        e.preventDefault();
        await axios.post('https://play-bricks-backend.vercel.app/User/login', {
            username: data.username,
            password: data.password
        }, { withCredentials: true }).then((res) => {
            let DataToStore = {
              username: data.username
            }

            localStorage.setItem('UserInfo', JSON.stringify(DataToStore));
            props.setIsLoggedIn(true);
            router.push('/');

        }).catch((error: AxiosError) => {
            if(errorMessageRef.current) {
                errorMessageRef.current.innerHTML = "Incorrect username or password.";
                errorMessageRef.current.classList.remove('hidden');
            }
        })
    }

    const hideErrorMessage = () => {
        if(errorMessageRef.current) {
            errorMessageRef.current.classList.add('hidden');
            errorMessageRef.current.innerHTML = "";
        }
    }
 
    return (
        <div className='flip-card-front'>
            <div className='flex flex-col justify-center items-center mb-8'>
                <h1>Sign In to your Play Bricks Account</h1>
            </div>

            <form name='login' action="" onChange={hideErrorMessage} onSubmit={(handleSubmit(Submit))} className='flex flex-col justify-center items-center space-y-4 relative'>
                <input {...register('username')} type='username' required placeholder='Username' className='h-10 w-80 p-4 text-sm rounded-md border-2 border-white bg-transparent placeholder:text-gray-300 focus:outline-none hover:bg-white hover:bg-opacity-30 transition-all duration-300' />
                <p className={ErrorP}>{errors.username?.message}</p>
                <div className='relative'>
                    <input {...register('password')} type={hidePassword ? 'password': 'text'} required placeholder='Password' className='h-10 w-80 p-4 text-sm rounded-md border-2 border-white bg-transparent placeholder:text-gray-300 focus:outline-none hover:bg-white hover:bg-opacity-30 transition-all duration-300' />
                    <button onMouseDown={() => setHidePassword(false)} onMouseUp={() => setHidePassword(true)} className='absolute right-4 top-4'>{hidePassword ? <BiHide className='scale-125 opacity-30' />: <BiShow className='scale-125' />}</button>
                </div>
                <p className={ErrorP}>{errors.password?.message}</p>
                <div className='h-4 relative bottom-2 px-3 w-full text-xs flex justify-between items-start'>
                    <div className='flex justify-center items-center'>
                        <input className='mr-1.5' type='checkbox' />
                        Remember me
                    </div>
                    <button type='button' className='text-gray-300 hover:text-gray-400 transition-all duration-200'>Forgot password?</button>
                </div>
                <p ref={errorMessageRef} className={`${ErrorP} hidden`}></p>
                <input type='submit' value='Submit' className='w-80 cursor-pointer py-3 text-sm rounded-md bg-blue-600 hover:bg-blue-700 transition-all duration-300' />
            </form>
            <div className='text-xs mt-4'>
                Don&apos;t have an account?&nbsp;&nbsp;
                <button onClick={() => props.setIsLogin(false)} type='button' className='text-blue-600 hover:text-blue-700 underline transition-all duration-200'>Sign up now</button>
            </div>
        </div>
    )
}

interface RegisterFormState {
    username: string;
    email: string;
    password: string;
};

const RegisterSchema = yup.object({
    username: yup.string().min(6).max(30).required(),
    email: yup.string().email().required(),
    password: yup.string()
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})/,
        "Must Contain 8 Characters, One Uppercase, One Lowercase and One Number "
      ).required('No password provided.'),
//   terms: yup.boolean().oneOf([true], 'Please accept terms and conditions'),
}).required();

const Register = (props: CardFaceProps) => {

    let router = useRouter();
    const [hidePassword, setHidePassword] = useState<boolean>(true);
    const errorMessageRef = useRef<HTMLParagraphElement>(null);

    const { register, handleSubmit, formState: { errors } } = useForm<RegisterFormState>({
        resolver: yupResolver(RegisterSchema)
    });

    async function Submit(data: any, e: any) {
        e.preventDefault();
        axios.defaults.withCredentials = true;
        await axios.post('https://play-bricks-backend.vercel.app/User/register', {
            username: data.username,
            email: data.email,
            password: data.password,
        }).then((res) => {
            let DataToStore = {
                username: data.username
            }
            localStorage.setItem('UserInfo', JSON.stringify(DataToStore));
            props.setIsLoggedIn(true);
            router.push('/');
        }).catch((error: AxiosError) => {
            if(errorMessageRef.current) {
                errorMessageRef.current.innerHTML = error.response?.data as string;
                errorMessageRef.current.classList.remove('hidden');
            }
        })
    }

    const hideErrorMessage = () => {
        if(errorMessageRef.current) {
            errorMessageRef.current.classList.add('hidden');
            errorMessageRef.current.innerHTML = "";
        }
    }

    return (
        <div className='flip-card-back'>
            <div className='flex flex-col justify-center items-center mb-8 relative'>
                <h1>Create Play Bricks Account</h1>
                <button  type='button' onClick={() => props.setIsLogin(true)} className='bg-white px-4 rounded-full font-bold text-sm py-1 flex items-center absolute left-2 -top-12 text-blue-950 hover:shadow-xl hover:scale-110 transition-all duration-300'><BiChevronLeft className='absolute left-1 scale-150' />Back</button>
            </div>

            <form name='register' onChange={hideErrorMessage} onSubmit={(handleSubmit(Submit))} action="" className='flex flex-col justify-center items-center space-y-4 relative'>
                <input {...register('username')} type='username' placeholder='Username' className='h-10 w-80 p-4 text-sm rounded-md border-2 border-white bg-transparent placeholder:text-gray-300 focus:outline-none hover:bg-white hover:bg-opacity-30 transition-all duration-300' />
                <p className={ErrorP}>{errors.username?.message}</p>
                <input {...register('email')} type='email' placeholder='E-mail' className='h-10 w-80 p-4 text-sm rounded-md border-2 border-white bg-transparent placeholder:text-gray-300 focus:outline-none hover:bg-white hover:bg-opacity-30 transition-all duration-300' />
                <p className={ErrorP}>{errors.email?.message}</p>
                <div className='relative'>
                    <input {...register('password')} type={hidePassword ? 'password': 'text'} required placeholder='Password' className='h-10 w-80 p-4 text-sm rounded-md border-2 border-white bg-transparent placeholder:text-gray-300 focus:outline-none hover:bg-white hover:bg-opacity-30 transition-all duration-300' />
                    <button type='button' onMouseDown={() => setHidePassword(false)} onMouseUp={() => setHidePassword(true)} className='absolute right-4 top-4'>{hidePassword ? <BiHide className='scale-125 opacity-30' />: <BiShow className='scale-125' />}</button>
                </div>
                <p className={ErrorP}>{errors.password?.message}</p>
                <div className='h-4 relative bottom-2 left-4 w-full text-xs flex justify-between items-start'>
                    <div className='flex justify-center items-center'>
                        <input className='mr-1.5' type='checkbox' />
                        Remember me
                    </div>
                </div>
                <p ref={errorMessageRef} className={`${ErrorP} hidden`}></p>
                <input type='submit' value='Create Account' className='w-80 py-3 cursor-pointer text-sm rounded-md bg-blue-600 hover:bg-blue-700 transition-all duration-300' />
            </form>
        </div>
    )
}

export default Page