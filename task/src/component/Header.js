import {useNavigate} from 'react-router-dom'
const Header = () => {

    let nav = useNavigate()

    const name = localStorage.getItem("username")

    const logout = () => {

        localStorage.removeItem("username")
        nav('/',{replace:true})
    }
    return (
        <div class="header">
            {/* <li>Home</li> */}
            <h3>Hello {name}</h3> 
            <button class="btn btn-danger" onClick={logout}>Logout</button>
        </div>
    )
}

export default Header