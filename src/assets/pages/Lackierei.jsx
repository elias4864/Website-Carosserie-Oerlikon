import React from "react";
import Rot from "../Rot.jpg";
import "../Styles/Lackiererei.css";
import Lackiererei from "../Lackiererei.jpg";

function Lackierei() {
    return (
        <div className="Background-Intro">
                {/* Full-Width Bild-Wrapper */}
                    <div className="image-wrapper">
                        <img src={Lackiererei} alt="Autoaufbereitung" className="lackiererei " />
                        </div>

        </div>





    );
}

export default Lackierei;