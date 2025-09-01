import Brand from '@/components/ui/Brand';
import styles from './Header.module.css';
import { HeaderNavButton } from '@/components/ui/Navigation';
import { LanguageSwitcher, LoginButton } from '@/components/ui/Buttons';

export default function Header() {
  return (
    <header className={styles.container}>
      <Brand className={styles.brand} />
      <div className={styles.dropDownMenuWrapper}>
        <HeaderNavButton className={styles.menu}>Company</HeaderNavButton>
        <HeaderNavButton className={styles.menu}>
          Platforms
        </HeaderNavButton>
        <HeaderNavButton className={styles.menu}>
          Case Studies
        </HeaderNavButton>
        <HeaderNavButton className={styles.menu}>
          Services
        </HeaderNavButton>
        <HeaderNavButton className={styles.menu}>Support</HeaderNavButton>
      </div>
      <LanguageSwitcher className={styles.switcher} />
      <LoginButton className={styles.login} />
    </header>
  );
}
