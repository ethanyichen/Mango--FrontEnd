import React, {useState} from 'react';
import Header from "./components/Header"
import Footer from "./components/Footer"
import Menu from "./components/Menu"
import CustomerSearch from "./components/customerPages/CustomerSearch";
import CustomerDirectory from "./components/customerPages/CustomerDirectory";
import ActiveMember from "./components/customerPages/ActiveMember";
import PrimeMember from "./components/customerPages/PrimeMember";
import NewCustomer from "./components/customerPages/NewCustomer";
import EmployeeManage from "./components/EmployeePages/EmployeeManage";
import EmployeeDirectory from "./components/EmployeePages/EmployeeDirectory";
import EmployeeSearch from "./components/EmployeePages/EmployeeSearch";
import CssBaseline from "@material-ui/core/CssBaseline";

function App(props) {
    const [displayWelcomeStatement, setDisplayWelcomeStatement] = useState(true);
    const [welcomeStatement, setWelcomeStatement] = useState({apiResponse: ""});
    const [displayMenu, setDisplayMenu] = useState(false);
    const [displayCSearch, setDisplayCSearch] = useState(false);
    const [displayCDirectory, setDisplayCDirectory] = useState(false);
    const [displayCNew, setDisplayCNew] = useState(false);
    const [displayCActive, setDisplayCActive] = useState(false);
    const [displayCPrime, setDisplayCPrime] = useState(false);
    const [displayEManage, setDisplayEManage] = useState(false);
    const [displayEDirec, setDisplayEDirec] = useState(false);
    const [displayESearch, setDisplayESearch] = useState(false);
    const onClickFunc = [setDisplayCSearch, setDisplayCDirectory, setDisplayCNew,
        setDisplayCActive, setDisplayCPrime, setDisplayEManage,
        setDisplayEDirec, setDisplayESearch, setDisplayWelcomeStatement];

    function callAPI() {
        if(welcomeStatement.apiResponse === "") {
            fetch("/hello")
                .then(res => res.text())
                .then(res => setWelcomeStatement({apiResponse: res}))
                .catch(err => setWelcomeStatement({apiResponse: err}))
        }
    }

    function disableOtherDisplay() {
        onClickFunc.forEach((item) => {
            item(false);
        });
    }

    function cSearchOnClick () {
        disableOtherDisplay();
        setDisplayCSearch(true);
    }
    function cDirecOnClick () {
        disableOtherDisplay();
        setDisplayCDirectory(true);
    }
    function cNewOnClick () {
        disableOtherDisplay();
        setDisplayCNew(true);
    }
    function cActiveOnClick () {
        disableOtherDisplay();
        setDisplayCActive(true);
    }
    function cPrimeOnClick () {
        disableOtherDisplay();
        setDisplayCPrime(true);
    }

    function eDirecOnClick() {
        disableOtherDisplay();
        setDisplayEDirec(true);
    }

    function eSearchOnClick() {
        disableOtherDisplay();
        setDisplayESearch(true);
    }

    function eManageOnClick() {
        disableOtherDisplay();
        setDisplayEManage(true);
    }

    function updateDisplayMenuOnClick (){
        setDisplayMenu(!displayMenu);
    }

    callAPI();
  return (
      <div className="App">
          <CssBaseline />
    <div className="main-content-div">
        <Header menuOnClick = {updateDisplayMenuOnClick} />
        {displayMenu && <Menu cSearch = {cSearchOnClick} cDirec = {cDirecOnClick} cNew = {cNewOnClick}
                              cActive = {cActiveOnClick} cPrime = {cPrimeOnClick} eDirec = {eDirecOnClick}
        eSearch = {eSearchOnClick} eManage = {eManageOnClick}/> }
        {displayCSearch && <CustomerSearch/>}
        {displayCDirectory && <CustomerDirectory/>}
        {displayCNew && <NewCustomer/>}
        {displayCActive && <ActiveMember/>}
        {displayCPrime && <PrimeMember/>}
        {displayEDirec && <EmployeeDirectory/>}
        {displayEManage && <EmployeeManage/>}
        {displayESearch && <EmployeeSearch/>}
        {displayWelcomeStatement && <h1 className="main-content">{welcomeStatement.apiResponse}</h1>}
        <Footer />
    </div>
      </div>
  );
}


export default App;
