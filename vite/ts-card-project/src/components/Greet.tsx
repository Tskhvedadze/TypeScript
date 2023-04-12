type GreetProps = {
    messageCount?: number
    name: string
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
