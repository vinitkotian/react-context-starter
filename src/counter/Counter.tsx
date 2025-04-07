import { useState } from 'react';
import  styles from  './Counter.module.scss';
import * as React from "react";


const Counter: React.FC = ()=> {
    const [count, setCount] = useState(0);

    return (
        <div className={styles.counter}>
            <h1>Counter</h1>
            <p className="count">{count}</p>
            <button onClick={() => setCount(count + 1)}>Increment</button>
            <button onClick={() => setCount(count - 1)}>Decrement</button>
            <button onClick={() => setCount(0)}>Reset</button>
        </div>
    );
}

export default Counter;
