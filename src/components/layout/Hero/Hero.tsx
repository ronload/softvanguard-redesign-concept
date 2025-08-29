import styles from './Hero.module.css';

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className="container">
        <div className={styles.content}>
          <h1 className={styles.title}>
            Accelerate Business Deployment with Advanced Software Technology
          </h1>
          <p className={styles.subtitle}>
            Our platform combines cutting-edge software modules with
            professional expertise to accelerate your journey from concept to
            deployment.
          </p>
          <div className={styles.actions}>
            <button className={styles.primaryButton}>Get Started</button>
            <button className={styles.secondaryButton}>Learn More</button>
          </div>
        </div>
      </div>
    </section>
  );
}
