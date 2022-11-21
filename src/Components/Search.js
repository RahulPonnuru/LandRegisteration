function Search() {
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
                    <section className="cm-login">
                        <center>
                            <p id="demo"> Search your Land Record </p>
                        </center>
                        <form className="cm-login-form" onsubmit="return false">
                            <fieldset>
                                <center>
                                    <legend>Land Record (Register II)</legend>
                                </center>
                                <input type="text" id="account_no" className="cm-text-input" placeholder="Enter Account Number"></input>

                            </fieldset>
                            <button type="submit" className="cm-submit2" onclick="displaydata()"> search </button>

                            <div className="search" id="search_container" style="display: none;">
                                <center>
                                    <h2 style="text-decoration: underline ;">Land Details</h2>
                                </center>
                                <div style="font-weight: bold; padding-top: 20px; padding-bottom: 5px; color: darkgreen;">Personal Detail
                                </div> <span></span>
                                <div className="blockchain-container-data">
                                    <div className="block-chain-50 display-inline-flex">
                                        <div className="block-chain-25">Name</div>
                                        <div className="block-chain-75" id="search_name"></div>
                                    </div>
                                    <div className="block-chain-50 display-inline-flex">
                                        <div className="block-chain-25">Gender</div>
                                        <div className="block-chain-75" id="search_gender"></div>
                                    </div>
                                </div>
                                <div className="blockchain-container-data">
                                    <div className="block-chain-50 display-inline-flex">
                                        <div className="block-chain-25">Address</div>
                                        <div className="block-chain-75" id="search_address"></div>
                                    </div>
                                    <div className="block-chain-50 display-inline-flex">
                                        <div className="block-chain-25">Phone</div>
                                        <div className="block-chain-75" id="search_phone"></div>
                                    </div>
                                </div>
                                <br/>

                                    <div style="font-weight: bold; padding-bottom: 5px; color: darkgreen;">Property Detail</div> <span></span>
                                    <div className="blockchain-container-data">
                                        <div className="block-chain-50 display-inline-flex">
                                            <div className="block-chain-25">Land Location</div>
                                            <div className="block-chain-75" id="search_location"></div>
                                        </div>
                                        <div className="block-chain-50 display-inline-flex">
                                            <div className="block-chain-25">District</div>
                                            <div className="block-chain-75" id="search_district"></div>
                                        </div>
                                    </div>
                                    <div className="blockchain-container-data">
                                        <div className="block-chain-50 display-inline-flex">
                                            <div className="block-chain-25">Plot no</div>
                                            <div className="block-chain-75" id="search_plotno"></div>
                                        </div>
                                        <div className="block-chain-50 display-inline-flex">
                                            <div className="block-chain-25">Area </div>
                                            <div className="block-chain-75" id="search_area"> </div>
                                        </div>
                                    </div>
                                    <div className="blockchain-container-data">
                                        <div className="block-chain-50 display-inline-flex">
                                            <div className="block-chain-25">Asset value </div>
                                            <div className="block-chain-75" id="search_assetvalue" style="color: red;"></div>
                                        </div>
                                    </div>

                                </div>
                        </form>
                    </section>
                </div>
            </section>
        </div>
    )
}

export default Search;