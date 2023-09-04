'use client';

import { motion } from 'framer-motion';

import styles from '../styles';
import { TitleText, TypingText } from '../components';
import { fadeIn, staggerContainer } from '../utils/motion';

const Sponsor = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex flex-col`}
    >

      <TypingText title="| Sponsors" textStyles="text-center" />
      <TitleText
        title={(
          <>Meet our Sponsors
          </>
        )}
        textStyles="text-center"
      />

      <motion.div
        variants={fadeIn('up', 'tween', 0.3, 1)}
        className="mt-[58px] flex flex-wrap justify-between gap-[64px]"
      >
        <img
            src="/ticket9.svg"
            alt="headset"
            className="w-[304px] h-[80px] object-contain"
          />
          <img
            src="/chavans.png"
            alt="headset"
            className="w-[304px] h-[80px] object-contain"
          />
          <img
            src="/echo.png"
            alt="headset"
            className="w-[304px] h-[80px] object-contain"
          />
          <img
            src="/code.png"
            alt="headset"
            className="w-[304px] h-[80px] object-contain"
          />
          <img
            src="/true.png"
            alt="headset"
            className="w-[304px] h-[80px] object-contain"
          />
          <img
            src="/pci.png"
            alt="headset"
            className="w-[304px] h-[80px] object-contain"
          />
        
      </motion.div>
    </motion.div>
  </section>
);

export default Sponsor;
