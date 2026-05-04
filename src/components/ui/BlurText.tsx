"use client";
import { useEffect, useRef, useState, CSSProperties } from 'react';

interface BlurTextProps {
  text: string;
  delay?: number;
  className?: string;
  style?: CSSProperties;
  as?: 'h1' | 'h2' | 'h3' | 'p' | 'span';
  animateBy?: 'words' | 'chars';
  startVisible?: boolean;
}

export default function BlurText({
  text,
  delay = 80,
  className = '',
  style,
  as: Tag = 'h1',
  animateBy = 'words',
  startVisible = false,
}: BlurTextProps) {
  const [inView, setInView] = useState(startVisible);
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    if (startVisible) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [startVisible]);

  const segments = animateBy === 'words' ? text.split(' ') : text.split('');

  return (
    <Tag
      ref={ref as React.RefObject<HTMLHeadingElement>}
      className={className}
      style={{ display: 'flex', flexWrap: 'wrap', gap: animateBy === 'words' ? '0.35em' : '0', ...style }}
    >
      {segments.map((segment, i) => (
        <span
          key={i}
          style={{
            display: 'inline-block',
            filter: inView ? 'blur(0px)' : 'blur(10px)',
            opacity: inView ? 1 : 0,
            transform: inView ? 'translateY(0)' : 'translateY(8px)',
            transition: `filter 0.65s cubic-bezier(0.16,1,0.3,1) ${i * delay}ms, opacity 0.65s ease ${i * delay}ms, transform 0.65s cubic-bezier(0.16,1,0.3,1) ${i * delay}ms`,
          }}
        >
          {segment}
        </span>
      ))}
    </Tag>
  );
}
