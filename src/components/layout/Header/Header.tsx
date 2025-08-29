import Brand from '@/components/ui/Brand';
import styles from './Header.module.css';
import { HeaderDropDownMenu } from '@/components/ui/Navigation';
import { LanguageSwitcher, LoginButton } from '@/components/ui/Buttons';

export default function Header() {
  return (
    <header className={styles.container}>
      <Brand className={styles.brand} />
      <div className={styles.dropDownMenuWrapper}>
        <HeaderDropDownMenu className={styles.menu}>Company</HeaderDropDownMenu>
        <HeaderDropDownMenu className={styles.menu}>
          Platforms
        </HeaderDropDownMenu>
        <HeaderDropDownMenu className={styles.menu}>
          Case Studies
        </HeaderDropDownMenu>
        <HeaderDropDownMenu className={styles.menu}>
          Services
        </HeaderDropDownMenu>
        <HeaderDropDownMenu className={styles.menu}>Support</HeaderDropDownMenu>
      </div>
      <LanguageSwitcher className={styles.switcher} />
      <LoginButton className={styles.login} />
    </header>
  );
}
