import { useState } from 'react'
import { Heading, Section, Counter, List } from './components'

function App() {
    const [count, setCount] = useState<number>(1)

    return (
        <>
            <Heading title={'Hello!'} />
            <Section title={'Different Subheading'}>
                This is my section.
            </Section>
            <Counter setCount={setCount}>Count is {count}</Counter>
            <List
                items={['☕ Coffee', '🌮 Tacos', '👩🏻‍💻 Code']}
                render={(item: string) => (
                    <span className='gold bold'>{item}</span>
                )}
            />
        </>
    )
}

export default App
