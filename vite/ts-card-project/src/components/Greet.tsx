type GreetProps = {
    name: string
    messageCount?: number
    isLoggedIn: boolean
}

export const Greet = ({ messageCount = 0, isLoggedIn, name }: GreetProps) => {
    return (
        <div>
            <h2>
                {isLoggedIn
                    ? ` Welcome ${name} You have ${messageCount} unread`
                    : `Welcome guest`}
            </h2>
        </div>
    )
}
