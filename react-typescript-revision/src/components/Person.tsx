import { PersonProps } from "./Person.types"

const Person = ({ names }: PersonProps) => {
    return (
        <div>Person {names.first} {names.last}</div>
    )
}

export default Person