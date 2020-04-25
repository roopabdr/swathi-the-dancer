import React from 'react';
import './App.css';

const App = () => {

  const hamburger = (event) => {
    let x = document.getElementById("navigationId");
    if (x.className === "navigation") {
      x.className += " responsive";
    } else {
      x.className = "navigation";
    }
  }

  return (
    <div className="App">
      <div className="navigation" id="navigationId">
        <span className="active">Home</span>
        <span>About</span>
        <span>Blog</span>
        <span>Photo Gallery</span>
        <span>Video Gallery</span>
        <span>Contact</span>
        <span className="icon" onClick={hamburger}>
          <i className="fa fa-bars"></i>
        </span>
      </div>

      <div className="websiteheading">
        <div className="titletop">The Official Website of</div>
        <div className="heading">Swati Iyengar</div>
        {/* <div className="heading2">Iyengar</div> */}
      </div>

    </div>
  );
}

export default App;
