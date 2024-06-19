'use client';
import React, { useState } from 'react';

import { FaPlus } from 'react-icons/fa';
import clsx from 'clsx';

import styles from './Accordion.module.scss';

type TProps = {
    title: string;
    children: React.ReactNode;
};

const Accordion = ({ title, children }: TProps): JSX.Element => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleAccordion = () => {
        setIsOpen((prev) => !prev);
    };
    return (
        <div className={styles.container}>
            <div className={styles.header} onClick={toggleAccordion}>
                <span>{title}</span>
                <button type="button" aria-label={isOpen ? 'collapse' : 'expand'}>
                    <FaPlus size={20} />
                </button>
            </div>
            <div className={clsx(styles.content, { [styles.closed]: !isOpen })}>{children}</div>
        </div>
    );
};

export default Accordion;
