import React from 'react'
import PropTypes from 'prop-types'
// import { Link } from 'react-router-dom/cjs/react-router-dom.min'

// function based component
export default function Navbar(props) {   // props is a properties
    return (
        <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
            <div className="container-fluid">
                {/* <Link className="navbar-brand" to="/">{props.title}</Link> */}
                <a className="navbar-brand" href="#">{props.title}</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            {/* <Link className="nav-link active" aria-current="page" to="/">Home</Link> */}
                            <a className="nav-link active" aria-current="page" href="#">Home</a>
                        </li>
                        {/* <li className="nav-item">
                            {/* <Link className="nav-link" to="/about">{props.abouttext}</Link>
                        */}
                    </ul>
                    {/* <form className="d-flex" role="search">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-outline-primary" type="submit">Search</button>
                    </form> */}
                    {/* <div className={`form-check form-switch text-${props.textchange}`}> */}
                    <div className={`form-check form-switch text-${props.mode === 'light'?'dark':'light'}`}>
                        <input className="form-check-input" onClick={props.tooglemode} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
                        <label className="form-check-label" htmlFor="flexSwitchCheckDefault">{props.togglebtn}</label>
                    </div>
                    {/* <div className={`form-check form-switch text-${props.theme === 'light'?'green':'light'} mx-2`}>
                        <input className="form-check-input" onClick={props.themechange} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
                        <label className="form-check-label" htmlFor="flexSwitchCheckDefault">{props.togglebtn}</label>
                    </div> */}
                </div>
            </div>
        </nav>
    )
}

// funtion name
Navbar.propTypes = {  //proptypes
    title: PropTypes.string.isRequired,  // if you use (isrequired) you can write title or set default value you cannot make it empty - title cannot be undefined
    // title: PropTypes.string,
    // abouttext: PropTypes.string
}

// set default props - function based component - set default value of your prop
Navbar.defaultProps = {
    title: "set title here",
    // abouttext: 'About'
}