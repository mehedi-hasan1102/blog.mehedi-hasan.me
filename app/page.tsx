'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';
import gsap from 'gsap';
import { AiOutlineArrowRight } from 'react-icons/ai';
import styles from './home.module.css';

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const descriptionRef = useRef<HTMLParagraphElement>(null);
  const buttonRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Use requestAnimationFrame to ensure DOM is ready
    const frameId = requestAnimationFrame(() => {
      const tl = gsap.timeline();

      // Animate title
      if (titleRef.current) {
        gsap.set(titleRef.current, { opacity: 0, y: 30 });
        tl.to(
          titleRef.current,
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            ease: 'power3.out',
          },
          0
        );
      }

      // Animate subtitle
      if (subtitleRef.current) {
        gsap.set(subtitleRef.current, { opacity: 0, y: 20 });
        tl.to(
          subtitleRef.current,
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            ease: 'power3.out',
          },
          '-=0.4'
        );
      }

      // Animate description
      if (descriptionRef.current) {
        gsap.set(descriptionRef.current, { opacity: 0, y: 20 });
        tl.to(
          descriptionRef.current,
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            ease: 'power3.out',
          },
          '-=0.3'
        );
      }

      // Animate button
      if (buttonRef.current) {
        gsap.set(buttonRef.current, { opacity: 0, scale: 0.9 });
        tl.to(
          buttonRef.current,
          {
            opacity: 1,
            scale: 1,
            duration: 0.5,
            ease: 'back.out(2)',
          },
          '-=0.2'
        );
      }
    });

    return () => cancelAnimationFrame(frameId);
  }, []);

  return (
    <div ref={containerRef} className={styles.homeSection}>
      {/* Background Orbs */}
      <div className={styles.orb1} />
      <div className={styles.orb2} />
      <div className={styles.orb3} />

      <div className={styles.container}>
        {/* Title */}
        <h1 ref={titleRef} className={styles.title}>
          Still <span className={styles.highlight}>Cooking </span>
        </h1>

        {/* Subtitle */}
        {/* <p ref={subtitleRef} className={styles.subtitle}>
          Insights, Stories & Technical Articles
        </p> */}

        {/* Description */}
        <p ref={descriptionRef} className={styles.description}>
          Something amazing is being prepared. Stay tuned!
        </p>

        {/* Button */}
        <div ref={buttonRef} className={styles.buttonWrapper}>
          <Link href="https://www.mehedi-hasan.me" className="btn-primary">
            <AiOutlineArrowRight size={20} />
            <span>Back to Portfolio</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
