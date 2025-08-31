import { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';
import styles from './TypewriterText.module.css';

interface TypewriterTextProps {
  text: string;
  className?: string;
  delay?: number;
  charDelay?: number;
  onComplete?: () => void;
}

export default function TypewriterText({
  text,
  className = '',
  delay = 0,
  charDelay = 50,
  onComplete,
}: TypewriterTextProps) {
  const [displayedChars, setDisplayedChars] = useState<number>(0);

  useEffect(() => {
    const startTimer = setTimeout(() => {
      let currentChar = 0;

      const typewriterInterval = setInterval(() => {
        currentChar++;
        setDisplayedChars(currentChar);

        if (currentChar >= text.length) {
          clearInterval(typewriterInterval);
          if (onComplete) {
            onComplete();
          }
        }
      }, charDelay);

      return () => clearInterval(typewriterInterval);
    }, delay);

    return () => clearTimeout(startTimer);
  }, [text, delay, charDelay, onComplete]);

  return (
    <span className={cn(styles.typewriterText, className)}>
      {text.split('').map((char, index) => (
        <span
          key={index}
          className={cn(
            styles.char,
            index < displayedChars ? styles.visible : styles.hidden,
          )}
          style={{
            animationDelay: `${delay + index * charDelay}ms`,
          }}
        >
          {char === ' ' ? '\u00A0' : char}
        </span>
      ))}
    </span>
  );
}
