import { cn } from '@/lib/utils';
import styles from './HeaderNavButton.module.css';

interface HeaderNavButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  children: React.ReactNode;
}

export default function HeaderNavButton({
  children,
  className = '',
  ...props
}: HeaderNavButtonProps) {
  return (
    <button className={cn(styles.container, className)} {...props}>
      {children}
    </button>
  );
}
