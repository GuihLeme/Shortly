import React from 'react';


import Input from '../Input';

import styles from './styles.module.scss';

const ShortenContainer: React.FC = () => {





  return (
    <div className={styles.container}>
        <Input
          name="shortenURL"
          type="text"
          placeholder="Search for a country..."
        />
        <button type="submit">Shorten it!</button>
    </div>
  );
}

export default ShortenContainer;
