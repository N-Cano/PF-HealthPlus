import doctors from "../../assets/doctors.png"
const Login = () => {


    return (
        <div>
            <img src={doctors} className="w-40"/>
            <h2>Sign In</h2>

            <div>
            <label>Email:</label>
            <input type ="text" value="Email"></input>
            </div>

            <div>
            <label>Password:</label>
            <input type = "password"></input>
            </div>

            <button type ="submit" value="password">Sign In</button>
            <button>Forgot Password</button>
            <button>Sign Up</button>
        </div>
    )
}
export default Login
