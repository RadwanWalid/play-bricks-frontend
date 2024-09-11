'use client';
import classNames from 'classnames';
import Link from 'next/link';
import React, { useEffect, useRef } from 'react';
import Container, { ContainerProps } from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { FiFacebook, FiInstagram, FiLinkedin, FiTwitter } from 'react-icons/fi';
import { BsPrefixRefForwardingComponent } from 'react-bootstrap/esm/helpers';
import { usePathname } from 'next/navigation';

type Props = {}

const Footer = (props: Props) => {

    const footerRef = useRef<any>();
    const pathname = usePathname();

    useEffect(() => {
      if (footerRef.current) {
        window.location.pathname === '/Login' ? footerRef.current.classList.add('hidden') : footerRef.current.classList.remove('hidden');
      }
    }, [pathname]);

  return (
    <Container ref={footerRef} fluid className='p-4 bg-[#041833]'>
        <Row>
            <Col md={3}>
                <h4 className={colHeader}><div className={colHeaderText}>Website</div></h4>
                <ul className={colData}>
                    <li className={colItems}><Link as='/' href='/'>About Us</Link></li>
                    <li className={colItems}><Link as='/' href='/'>Our Services</Link></li>
                    <li className={colItems}><Link as='/' href='/'>Privacy Policy</Link></li>
                    <li className={colItems}><Link as='/' href='/'>Affiliate Program</Link></li>
                </ul>
            </Col>
            <Col md={3}>
                <h4 className={colHeader}><div className={colHeaderText}>Get Help</div></h4>
                <ul className={colData}>
                    <li className={colItems}><Link as='/' href='/'>FAQ</Link></li>
                    <li className={colItems}><Link as='/' href='/'>Shopping</Link></li>
                    <li className={colItems}><Link as='/' href='/'>Returns</Link></li>
                    <li className={colItems}><Link as='/' href='/'>Order Status</Link></li>
                    <li className={colItems}><Link as='/' href='/'>Payment Options</Link></li>
                </ul>
            </Col>
            <Col md={3}>
                <h4 className={colHeader}><div className={colHeaderText}>Online Shop</div></h4>
                <ul className={colData}>
                    <li className={colItems}><Link as='/' href='/'>Web Applications</Link></li>
                    <li className={colItems}><Link as='/' href='/'>Mobile Applications</Link></li>
                    <li className={colItems}><Link as='/' href='/'>Desktop Applications</Link></li>
                    <li className={colItems}><Link as='/' href='/'>Other</Link></li>
                </ul>
            </Col>
            <Col md={3}>
                <h4 className={colHeader}><div className={colHeaderText}>Follow Us</div></h4>
                <ul className={`${colData} flex flex-wrap`}>
                    <li><button className={colIcons}><FiFacebook /></button></li>
                    <li><button className={colIcons}><FiTwitter /></button></li>
                    <li><button className={colIcons}><FiInstagram /></button></li>
                    <li><button className={colIcons}><FiLinkedin /></button></li>
                </ul>
            </Col>
        </Row>
    </Container>
  )
}

const footerCol = classNames(`col-6 col-md-3 p-4`);
const colHeader = classNames(`w-fit relative right-3 border-b-[3px] border-[#7EEBFF] px-1 pb-1 skew-x-[40deg]`);
const colHeaderText = classNames(`-skew-x-[40deg] ml-2`);
const colData = classNames(`text-left mt-3 ml-1`);
const colItems = classNames(`text-sm hover:text-[#7EEBFF] py-1.5 hover:scale-105 text-white transition-all duration-300 w-fit`);
const colIcons = classNames(`text-sm p-[0.3rem] hover:scale-[1.35] flex hover:border-[#7EEBFF] border-[1.5px] hover:text-[#7EEBFF] text-white border-white items-center justify-center m-2 z-0 scale-125 rounded-full border-1.5 before:content-[""] before:inline-block before:absolute before:z-behind before:bottom-1 before:right-2.75 before:w-6 before:h-6  before:rounded-full hover:scale-135 transition-all duration-300`);

export default Footer