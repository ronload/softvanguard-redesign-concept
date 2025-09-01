import { cn } from '@/lib/utils';
import styles from './TextCard.module.css';
import Image from 'next/image';

interface BackgroundImage {
  url: string;
  alt: string;
}

interface TextCardProps {
  className?: string;
  /**
   * Card title text
   */
  title: string;
  /**
   * Card subtitle/description text
   */
  subtitle: string;
  /**
   * Optional background image configuration
   */
  backgroundImage?: BackgroundImage;
}

export default function TextCard({
  className = '',
  title,
  subtitle,
  backgroundImage,
}: TextCardProps) {
  return (
    <div className={cn(styles.container, className)}>
      <div className={styles.backgroundWrapper}>
        {backgroundImage && (
          <Image
            src={backgroundImage.url}
            alt={backgroundImage.alt}
            fill
            className={styles.backgroundImage}
            priority
          />
        )}
        <div className={styles.overlay} />
      </div>
      <div className={styles.content}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.subtitle}>{subtitle}</p>
      </div>
    </div>
  );
}
