import { useState } from "react"
import { UserContext } from "./UserContext"


const user = {
    id: 123,
    name: 'Juan Manuel Gutierrez',
    email: 'juangu455@gmail.com',
    rol: 'develop',
}

export const UserProvider = ({ children }) => {

    const [user, setUser] = useState()

    return (
        <UserContext.Provider value={{user, setUser}}>
            {children}
        </UserContext.Provider>
    )
}
