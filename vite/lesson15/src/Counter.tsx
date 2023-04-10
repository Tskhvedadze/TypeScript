import React from 'react'

import { REDUCER_ACTION_TYPES } from './context/reducerTypes'

import { useCounterText, useCounter } from './context/CounterContext'

type CounterProps = {
    children: (num: number) => React.ReactNode
}

export const Counter = ({ children }: CounterProps) => {
    const { count, increment, decrement } = useCounter()
    const { text, handleTextInput } = useCounterText()

    return (
        <>
            <h1>{children(count)}</h1>
            <div>
                <button onClick={increment}>+</button>
                <button onClick={decrement}>-</button>
            </div>
            <>
                <input type='text' onChange={handleTextInput} />
                <h2>{text}</h2>
            </>
        </>
    )
}
