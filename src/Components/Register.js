import React from "react"
import '../css/style.css';
import '../css/demo.css'
import '../css/login-form.css'
function Register(){
    return(
        <div>
            <div className="register">
                <div className="cm-login">
                    <center><p className="demo"> Welcome To Land Registy User Enrollment Portal</p></center>
                    <form className="cm-login-form" onsubmit="return false" >
                        <center><legend>User Register</legend></center>
                        <input type="text" className="cm-text-input account_no" placeholder="Account No"></input>
                        <input type="text" className="cm-text-input name" placeholder="Name"></input>
                        <input type="text" className="cm-text-input Gender" placeholder="Gender"></input>
                        <input type="text" className="cm-text-input Address" placeholder="Address"></input>
                        <input type="text" className="cm-text-input phone" placeholder="Contact no"></input>
                        <input type="text" className="cm-text-input password" placeholder="password"></input>
                        <button type="submit" className="cm-submit2" onclick="createaccount()"> Create Profile </button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Register;