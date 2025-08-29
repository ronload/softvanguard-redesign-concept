import { cn } from '@/lib/utils';
import styles from './HeaderDropDownMenu.module.css';

interface HeaderDropDownMenuProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  children: React.ReactNode;
}

export default function HeaderDropDownMenu({
  children,
  className = '',
  ...props
}: HeaderDropDownMenuProps) {
  return (
    <button className={cn(styles.container, className)} {...props}>
      {children}
    </button>
  );
}
