
import CPFField from "../CPFField/CPFField";
import LoginButton from "../LoginButton/LoginButton";
import PasswordField from "../PasswordField/PasswordField";


function LoginForm(){
    return(
        <div>
            <h2>Login</h2>
            <CPFField/>
            <PasswordField/>
            <LoginButton/>
        </div>
    );

}

export default LoginForm
