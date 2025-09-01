import Brand from '@/components/ui/Brand';
import styles from './Header.module.css';
import { HeaderButton } from './HeaderButton';
import { LanguageSwitcher, LoginButton } from '@/components/ui/Buttons';

export default function Header() {
  return (
    <header className={styles.container}>
      <Brand className={styles.brand} />
      <div className={styles.dropDownMenuWrapper}>
        <HeaderButton className={styles.menu}>Company</HeaderButton>
        <HeaderButton className={styles.menu}>Platforms</HeaderButton>
        <HeaderButton className={styles.menu}>Case Studies</HeaderButton>
        <HeaderButton className={styles.menu}>Services</HeaderButton>
        <HeaderButton className={styles.menu}>Support</HeaderButton>
      </div>
      <LanguageSwitcher className={styles.switcher} />
      <LoginButton className={styles.login} />
    </header>
  );
}
