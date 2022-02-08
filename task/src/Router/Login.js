import {useNavigate} from 'react-router-dom'
import axios from 'axios'

const Login = () => {

   const user = ({

       username:"",
       password:""
   })

   let nav = useNavigate()

   const login = () => {
 
       axios.post('/userpage/login',user).then((res)=> {

           const len = res.data.data.length
           if(len === 1) {
               
               document.getElementById('success').innerHTML = "Success";
               setTimeout(()=>{
                   localStorage.setItem("username",res.data.data[0].username)
                   nav('/home',{replace:true})
               },2000)
               
           }
       })
   }


   const reg = () => {

         nav('/signup',{replace:true})
   }
   return (
       
       <div class="" className="container login">
           <div></div>
           <h2>Log In</h2>
           <form>
            <div className="form-control">
                    <label>User Name</label>
                    <input class="form-control"  onChange={(e)=> user.username = e.target.value}  placeholder="Username" />
                </div>
                <div className="form-control">
                    <label>Password</label>
                    <input type="password" class="form-control" onChange={(e)=> user.password = e.target.value} placeholder="Password" />
                </div>
                <div class="login-btns">
                    <button class="form-control btn btn-login btn-success" onClick={login}>Login</button>
                    <button class="form-control btn btn-signup" onClick={reg} >SignUp</button>
                </div>           
            <h1 id='success'></h1>
           </form>
            
    
       </div>
   )
}

export default Login