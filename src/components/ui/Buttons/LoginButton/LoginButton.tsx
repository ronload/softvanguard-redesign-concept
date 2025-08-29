import { cn } from '@/lib/utils';
import styles from './LoginButton.module.css';

interface LoginButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
}

export default function LoginButton({
  className = '',
  ...props
}: LoginButtonProps) {
  return (
    <button className={cn(styles.container, className)} {...props}>
      login
    </button>
  );
}
