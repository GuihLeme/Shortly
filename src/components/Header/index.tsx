import React from 'react';
import Button from '../Button';

import styles from './styles.module.scss';

const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <img src="/logo.svg" alt="Shortly" />
      <nav>
        <a href="/">Features</a>
        <a href="/">Pricing</a>
        <a href="/">Resources</a>
        <div className={styles.credentials}>
          <a href="/">Login</a>
          <Button>Sign Up</Button>
        </div>
      </nav>
    </header>
  );
}

export default Header;
