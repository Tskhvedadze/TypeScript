import React, { useReducer } from 'react'

const initState = { count: 0, text: '' }

const enum REDUCER_ACTION_TYPE {
    INCREMENT,
    DECREMENT,
    NEW_INPUT,
}

type ReducerAction = {
    type: REDUCER_ACTION_TYPE
    payload?: string
}

const reducer = (
    state: typeof initState,
    action: ReducerAction,
): typeof initState => {
    switch (action.type) {
        case REDUCER_ACTION_TYPE.INCREMENT:
            return { ...state, count: state.count + 1 }

        case REDUCER_ACTION_TYPE.DECREMENT:
            return { ...state, count: state.count - 1 }

        case REDUCER_ACTION_TYPE.NEW_INPUT:
            return { ...state, text: action.payload ?? '' }

        default:
            throw new Error(`Different type`)
    }
}

type CounterProps = {
    children: (num: number) => React.ReactNode
}

export const Counter = ({ children }: CounterProps) => {
    const [{ count, text }, dispatch] = useReducer(reducer, initState)

    const increment = () => dispatch({ type: REDUCER_ACTION_TYPE.INCREMENT })
    const decrement = () => dispatch({ type: REDUCER_ACTION_TYPE.DECREMENT })

    const handleTextInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        dispatch({
            type: REDUCER_ACTION_TYPE.NEW_INPUT,
            payload: e.target.value,
        })
    }

    return (
        <>
            <h1>{children(count)}</h1>
            <div>
                <button onClick={increment}>+</button>
                <button onClick={decrement}>-</button>
            </div>
            <input type='text' onChange={handleTextInput} />
            <h2>{text}</h2>
        </>
    )
}
