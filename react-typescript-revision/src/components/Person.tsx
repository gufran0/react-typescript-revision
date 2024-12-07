type PersonProps = {
    name: {
        first: string,
        last: string
    }
}

const Person = ({ name }: PersonProps) => {
    return (
        <div>Person {name.first} {name.last}</div>
    )
}

export default Person