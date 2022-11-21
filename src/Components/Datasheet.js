import '../css/datasheet.css'
import '../css/style.css';
import '../css/demo.css'
import '../css/login-form.css'
import '../css/datasheetstyle.css'

function Datasheet() {
    return (
        <div>
            <div className="menu-btn">
                <i className="fas fa-bars"></i>
            </div>
            <div className="side-bar">
                <div className="close-btn">
                    <i className="fas fa-times"></i>
                </div>
                <div className="menu">
                    <div className="item"><a href="#"><i className="fas fa-desktop"></i>Dashboard</a></div>
                    <div className="item">
                        <a className="sub-btn" href="register.html"><i className="fas fa-table"></i>Register<i
                            className="fas fa-angle-right dropdown"></i></a>
                        <div className="sub-menu">
                            <a href="#" className="sub-item">Users</a>
                            <a href="#" className="sub-item">Assets</a>

                        </div>
                    </div>
                    <div className="item"><a href="search.html"><i className="fas fa-th"></i>Search</a></div>
                    <div className="item"><a href="Mutation.html"><i className="fa fa-clipboard"></i>Mutation</a></div>
                    <div className="item"><a href="datasheet.html"><i className="fa fa-database"></i>Records</a></div>
                    <div className="item"><a href="Khatiyan.html"><i className="fa fa-database"></i>Vendor list</a></div>
                    <div className="item">
                        <a className="sub-btn"><i className="fas fa-cogs"></i>Settings<i className="fas fa-angle-right dropdown"></i></a>
                        <div className="sub-menu">
                            <a href="#" className="sub-item">User Profile</a>
                            <a href="#" className="sub-item">Land Data</a>
                        </div>
                    </div>
                </div>
            </div>
            <section className="main">
                <div id="search">
                    <section className="cm-logins">
                        <form className="cm-login-form" onsubmit="return false">
                            <fieldset>
                                <center>
                                    <legend>Land Record</legend>
                                </center>
                                <button type="submit" className="cm-submit2" onclick="displayrecords()"> Click here to see all users
                                    land records </button>
                            </fieldset>
                            <br/>
                                <div className="tabledata" id="tableshow" style="display: none;">
                                    <table id="myytab">
                                        <tr>
                                            <th className="head">Account no</th>
                                            <th className="head">Name</th>
                                            <th className="head">Gender</th>
                                            <th className="head">Address</th>
                                            <th className="head">land location</th>
                                            <th className="head">District</th>
                                            <th className="head">Plot no</th>
                                            <th className="head">Area(sqft)</th>
                                            <th className="head">Asset value </th>
                                            <th className="head">Phone no</th>
                                        </tr>
                                    </table>
                                </div>
                        </form>
                    </section>
                </div>
            </section>
        </div>
    )
}

export default Datasheet;