import React, { useState } from "react";

const Nav = (props) => {
  const [inputData, setInputData] = useState();

  function handleChange(e) {
    e.preventDefault();
    setInputData(e.target.value);
  }
  function handleSearch(e) {
    e.preventDefault();
    props.handleClick(inputData);
    document.getElementById("input").reset();
  }

  return (
    <div className="container">
      <div className="navbar">
        <div className="navbar-brand">
          <h3 className="title navbar-item">
            NEWS APP <i className="px-3 far fa-newspaper" />{" "}
          </h3>
          <a
            role="button"
            className="navbar-burger"
            aria-label="menu"
            aria-expanded="false"
            data-target="navbarBasicExample"
          >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>
        <div className="navbar-menu">
          <div className="navbar-end">
            <form id="input">
              <div className="field has-addons">
                <div className="control">
                  <input
                    className="input"
                    type="text"
                    placeholder="Search"
                    onChange={handleChange}
                  />
                </div>
                <div className="control">
                  <button
                    className="button is-primary"
                    type="submit"
                    onClick={handleSearch}
                  >
                    Search
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nav;
