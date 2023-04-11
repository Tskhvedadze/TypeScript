import { PersonProps } from './Person.types'

export const Person = (props: PersonProps) => {
    return (
        <h1>
            {props.name.first} {props.name.last}
        </h1>
    )
}
