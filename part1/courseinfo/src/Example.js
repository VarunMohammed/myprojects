const Hello = ({ name, age }) => {
    const bornYear = () => new Date().getFullYear() - age

    return(
        <div>
            <p>Hello {name}, you are {age} years old</p>
            <p>So you were probably born in {bornYear()}</p>
        </div>
    )
}

const Example = () => {
    const name = "Joseph"
    const age = 10

    return(
        <div>
            <h1>Greetings</h1>
            <Hello name={name} age={age} />
            <Hello name="Varun" age={21} />
        </div>
    )
}

export default Example