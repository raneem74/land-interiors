'use client';
import React, { useState } from 'react';

import Image from 'next/image';
import Link from 'next/link';

import styles from './navBar.module.scss';

const NavBar = (): JSX.Element => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const menuClass = isOpen ? styles.open : styles.closed;

    return (
        <div className={styles.container}>
            <Image src="/images/logo.svg" alt="Arrows" width={159} height={24} />
            {/* <button onClick={toggleMenu} className={styles.hamburger}>
                <span></span>
                <span></span>
                <span></span>
            </button> */}
            <ul className={styles.menu}>
                <li>
                    <Link href="/about">About</Link>
                </li>
                <li>
                    <Link href="/services">Services</Link>
                </li>
                <li>
                    <Link href="/projects">Our Projects</Link>
                </li>
                <li>
                    <Link href="/contact">Contact Us</Link>
                </li>
            </ul>
        </div>
    );
};

export default NavBar;
