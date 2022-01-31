import React from "react";
import "../style/footer.css";
import "../style/all.css";

function Footer() {
  return (
    <div className="main-footer">
      <div className="container">
        <div className="row">

          <div className="col centered">
            <h4>THE BOARD GAMES SHELF</h4>
          </div>

          <div className="col">
            <h4>About us</h4>
            <ui className="list-unstyled">
              <li>Our story</li>
              <li>Our vision</li>
              <li>Our collection</li>
            </ui>
          </div>
   
          <div className="col">
            <h4>Contact us</h4>
            <ui className="list-unstyled">
              <li>Email: contact@thebgshelf.com</li>
              <li>Bucharest, Romania</li>
            </ui>
          </div>
        </div>
        <hr />
        <div className="row">
          <p className="col-sm">
            &copy;{new Date().getFullYear()} THE BOARD GAMES SHELF | All rights reserved |
            Terms Of Service | Privacy
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
