import { cn } from '@/lib/utils';
import styles from './FloatingCircles.module.css';

interface FloatingCirclesProps {
  className?: string;
  /**
   * Number of floating circles to display
   * @default 8
   */
  circleCount?: number;
  /**
   * CSS color value for circles
   * @default 'var(--brand-primary)'
   */
  color?: string;
  /**
   * Opacity value for circles (0-1)
   * @default 0.3
   */
  opacity?: number;
  /**
   * Blur effect intensity in pixels
   * @default 8
   */
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
