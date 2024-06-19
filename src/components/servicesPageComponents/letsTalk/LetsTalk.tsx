import React from 'react';

import styles from './LetsTalk.module.scss';

const LetsTalk = (): JSX.Element => {
    return (
        <div className={styles.container}>
            <div>
                <div className={styles.title}>LET&apos;STALK</div>
                <div className={styles.row}>
                    <div className={styles.boldTitle}>about&nbsp;</div>
                    <div className={styles.normalTitle}>your next</div>
                </div>
                <div className={styles.boldTitle}>project .</div>
                <div className={styles.description}>Get creative solutions. Everyone is a potential creator.</div>
            </div>
            <button className={styles.button}>GET IN TOUCH</button>
        </div>
    );
};

export default LetsTalk;
