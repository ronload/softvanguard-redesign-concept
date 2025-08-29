import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.content}>
          {/* Company Info Section */}
          <div className={styles.companySection}>
            <div className={styles.companyInfo}>
              <h3 className={styles.companyName}>SoftVanguard Co., Inc.</h3>
              <div className={styles.contactInfo}>
                <p className={styles.address}>
                  12F, No. 252, Sec. 1, Neihu Rd.,
                  <br />
                  Neihu Dist., Taipei City 11492, Taiwan
                </p>
                <div className={styles.contactDetails}>
                  <a href="tel:(02)8502-6650" className={styles.phone}>
                    +886-2-8502-6650
                  </a>
                  <a
                    href="mailto:info@softvanguard.com"
                    className={styles.email}
                  >
                    info@softvanguard.com
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Links Section */}
          <div className={styles.linksSection}>
            <div className={styles.linkGroup}>
              <h4 className={styles.linkTitle}>Company</h4>
              <ul className={styles.linkList}>
                <li>
                  <a href="/about" className={styles.link}>
                    About Us
                  </a>
                </li>
                <li>
                  <a href="/careers" className={styles.link}>
                    Careers
                  </a>
                </li>
                <li>
                  <a href="/contact" className={styles.link}>
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            <div className={styles.linkGroup}>
              <h4 className={styles.linkTitle}>Solutions</h4>
              <ul className={styles.linkList}>
                <li>
                  <a href="/platforms" className={styles.link}>
                    Platforms
                  </a>
                </li>
                <li>
                  <a href="/services" className={styles.link}>
                    Services
                  </a>
                </li>
                <li>
                  <a href="/case-studies" className={styles.link}>
                    Case Studies
                  </a>
                </li>
              </ul>
            </div>

            <div className={styles.linkGroup}>
              <h4 className={styles.linkTitle}>Support</h4>
              <ul className={styles.linkList}>
                <li>
                  <a href="/docs" className={styles.link}>
                    Documentation
                  </a>
                </li>
                <li>
                  <a href="/help" className={styles.link}>
                    Help Center
                  </a>
                </li>
                <li>
                  <a href="/status" className={styles.link}>
                    System Status
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className={styles.bottom}>
          <div className={styles.legal}>
            <a href="/legal" className={styles.legalLink}>
              Legal Disclaimer
            </a>
            <span className={styles.separator}>|</span>
            <a href="/privacy" className={styles.legalLink}>
              Privacy Policy
            </a>
          </div>
          <p className={styles.copyright}>
            © 2025 SoftVanguard Co., Inc. All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
}
