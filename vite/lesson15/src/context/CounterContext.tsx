import {
    useReducer,
    createContext,
    useContext,
    useCallback,
    ReactElement,
    ChangeEvent,
} from 'react'

import { REDUCER_ACTION_TYPES, StateTypes, ReducerAction } from './reducerTypes'

export const initState: StateTypes = { count: 0, text: '' }

const reducer = (state: StateTypes, action: ReducerAction): StateTypes => {
    switch (action.type) {
        case REDUCER_ACTION_TYPES.INCREMENT:
            return { ...state, count: state.count + 1 }

        case REDUCER_ACTION_TYPES.DECREMENT:
            return { ...state, count: state.count - 1 }

        case REDUCER_ACTION_TYPES.NEW_INPUT:
            return { ...state, text: action.payload ?? '' }

        default:
            throw new Error('Different type')
    }
}

export const useCounterContext = (initState: StateTypes) => {
    const [state, dispatch] = useReducer(reducer, initState)

    const increment = useCallback(
        () => dispatch({ type: REDUCER_ACTION_TYPES.INCREMENT }),
        [],
    )
    const decrement = useCallback(
        () => dispatch({ type: REDUCER_ACTION_TYPES.DECREMENT }),
        [],
    )

    const handleTextInput = useCallback(
        (e: React.ChangeEvent<HTMLInputElement>) =>
            dispatch({
                type: REDUCER_ACTION_TYPES.NEW_INPUT,
                payload: e.target.value,
            }),
        [],
    )

    return { state, increment, decrement, handleTextInput }
}

type UseCounterContextType = ReturnType<typeof useCounterContext>

const initContextState: UseCounterContextType = {
    state: initState,
    increment: () => {},
    decrement: () => {},
    handleTextInput: (e: ChangeEvent<HTMLInputElement>) => {},
}

export const CounterContext =
    createContext<UseCounterContextType>(initContextState)

type ChildrenType = {
    children?: ReactElement | undefined
}

export const CounterProvider = ({
    children,
    ...initState
}: ChildrenType & StateTypes): ReactElement => {
    return (
        <CounterContext.Provider value={useCounterContext(initState)}>
            {children}
        </CounterContext.Provider>
    )
}

type UseCounterHookType = {
    count: number
    increment: () => void
    decrement: () => void
}

export const useCounter = (): UseCounterHookType => {
    const {
        state: { count },
        increment,
        decrement,
    } = useContext(CounterContext)

    return { increment, decrement, count }
}

type UseCounterTextHookType = {
    text: string
    handleTextInput: (e: ChangeEvent<HTMLInputElement>) => void
}

export const useCounterText = (): UseCounterTextHookType => {
    const {
        state: { text },
        handleTextInput,
    } = useContext(CounterContext)

    return { text, handleTextInput }
}
