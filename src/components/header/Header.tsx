import React from 'react';

import { MdMailOutline } from 'react-icons/md';
import { FiPhone } from 'react-icons/fi';

import styles from './Header.module.scss';

const Header = (): JSX.Element => (
    <div className={styles.container}>
        <div className={styles.info}>
            <MdMailOutline size={17} />
            <div>Arrows@hotmail.com</div>
        </div>
        <div className={styles.info}>
            <FiPhone size={17} />
            <div>01231456789</div>
        </div>
    </div>
);

export default Header;
