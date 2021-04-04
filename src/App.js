import React, {useState} from 'react';
import Header from "./components/Header"
import Footer from "./components/Footer"
import Menu from "./components/Menu"
import CssBaseline from "@material-ui/core/CssBaseline";

function App() {
    const [displayMenu, setDisplayMenu] = useState(false);
    function updateDisplayMenuOnClick (){
        setDisplayMenu(!displayMenu);
    }
  return (
      <div className="App">
          <CssBaseline />
    <div className="main-content-div">
        <Header menuOnClick = {updateDisplayMenuOnClick} />
        {displayMenu && <Menu /> }
        <h1 className="main-content-text">Main content starts here</h1>
        <Footer />
    </div>
      </div>
  );
}

export default App;
