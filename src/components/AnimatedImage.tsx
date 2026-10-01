"use client";

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';

interface AnimatedImageProps {
  src: string;
  alt: string;
  className?: string;
  width?: number;
  height?: number;
  priority?: boolean;
  useNextImage?: boolean;
}

export default function AnimatedImage({ src, alt, className = "", width, height, priority, useNextImage = false }: AnimatedImageProps) {
  const [isVisible, setIsVisible] = useState(false);
  const domRef = useRef<HTMLImageElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting) {
        setIsVisible(true);
        if (domRef.current) observer.unobserve(domRef.current);
      }
    }, { threshold: 0.2 });

    if (domRef.current) {
      observer.observe(domRef.current);
    }
    
    return () => observer.disconnect();
  }, []);

  const baseClassName = className.replace('animate-pop-in', '').trim();
  const animationClass = isVisible ? 'animate-pop-in' : 'opacity-0';
  const finalClassName = `${baseClassName} ${animationClass}`;

  if (useNextImage && width && height) {
    return (
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        className={finalClassName}
        priority={priority}
        // @ts-ignore
        ref={domRef}
      />
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      className={finalClassName}
      ref={domRef}
    />
  );
}
