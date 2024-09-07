import { useState } from "react";


export const useCounter = ( initalValue = 10) => {

    const [counter, setCounter] = useState(initalValue);

    const increment = () => setCounter(counter + 1);
    const decrement = () => setCounter(counter - 1); // if(counter === 0) return;
    const reset = () => setCounter( initalValue );

    return {
        counter,
        increment,
        decrement,
        reset,
    }
}