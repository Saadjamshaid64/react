import { useState } from 'react';
import './App.css';
// import About from './component/About';
import Navbar from './component/Navbar';
import TextForm from './component/TextForm';
import Alert from './component/Alert';
import React from "react";
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
// } from "react-router-dom";

// react router dom

function App() {

  // const [font, fontchange] = useState('dark')
  const [btntext, setbtntext] = useState('Enable Dark Mode')
  const [mode, setmode] = useState('light')
  const [alert, setAlert] = useState(null)
  // const [theme, settheme] = useState("light")

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1500);
  }

  const tooglemode = () => {
    if (mode === 'light') {
      setmode('dark')
      setbtntext('Enable Light Mode')
      document.body.style.backgroundColor = '#042743'
      document.body.style.color = 'white'
      document.getElementById('myBox').style.backgroundColor = 'grey'
      document.getElementById('myBox').style.color = 'white'
      showAlert('Dark Mode has been Enabled', 'success')
      document.title = 'MY-APP - Dark Mode'
      // setInterval(() => {
      //   document.title = 'MY-APP is Amazing Mode'
      // }, 2000);

      // setInterval(() => {
      //   document.title = 'Installed MY-APP Now'
      // }, 1500);
      // fontchange('light')
    }
    else {
      setmode('light')
      setbtntext('Enable Dark Mode')
      document.body.style.backgroundColor = 'white'
      document.body.style.color = 'black'
      document.getElementById('myBox').style.backgroundColor = 'white'
      showAlert('Light Mode has been Enabled', 'success')
      document.title = 'MY-APP - Light Mode'
      // fontchange('dark')
    }
  }

  // const themechange = () => {
  //   if (theme === 'light') {
  //     settheme('green')
  //     document.body.style.backgroundColor = 'green'
  //     document.body.style.color = 'white'
  //     document.getElementById('myBox').style.backgroundColor = 'green'
  //     document.getElementById('myBox').style.color = 'white'
  //     showAlert('Green Mode has been Enabled', 'success')
  //   }
  //   else {
  //     settheme('light')
  //     document.body.style.backgroundColor = 'white'
  //     document.getElementById('myBox').style.backgroundColor = 'white'
  //     document.getElementById('myBox').style.color = 'white'
  //     document.body.style.color = 'black'
  //     showAlert('Light Mode has been Enabled', 'success')
  //   }
  // }

  return (
    <>
      {/* <Navbar title="MY-APP" abouttext="About Us"/>  if you set data type string you write string & if you write number you can write in curly brackets */}
      {/* <Router> */}
        <Navbar title="MY-APP" mode={mode} tooglemode={tooglemode} togglebtn={btntext} />
        <Alert alert={alert} />
        <div className="container my-3">  {/* bootstrap class container */}
          {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
         {/* <Switch>
            try {
              <Route exact path="/about">
                <About />
              </Route>
            } catch () {
              console.log('about not work')
            }
          <Route exact path="/"> */}
              <TextForm heading="Enter the text to analyze below" showAlert={showAlert} />
            {/*</Route>
          </Switch> */}
        </div>
      {/* </Router> */}
    </>
    // <h1>this is me</h1>  // we can only return one element if we return more than one element we use JSX fragment
  );
}

export default App;