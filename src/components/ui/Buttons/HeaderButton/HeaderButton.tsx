import { cn } from '@/lib/utils';
import styles from './HeaderButton.module.css';

interface HeaderButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  children: React.ReactNode;
}

export default function HeaderButton({
  children,
  className = '',
  ...props
}: HeaderButtonProps) {
  return (
    <button className={cn(styles.container, className)} {...props}>
      {children}
    </button>
  );
}
