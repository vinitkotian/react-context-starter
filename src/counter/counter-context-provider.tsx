import React from "react";

type CounterContextData = {
    count: number;
    increment: () => void;
    decrement: () => void;
    reset: () => void;
};

const CounterContext = React.createContext<CounterContextData>({
    count: 0,
    increment: () => {},
    decrement: () => {},
    reset: () => {},
});


export const CounterContextProvider: React.FC<{ children?: React.ReactNode }> = ({ children }) => {
    //Any generalized logic around counter state can be added here
    const [count, setCount] = React.useState(0);
    const increment = () => setCount((prevCount) => prevCount + 1);
    const decrement = () => setCount((prevCount) => prevCount - 1);
    const reset = () => setCount(0);

    return <CounterContext value={{ count, increment, decrement, reset }}>{children}</CounterContext>;
}


export const useCounter = () => {
    const context = React.useContext(CounterContext);
    if (!context) {
        throw new Error("useCounter must be used within a CounterContextProvider");
    }
    return context;
}
