import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'

// function based component
export default function Navbar(props) {   // props is a properties
    return (
        <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">{props.title}</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link" aria-current="page" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                             <Link className="nav-link" to="/about">{props.abouttext}</Link>
                        </li>
                    </ul>

                    {/* <div className="d_flex">
                        <div className="bg-primary rounded mx-2" onClick={()=>{props.tooglemode('primary')}} style={{height:'25px',width:'25px', cursor: 'pointer'}}></div>
                        <div className="bg-danger rounded mx-2" onClick={()=>{props.tooglemode('danger')}} style={{height:'25px',width:'25px', cursor: 'pointer'}}></div>
                        <div className="bg-success rounded mx-2" onClick={()=>{props.tooglemode('success')}} style={{height:'25px',width:'25px', cursor: 'pointer'}}></div>
                        <div className="bg-warning rounded mx-2" onClick={()=>{props.tooglemode('warning')}} style={{height:'25px',width:'25px', cursor: 'pointer'}}></div>
                    </div> */}
                    {/* <div className={`form-check form-switch text-${props.textchange}`}> */}
                    <div className={`form-check form-switch text-${props.mode === 'light'?'dark':'light'}`}>
                        <input className="form-check-input" onClick={()=>{props.tooglemode(null)}} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
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
    abouttext: PropTypes.string
}

// set default props - function based component - set default value of your prop
Navbar.defaultProps = {
    title: "set title here",
    abouttext: 'About'
}
