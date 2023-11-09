import { useState } from 'react';
import './App.css';
import About from './component/About';
import Navbar from './component/Navbar';
import TextForm from './component/TextForm';
import Alert from './component/Alert';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

// react router dom
// react may event bydefault mil gata ha

function App() {

  // const [theme, settheme] = useState("light")
  const [btntext, setbtntext] = useState('Enable Dark Mode')
  const [mode, setmode] = useState('light')
  const [alert, setAlert] = useState(null)

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1500);
  }

const changebodyclasses = ()=>{
document.body.classList.remove('bg-primary')
document.body.classList.remove('bg-danger')
document.body.classList.remove('bg-success')
document.body.classList.remove('bg-warning')
}

  const tooglemode = (cls) => {
    changebodyclasses()
    console.log(cls);
    document.body.classList.add('bg-'+cls)
    if (mode === 'light') {
      setmode('dark')
      setbtntext('Enable Light Mode')
      document.body.style.backgroundColor = '#042743'
      document.body.style.color = 'white'
      // document.getElementById('myBox').style.backgroundColor = 'grey'
      // document.getElementById('myBox').style.color = 'white'
      showAlert('Dark Mode has been Enabled', 'success')
      // document.title = 'MY-APP - Dark Mode'
      // setInterval(() => {
      //   document.title = 'MY-APP is Amazing Mode'
      // }, 2000);

      // setInterval(() => {
      //   document.title = 'Installed MY-APP Now'
      // }, 1500);
    }
    else {
      setmode('light')
      setbtntext('Enable Dark Mode')
      document.body.style.backgroundColor = 'white'
      document.body.style.color = 'black'
      // document.getElementById('myBox').style.backgroundColor = 'white'
      showAlert('Light Mode has been Enabled', 'success')
      // document.title = 'MY-APP - Light Mode'
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
      <Router>
        <Navbar title="MY-APP" mode={mode} tooglemode={tooglemode} togglebtn={btntext} abouttext="About Us"/>
        <Alert alert={alert} />
        <div className="container my-3">  {/* bootstrap class container */}
          {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
         <Switch>
            try {
              <Route exact path="/about">
                <About mode={mode}/>
              </Route>
            } catch () {
              console.log('about not work')
            }
          <Route exact path="/">
              {/* <TextForm heading="Enter the text to analyze below" showAlert={showAlert} /> */}
              <TextForm heading="Try MY-APP - Word Counter, Character Counter, Remove Extra Spaces" showAlert={showAlert} />
            </Route>
          </Switch>
        </div>
      </Router>
    </>
    // <h1>this is me</h1>  // we can only return one element if we return more than one element we use JSX fragment
  );
}

export default App;