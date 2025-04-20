import * as React from 'react';
import styles from './Counter.module.scss';
import {useCounter} from "./counter-context-provider.tsx";


const Counter: React.FC = () => {
   const {count, increment, decrement, reset} = useCounter();

    return (
        <div className={styles.counter}>
            <p className={styles.text}>Counter</p>
            <p className={styles.text}>
                {count}
            </p>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
            <button onClick={reset}>Reset</button>
        </div>
    );
}

export default Counter;
