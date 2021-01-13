import * as React from "react";
require("../styles/footer.css");

const Footer = (props) => {
    return (
        <>
            <div className="bottom-pg">
                <ul className="footer-container">
                    <li className="care-conn-txt">
                        <div>
                            Care Connection
                        </div>
                        <div>
                            215-331-3200
                        </div>
                    </li>
                    <div className="icon-container">
                        <li className="footer-ico">
                            <img src="https://dy7glz37jgl0b.cloudfront.net/home/hipaa.png?v=26" />
                        </li>
                        <li className="footer-ico">
                            <img src={require("../images/pt_verified.png")}>
                            </img>
                        </li>
                    </div>
                </ul>
            </div>
        </>
    );
};

export default Footer;