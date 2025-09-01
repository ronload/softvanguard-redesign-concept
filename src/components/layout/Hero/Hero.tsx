import { TextCard } from '@/components/ui/Cards';
import FloatingCircles from '@/components/ui/FloatingCircles';
import styles from './Hero.module.css';

export default function Hero() {
  return (
    <section className={styles.hero}>
      <FloatingCircles />
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
        <div className={styles.cardWrapper}>
          <TextCard
            title="Adverse Reaction Reporting"
            subtitle="Using our software technology and professional services, we help regulatory agencies build a compliant adverse reaction reporting system and automated gateway delivery."
            className={styles.card}
            backgroundImage={{
              url: '/images/assets/decoding-and-evaluation.png',
              alt: 'Decoding and Evaluation',
            }}
          />
          <TextCard
            title="Cloud Deployment"
            subtitle="Cloud deployment provides fast and seamless services for small and medium-sized enterprises to meet the growth needs brought about by informatization."
            className={styles.card}
            backgroundImage={{
              url: '/images/assets/cloud-deployment.png',
              alt: 'Cloud Deployment',
            }}
          />
        </div>
      </div>
    </section>
  );
}
