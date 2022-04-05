import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react';
import Alert from './components/Alert';
import About from './components/About';

//import About from './components/About';
function App() {
  const [mode, setMode] = useState('light');
  //whether dark mode is enabled or not

  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);

    }, 3000);

  }
  const removeBodyClasses = () => {
    document.body.classList.remove('bg-primary');
    document.body.classList.remove('bg-secondary');
    document.body.classList.remove('bg-danger');
    document.body.classList.remove('bg-warning');
    document.body.classList.remove('bg-primary');
    document.body.classList.remove('bg-success');

  }




  const toggleMode = (cls) => {
    removeBodyClasses();
    document.body.classList.add('bg-' + cls);

    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#092041';
      // showAlert("success", "Dark mode has been enabled")
      showAlert("dark mode ", "success")
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      //showAlert("success", "Light mode has been enabled")
      showAlert("light mode ", "success")


    }
  }

  //  const toggleMode = () => {
  //     if(mode === 'light'){
  //       setMode('dark');
  //       document.body.style.backgroundColor = '#092041';
  //       // showAlert("success", "Dark mode has been enabled")
  //       showAlert("dark mode ", "success")
  //     }
  //     else{
  //       setMode('light');
  //       document.body.style.backgroundColor = 'white';
  //       //showAlert("success", "Light mode has been enabled")
  //       showAlert("light mode ", "success")


  //     }
  //   }
  return (
    <>

      <Navbar title="MyTextUtils" aboutText="MyAbout" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <div className='container my-3'>
        {/* <Switch> */}
          {/* <Route exact path="/about"> */}
            {/* <About mode={mode} /> */}
          {/* </Route>
          <Route exact path="/"> */}
            <TextForm showAlert={showAlert} heading="Word Twister" mode={mode} />
          {/* </Route>
        </Switch> */}
      </div>
    </>
  );
}

export default App;
