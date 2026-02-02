"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";

export default function Home() {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const buttonRef = useRef<HTMLAnchorElement>(null);
  const arrowRef = useRef<SVGSVGElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate the title with a stagger effect on each letter
      const letters = titleRef.current?.querySelectorAll(".letter");
      
      if (letters) {
        gsap.from(letters, {
        opacity: 0,
        y: 50,
        rotationX: -90,
        stagger: 0.05,
        duration: 0.8,
        ease: "back.out(1.7)",
      });
      }

      // Continuous floating animation
      gsap.to(titleRef.current, {
        y: -10,
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut",
      });

      // Animate the button
      gsap.fromTo(buttonRef.current, 
        { opacity: 1, scale: 1 },
        { opacity: 1, scale: 1, duration: 0.6, delay: 0.8, ease: "back.out(1.7)" }
      );

      // Button pulse animation
      gsap.to(buttonRef.current, {
        scale: 1.05,
        duration: 1.5,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut",
      });

      // Arrow bounce animation
      gsap.to(arrowRef.current, {
        x: 5,
        duration: 0.8,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut",
      });

      // Glow pulse animation
      gsap.to(glowRef.current, {
        scale: 1.2,
        opacity: 0.5,
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut",
      });

      // Container fade in
      gsap.from(containerRef.current, {
        opacity: 0,
        duration: 0.5,
        ease: "power2.out",
      });
    });

    return () => ctx.revert();
  }, []);

  const handleButtonHover = () => {
    gsap.to(buttonRef.current, {
      scale: 1.1,
      duration: 0.3,
      ease: "power2.out",
    });
  };

  const handleButtonLeave = () => {
    gsap.to(buttonRef.current, {
      scale: 1.05,
      duration: 0.3,
      ease: "power2.out",
    });
  };

  const text = "Still cooking..";

  return (
    <div className="relative flex min-h-screen items-center justify-center bg-gradient-to-br from-zinc-950 via-zinc-900 to-zinc-950 overflow-hidden">
      {/* Animated background gradient orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:2rem_2rem] sm:bg-[size:3rem_3rem] lg:bg-[size:4rem_4rem]" />

      {/* Main content */}
      <div ref={containerRef} className="relative z-10 flex flex-col items-center gap-6 sm:gap-8 lg:gap-12 px-4 sm:px-6 lg:px-8 py-8">
        {/* Glow effect behind title */}
        <div
          ref={glowRef}
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[300px] h-[100px] sm:w-[450px] sm:h-[150px] lg:w-[600px] lg:h-[200px] bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 blur-3xl rounded-full -z-10"
        />

        {/* Title */}
        <div className="relative z-20">
          <h1
            ref={titleRef}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white flex tracking-tight drop-shadow-2xl"
            style={{ perspective: "400px" }}
          >
            {text.split("").map((char, index) => (
              <span
                key={index}
                className="letter inline-block"
                style={{ transformOrigin: "bottom center" }}
              >
                {char === " " ? "\u00A0" : char}
              </span>
            ))}
          </h1>
        </div>

        {/* Subtitle */}
        <p className="text-zinc-400 text-base sm:text-lg md:text-xl text-center max-w-sm sm:max-w-md lg:max-w-lg -mt-2 sm:-mt-4 lg:-mt-6 relative z-20 px-4">
          Something amazing is being prepared. Stay tuned!
        </p>

        {/* Button with glassmorphism */}
        <a
          ref={buttonRef}
          href="https://www.mehedi-hasan.me/"
          className="group relative z-20 px-6 py-3 sm:px-8 sm:py-3.5 bg-white/10 backdrop-blur-xl text-white rounded-lg sm:rounded-xl transition-all flex items-center gap-2 sm:gap-3 shadow-2xl border border-white/20 hover:border-white/30 overflow-hidden text-sm sm:text-base"
          onMouseEnter={handleButtonHover}
          onMouseLeave={handleButtonLeave}
        >
          {/* Button shine effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-700" />
          
          <span className="relative z-10 font-medium">Go back</span>
          <svg
            ref={arrowRef}
            width="18"
            height="18"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="relative z-10 w-4 h-4 sm:w-[18px] sm:h-[18px]"
          >
            <path
              d="M6 12L10 8L6 4"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </a>

        {/* Decorative elements */}
        <div className="absolute -bottom-32 left-1/2 -translate-x-1/2 w-full max-w-xl sm:max-w-2xl h-32 bg-gradient-to-t from-blue-500/5 to-transparent blur-2xl" />
      </div>
    </div>
  );
}
