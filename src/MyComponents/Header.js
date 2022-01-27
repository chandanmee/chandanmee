  import React, { useState , useEffect }from "react";
  import PropTypes from "prop-types";
  import logo from "../chandan.png";
  import "../App.css";
  import { Link } from "react-router-dom";
  
  export default function Header(props) {
    var [date,setDate] = useState(new Date());

useEffect(() => {
    var timer = setInterval(()=>setDate(new Date()), 1000 )
    return function cleanup() {
        clearInterval(timer)
    }

});
    return (
      <>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container-fluid">
            <Link className="navbar-brand" to="/">
              <img className="App-logo" src={logo} alt="logo"></img>
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link className="nav-link active" aria-current="page" to="/">
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/about">
                    About
                  </Link>
                </li>
              </ul>
              {props.searchBar ? (
                <form className="d-flex">
                  <input
                    className="form-control me-2"
                    type="search"
                    placeholder="Search"
                    aria-label="Search"
                  />
                  <button className="btn btn-outline-success" type="submit">
                    Search
                  </button>
                </form>
              ) : (
                "Hey, What's Special Today?"
              )}
            </div>
          </div>
        </nav>
        <div className="containerbox">
          <img
            className="header-img"
            src="https://images.unsplash.com/photo-1557683316-973673baf926?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1129&q=80"
            alt="header-img"
          ></img>
          <h2>To Do List</h2>
          <p> Time:{date.toLocaleTimeString()}&nbsp;&nbsp;Date :{date.toLocaleDateString()}</p> 
  
        </div>
      </>
    );
  }

  Header.defaultProps = {
    title: "Your Title",
  };

  Header.propTypes = {
    title: PropTypes.string,
    searchBar: PropTypes.bool.isRequired,
  };
