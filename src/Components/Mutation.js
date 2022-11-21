function Mutation() {
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
                        <a className="sub-btn" href="register.html"><i className="fas fa-table"></i>Register<i className="fas fa-angle-right dropdown"></i></a>
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
            <center><p id="demo" style="padding-top: 40px;"> Transfer Power of Attorney </p></center>
            <section className="main">
                <div id="search">
                    <section className="cm-login">
                        <form className="cm-login-form" onsubmit="return false" >
                            <fieldset>
                                <center><legend>Vendor </legend></center>
                                <input type="text" id="vendor_account_no" className="cm-text-input" placeholder="Enter Account Number"></input>
                                    <input type="text" id="vendor_password" className="cm-text-input" placeholder="Enter Password"></input>
                                    </fieldset>
                                    <button type="submit" className="cm-submit2" onclick="displayvendor()"> fetch </button>
                                    <div className="search" id="search_container_vendor" style="display: none;">
                                        <div style="font-weight: bold; padding-top: 20px; padding-bottom: 5px; color: darkgreen;">Owner Detail</div> <span></span>
                                        <div className="blockchain-container-data ">
                                            <div className="block-chain-50 display-inline-block ">
                                                <div className="block-chain-25 ">Owner Name</div>
                                                <div className="block-chain-25 ">Phone no</div>
                                                <div className="block-chain-25 ">location</div>
                                                <div className="block-chain-25 ">District</div>
                                                <div className="block-chain-25 ">Plot no</div>
                                                <div className="block-chain-25 ">Plot area</div>
                                                <div className="block-chain-25 ">Plot Price</div>
                                            </div>
                                            <div className="block-chain-50 display-inline-block ">
                                                <div className="block-chain-75 " id="owner_name"></div>
                                                <div className="block-chain-75" id="owner_phone"></div>
                                                <div className="block-chain-75 " id="owner_location"></div>
                                                <div className="block-chain-75 " id="owner_district"></div>
                                                <div className="block-chain-75 " id="owner_plotno"></div>
                                                <div className="block-chain-75" id="owner_plotarea"></div>
                                                <div className="block-chain-75 " id="owner_plotprice"></div>
                                            </div>
                                        </div>
                                    </div>
                               
                                
                        </form>
                        <form className="cm-login-form" onsubmit="return false" >
                            <fieldset>
                                <center><legend>Vandee</legend></center>
                                <input type="text" id="buyer_account_no" className="cm-text-input" placeholder="Enter Account Number"></input>
                                    <input type="text" id="buyer_password" className="cm-text-input" placeholder="Enter Password"></input>
                            </fieldset>
                                    <button type="submit" className="cm-submit2" onclick="displayvandee()"> fetch</button>
                                    <div className="search" id="search_container_buyer" style="display: none;">
                                        <div style="font-weight: bold; padding-top: 20px; padding-bottom: 5px; color: darkgreen;">Buyer Detail</div> <span></span>
                                        <div className="blockchain-container-data ">
                                            <div className="block-chain-50 display-inline-block ">
                                                <div className="block-chain-25 ">Buyer Name</div>
                                                <div className="block-chain-25 ">Phone no</div>
                                                <div className="block-chain-25 ">location</div>
                                                <div className="block-chain-25 ">District</div>
                                                <div className="block-chain-25 ">Plot no</div>
                                                <div className="block-chain-25 ">Plot area</div>
                                                <div className="block-chain-25 ">Plot Price</div>
                                            </div>
                                            <div className="block-chain-50 display-inline-block ">
                                                <div className="block-chain-75 " id="buyer_name"></div>
                                                <div className="block-chain-75" id="buyer_phone"></div>
                                                <div className="block-chain-75 " id="buyer_location"></div>
                                                <div className="block-chain-75 " id="buyer_district"></div>
                                                <div className="block-chain-75 " id="buyer_plotno"></div>
                                                <div className="block-chain-75" id="buyer_plotarea"></div>
                                                <div className="block-chain-75 " id="buyer_plotprice"></div>
                                            </div>
                                        </div>
                                    </div>
                               
                        </form>
                    </section>

                </div>
            </section>

            <button style="background-color: green; color: white; margin-left:875px;z-index: 9999; position: absolute;top: 58%; width: 100px; height: 40px;" onclick="transfer()">Transfer</button>
            <button style="background-color: green; color: white; margin-left:875px;z-index: 9999; position: absolute;top: 68%; width: 100px; height: 40px;" onclick="validate()">Validate</button>

        </div>
    )
}

export default Mutation;