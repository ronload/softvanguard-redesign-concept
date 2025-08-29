import { cn } from '@/lib/utils';
import styles from './LanguageSwitcher.module.css';

interface LanguageSwitcherProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
}

export default function LanguageSwitcher({
  className = '',
  ...props
}: LanguageSwitcherProps) {
  return (
    <button className={cn(styles.container, className)} {...props}>
      LanguageSwitcher
    </button>
  );
}
