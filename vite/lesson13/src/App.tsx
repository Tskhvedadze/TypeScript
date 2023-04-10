import {
    useState,
    useEffect,
    useCallback,
    useMemo,
    useRef,
    MouseEvent,
    KeyboardEvent,
} from 'react'

interface User {
    id: number
    username: string
}

type fibFunc = (n: number) => number

const fib: fibFunc = (n) => {
    if (n < 2) return n
    return fib(n - 1) + fib(n - 2)
}

const myNum: number = 37

function App() {
    const [count, setCount] = useState<number>(0)
    const [users, setusers] = useState<User[] | null>(null)

    const inputRef = useRef<HTMLInputElement>(null)

    useEffect(() => {
        console.log('mounting')
        console.log('users : ', users)

        return () => console.log('unmounting')
    }, [users])

    const addTwo = useCallback(
        (
            e: MouseEvent<HTMLButtonElement> | KeyboardEvent<HTMLButtonElement>,
        ): void => setCount((prev) => prev + 1),
        [],
    )

    const result = useMemo<number>(() => fib(myNum), [myNum])

    console.log(inputRef?.current)
    console.log(inputRef.current?.value)

    return (
        <div>
            <h1>{count}</h1>
            <button onClick={addTwo}>add</button>
            <h2>{result}</h2>
            <input ref={inputRef} type='text' />
        </div>
    )
}

export default App
