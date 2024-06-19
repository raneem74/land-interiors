import React from 'react';

import styles from './Faq.module.scss';
import Accordion from '../../accordion/Accordion';

const response = [
    {
        question: 'Where I can find marketing solutions for my Instagram?',
        answer: 'Every frame tells a story and a good story consists of many frames, all of these frames reflect the creative concept.\nWe are addicted to producing kind of artistic video content like fashionable films, artistic videos, and documentaries. Also, we provide video production services from the creative concept to the post production phase where you find your desired output.\nIncluding these kinds of output Productions Commercials/TVC Documentaries Digital Video Content ',
        subServiceId: 'id',
    },
    {
        question: 'Can I change analytics admin panel?',
        answer: 'Every frame tells a story and a good story consists of many frames, all of these frames reflect the creative concept.\nWe are addicted to producing kind of artistic video content like fashionable films, artistic videos, and documentaries. Also, we provide video production services from the creative concept to the post production phase where you find your desired output.\nIncluding these kinds of output Productions Commercials/TVC Documentaries Digital Video Content ',
        subServiceId: 'id',
    },
    {
        question: 'Where I can find marketing solutions for my Instagram?',
        answer: 'Every frame tells a story and a good story consists of many frames, all of these frames reflect the creative concept.\nWe are addicted to producing kind of artistic video content like fashionable films, artistic videos, and documentaries. Also, we provide video production services from the creative concept to the post production phase where you find your desired output.\nIncluding these kinds of output Productions Commercials/TVC Documentaries Digital Video Content ',
        subServiceId: 'id',
    },
    {
        question: 'Can I change analytics admin panel?',
        answer: 'Every frame tells a story and a good story consists of many frames, all of these frames reflect the creative concept.\nWe are addicted to producing kind of artistic video content like fashionable films, artistic videos, and documentaries. Also, we provide video production services from the creative concept to the post production phase where you find your desired output.\nIncluding these kinds of output Productions Commercials/TVC Documentaries Digital Video Content ',
        subServiceId: 'id',
    },
];

const Faq = (): JSX.Element => {
    return (
        <div className={styles.container}>
            <div className={styles.title}>Frequently Asked Questions</div>
            {response.map((ques, index) => (
                <Accordion title={ques.question} key={index}>
                    <div>{ques.answer}</div>
                </Accordion>
            ))}
        </div>
    );
};

export default Faq;
