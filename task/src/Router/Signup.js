
import axios from 'axios'
import {useNavigate} from 'react-router-dom'

const Signup = () => {

    let nav = useNavigate()

    const user = ({

        username:"",
        name:"",
        password:""
    })

    const reguser = () => {

        axios.post('/userpage/register',user).then((res => {

            document.getElementById('success').innerHTML = "Registered";

            setTimeout(()=>{
                
                nav('/',{replace:true})
            },2000)        
        }))     
    
    }
    return (
        <div className="container">
            <form>
                <h1>Register</h1>
                <div className='form-control'>
                    <label>User Name</label>
                    <input class="form-control" onChange={(e)=> user.username = e.target.value} placeholder="Username" />
                </div>
                <div className='form-control'>
                    <label>Name</label>
                    <input class="form-control" onChange={(e)=> user.name = e.target.value} placeholder="Name" />  
                </div>
                <div className='form-control'>
                    <label>Password</label>
                    <input class="form-control" type="password" onChange={(e)=> user.password = e.target.value} placeholder="Password" />
                </div>
                
                <button class="form-control btn btn-success" onClick={reguser}>Register</button>
                <p id="success"></p>
            </form>  
        </div>
    )
}

export default Signup