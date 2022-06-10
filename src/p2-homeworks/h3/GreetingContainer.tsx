import React, {useState, ChangeEvent} from 'react'
import Greeting from './Greeting'
import {UserType} from "./HW3";

type GreetingContainerPropsType = {
    users: Array<object> // need to fix any
    addUserCallback: (name: string) => void // need to fix any
}

// более простой и понятный для новичков
// function GreetingContainer(props: GreetingPropsType) {

// более современный и удобный для про :)
// уровень локальной логики
const GreetingContainer: React.FC<GreetingContainerPropsType> = ({users, addUserCallback}) => { // деструктуризация пропсов
    const [name, setName] = useState<string>('') // need to fix any
    const [error, setError] = useState<boolean>(false) // need to fix any


    const setNameCallback = (event: ChangeEvent<HTMLInputElement>) => { // need to fix any
        const name = event.currentTarget.value.trim()
        setError(false)
        setName(name) // need to fix
    }
    const addUser = () => {
        if(name === "") {
            setError(true)
            alert(`I need a name!`)
        } else {
            addUserCallback(name)
            alert(`Hello  ${name}!`) // need to fix
            setName("")
        }

    }

    const totalUsers = users.length // need to fix

    return (
        <Greeting
            name={name}
            setNameCallback={setNameCallback}
            addUser={addUser}
            error={error}
            totalUsers={totalUsers}
        />
    )
}

export default GreetingContainer
