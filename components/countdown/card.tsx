import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import styles from './card.module.css';

const Card = (props: {startCount: number}) => {
  const [count, setCount] = useState<number>(props.startCount);
  const router = useRouter();

  const updateCount = () => {
    if (count == 1) {
      router.push('/app/game');
    } else {
      setCount(count - 1);
    }
  }

  useEffect(() => {
    setInterval(updateCount, 1000);
  })

  return <div className={styles.card}>
    <h1>{count}</h1>
  </div>
};

export default Card;