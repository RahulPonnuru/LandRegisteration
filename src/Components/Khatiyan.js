import '../css/khatiyan.css';
import '../css/datasheet.css'
import '../css/style.css';
import '../css/demo.css'
import '../css/login-form.css'
import '../css/datasheetstyle.css'

function Khatiyan() {
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
                                    <legend>Vendor list</legend>
                                </center>
                                <input type="text" id="plot_no" className="cm-text-input" placeholder="Enter the plot number"></input>
                                    <button type="submit" className="cm-submit2" onclick="myFunction()"> Click to show the vendor list
                                    </button>
                            </fieldset>
                            <br />
                            <div>
                                <div className="tabledata1" id="tabledata1" style="display: none;">
                                    <h5 style="font-size: 25px; font-weight: 800px;"><center><strong>Current Owner</strong></center></h5>
                                    <br/>
                                    <h5> Plot.No</h5>
                                    <p style="color: red; font-weight: 900" id="_plot">....</p>
                                    <div className="dat">
                                        <h5 id="_name">Please </h5>
                                    </div>
                                    <div className="dat">
                                        <h5 id="_location">Wait ..</h5>
                                    </div>
                                </div>
                            </div>

                            <div className="tabledata" id="tableshow" style="display: block;">
                                <table id="myytab">
                                    <tr>
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

export default Khatiyan;