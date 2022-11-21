import React from "react"
import '../css/style.css';
import '../css/demo.css'
import '../css/login-form.css'
function Login() {
    return (
        <div>
            <div className="register_asset">
                <section className="cm-login">
                    <center><p className="demo"> Welcome To Assets Enrollment Portal</p></center>
                    <form className="cm-login-form" onsubmit="return false" >
                        <fieldset>
                            <center><legend>Assest Register</legend></center>
                            <input type="text" className="cm-text-input account_no_asset" placeholder="Account No"></input>
                            <input type="text" className="cm-text-input Location" placeholder="Location"></input>
                            <input type="text" className="cm-text-input District" placeholder="District"></input>
                            <input type="text" className="cm-text-input Plot_no" placeholder="Plot No"></input>
                            <input type="text" className="cm-text-input Assest_value" placeholder="Assest Value"></input>
                            <input type="text" className="cm-text-input Area" placeholder="Area (in sqft)"></input>
                        </fieldset>
                        <button type="submit" className="cm-submit2" onclick="create_asset()"> Register Assest</button>
                    </form>
                </section>
            </div>
        </div>
    )
}

export default Login;