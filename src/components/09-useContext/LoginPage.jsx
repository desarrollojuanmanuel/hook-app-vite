import { useContext } from "react"
import { UserContext } from "./context/UserContext"

export const LoginPage = () => {

    const {user, setUser} = useContext(UserContext)

    return (
        <>
            <h1>LoginPage</h1>
            <hr />
            <pre>
                {JSON.stringify(user)}
            </pre>

            <button
                className="btn btn-primary"
                onClick={()=> setUser({    id: 123,
                    name: 'Juan Manuel Gutierrez',
                    email: 'juangu455@gmail.com',
                    rol: 'develop',})}
            >
                set User
            </button>
        </>
    )
}
