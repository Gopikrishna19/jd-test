'use client';

import {useState} from 'react';

const Counter = () => {
    const [counter, setCounter] = useState();

    return (
        <div>
            <p>{counter}</p>
            <button onClick={() => setCounter((prev) => prev + 1)}>Increment</button>
        </div>
    );
}

export default Counter;
