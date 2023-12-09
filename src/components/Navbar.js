import React from "react";
import {Link} from 'react-router-dom';
import '../statics/css/News.css';

const Navbar=()=>{
  // constructor(){
  //   super();
  //   this.state={
  //     mode:'dark',
  //     btnText:"Enable Light Mode",
  //     loading:false
  //   }
  // }


  // handleMode=async ()=>{
  //   if(this.state.mode==='dark'){
  //     this.setState({mode:"light",btnText:"Enable Dark Mode"});
  //   }
  //   else{
  //     this.setState({mode:"Dark",btnText:"Enable Light Mode"});
  //   }
  // }https://github.com/Ahsanali507/AZNewsFlow-App

    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <div className="container-fluid">
            <Link className="navbar-brand" to="/">
              AZ News
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link className="nav-link" aria-current="page" blanke to="/">
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" aria-current="page" to="/business">
                    Business
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" aria-current="page" to="/entertainment">
                  Entertainment
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" aria-current="page" to="/health">
                    Health
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" aria-current="page" to="/sports">
                    Sports
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" aria-current="page" to="/science">
                    Science
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" aria-current="page" to="/technology">
                    Technology
                  </Link>
                </li>
                {/* <li className="nav-item">
                  <a onClick={this.handleMode} className="nav-link active" aria-current="page" href="/">
                    {this.state.btnText}
                  </a>
                </li> */}
              </ul>
              <form className="d-flex" role="search">
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
            </div>
          </div>
        </nav>
      </div>
    );
}

export default Navbar;
