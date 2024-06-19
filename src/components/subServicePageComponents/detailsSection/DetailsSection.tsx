import React from 'react';

import Image from 'next/image';

import styles from './DetailsSection.module.scss';
import { getImageUrl } from '../../../utils/utils';

const DetailsSection = (): JSX.Element => (
    <div className={styles.container}>
        <div className={styles.location}>Home / Media Production / Videography</div>
        <div className={styles.banner}>
            <div className={styles.titleContainer}>
                <div className={styles.titleContainer_title}>Videography</div>
            </div>
            <Image
                src="/images/background.jpeg"
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: '100%', height: 'auto' }}
                alt="image"
            />
        </div>
        <div className={styles.imageContainer}>
            <Image
                src={getImageUrl('public/images/subservice.jpeg')}
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: '80%', height: 'auto' }}
                alt="image"
            />
        </div>
        <div className={styles.description}>
            {
                'A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone, and feel the charm of existence in this spot, which was created for the bliss of souls like mine. I should be incapable of drawing a single stroke at the present moment; and yet I feel that I never was a greater artist than now. I enjoy with my whole heart. The charm of existence in this spot. I throw myself down among the tall grass by the trickling stream; and, as I lie close to the earth, a thousand unknown plants are noticed by me.\n\nThese sweet mornings of spring which I enjoy with my whole heart. I am alone, and feel the charm of existence in this spot, which was created for the bliss of souls like mine. I should be incapable of drawing a single stroke at the present moment; and yet I feel that I never was a greater artist than now. I enjoy with my whole heart.'
            }
        </div>
    </div>
);

export default DetailsSection;
