import { cn } from '@/lib/utils';
import styles from './DecodingAndEvaluation.module.css';
import { FaSearch, FaChevronDown } from 'react-icons/fa';

interface DecodingAndEvaluationProps {
  className?: string;
  title: string;
  subtitle: string;
  background?: React.ReactNode;
}

export default function DecodingAndEvaluation({
  className = '',
  background = null,
  ...props
}: DecodingAndEvaluationProps) {
  return (
    <div className={cn(styles.container, className)} {...props}>
      {background}
      {/* <div className={styles.title}>{title}</div> */}
      <div className={styles.content}>
        <div className={styles.search}>
          <FaSearch />
          <span className={styles.searchText}>Rash</span>
        </div>
        <div className={styles.rowWrapper}>
          <div className={styles.row} style={{ backgroundColor: '#D3E0EE' }}>
            <span>Blood and lymphastic disorders</span>
          </div>
          <div className={styles.row}>
            <span>Cardiac disorders</span>
          </div>
          <div className={styles.row}>
            <span>Congenital, familial, and genetic disorders</span>
          </div>
          <div className={styles.row}>
            <span>Ear and labyrinth disorders</span>
          </div>
        </div>
        <div className={styles.resultWrapper}>
          <div className={styles.result} style={{ backgroundColor: '#D3E0EE' }}>
            <div className={styles.category}>
              <FaChevronDown />
              <span className={styles.categoryText}>LLT</span>
            </div>
            <div className={styles.data}>
              <span>10040913</span>
              <span>Skin rash</span>
            </div>
          </div>
          <div
            className={styles.result}
            style={{ backgroundColor: 'rgba(0, 0, 0, 0.1)' }}
          >
            <div className={styles.category} style={{ width: '6rem' }}>
              <FaChevronDown />
              <span className={styles.categoryText}>PT</span>
            </div>
            <div className={styles.data} style={{ marginLeft: '9rem' }}>
              <span>10037844</span>
              <span>Rash</span>
            </div>
          </div>
          <div className={styles.result}>
            <div className={styles.category} style={{ width: '8rem' }}>
              <FaChevronDown />
              <span className={styles.categoryText}>HLT</span>
            </div>
            <div className={styles.data} style={{ marginLeft: '7rem' }}>
              <span>10053566</span>
              <span>Rashers, eruptions and NEC</span>
            </div>
          </div>
          <div
            className={styles.result}
            style={{ backgroundColor: 'rgba(0, 0, 0, 0.1)' }}
          >
            <div className={styles.category} style={{ width: '10.35rem' }}>
              <FaChevronDown />
              <span className={styles.categoryText}>HLGT</span>
            </div>
            <div className={styles.data} style={{ marginLeft: '4.65rem' }}>
              <span>10054982</span>
              <span>Epidermal and dermal conditions</span>
            </div>
          </div>
          <div className={styles.result}>
            <div className={styles.category} style={{ width: '12rem' }}>
              <span className={styles.categoryText}>SOC</span>
            </div>
            <div className={styles.data} style={{ marginLeft: '3rem' }}>
              <span>10040785</span>
              <span>Skin and subcutaneous tissue disorders</span>
            </div>
          </div>
        </div>
      </div>
      {/* <div className={styles.subtitle}>{subtitle}</div> */}
    </div>
  );
}
