'use client';

import { motion } from 'framer-motion';
import { TypingText } from '../components';

import styles from '../styles';
import { fadeIn, staggerContainer } from '../utils/motion';

const About = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <div className="gradient-02 z-0" />
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto ${styles.flexCenter} flex-col`}
    >
      <TypingText title="| About Interizon" textStyles="text-center" />

      <motion.p
        variants={fadeIn('up', 'tween', 0.2, 1)}
        className="mt-[8px] font-normal sm:text-[32px] text-[20px] text-center text-secondary-white"
      >
 
  Calling all {' '} <span className="font-extrabold text-white">Young Innovators & Student Entrepreneurs.</span>{' '}  Regardless of 
where you’re from, this is your opportunity to showcase your 
innovative solutions and products to major investors and 
industry leaders! 

{' '} <span className="font-extrabold text-white">Interizon hackathon</span>{' '} is a {' '} <span className="font-extrabold text-white">36 hrs</span>{' '} long  hackathon. The main 
purpose and aim of this hackathon is to empower Students & young Entrepreneurs by mentoring and 
encouraging them through Globally recognized Ted speakers, 
mentors and entrepreneurs.
      </motion.p>

      <motion.img
        variants={fadeIn('up', 'tween', 0.3, 1)}
        src="/arrow-down.svg"
        alt="arrow down"
        className="w-[18px] h-[28px] object-contain mt-[28px]"
      />
    </motion.div>
  </section>
);

export default About;
