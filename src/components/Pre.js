import React from "react";
import sologo from "../Assets/Homepage/solchick.png"

function Pre(props) {
  return (
    <div id={props.load ? "preloader" : "preloader-none"}>
      <div id="preloader-active">
        <div className="preloader d-flex align-items-center justify-content-center">
          <div className="preloader-inner position-relative">
            <div className="preloader-circle"></div>
            <div className="preloader-img pere-text">
              <img src={sologo} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>

  );
}

export default Pre;
