import { cn } from '@/lib/utils';
import styles from './FloatingCircles.module.css';

interface FloatingCirclesProps {
  className?: string;
  circleCount?: number;
  color?: string;
  opacity?: number;
  blur?: number;
}

export default function FloatingCircles({
  className = '',
  circleCount = 8,
  color = 'var(--brand-primary)',
  opacity = 0.3,
  blur = 8,
}: FloatingCirclesProps) {
  const circles = Array.from({ length: circleCount }, (_, index) => {
    const circleClass = `circle${index + 1}`;
    return (
      <div
        key={index}
        className={`${styles.animatedCircle} ${styles[circleClass]}`}
        style={
          {
            '--circle-color': color,
            '--circle-opacity': opacity,
            '--circle-blur': `${blur}px`,
          } as React.CSSProperties
        }
      />
    );
  });

  return (
    <div className={cn(styles.floatingCirclesContainer, className)}>
      {circles}
    </div>
  );
}
