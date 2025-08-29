import Link from 'next/link';
import Image from 'next/image';

import styles from './Brand.module.css';
import { cn } from '@/lib/utils';

interface BrandProps
  extends Omit<React.ComponentPropsWithoutRef<typeof Link>, 'href'> {
  className?: string;
  href?: string;
}

export default function Brand({
  className = '',
  href = '/',
  ...props
}: BrandProps) {
  return (
    <Link href={href} className={cn(styles.wrapper, className)} {...props}>
      <Image
        src="/images/softvanguard-slogo-blue.svg"
        height={32}
        width={32}
        alt="SoftVanguard Logo"
        className={styles.logo}
        priority
      />
      <Image
        src="/images/softvanguard-wlogo-blue.svg"
        height={32}
        width={256}
        alt="SoftVanguard"
        className={styles.text}
        priority
      />
    </Link>
  );
}
