import '../css/style.css';
function Setting() {
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
                        <a className="sub-btn"><i className="fas fa-table"></i>Register<i className="fas fa-angle-right dropdown"></i></a>
                        <div className="sub-menu">
                            <a href="#" className="sub-item">Users</a>
                            <a href="#" className="sub-item">Assets</a>

                        </div>
                    </div>
                    <div className="item"><a href="#"><i className="fas fa-th"></i>Search</a></div>
                    <div className="item"><a href="#"><i className="fas fa-info-circle"></i>Mutation</a></div>
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
                <h1>Setting <br/>Module</h1>
            </section>
        </div>
    )
}

export default Setting;