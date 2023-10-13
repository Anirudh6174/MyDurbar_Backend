import React from "react";

function Footer() {
  return (
    <div className="hp-footer">
      <div className="hp-footer-wrapper">
        <div className="hp-footer-info-right">
          <p className="hp-footer-info-detail">
            mydurbar.com
            <br />
            Email - info@mydurbar.com
            <br />
            Phone - +91-9643699643
          </p>
          <h6 className="hp-footer-info-copyright">
            © 2022 mydurbar.com is an enterprise unit of TSS Initiatives LLP
          </h6>
        </div>
        <div className="hp-footer-info-left">
          <img
            alt=""
            src="https://i.postimg.cc/wM2wL01C/my-Durbar-logo-cropped.png"
            width="250"
            height="150"
          />
        </div>
      </div>
    </div>
  );
}

export default Footer;
